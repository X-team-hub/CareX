create or replace function public.carex_bootstrap_doctor_account()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if coalesce(new.raw_user_meta_data->>'account_type','') = 'doctor' then
    insert into public.carex_user_roles(user_id, role)
    values (new.id, 'doctor')
    on conflict (user_id) do nothing;
    insert into public.carex_doctor_profiles(id, full_name, phone, status)
    values (new.id, coalesce(nullif(new.raw_user_meta_data->>'full_name',''), 'Doctor'),
            nullif(new.raw_user_meta_data->>'mobile',''), 'draft')
    on conflict (id) do nothing;
  end if;
  return new;
end;
$$;
drop trigger if exists carex_bootstrap_doctor_account_trigger on auth.users;
create trigger carex_bootstrap_doctor_account_trigger
after insert on auth.users for each row execute function public.carex_bootstrap_doctor_account();
