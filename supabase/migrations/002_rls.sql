-- ============================================================
-- Row Level Security Policies
-- ============================================================

alter table public.profiles enable row level security;
alter table public.cycle_logs enable row level security;
alter table public.symptom_logs enable row level security;
alter table public.mood_logs enable row level security;
alter table public.daily_logs enable row level security;
alter table public.insights enable row level security;
alter table public.doctors enable row level security;
alter table public.appointments enable row level security;
alter table public.medicine_reminders enable row level security;
alter table public.chat_sessions enable row level security;
alter table public.chat_messages enable row level security;
alter table public.notifications enable row level security;

-- PROFILES: users can only see/edit their own
create policy profiles_select on public.profiles for select
  using (auth.uid() = id);
create policy profiles_insert on public.profiles for insert
  with check (auth.uid() = id);
create policy profiles_update on public.profiles for update
  using (auth.uid() = id);

-- CYCLE LOGS
create policy cycles_all on public.cycle_logs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- SYMPTOM LOGS
create policy symptoms_all on public.symptom_logs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- MOOD LOGS
create policy moods_all on public.mood_logs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- DAILY LOGS
create policy daily_all on public.daily_logs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- INSIGHTS
create policy insights_all on public.insights for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- DOCTORS: everyone authenticated can read; only service role writes
create policy doctors_read on public.doctors for select
  to authenticated
  using (is_active = true);

-- APPOINTMENTS
create policy appts_select on public.appointments for select
  using (auth.uid() = user_id);
create policy appts_insert on public.appointments for insert
  with check (auth.uid() = user_id);
create policy appts_update on public.appointments for update
  using (auth.uid() = user_id);
create policy appts_delete on public.appointments for delete
  using (auth.uid() = user_id);

-- MEDICINE REMINDERS
create policy meds_all on public.medicine_reminders for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- CHAT SESSIONS
create policy sessions_all on public.chat_sessions for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- CHAT MESSAGES
create policy messages_select on public.chat_messages for select
  using (auth.uid() = user_id);
create policy messages_insert on public.chat_messages for insert
  with check (auth.uid() = user_id);

-- NOTIFICATIONS
create policy notif_select on public.notifications for select
  using (auth.uid() = user_id);
create policy notif_update on public.notifications for update
  using (auth.uid() = user_id);