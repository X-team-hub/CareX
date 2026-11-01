const DOCTOR_STEPS = {
  account: { title: 'Account verification', description: 'Confirm your email and mobile number.' },
  identity: { title: 'Identity verification', description: 'Submit a government identity document.' },
  qualification: { title: 'Medical qualification', description: 'Add your medical qualification and certificate.' },
  registration: { title: 'Medical registration', description: 'Provide your medical council registration details.' },
  professional: { title: 'Professional details', description: 'Complete practice and professional information.' },
  final_review: { title: 'Final admin review', description: 'Admin completes the final review after all required checks.' }
};
const DOCTOR_FILE_STEPS = ['identity', 'qualification', 'registration'];

function doctorEscape(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function doctorStatusLabel(status) {
  return ({not_started:'Not started',submitted:'Submitted',under_review:'Under review',verified:'Verified',changes_required:'Changes required',rejected:'Rejected'}[status] || status || 'Unknown');
}
function doctorToast(message, type='info') {
  const box = document.getElementById('doctorToast');
  if (box) { box.textContent = message; box.dataset.type = type; box.hidden = false; clearTimeout(window.__doctorToastTimer); window.__doctorToastTimer = setTimeout(() => box.hidden = true, 4200); return; }
  alert(message);
}
async function doctorUser() {
  const { data, error } = await doctorSupabase.auth.getUser();
  return error ? null : data.user;
}
async function doctorRole(userId) {
  const { data, error } = await doctorSupabase.from('carex_user_roles').select('role').eq('user_id', userId).maybeSingle();
  return error ? null : data?.role || null;
}
async function requireDoctor() {
  const user = await doctorUser();
  if (!user) { location.href = './login.html'; return null; }
  const role = await doctorRole(user.id);
  if (role !== 'doctor') { await doctorSupabase.auth.signOut(); doctorToast('This account is not registered for the doctor portal.', 'error'); setTimeout(() => location.href = './login.html', 250); return null; }
  return user;
}
async function requireAdmin() {
  const user = await doctorUser();
  if (!user) { location.href = './login.html'; return null; }
  const role = await doctorRole(user.id);
  if (role !== 'admin') { doctorToast('Admin access is required.', 'error'); setTimeout(() => location.href = './login.html', 500); return null; }
  return user;
}
async function doctorLogout() { await doctorSupabase.auth.signOut(); location.href = './login.html'; }
