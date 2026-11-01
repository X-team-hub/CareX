document.getElementById('registerForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const msg = document.getElementById('msg');
  const password = String(form.get('password') || '');
  const confirm = String(form.get('confirm') || '');
  const full_name = String(form.get('full_name') || '').trim();
  const email = String(form.get('email') || '').trim().toLowerCase();
  const mobile = String(form.get('mobile') || '').trim();
  if (password !== confirm) { msg.textContent='Passwords do not match.'; msg.className='notice danger'; msg.hidden=false; return; }
  const { error } = await doctorSupabase.auth.signUp({
    email, password, options: { data: { account_type:'doctor', full_name, mobile }, emailRedirectTo: new URL('./dashboard.html', location.href).href }
  });
  if (error) { msg.textContent=error.message; msg.className='notice danger'; msg.hidden=false; return; }
  msg.textContent='Account created. Check your email and confirm it before signing in.'; msg.className='notice success'; msg.hidden=false; event.currentTarget.reset();
});
