-- ============================================================
-- Indexes for performance
-- ============================================================

create index idx_cycles_user_date on public.cycle_logs(user_id, start_date desc);
create index idx_symptoms_user_date on public.symptom_logs(user_id, date desc);
create index idx_moods_user_date on public.mood_logs(user_id, date desc);
create index idx_daily_user_date on public.daily_logs(user_id, date desc);
create index idx_appts_user_date on public.appointments(user_id, appointment_date);
create index idx_meds_user on public.medicine_reminders(user_id);
create index idx_sessions_user on public.chat_sessions(user_id, updated_at desc);
create index idx_messages_session on public.chat_messages(session_id, created_at);
create index idx_messages_user on public.chat_messages(user_id, created_at desc);
create index idx_notif_user_read on public.notifications(user_id, read, created_at desc);
create index idx_doctors_active on public.doctors(is_active) where is_active = true;