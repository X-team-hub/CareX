// CareX patient doctor directory + appointment booking.
// Uses only columns that exist in public.doctors / public.appointments.
let pendingDoctorId = null;

async function initDoctors() {
  const user = await requireAuth();
  if (!user) return;

  const { data: docs, error } = await sb
    .from('doctors')
    .select('id,name,specialization,qualification,experience,location,bio,verified,image_url,languages,price')
    .eq('verified', true)
    .order('name');

  const list = $('#doc-list');
  if (!list) return;
  if (error) {
    list.innerHTML = `<div class="notice danger">Could not load doctors right now.</div>`;
    return;
  }

  list.innerHTML = '';
  if (!docs?.length) {
    list.innerHTML = `<div class="notice">No verified doctors are available yet.</div>`;
    return;
  }

  docs.forEach((d) => {
    const init = String(d.name || 'D').split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
    const meta = [d.specialization, d.qualification, d.experience != null ? `${d.experience} yrs` : null, d.location]
      .filter(Boolean).join(' · ');
    list.insertAdjacentHTML('beforeend', `
      <div class="doc">
        <div class="av">${escapeHtml(init)}</div>
        <div class="doc-info">
          <div class="doc-name">${escapeHtml(d.name || 'Doctor')}</div>
          <div class="doc-meta">${escapeHtml(meta || 'Verified CareX professional')}</div>
          <div class="verified">✔ Verified</div>
        </div>
        <div class="doc-price">
          <b>${d.price != null ? `₹${Number(d.price).toLocaleString('en-IN')}` : 'Fee on request'}</b><br>
          <button type="button" data-id="${escapeHtml(d.id)}">Book</button>
        </div>
      </div>
    `);
  });

  list.querySelectorAll('button[data-id]').forEach(btn => {
    btn.addEventListener('click', () => openBooking(btn.dataset.id));
  });
}

async function openBooking(doctorId) {
  pendingDoctorId = doctorId;
  const { data: doctor, error } = await sb.from('doctors').select('id,name,specialization,qualification,price').eq('id', doctorId).eq('verified', true).maybeSingle();
  if (error || !doctor) return toast('Doctor is no longer available.');

  $('#d-name').textContent = doctor.name || 'Doctor';
  $('#d-spec').textContent = doctor.specialization || doctor.qualification || 'Verified CareX professional';
  $('#d-info').textContent = doctor.price != null ? `Consultation fee: ₹${Number(doctor.price).toLocaleString('en-IN')}` : 'Consultation fee: on request';
  const date = $('#d-date');
  if (date) {
    const today = new Date();
    date.min = today.toISOString().slice(0, 10);
    if (!date.value || date.value < date.min) date.value = date.min;
  }
  $('#dlg').showModal();
}

async function confirmBooking() {
  const user = await currentUser();
  if (!user || !pendingDoctorId) return toast('Please sign in and choose a doctor.');

  const date = $('#d-date')?.value;
  const time = $('#d-time')?.value;
  const mode = $('#d-mode')?.value;
  if (!date || !time || !mode) return toast('Please choose date, time and mode.');

  const { error } = await sb.from('appointments').insert({
    user_id: user.id,
    doctor_id: pendingDoctorId,
    appointment_date: date,
    appointment_time: time,
    status: 'pending',
    notes: `Consultation mode: ${mode}`
  });
  if (error) return toast(error.message || 'Could not book appointment.');

  $('#dlg').close();
  pendingDoctorId = null;
  toast('Appointment booked successfully.');
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}

document.addEventListener('DOMContentLoaded', () => {
  if (!$('#doc-list')) return;
  initDoctors();
  $('#book-btn')?.addEventListener('click', confirmBooking);
  $('#cancel-btn')?.addEventListener('click', () => $('#dlg').close());
});
