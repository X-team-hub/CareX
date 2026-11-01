create policy "doctors_admin_manage_verified" on public.doctors
for all to authenticated
using (private.is_carex_admin())
with check (private.is_carex_admin());
