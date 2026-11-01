
create schema if not exists private;

create table if not exists public.carex_user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin','doctor')),
  created_at timestamptz not null default now()
);

alter table public.carex_user_roles enable row level security;

create or replace function private.is_carex_admin()
returns boolean
language sql
stable
security definer
set search_path = public, private
as $$
  select exists (
    select 1 from public.carex_user_roles
    where user_id = auth.uid() and role = 'admin'
  );
$$;

revoke all on function private.is_carex_admin() from public;
grant execute on function private.is_carex_admin() to authenticated;

create policy "roles_read_own" on public.carex_user_roles
for select to authenticated
using (user_id = (select auth.uid()) or private.is_carex_admin());

create table if not exists public.carex_doctor_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  specialization text,
  qualification text,
  experience_years integer check (experience_years is null or experience_years >= 0),
  registration_council text,
  registration_number text,
  clinic_name text,
  city text,
  bio text,
  status text not null default 'draft'
    check (status in ('draft','submitted','under_review','changes_required','verified','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.carex_doctor_profiles enable row level security;

create policy "doctor_profile_own_read" on public.carex_doctor_profiles
for select to authenticated
using (id = (select auth.uid()) or private.is_carex_admin());

create policy "doctor_profile_own_insert" on public.carex_doctor_profiles
for insert to authenticated
with check (id = (select auth.uid()));

create policy "doctor_profile_own_update" on public.carex_doctor_profiles
for update to authenticated
using (id = (select auth.uid()) or private.is_carex_admin())
with check (id = (select auth.uid()) or private.is_carex_admin());

create table if not exists public.carex_doctor_verification_steps (
  id uuid primary key default gen_random_uuid(),
  doctor_id uuid not null references public.carex_doctor_profiles(id) on delete cascade,
  step_key text not null check (step_key in ('account','identity','qualification','registration','professional','final_review')),
  title text not null,
  status text not null default 'not_started'
    check (status in ('not_started','submitted','under_review','verified','changes_required','rejected')),
  rejection_reason text,
  reviewed_by uuid references auth.users(id) on delete set null,
  submitted_at timestamptz,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (doctor_id, step_key)
);

alter table public.carex_doctor_verification_steps enable row level security;

create policy "doctor_steps_own_read" on public.carex_doctor_verification_steps
for select to authenticated
using (doctor_id = (select auth.uid()) or private.is_carex_admin());

create policy "doctor_steps_own_insert" on public.carex_doctor_verification_steps
for insert to authenticated
with check (
  doctor_id = (select auth.uid())
  and status in ('not_started','submitted','changes_required')
);

create policy "doctor_steps_own_update" on public.carex_doctor_verification_steps
for update to authenticated
using (doctor_id = (select auth.uid()) or private.is_carex_admin())
with check (
  private.is_carex_admin()
  or (
    doctor_id = (select auth.uid())
    and status in ('not_started','submitted','changes_required')
  )
);

create table if not exists public.carex_doctor_documents (
  id uuid primary key default gen_random_uuid(),
  doctor_id uuid not null references public.carex_doctor_profiles(id) on delete cascade,
  step_key text not null check (step_key in ('identity','qualification','registration','professional')),
  document_type text not null,
  file_path text not null unique,
  original_name text,
  status text not null default 'submitted'
    check (status in ('submitted','under_review','verified','changes_required','rejected')),
  rejection_reason text,
  uploaded_at timestamptz not null default now(),
  reviewed_by uuid references auth.users(id) on delete set null,
  reviewed_at timestamptz
);

alter table public.carex_doctor_documents enable row level security;

create policy "doctor_documents_own_read" on public.carex_doctor_documents
for select to authenticated
using (doctor_id = (select auth.uid()) or private.is_carex_admin());

create policy "doctor_documents_own_insert" on public.carex_doctor_documents
for insert to authenticated
with check (doctor_id = (select auth.uid()));

create policy "doctor_documents_admin_update" on public.carex_doctor_documents
for update to authenticated
using (private.is_carex_admin())
with check (private.is_carex_admin());

create table if not exists public.carex_doctor_reviews (
  id uuid primary key default gen_random_uuid(),
  doctor_id uuid not null references public.carex_doctor_profiles(id) on delete cascade,
  step_key text,
  action text not null check (action in ('submitted','approved','rejected','requested_changes','final_approved')),
  note text,
  admin_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.carex_doctor_reviews enable row level security;

create policy "doctor_reviews_own_read" on public.carex_doctor_reviews
for select to authenticated
using (doctor_id = (select auth.uid()) or private.is_carex_admin());

create policy "admin_reviews_insert" on public.carex_doctor_reviews
for insert to authenticated
with check (private.is_carex_admin() and admin_id = (select auth.uid()));

create index if not exists carex_doctor_steps_doctor_idx
  on public.carex_doctor_verification_steps(doctor_id);
create index if not exists carex_doctor_documents_doctor_idx
  on public.carex_doctor_documents(doctor_id);
create index if not exists carex_doctor_reviews_doctor_idx
  on public.carex_doctor_reviews(doctor_id);

insert into storage.buckets (id, name, public)
values ('doctor-verification', 'doctor-verification', false)
on conflict (id) do update set public = false;

create policy "doctor_docs_storage_read" on storage.objects
for select to authenticated
using (
  bucket_id = 'doctor-verification'
  and (
    (storage.foldername(name))[1] = (select auth.uid())::text
    or private.is_carex_admin()
  )
);

create policy "doctor_docs_storage_insert" on storage.objects
for insert to authenticated
with check (
  bucket_id = 'doctor-verification'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "doctor_docs_storage_update_admin" on storage.objects
for update to authenticated
using (bucket_id = 'doctor-verification' and private.is_carex_admin())
with check (bucket_id = 'doctor-verification' and private.is_carex_admin());

create policy "doctor_docs_storage_delete_admin" on storage.objects
for delete to authenticated
using (bucket_id = 'doctor-verification' and private.is_carex_admin());

alter table public.doctors add column if not exists user_id uuid references auth.users(id) on delete set null;
create unique index if not exists doctors_user_id_unique on public.doctors(user_id) where user_id is not null;

create or replace function public.carex_initialize_doctor_steps()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.carex_doctor_verification_steps (doctor_id, step_key, title, status)
  values
    (new.id, 'account', 'Account verification', 'not_started'),
    (new.id, 'identity', 'Identity verification', 'not_started'),
    (new.id, 'qualification', 'Medical qualification', 'not_started'),
    (new.id, 'registration', 'Medical registration', 'not_started'),
    (new.id, 'professional', 'Professional details', 'not_started'),
    (new.id, 'final_review', 'Final admin review', 'not_started')
  on conflict (doctor_id, step_key) do nothing;
  return new;
end;
$$;

drop trigger if exists carex_initialize_doctor_steps_trigger on public.carex_doctor_profiles;
create trigger carex_initialize_doctor_steps_trigger
after insert on public.carex_doctor_profiles
for each row execute function public.carex_initialize_doctor_steps();

create or replace function public.carex_touch_doctor_profile()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists carex_touch_doctor_profile_trigger on public.carex_doctor_profiles;
create trigger carex_touch_doctor_profile_trigger
before update on public.carex_doctor_profiles
for each row execute function public.carex_touch_doctor_profile();

grant select, insert, update on public.carex_doctor_profiles to authenticated;
grant select, insert, update on public.carex_doctor_verification_steps to authenticated;
grant select, insert, update on public.carex_doctor_documents to authenticated;
grant select, insert on public.carex_doctor_reviews to authenticated;
grant select on public.carex_user_roles to authenticated;
