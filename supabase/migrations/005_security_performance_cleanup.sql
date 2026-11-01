-- Keep verified doctor reads behind one shared public/authenticated policy.
drop policy if exists "Authenticated users can view verified doctors" on public.doctors;

-- The unique constraint already owns an equivalent (user_id, log_date) index.
drop index if exists public.daily_logs_user_date_unique;

-- Evaluate auth.uid() once per statement instead of once per row.
alter policy "Users can read own reminder logs"
on public.carex_reminder_logs
using ((select auth.uid()) = user_id);
