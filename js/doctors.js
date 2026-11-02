// CareX patient doctor directory + appointment booking.
let pendingDoctorId = null;
let doctors = [];
let appointments = [];
let activeDoctorTab = 'find';
let doctorLoadError = false;
let appointmentsLoadError = false;

const doctorFields = 'id,name,specialization,qualification,experience_years,location,languages,consultation_fee,image_url';

async function initDoctors() {
  const user = await requireAuth();
  if (!user) return;

  const today = localDateString();
  const [doctorResult, appointmentResult] = await Promise.all([
    sb.from('doctors')
      .select(`${doctorFields},verified`)
      .eq('verified', true)
      .eq('is_active', true)
      .order('name'),
    sb.from('appointments')
      .select('id,doctor_id,appointment_date,appointment_time,status,mode')
      .eq('user_id', user.id)
      .in('status', ['pending', 'confirmed', 'booked'])
      .gte('appointment_date', today)
      .order('appointment_date')
      .order('appointment_time')
  ]);

  const list = $('#doc-list');
  if (doctorResult.error) {
    doctorLoadError = true;
    console.error('Could not load doctor directory:', doctorResult.error);
    list.innerHTML = `<div class="notice danger">${escapeHtml(t('doctors_load_error'))}</div>`;
    return;
  }

  doctorLoadError = false;
  doctors = doctorResult.data || [];
  appointmentsLoadError = Boolean(appointmentResult.error);
  appointments = appointmentResult.error ? [] : appointmentResult.data || [];
  if (appointmentResult.error) {
    console.error('Could not load doctor bookings:', appointmentResult.error);
  }
  bindDoctorTabs();
  renderDoctorList();
}

function bindDoctorTabs() {
  const tabs = [...document.querySelectorAll('[data-doctor-tab]')];
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setDoctorTab(tab.dataset.doctorTab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? tabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
      tabs[nextIndex].focus();
      setDoctorTab(tabs[nextIndex].dataset.doctorTab);
    });
  });
}

function setDoctorTab(tab) {
  activeDoctorTab = tab === 'find' ? 'find' : 'your';
  document.querySelector('.doctor-tabs').dataset.activeTab = activeDoctorTab;
  document.querySelectorAll('[data-doctor-tab]').forEach((button) => {
    const selected = button.dataset.doctorTab === activeDoctorTab;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  $('#doc-list').setAttribute('aria-labelledby', activeDoctorTab === 'your' ? 'your-doctors-tab' : 'find-doctor-tab');
  $('#doctor-list-description').textContent = t(activeDoctorTab === 'your' ? 'your_doctor_description' : 'find_doctor_description');
  renderDoctorList();
}

function renderDoctorList() {
  if (doctorLoadError) {
    $('#doc-list').innerHTML = `<div class="notice danger">${escapeHtml(t('doctors_load_error'))}</div>`;
    return;
  }

  $('#doctor-list-description').textContent = t(
    activeDoctorTab === 'your' ? 'your_doctor_description' : 'find_doctor_description'
  );
  if (activeDoctorTab === 'your' && appointmentsLoadError) {
    $('#your-doctor-count').textContent = '—';
    $('#doc-list').innerHTML = `<div class="notice danger">${escapeHtml(t('bookings_load_error'))}</div>`;
    return;
  }

  const uniqueBookedDoctors = new Set(appointments.map(appointment => appointment.doctor_id));
  $('#your-doctor-count').textContent = uniqueBookedDoctors.size;
  $('#doc-list').innerHTML = activeDoctorTab === 'your' ? renderYourDoctors() : renderFindDoctors();
  applyTranslations();
}

function renderYourDoctors() {
  if (!appointments.length) {
    return `<div class="notice">${escapeHtml(t('no_booked_doctors'))}<br><button type="button" class="ghost" data-show-find-doctors>${escapeHtml(t('find_doctor'))}</button></div>`;
  }

  return appointments.map((appointment) => {
    const doctor = doctors.find(item => item.id === appointment.doctor_id)
      || { name: t('doctor') };

    return renderDoctorCard(doctor, { appointment });
  }).join('') || `<div class="notice">${escapeHtml(t('no_booked_doctors'))}</div>`;
}

function renderFindDoctors() {
  if (!doctors.length) return `<div class="notice">${escapeHtml(t('no_doctors_available'))}</div>`;

  const appointmentByDoctor = new Map();
  appointments.forEach((appointment) => {
    if (!appointmentByDoctor.has(appointment.doctor_id)) appointmentByDoctor.set(appointment.doctor_id, appointment);
  });

  const warning = appointmentsLoadError
    ? `<div class="notice danger">${escapeHtml(t('bookings_load_error'))}</div>`
    : '';
  return warning + doctors.map((doctor) => renderDoctorCard(doctor, {
    appointment: appointmentByDoctor.get(doctor.id)
  })).join('');
}

function renderDoctorCard(doctor, { appointment } = {}) {
  const booked = Boolean(appointment);
  const name = doctor.name || 'Doctor';
  const details = [
    doctor.specialization || doctor.qualification,
    doctor.experience_years != null ? `${doctor.experience_years} ${t('years')}` : null,
    doctor.location
  ].filter(Boolean).join(' · ');
  const languages = Array.isArray(doctor.languages) ? doctor.languages.join(', ') : '';
  const price = doctor.consultation_fee != null
    ? `₹${Number(doctor.consultation_fee).toLocaleString('en-IN')}`
    : t('fee_on_request');
  const appointmentInfo = appointment
    ? `<div class="appointment-meta mute">${escapeHtml(formatAppointmentDate(appointment.appointment_date))} · ${escapeHtml(String(appointment.appointment_time || '').slice(0, 5))}</div>`
    : '';
  const badge = booked
    ? `<span class="doc-status booked">${escapeHtml(t('booked'))}</span>`
    : '<div class="verified">✔ Verified</div>';
  const action = appointmentsLoadError
    ? `<button type="button" disabled>${escapeHtml(t('booking_unavailable'))}</button>`
    : booked
    ? `<button type="button" disabled>${escapeHtml(t('booked'))}</button>`
    : `<button type="button" data-id="${escapeHtml(doctor.id)}">${escapeHtml(t('book_consultation'))}</button>`;

  return `
    <div class="doc">
      <div class="av">${escapeHtml(getDoctorInitials(name))}</div>
      <div class="doc-info">
        <div class="doc-name">${escapeHtml(name)}</div>
        <div class="doc-meta mute">${escapeHtml(details || t('verified_professional'))}</div>
        ${languages ? `<div class="doc-meta mute">${escapeHtml(languages)}</div>` : ''}
        ${badge}
        ${appointmentInfo}
      </div>
      <div class="doc-price">
        <strong>${escapeHtml(price)}</strong><br>
        ${action}
      </div>
    </div>
  `;
}

function getDoctorInitials(name) {
  return String(name).trim().split(/\s+/).slice(0, 2).map(part => part.charAt(0)).join('').toUpperCase();
}

function formatAppointmentDate(date) {
  const locale = getLang() === 'hi' ? 'hi-IN' : 'en-IN';
  return new Date(`${date}T00:00:00`).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function openBooking(doctorId) {
  pendingDoctorId = doctorId;
  const doctor = doctors.find(item => item.id === doctorId);
  if (!doctor) return toast(t('doctor_unavailable'));

  $('#d-name').textContent = doctor.name || t('doctor');
  $('#d-spec').textContent = doctor.specialization || doctor.qualification || t('verified_professional');
  $('#d-info').textContent = doctor.consultation_fee != null
    ? `${t('consultation_fee')}: ₹${Number(doctor.consultation_fee).toLocaleString('en-IN')}`
    : `${t('consultation_fee')}: ${t('fee_on_request')}`;

  const date = $('#d-date');
  date.min = localDateString();
  if (!date.value || date.value < date.min) date.value = date.min;
  $('#dlg').showModal();
}

async function confirmBooking() {
  const user = await currentUser();
  if (!user || !pendingDoctorId) return toast(t('sign_in_choose_doctor'));

  const date = $('#d-date').value;
  const time = $('#d-time').value;
  const mode = $('#d-mode').value;
  if (!date || date < localDateString() || !time || !mode) {
    return toast(t('choose_valid_appointment'));
  }

  const { data: appointment, error } = await sb.from('appointments').insert({
    user_id: user.id,
    doctor_id: pendingDoctorId,
    appointment_date: date,
    appointment_time: time,
    status: 'pending',
    mode
  }).select('id,doctor_id,appointment_date,appointment_time,status,mode').single();

  if (error) {
    console.error('Could not book appointment:', error);
    return toast(t('booking_failed'));
  }

  const doctor = doctors.find(item => item.id === appointment.doctor_id);
  appointments.push({ ...appointment, doctors: doctor });
  appointments.sort((a, b) => `${a.appointment_date} ${a.appointment_time}`.localeCompare(`${b.appointment_date} ${b.appointment_time}`));
  pendingDoctorId = null;
  $('#dlg').close();
  setDoctorTab('your');
  toast(t('appointment_booked'));
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));
}

document.addEventListener('DOMContentLoaded', () => {
  if (!$('#doc-list')) return;
  initDoctors();
  $('#book-btn')?.addEventListener('click', confirmBooking);
  $('#cancel-btn')?.addEventListener('click', () => {
    pendingDoctorId = null;
    $('#dlg').close();
  });
  $('#doc-list').addEventListener('click', (event) => {
    const bookingButton = event.target.closest('button[data-id]');
    if (bookingButton) openBooking(bookingButton.dataset.id);
    if (event.target.closest('[data-show-find-doctors]')) {
      const tab = $('#find-doctor-tab');
      tab.focus();
      setDoctorTab('find');
    }
  });
  document.addEventListener('carexLanguageChanged', renderDoctorList);
});
