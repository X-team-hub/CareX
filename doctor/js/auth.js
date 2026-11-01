document.getElementById('loginForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const msg = document.getElementById('msg');
  msg.hidden = true;
  const { data, error } = await doctorSupabase.auth.signInWithPassword({
    email: String(form.get('email') || '').trim(),
    password: String(form.get('password') || '')
  });
  if (error) { msg.textContent = error.message; msg.hidden = false; return; }
  const role = await doctorRole(data.user.id);
  if (!['doctor','admin'].includes(role)) {
    await doctorSupabase.auth.signOut();
    msg.textContent = 'This account is not registered for the doctor portal.';
    msg.hidden = false;
    return;
  }
  location.href = role === 'admin' ? './admin.html' : './dashboard.html';
});
