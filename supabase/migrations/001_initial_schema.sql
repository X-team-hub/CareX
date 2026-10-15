-- ============================================================
-- CareX — Initial Schema
-- ============================================================

-- PROFILES (extends auth.users)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  mobile text,
  username text unique,
  date_of_birth date,
  language text default 'en' check (language in ('en','hi')),
  theme text default 'auto' check (theme in ('auto','light','dark')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- CYCLE LOGS (one row per period start → next period start)
create table public.cycle_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  start_date date not null,
  end_date date,
  cycle_length int check (cycle_length between 15 and 90),
  period_length int check (period_length between 1 and 15),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- SYMPTOM LOGS
create table public.symptom_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  cycle_id uuid references public.cycle_logs(id) on delete set null,
  symptom text not null,
  severity int default 1 check (severity between 0 and 10),
  date date not null,
  created_at timestamptz default now()
);

-- MOOD LOGS
create table public.mood_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  cycle_id uuid references public.cycle_logs(id) on delete set null,
  mood text not null,
  date date not null,
  created_at timestamptz default now()
);

-- DAILY LOGS (flow, pain, notes per day)
create table public.daily_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  cycle_id uuid references public.cycle_logs(id) on delete set null,
  date date not null,
  flow text check (flow in ('none','spotting','light','medium','heavy')),
  pain int check (pain between 0 and 10),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (user_id, date)
);

-- INSIGHTS (cached calculations per user)
create table public.insights (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  avg_cycle_length numeric,
  avg_period_length numeric,
  cycle_variation numeric,
  last_cycle_count int,
  computed_at timestamptz default now(),
  unique (user_id)
);

-- DOCTORS (admin-managed)
create table public.doctors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  specialization text,
  qualification text,
  experience_years int,
  location text,
  languages text[],
  bio text,
  consultation_fee numeric,
  verified boolean default false,
  image_url text,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- APPOINTMENTS
create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  doctor_id uuid not null references public.doctors(id) on delete cascade,
  appointment_date date not null,
  appointment_time time not null,
  status text default 'pending' check (status in ('pending','confirmed','completed','cancelled')),
  mode text check (mode in ('video','audio','chat')),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- MEDICINE REMINDERS
create table public.medicine_reminders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  schedule_time time,
  frequency text check (frequency in ('daily','weekly','custom')),
  notes text,
  enabled boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- CHAT SESSIONS
create table public.chat_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- CHAT MESSAGES
create table public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.chat_sessions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user','assistant','system')),
  message text not null,
  created_at timestamptz default now()
);

-- NOTIFICATIONS
create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  message text,
  type text check (type in ('reminder','info','alert','system')),
  read boolean default false,
  created_at timestamptz default now()
);

-- Auto-update updated_at trigger
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql security definer;

create trigger trg_profiles_updated before update on public.profiles
  for each row execute function public.set_updated_at();
create trigger trg_cycles_updated before update on public.cycle_logs
  for each row execute function public.set_updated_at();
create trigger trg_daily_updated before update on public.daily_logs
  for each row execute function public.set_updated_at();
create trigger trg_appts_updated before update on public.appointments
  for each row execute function public.set_updated_at();
create trigger trg_meds_updated before update on public.medicine_reminders
  for each row execute function public.set_updated_at();
create trigger trg_sessions_updated before update on public.chat_sessions
  for each row execute function public.set_updated_at();

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email, mobile, username, language, theme)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email,
    new.raw_user_meta_data->>'mobile',
    new.raw_user_meta_data->>'username',
    coalesce(new.raw_user_meta_data->>'language', 'en'),
    'auto'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();