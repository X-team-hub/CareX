-- CareX profile fields and account-synced self-care history.

alter table public.profiles
  add column age smallint check (age between 8 and 70),
  add column allergies text not null default '',
  add column medicines text not null default '',
  add column notifications_enabled boolean not null default false,
  add column notification_days_before smallint not null default 3
    check (notification_days_before between 1 and 30),
  add column notification_count smallint not null default 1
    check (notification_count between 1 and 3),
  add column notification_times text[] not null default array['09:00']::text[];

update public.profiles as profile
set
  age = case
    when user_row.raw_user_meta_data->>'age' ~ '^(8|9|[1-6][0-9]|70)$'
      then (user_row.raw_user_meta_data->>'age')::smallint
    else null
  end,
  allergies = coalesce(user_row.raw_user_meta_data->>'allergies', ''),
  medicines = coalesce(user_row.raw_user_meta_data->>'medicines', ''),
  notifications_enabled = case
    when user_row.raw_user_meta_data->'carex_notifications'->>'enabled' in ('true', 'false')
      then (user_row.raw_user_meta_data->'carex_notifications'->>'enabled')::boolean
    else false
  end,
  notification_days_before = case
    when user_row.raw_user_meta_data->'carex_notifications'->>'days_before' ~ '^[0-9]{1,2}$'
      then case
        when (user_row.raw_user_meta_data->'carex_notifications'->>'days_before')::integer between 1 and 30
          then (user_row.raw_user_meta_data->'carex_notifications'->>'days_before')::smallint
        else 3
      end
    else 3
  end,
  notification_count = case
    when user_row.raw_user_meta_data->'carex_notifications'->>'per_day' ~ '^[0-9]$'
      then case
        when (user_row.raw_user_meta_data->'carex_notifications'->>'per_day')::integer between 1 and 3
          then (user_row.raw_user_meta_data->'carex_notifications'->>'per_day')::smallint
        else 1
      end
    else 1
  end,
  notification_times = case
    when jsonb_typeof(user_row.raw_user_meta_data->'carex_notifications'->'times') = 'array'
      then array(
        select jsonb_array_elements_text(
          user_row.raw_user_meta_data->'carex_notifications'->'times'
        )
      )
    else array['09:00']::text[]
  end
from auth.users as user_row
where user_row.id = profile.id;

create table public.self_care_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  activity text not null,
  completed_at timestamptz not null default now(),
  check (activity in ('Foot massage routine', 'Period pain relief', 'Kegel Day 1'))
);

create index idx_self_care_sessions_user_completed
  on public.self_care_sessions(user_id, completed_at desc);

alter table public.self_care_sessions enable row level security;

create policy self_care_sessions_all on public.self_care_sessions for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy profiles_delete on public.profiles for delete
  using (auth.uid() = id);

create policy messages_delete on public.chat_messages for delete
  using (auth.uid() = user_id);

create policy notifications_delete on public.notifications for delete
  using (auth.uid() = user_id);