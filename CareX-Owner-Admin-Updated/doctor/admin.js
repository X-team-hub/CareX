/**
 * CareX Doctor Administration Console
 * Production JavaScript Controller
 * 
 * Manages doctor directory, verification workflows, credentials review,
 * consultation fees, performance metrics, and CareX Supabase/Auth integration.
 */

(function () {
  'use strict';

  // --- Offline Icon Guard ---
  if (typeof window.lucide === 'undefined') {
    window.lucide = { createIcons: function () {} };
  }

  // --- DOM Helpers ---
  const $ = selector => document.querySelector(selector);
  const $$ = selector => Array.from(document.querySelectorAll(selector));

  const formatINR = n => '₹' + Number(n).toLocaleString('en-IN');
  const formatNum = n => Number(n).toLocaleString('en-IN');

  // --- Master Doctor Dataset (Seeded from CareX Reference) ---
  const INITIAL_DOCTORS = [
    {
      id: 'D-201',
      name: 'Dr. Kavita Menon',
      specialization: 'Cardiology',
      fee: 600,
      status: 'Verified',
      rating: '4.8',
      reviewsCount: 142,
      experience: 14,
      regNumber: 'MCI-2009-48210',
      council: 'Medical Council of India / Maharashtra',
      hospital: 'Apollo Hospitals & Heart Center',
      email: 'dr.kavita.menon@carex.health',
      phone: '+91 98450 48210',
      education: 'MBBS, MD (Cardiology) - AIIMS New Delhi',
      consultationsCount: 274,
      completionRate: 98,
      avgResponseMin: 2.4,
      disputesCount: 0,
      joinedDate: '12 Jan 2024',
      availability: 'Mon - Fri (09:00 - 17:00)',
      documents: [
        { name: 'MCI State Registration Certificate', verified: true, date: '12 Jan 2024' },
        { name: 'MD Cardiology Degree (AIIMS)', verified: true, date: '12 Jan 2024' },
        { name: 'Government Identity (Aadhaar / Passport)', verified: true, date: '12 Jan 2024' }
      ]
    },
    {
      id: 'D-202',
      name: 'Dr. Suresh Reddy',
      specialization: 'General Medicine',
      fee: 300,
      status: 'Verified',
      rating: '4.6',
      reviewsCount: 98,
      experience: 9,
      regNumber: 'TSMC-2014-39182',
      council: 'Telangana State Medical Council',
      hospital: 'Care Hospitals & Multispecialty',
      email: 'dr.suresh.reddy@carex.health',
      phone: '+91 98110 39182',
      education: 'MBBS, MD (Internal Medicine) - Osmania University',
      consultationsCount: 190,
      completionRate: 95,
      avgResponseMin: 3.8,
      disputesCount: 1,
      joinedDate: '03 Feb 2024',
      availability: 'Mon - Sat (10:00 - 18:00)',
      documents: [
        { name: 'Telangana Medical Council Certificate', verified: true, date: '03 Feb 2024' },
        { name: 'MD Internal Medicine Certificate', verified: true, date: '03 Feb 2024' },
        { name: 'PAN & Identity Verification', verified: true, date: '03 Feb 2024' }
      ]
    },
    {
      id: 'D-203',
      name: 'Dr. Priya Banerjee',
      specialization: 'Dermatology',
      fee: 450,
      status: 'Pending',
      rating: '—',
      reviewsCount: 0,
      experience: 6,
      regNumber: 'WBMC-2018-71920',
      council: 'West Bengal Medical Council',
      hospital: 'Fortis Healthcare & Aesthetics',
      email: 'dr.priya.banerjee@carex.health',
      phone: '+91 90070 71920',
      education: 'MBBS, MD (Dermatology, Venereology & Leprosy)',
      consultationsCount: 38,
      completionRate: 92,
      avgResponseMin: 4.1,
      disputesCount: 0,
      joinedDate: '26 Oct 2026',
      availability: 'Tue - Sat (11:00 - 19:00)',
      documents: [
        { name: 'West Bengal Medical Council Certificate', verified: false, date: 'Uploaded 26 Oct 2026' },
        { name: 'MD Dermatology Degree Certificate', verified: true, date: 'Uploaded 26 Oct 2026' },
        { name: 'State Clinical Establishment Registration', verified: false, date: 'Uploaded 26 Oct 2026' }
      ]
    },
    {
      id: 'D-204',
      name: 'Dr. Anil Kapoor',
      specialization: 'Pediatrics',
      fee: 400,
      status: 'Verified',
      rating: '4.9',
      reviewsCount: 186,
      experience: 18,
      regNumber: 'MMC-1998-11029',
      council: 'Maharashtra Medical Council',
      hospital: 'Lilavati Hospital & Research Centre',
      email: 'dr.anil.kapoor@carex.health',
      phone: '+91 99870 11029',
      education: 'MBBS, DCH, MD (Pediatrics) - KEM Hospital Mumbai',
      consultationsCount: 335,
      completionRate: 99,
      avgResponseMin: 1.9,
      disputesCount: 0,
      joinedDate: '15 Nov 2023',
      availability: 'Mon - Fri (08:30 - 16:30)',
      documents: [
        { name: 'Maharashtra Medical Council Certificate', verified: true, date: '15 Nov 2023' },
        { name: 'MD Pediatrics Certificate & Registration', verified: true, date: '15 Nov 2023' },
        { name: 'Indian Academy of Pediatrics Fellowship', verified: true, date: '15 Nov 2023' }
      ]
    },
    {
      id: 'D-205',
      name: 'Dr. Nisha Joseph',
      specialization: 'Gynecology',
      fee: 550,
      status: 'Suspended',
      rating: '4.2',
      reviewsCount: 44,
      experience: 11,
      regNumber: 'TNSMC-2013-55102',
      council: 'Tamil Nadu State Medical Council',
      hospital: 'Manipal Hospital & Women Centre',
      email: 'dr.nisha.joseph@carex.health',
      phone: '+91 97650 55102',
      education: 'MBBS, MS (Obstetrics & Gynecology) - CMC Vellore',
      consultationsCount: 151,
      completionRate: 84,
      avgResponseMin: 6.2,
      disputesCount: 2,
      joinedDate: '19 Jan 2024',
      availability: 'Mon - Thu (12:00 - 18:00)',
      documents: [
        { name: 'Tamil Nadu Medical Council Certificate', verified: true, date: '19 Jan 2024' },
        { name: 'MS Obstetrics & Gynecology Degree', verified: true, date: '19 Jan 2024' },
        { name: 'Hospital Affiliation Clearance', verified: true, date: '19 Jan 2024' }
      ]
    },
    {
      id: 'D-206',
      name: 'Dr. Rahul Desai',
      specialization: 'Orthopedics',
      fee: 650,
      status: 'Pending',
      rating: '—',
      reviewsCount: 0,
      experience: 8,
      regNumber: 'MMC-2015-88319',
      council: 'Maharashtra Medical Council',
      hospital: 'Nanavati Super Speciality Hospital',
      email: 'dr.rahul.desai@carex.health',
      phone: '+91 98200 88319',
      education: 'MBBS, MS (Orthopedics) - Grant Medical College',
      consultationsCount: 58,
      completionRate: 91,
      avgResponseMin: 3.5,
      disputesCount: 0,
      joinedDate: '28 Oct 2026',
      availability: 'Mon, Wed, Fri (14:00 - 20:00)',
      documents: [
        { name: 'Maharashtra Medical Council Certificate', verified: false, date: 'Uploaded 28 Oct 2026' },
        { name: 'MS Orthopedics Degree & Certificate', verified: true, date: 'Uploaded 28 Oct 2026' },
        { name: 'Clinical Indemnity Insurance Proof', verified: false, date: 'Uploaded 28 Oct 2026' }
      ]
    },
    {
      id: 'D-207',
      name: 'Dr. Sameer Qureshi',
      specialization: 'Psychiatry',
      fee: 700,
      status: 'Verified',
      rating: '4.7',
      reviewsCount: 82,
      experience: 12,
      regNumber: 'KMC-2011-64102',
      council: 'Karnataka Medical Council',
      hospital: 'NIMHANS Allied & Max Healthcare',
      email: 'dr.sameer.qureshi@carex.health',
      phone: '+91 94440 64102',
      education: 'MBBS, MD (Psychiatry) - NIMHANS Bengaluru',
      consultationsCount: 220,
      completionRate: 96,
      avgResponseMin: 3.2,
      disputesCount: 1,
      joinedDate: '09 Mar 2024',
      availability: 'Tue - Sun (15:00 - 21:00)',
      documents: [
        { name: 'Karnataka Medical Council Certificate', verified: true, date: '09 Mar 2024' },
        { name: 'MD Psychiatry NIMHANS Degree', verified: true, date: '09 Mar 2024' },
        { name: 'Indian Psychiatric Society Membership', verified: true, date: '09 Mar 2024' }
      ]
    }
  ];

  // --- Department Catalog ---
  const DEPARTMENTS = [
    { name: 'Cardiology', doctorsCount: 2, avgFee: 600, active: true },
    { name: 'General Medicine', doctorsCount: 5, avgFee: 320, active: true },
    { name: 'Dermatology', doctorsCount: 1, avgFee: 450, active: true },
    { name: 'Pediatrics', doctorsCount: 3, avgFee: 420, active: true },
    { name: 'Gynecology', doctorsCount: 2, avgFee: 550, active: true },
    { name: 'Orthopedics', doctorsCount: 2, avgFee: 650, active: true },
    { name: 'Psychiatry', doctorsCount: 2, avgFee: 700, active: true }
  ];

  // --- Admin Audit Log Entries ---
  const AUDIT_LOGS = [
    { time: '30 Oct 09:15', admin: 'Pooja Shah', action: 'Verified Dr. Rahul Desai documents', module: 'Doctors' },
    { time: '29 Oct 18:02', admin: 'Dr. Meera Iyer', action: 'Changed consultation fee cap', module: 'Settings' },
    { time: '28 Oct 14:20', admin: 'Karan Malhotra', action: 'Flagged dispute review for Dr. Nisha Joseph', module: 'Disputes' },
    { time: '26 Oct 11:45', admin: 'Pooja Shah', action: 'Approved registration for Dr. Priya Banerjee', module: 'Verification' }
  ];

  // --- Application State ---
  const state = {
    doctors: JSON.parse(JSON.stringify(INITIAL_DOCTORS)),
    activeTab: 'all',
    searchQuery: '',
    specialtyFilter: '',
    statusFilter: '',
    sortFilter: 'name-asc',
    viewMode: 'table',
    selectedDoctorIds: new Set(),
    currentPage: 1,
    pageSize: 10,
    openDropdownId: null,
    isSupabaseConnected: false
  };

  // --- CareX Integration: Supabase / Auth Client Discovery ---
  function getSupabaseClient() {
    return window.carexSupabase || 
           window.supabaseClient || 
           window.supabase_client || 
           window.sb || 
           null;
  }

  async function initCareXIntegration() {
    try {
      const client = getSupabaseClient();
      if (client && client.auth) {
        state.isSupabaseConnected = true;
        const statusLabel = $('#platformModeLabel');
        if (statusLabel) statusLabel.textContent = 'Supabase Connected';

        // Check active session & role if CareXAuth exists
        if (window.CareXAuth && typeof window.CareXAuth.requireRole === 'function') {
          const authUser = await window.CareXAuth.requireRole(['owner', 'admin']);
          if (authUser && authUser.profile) {
            updateUserProfile(authUser.profile.full_name || 'Admin', authUser.profile.role || 'Super Admin');
          }
        } else {
          // Direct Supabase session inspection
          const { data: { user } } = await client.auth.getUser();
          if (user) {
            const metaName = (user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name)) || user.email;
            updateUserProfile(metaName, 'Administrator');
          }
        }

        // Try querying live doctors table if exists
        try {
          const { data, error } = await client
            .from('carex_doctors')
            .select('*')
            .limit(50);
          
          if (!error && data && data.length > 0) {
            // Map live database records into local UI model
            mapLiveSupabaseDoctors(data);
          }
        } catch (tableErr) {
          console.info('Live Supabase table carex_doctors not provisioned yet; using verified reference dataset.', tableErr);
        }
      }
    } catch (err) {
      console.warn('CareX integration initial check error:', err);
    }
  }

  function updateUserProfile(name, role) {
    const nameEl = $('#headerUserName');
    const roleEl = $('#headerUserRole');
    const avatarEl = $('#headerUserAvatar');
    if (nameEl) nameEl.textContent = name;
    if (roleEl) roleEl.textContent = role;
    if (avatarEl && name) {
      avatarEl.textContent = name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
    }
  }

  function mapLiveSupabaseDoctors(liveData) {
    // Merge live data with reference items if present
    const mapped = liveData.map(d => ({
      id: d.doctor_id || ('D-' + d.id),
      name: d.full_name || d.name || 'Dr. Practitioner',
      specialization: d.specialization || d.department || 'General Medicine',
      fee: d.consultation_fee || d.fee || 400,
      status: d.verification_status === 'approved' ? 'Verified' : (d.status || 'Pending'),
      rating: d.rating ? String(d.rating) : '—',
      reviewsCount: d.reviews_count || 0,
      experience: d.experience_years || d.experience || 5,
      regNumber: d.license_number || d.registration_no || 'REG-LIVE',
      council: d.medical_council || 'State Medical Council',
      hospital: d.hospital_name || 'CareX Network Clinic',
      email: d.email || 'doctor@carex.health',
      phone: d.phone || '+91 98000 00000',
      education: d.qualifications || 'MBBS',
      consultationsCount: d.consultations_count || 0,
      completionRate: 95,
      avgResponseMin: 3.0,
      disputesCount: 0,
      joinedDate: 'Live Sync',
      availability: 'Mon - Fri (10:00 - 18:00)',
      documents: [
        { name: 'Medical Council License', verified: d.verification_status === 'approved', date: 'Database Synced' },
        { name: 'Primary Medical Qualification', verified: true, date: 'Database Synced' }
      ]
    }));
    state.doctors = mapped;
  }

  // --- Toast Notification Manager ---
  function showToast(message, type = 'info', duration = 3400) {
    const stack = $('#toastStack');
    if (!stack) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle';
    if (type === 'error') iconName = 'alert-circle';
    if (type === 'warning') iconName = 'alert-triangle';

    toast.innerHTML = `
      <i data-lucide="${iconName}"></i>
      <span>${escapeHTML(message)}</span>
    `;

    stack.appendChild(toast);
    window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.95)';
      setTimeout(() => toast.remove(), 260);
    }, duration);
  }

  // --- Filtering & Sorting Engine ---
  function getFilteredDoctors() {
    let result = [...state.doctors];

    // Filter by Active Tab
    if (state.activeTab && state.activeTab !== 'all') {
      result = result.filter(doc => doc.status.toLowerCase() === state.activeTab.toLowerCase());
    }

    // Filter by Search Query
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.trim().toLowerCase();
      result = result.filter(doc => 
        doc.name.toLowerCase().includes(q) ||
        doc.id.toLowerCase().includes(q) ||
        doc.specialization.toLowerCase().includes(q) ||
        doc.regNumber.toLowerCase().includes(q) ||
        doc.hospital.toLowerCase().includes(q) ||
        (doc.education && doc.education.toLowerCase().includes(q))
      );
    }

    // Filter by Specialization
    if (state.specialtyFilter) {
      result = result.filter(doc => doc.specialization === state.specialtyFilter);
    }

    // Filter by Status Dropdown
    if (state.statusFilter) {
      result = result.filter(doc => doc.status.toLowerCase() === state.statusFilter.toLowerCase());
    }

    // Sorting
    result.sort((a, b) => {
      switch (state.sortFilter) {
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'rating-desc': {
          const rA = a.rating === '—' ? 0 : parseFloat(a.rating) || 0;
          const rB = b.rating === '—' ? 0 : parseFloat(b.rating) || 0;
          return rB - rA;
        }
        case 'fee-asc':
          return a.fee - b.fee;
        case 'fee-desc':
          return b.fee - a.fee;
        case 'exp-desc':
          return b.experience - a.experience;
        case 'name-asc':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return result;
  }

  // --- Rendering UI: Table View ---
  function renderDoctorsTable(doctors) {
    const tbody = $('#doctorsTableBody');
    if (!tbody) return;

    if (doctors.length === 0) {
      tbody.innerHTML = '';
      $('#tableViewContainer').hidden = true;
      $('#gridViewContainer').hidden = true;
      $('#tableEmptyState').hidden = false;
      return;
    }

    $('#tableEmptyState').hidden = true;
    if (state.viewMode === 'table') {
      $('#tableViewContainer').hidden = false;
      $('#gridViewContainer').hidden = true;
    } else {
      $('#tableViewContainer').hidden = true;
      $('#gridViewContainer').hidden = false;
    }

    tbody.innerHTML = doctors.map(doc => {
      const isSelected = state.selectedDoctorIds.has(doc.id);
      const initials = doc.name.replace('Dr. ', '').split(' ').map(p => p[0]).slice(0, 2).join('');
      const rupeeEquivalent = Math.round(doc.fee * 0.1);

      return `
        <tr data-id="${doc.id}" class="${isSelected ? 'row-selected' : ''}">
          <td class="td-checkbox">
            <input type="checkbox" class="doctor-row-select" data-id="${doc.id}" ${isSelected ? 'checked' : ''} aria-label="Select ${escapeHTML(doc.name)}">
          </td>
          <td>
            <div class="doctor-cell">
              <div class="doc-avatar">${initials}</div>
              <div class="doc-info">
                <span class="doc-name">${escapeHTML(doc.name)}</span>
                <span class="doc-sub">${doc.id} · Reg: ${escapeHTML(doc.regNumber)}</span>
              </div>
            </div>
          </td>
          <td>
            <div>
              <strong>${escapeHTML(doc.specialization)}</strong>
              <small class="doc-sub" style="display:block">${escapeHTML(doc.hospital)}</small>
            </div>
          </td>
          <td>
            <div>
              <span class="fee-value">${formatNum(doc.fee)} <small>tokens</small></span>
              <span class="fee-sub">≈ ${formatINR(rupeeEquivalent)}</span>
            </div>
          </td>
          <td>
            ${renderStatusBadge(doc.status)}
          </td>
          <td>
            ${doc.rating !== '—' ? `
              <div class="rating-pill">
                <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>${doc.rating}</span>
                <small class="doc-sub">(${doc.consultationsCount})</small>
              </div>
            ` : `<span class="doc-sub">— (New)</span>`}
          </td>
          <td>
            <span>${doc.experience} yrs</span>
          </td>
          <td class="actions-cell">
            <div class="actions-group">
              ${doc.status === 'Pending' ? `
                <button class="btn-action-primary" onclick="window.CareXDoctorAdmin.openVerifyModal('${doc.id}')">
                  Review & Verify
                </button>
              ` : `
                <button class="btn-action-primary" onclick="window.CareXDoctorAdmin.openDossierModal('${doc.id}')">
                  Dossier
                </button>
              `}
              
              <div class="dropdown-container">
                <button class="btn-dropdown-trigger" onclick="window.CareXDoctorAdmin.toggleDropdown('${doc.id}', event)" aria-label="More actions for ${escapeHTML(doc.name)}" aria-haspopup="true">
                  <i data-lucide="more-vertical"></i>
                </button>
                <div class="dropdown-menu ${state.openDropdownId === doc.id ? 'show' : ''}" id="dd_${doc.id}">
                  <button class="dropdown-item" onclick="window.CareXDoctorAdmin.openDossierModal('${doc.id}')">
                    <i data-lucide="file-text"></i> View Clinical Profile
                  </button>
                  <button class="dropdown-item" onclick="window.CareXDoctorAdmin.openEditDoctorModal('${doc.id}')">
                    <i data-lucide="edit-3"></i> Edit Details & Fee
                  </button>
                  <button class="dropdown-item" onclick="window.CareXDoctorAdmin.openAvailabilityModal('${doc.id}')">
                    <i data-lucide="calendar"></i> Manage Schedule
                  </button>
                  <button class="dropdown-item" onclick="window.CareXDoctorAdmin.openPerformanceModal('${doc.id}')">
                    <i data-lucide="bar-chart-2"></i> Performance Analytics
                  </button>
                  <div class="dropdown-divider"></div>
                  
                  ${doc.status !== 'Verified' ? `
                    <button class="dropdown-item" onclick="window.CareXDoctorAdmin.approveDoctor('${doc.id}')">
                      <i data-lucide="check-circle" style="color:var(--success)"></i> Approve Registration
                    </button>
                  ` : ''}
                  
                  ${doc.status === 'Pending' ? `
                    <button class="dropdown-item danger-item" onclick="window.CareXDoctorAdmin.rejectDoctorPrompt('${doc.id}')">
                      <i data-lucide="x-circle"></i> Reject Application
                    </button>
                  ` : ''}

                  ${doc.status !== 'Suspended' ? `
                    <button class="dropdown-item danger-item" onclick="window.CareXDoctorAdmin.toggleSuspendDoctor('${doc.id}')">
                      <i data-lucide="slash"></i> Suspend Doctor
                    </button>
                  ` : `
                    <button class="dropdown-item" onclick="window.CareXDoctorAdmin.toggleSuspendDoctor('${doc.id}')">
                      <i data-lucide="shield-check" style="color:var(--success)"></i> Reactivate Doctor
                    </button>
                  `}
                </div>
              </div>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    window.lucide.createIcons();
    bindRowCheckboxEvents();
  }

  // --- Rendering UI: Grid View ---
  function renderDoctorsGrid(doctors) {
    const grid = $('#gridViewContainer');
    if (!grid) return;

    grid.innerHTML = doctors.map(doc => {
      const initials = doc.name.replace('Dr. ', '').split(' ').map(p => p[0]).slice(0, 2).join('');
      const rupeeEquivalent = Math.round(doc.fee * 0.1);

      return `
        <div class="doctor-card-item" data-id="${doc.id}">
          <div class="doctor-card-top">
            <div class="card-doc-profile">
              <div class="doc-avatar">${initials}</div>
              <div>
                <h3 class="doc-name">${escapeHTML(doc.name)}</h3>
                <span class="doc-sub">${doc.id} · ${escapeHTML(doc.specialization)}</span>
              </div>
            </div>
            ${renderStatusBadge(doc.status)}
          </div>

          <p class="doc-sub" style="margin-bottom:8px">
            <i data-lucide="building" style="width:13px;height:13px;display:inline-block;vertical-align:-1px"></i> ${escapeHTML(doc.hospital)}
          </p>
          <p class="doc-sub" style="margin-bottom:8px">
            <i data-lucide="award" style="width:13px;height:13px;display:inline-block;vertical-align:-1px"></i> Reg: ${escapeHTML(doc.regNumber)}
          </p>

          <div class="doctor-card-metrics">
            <div class="card-metric-block">
              <span class="card-metric-label">Fee</span>
              <span class="card-metric-value">${formatNum(doc.fee)} T</span>
              <small class="doc-sub">${formatINR(rupeeEquivalent)}</small>
            </div>
            <div class="card-metric-block">
              <span class="card-metric-label">Rating</span>
              <span class="card-metric-value">${doc.rating !== '—' ? `★ ${doc.rating}` : '—'}</span>
              <small class="doc-sub">${doc.consultationsCount} appts</small>
            </div>
            <div class="card-metric-block">
              <span class="card-metric-label">Exp</span>
              <span class="card-metric-value">${doc.experience} Yrs</span>
              <small class="doc-sub">${doc.completionRate}% comp</small>
            </div>
          </div>

          <div class="doctor-card-actions">
            ${doc.status === 'Pending' ? `
              <button class="btn btn-sm btn-primary" style="flex:1" onclick="window.CareXDoctorAdmin.openVerifyModal('${doc.id}')">
                <i data-lucide="shield-check"></i> Verify
              </button>
            ` : `
              <button class="btn btn-sm btn-secondary" style="flex:1" onclick="window.CareXDoctorAdmin.openDossierModal('${doc.id}')">
                <i data-lucide="file-text"></i> Dossier
              </button>
            `}
            <button class="btn btn-sm btn-secondary" onclick="window.CareXDoctorAdmin.openEditDoctorModal('${doc.id}')" title="Edit Doctor">
              <i data-lucide="edit-3"></i>
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.CareXDoctorAdmin.openAvailabilityModal('${doc.id}')" title="Schedule">
              <i data-lucide="calendar"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    window.lucide.createIcons();
  }

  // --- Status Badge Helper ---
  function renderStatusBadge(status) {
    const s = String(status || '').toLowerCase();
    if (s === 'verified') {
      return `<span class="badge badge-verified"><span class="badge-dot"></span>Verified</span>`;
    }
    if (s === 'pending') {
      return `<span class="badge badge-pending"><span class="badge-dot"></span>Needs Review</span>`;
    }
    if (s === 'suspended') {
      return `<span class="badge badge-suspended"><span class="badge-dot"></span>Suspended</span>`;
    }
    return `<span class="badge badge-rejected"><span class="badge-dot"></span>${escapeHTML(status)}</span>`;
  }

  // --- Rendering Secondary Modules & KPIs ---
  function updateDashboardKPIs() {
    const total = state.doctors.length;
    const pending = state.doctors.filter(d => d.status.toLowerCase() === 'pending').length;
    const verified = state.doctors.filter(d => d.status.toLowerCase() === 'verified').length;
    const suspended = state.doctors.filter(d => d.status.toLowerCase() === 'suspended').length;

    // Navigation and Tab Counters
    if ($('#countAllNav')) $('#countAllNav').textContent = total;
    if ($('#countPendingNav')) $('#countPendingNav').textContent = pending;
    if ($('#countVerifiedNav')) $('#countVerifiedNav').textContent = verified;
    if ($('#countSuspendedNav')) $('#countSuspendedNav').textContent = suspended;

    if ($('#tabCountAll')) $('#tabCountAll').textContent = total;
    if ($('#tabCountPending')) $('#tabCountPending').textContent = pending;
    if ($('#tabCountVerified')) $('#tabCountVerified').textContent = verified;
    if ($('#tabCountSuspended')) $('#tabCountSuspended').textContent = suspended;

    // Main KPI Header Cards
    if ($('#kpiTotalDocs')) $('#kpiTotalDocs').textContent = formatNum(1284);
    if ($('#kpiPendingDocs')) $('#kpiPendingDocs').textContent = pending;
    if ($('#kpiVerifiedDocs')) $('#kpiVerifiedDocs').textContent = formatNum(1102);
    
    // Average fee calculation
    const avgFee = Math.round(state.doctors.reduce((sum, d) => sum + d.fee, 0) / (total || 1));
    if ($('#kpiAvgFee')) $('#kpiAvgFee').textContent = formatNum(avgFee);

    if ($('#pendingQueueCountBadge')) {
      $('#pendingQueueCountBadge').textContent = `${pending} Awaiting Review`;
    }
    if ($('#headerNotificationBadge')) {
      $('#headerNotificationBadge').textContent = pending;
    }
  }

  function renderVerificationQueue() {
    const container = $('#quickVerificationList');
    if (!container) return;

    const pendingDocs = state.doctors.filter(d => d.status.toLowerCase() === 'pending');
    if (pendingDocs.length === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:16px;color:var(--text-muted);font-size:0.85rem">
          <i data-lucide="check-check" style="width:28px;height:28px;color:var(--success);margin-bottom:6px"></i>
          <p>No pending doctor registrations in queue. All applications reviewed!</p>
        </div>
      `;
      window.lucide.createIcons();
      return;
    }

    container.innerHTML = pendingDocs.map(doc => {
      const initials = doc.name.replace('Dr. ', '').split(' ').map(p => p[0]).slice(0, 2).join('');
      return `
        <div class="queue-item">
          <div class="queue-left">
            <div class="doc-avatar" style="width:34px;height:34px;font-size:0.8rem">${initials}</div>
            <div>
              <div class="queue-doc-name">${escapeHTML(doc.name)}</div>
              <div class="queue-doc-spec">${escapeHTML(doc.specialization)} · ${doc.experience} yrs exp</div>
            </div>
          </div>
          <button class="btn btn-sm btn-primary" onclick="window.CareXDoctorAdmin.openVerifyModal('${doc.id}')">
            Review Documents
          </button>
        </div>
      `;
    }).join('');

    window.lucide.createIcons();
  }

  function renderDepartmentStats() {
    const container = $('#departmentStatsList');
    if (!container) return;

    container.innerHTML = DEPARTMENTS.map(dept => `
      <div class="dept-chip-card">
        <div>
          <span class="dept-name">${escapeHTML(dept.name)}</span>
          <span class="dept-count" style="display:block">Avg: ${dept.avgFee} tokens</span>
        </div>
        <span class="badge badge-verified">${dept.doctorsCount} doctors</span>
      </div>
    `).join('');
  }

  function updatePaginationMeta(visibleCount, totalCount) {
    if ($('#showingCount')) $('#showingCount').textContent = visibleCount;
    if ($('#totalCount')) $('#totalCount').textContent = totalCount;
  }

  // --- Active Filter Chips Renderer ---
  function updateActiveFilterChips() {
    const bar = $('#activeFiltersBar');
    const list = $('#filterChipsList');
    if (!bar || !list) return;

    const chips = [];

    if (state.searchQuery.trim()) {
      chips.push({ key: 'search', label: `Search: "${state.searchQuery}"` });
    }
    if (state.activeTab !== 'all') {
      chips.push({ key: 'tab', label: `Status: ${state.activeTab}` });
    }
    if (state.specialtyFilter) {
      chips.push({ key: 'specialty', label: `Specialty: ${state.specialtyFilter}` });
    }
    if (state.statusFilter) {
      chips.push({ key: 'status', label: `Filter: ${state.statusFilter}` });
    }

    if (chips.length === 0) {
      bar.hidden = true;
      list.innerHTML = '';
      return;
    }

    bar.hidden = false;
    list.innerHTML = chips.map(c => `
      <span class="filter-chip">
        ${escapeHTML(c.label)}
        <button class="filter-chip-remove" onclick="window.CareXDoctorAdmin.removeFilter('${c.key}')" aria-label="Remove filter">
          <i data-lucide="x"></i>
        </button>
      </span>
    `).join('');

    window.lucide.createIcons();
  }

  // --- Main Render Master Trigger ---
  function refreshView() {
    const filtered = getFilteredDoctors();
    renderDoctorsTable(filtered);
    renderDoctorsGrid(filtered);
    updateDashboardKPIs();
    renderVerificationQueue();
    renderDepartmentStats();
    updatePaginationMeta(filtered.length, state.doctors.length);
    updateActiveFilterChips();
  }

  // --- Modal Operations ---
  const modalOverlay = $('#modalOverlay');
  const modalTitle = $('#modalTitle');
  const modalTitleIcon = $('#modalTitleIcon');
  const modalBody = $('#modalBody');
  const modalFooter = $('#modalFooter');

  function openModal(title, iconName = 'stethoscope') {
    if (modalTitle) modalTitle.textContent = title;
    if (modalTitleIcon) modalTitleIcon.setAttribute('data-lucide', iconName);
    if (modalOverlay) {
      modalOverlay.classList.add('open');
      modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    window.lucide.createIcons();
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('open');
      modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // --- Modals Implementations ---

  // 1. Doctor Full Dossier Modal
  function openDossierModal(doctorId) {
    const doc = state.doctors.find(d => d.id === doctorId);
    if (!doc) return;

    const initials = doc.name.replace('Dr. ', '').split(' ').map(p => p[0]).slice(0, 2).join('');
    const rupeeFee = Math.round(doc.fee * 0.1);

    modalBody.innerHTML = `
      <div class="dossier-hero">
        <div class="dossier-avatar">${initials}</div>
        <div class="dossier-info">
          <h3>${escapeHTML(doc.name)}</h3>
          <p>${escapeHTML(doc.specialization)} · ${escapeHTML(doc.hospital)}</p>
          <div style="margin-top:6px">${renderStatusBadge(doc.status)}</div>
        </div>
      </div>

      <div class="dossier-section-title">Registration & Medical Credentials</div>
      <div class="dossier-kv-grid">
        <div class="dossier-kv">
          <span>Medical Registration Number</span>
          <strong>${escapeHTML(doc.regNumber)}</strong>
        </div>
        <div class="dossier-kv">
          <span>Registering Council</span>
          <strong>${escapeHTML(doc.council)}</strong>
        </div>
        <div class="dossier-kv">
          <span>Qualifications</span>
          <strong>${escapeHTML(doc.education)}</strong>
        </div>
        <div class="dossier-kv">
          <span>Clinical Experience</span>
          <strong>${doc.experience} Years</strong>
        </div>
      </div>

      <div class="dossier-section-title">Consultation Economics & Telehealth</div>
      <div class="dossier-kv-grid">
        <div class="dossier-kv">
          <span>Consultation Fee</span>
          <strong>${formatNum(doc.fee)} tokens (≈ ${formatINR(rupeeFee)})</strong>
        </div>
        <div class="dossier-kv">
          <span>Doctor Payout Share</span>
          <strong>80% (${formatINR(Math.round(rupeeFee * 0.8))})</strong>
        </div>
        <div class="dossier-kv">
          <span>Availability Schedule</span>
          <strong>${escapeHTML(doc.availability)}</strong>
        </div>
        <div class="dossier-kv">
          <span>Completed Consultations</span>
          <strong>${formatNum(doc.consultationsCount)} appointments</strong>
        </div>
      </div>

      <div class="dossier-section-title">Submitted Documents & KYC Clearance</div>
      <div class="documents-list">
        ${doc.documents.map(docu => `
          <div class="document-item">
            <div class="doc-name-group">
              <i data-lucide="${docu.verified ? 'check-circle-2' : 'clock'}"></i>
              <span>${escapeHTML(docu.name)}</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <span class="badge ${docu.verified ? 'badge-verified' : 'badge-pending'}">
                ${docu.verified ? 'Verified' : 'Pending Verification'}
              </span>
              <button class="btn btn-sm btn-secondary" onclick="window.CareXDoctorAdmin.previewDocument('${escapeHTML(docu.name)}')">
                View
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="window.CareXDoctorAdmin.closeModal()">Close</button>
      <button class="btn btn-secondary" onclick="window.CareXDoctorAdmin.openEditDoctorModal('${doc.id}')">
        <i data-lucide="edit-3"></i> Edit Details
      </button>
      ${doc.status === 'Pending' ? `
        <button class="btn btn-primary" onclick="window.CareXDoctorAdmin.openVerifyModal('${doc.id}')">
          <i data-lucide="shield-check"></i> Review & Verify
        </button>
      ` : ''}
    `;

    openModal(`Clinical Dossier · ${doc.id}`, 'file-text');
  }

  // 2. Verify Credentials Modal
  function openVerifyModal(doctorId) {
    const doc = state.doctors.find(d => d.id === doctorId);
    if (!doc) return;

    modalBody.innerHTML = `
      <div style="background-color:var(--primary-subtle);border:1px solid var(--primary-border);border-radius:var(--radius-md);padding:14px;margin-bottom:18px">
        <strong style="color:var(--primary);display:block;margin-bottom:4px">Doctor Verification Protocol</strong>
        <p style="font-size:0.84rem;color:var(--text-main);margin:0">
          Verify <strong>${escapeHTML(doc.name)}</strong>'s registration against official medical council directories. Doctors must have valid qualifications before receiving tele-consultations.
        </p>
      </div>

      <div class="form-group">
        <label>Medical Council Registration</label>
        <div class="form-control" style="background:#f8fafc;font-weight:700">
          ${escapeHTML(doc.regNumber)} — ${escapeHTML(doc.council)}
        </div>
      </div>

      <div class="form-group">
        <label>Verified Checklist</label>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:0.86rem">
          <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-weight:normal">
            <input type="checkbox" id="chkMci" checked style="accent-color:var(--primary);width:16px;height:16px">
            State Medical Council registration active and valid
          </label>
          <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-weight:normal">
            <input type="checkbox" id="chkDegree" checked style="accent-color:var(--primary);width:16px;height:16px">
            Primary qualification (${escapeHTML(doc.education)}) confirmed
          </label>
          <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-weight:normal">
            <input type="checkbox" id="chkId" checked style="accent-color:var(--primary);width:16px;height:16px">
            Government photo identity and photograph verified
          </label>
          <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-weight:normal">
            <input type="checkbox" id="chkClearance" checked style="accent-color:var(--primary);width:16px;height:16px">
            Zero active disciplinary or malpractice blocks
          </label>
        </div>
      </div>

      <div class="form-group">
        <label for="verifyNotes">Verification Officer Notes (Recorded in Audit Trail)</label>
        <textarea id="verifyNotes" class="form-control" rows="3" placeholder="Enter verification notes or council verification reference number…">Registration records verified online via State Medical Council register. All primary documents confirmed valid.</textarea>
      </div>
    `;

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="window.CareXDoctorAdmin.closeModal()">Cancel</button>
      <button class="btn btn-danger" onclick="window.CareXDoctorAdmin.rejectDoctorPrompt('${doc.id}')">
        <i data-lucide="x"></i> Reject
      </button>
      <button class="btn btn-primary" onclick="window.CareXDoctorAdmin.confirmVerifyDoctor('${doc.id}')">
        <i data-lucide="badge-check"></i> Approve & Verify
      </button>
    `;

    openModal(`Verify Doctor Credentials · ${doc.id}`, 'shield-check');
  }

  // 3. Add or Edit Doctor Modal
  function openDoctorFormModal(doctorToEdit = null) {
    const isEdit = !!doctorToEdit;
    const doc = doctorToEdit || {
      name: '',
      specialization: 'General Medicine',
      fee: 400,
      experience: 5,
      regNumber: '',
      council: 'Medical Council of India',
      hospital: '',
      email: '',
      phone: ''
    };

    modalBody.innerHTML = `
      <form id="doctorEditorForm" onsubmit="event.preventDefault(); window.CareXDoctorAdmin.saveDoctorForm('${isEdit ? doc.id : ''}')">
        <div class="form-row">
          <div class="form-group">
            <label for="docFormName">Doctor Full Name *</label>
            <input type="text" id="docFormName" class="form-control" value="${escapeHTML(doc.name)}" placeholder="e.g. Dr. Ramesh Gupta" required>
            <div class="form-error-msg" id="errName"></div>
          </div>
          <div class="form-group">
            <label for="docFormSpec">Specialization *</label>
            <select id="docFormSpec" class="form-control form-select" required>
              <option value="General Medicine" ${doc.specialization === 'General Medicine' ? 'selected' : ''}>General Medicine</option>
              <option value="Cardiology" ${doc.specialization === 'Cardiology' ? 'selected' : ''}>Cardiology</option>
              <option value="Dermatology" ${doc.specialization === 'Dermatology' ? 'selected' : ''}>Dermatology</option>
              <option value="Pediatrics" ${doc.specialization === 'Pediatrics' ? 'selected' : ''}>Pediatrics</option>
              <option value="Gynecology" ${doc.specialization === 'Gynecology' ? 'selected' : ''}>Gynecology</option>
              <option value="Orthopedics" ${doc.specialization === 'Orthopedics' ? 'selected' : ''}>Orthopedics</option>
              <option value="Psychiatry" ${doc.specialization === 'Psychiatry' ? 'selected' : ''}>Psychiatry</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="docFormFee">Consultation Fee (Tokens) *</label>
            <input type="number" id="docFormFee" class="form-control" value="${doc.fee}" min="50" max="2500" step="10" required>
            <small class="doc-sub">10 tokens ≈ ₹1 (Doctor: 80% / CareX: 20%)</small>
            <div class="form-error-msg" id="errFee"></div>
          </div>
          <div class="form-group">
            <label for="docFormExp">Experience (Years) *</label>
            <input type="number" id="docFormExp" class="form-control" value="${doc.experience}" min="0" max="60" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="docFormReg">Medical License / Reg No. *</label>
            <input type="text" id="docFormReg" class="form-control" value="${escapeHTML(doc.regNumber)}" placeholder="e.g. MCI-2016-55910" required>
          </div>
          <div class="form-group">
            <label for="docFormCouncil">Registering Council</label>
            <input type="text" id="docFormCouncil" class="form-control" value="${escapeHTML(doc.council)}" placeholder="e.g. Maharashtra Medical Council">
          </div>
        </div>

        <div class="form-group">
          <label for="docFormHospital">Affiliated Clinic / Hospital</label>
          <input type="text" id="docFormHospital" class="form-control" value="${escapeHTML(doc.hospital)}" placeholder="e.g. Apollo Multispecialty Clinic">
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="docFormEmail">Email Address</label>
            <input type="email" id="docFormEmail" class="form-control" value="${escapeHTML(doc.email)}" placeholder="doctor@carex.health">
          </div>
          <div class="form-group">
            <label for="docFormPhone">Contact Phone</label>
            <input type="tel" id="docFormPhone" class="form-control" value="${escapeHTML(doc.phone)}" placeholder="+91 98000 00000">
          </div>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="window.CareXDoctorAdmin.closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="$('#doctorEditorForm').requestSubmit()">
        <i data-lucide="save"></i> ${isEdit ? 'Save Changes' : 'Register Doctor'}
      </button>
    `;

    openModal(isEdit ? `Edit Doctor · ${doc.id}` : 'Register New Doctor', isEdit ? 'edit-3' : 'user-plus');
  }

  // 4. Availability & Schedule Modal
  function openAvailabilityModal(doctorId) {
    const doc = state.doctors.find(d => d.id === doctorId);
    if (!doc) return;

    modalBody.innerHTML = `
      <p class="doc-sub" style="margin-bottom:16px">Configure weekly consultation hours and booking slot windows for <strong>${escapeHTML(doc.name)}</strong>.</p>
      
      <div class="form-group">
        <label>Available Consultation Days</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => `
            <label class="btn btn-sm ${day !== 'Sun' ? 'btn-primary' : 'btn-secondary'}" style="cursor:pointer">
              <input type="checkbox" checked style="display:none"> ${day}
            </label>
          `).join('')}
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Shift Start Time</label>
          <input type="time" class="form-control" value="09:00">
        </div>
        <div class="form-group">
          <label>Shift End Time</label>
          <input type="time" class="form-control" value="17:00">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Slot Duration</label>
          <select class="form-control form-select">
            <option>15 Minutes</option>
            <option selected>20 Minutes</option>
            <option>30 Minutes</option>
          </select>
        </div>
        <div class="form-group">
          <label>Buffer Between Consults</label>
          <select class="form-control form-select">
            <option selected>5 Minutes</option>
            <option>10 Minutes</option>
          </select>
        </div>
      </div>
    `;

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="window.CareXDoctorAdmin.closeModal()">Close</button>
      <button class="btn btn-primary" onclick="window.CareXDoctorAdmin.saveAvailability('${doc.id}')">
        <i data-lucide="check"></i> Save Schedule
      </button>
    `;

    openModal(`Availability & Schedule · ${doc.name}`, 'calendar');
  }

  // 5. Performance Analytics Modal
  function openPerformanceModal(doctorId) {
    const doc = state.doctors.find(d => d.id === doctorId);
    if (!doc) return;

    const rupeeEarnings = formatINR(Math.round(doc.consultationsCount * doc.fee * 0.8 * 0.1));

    modalBody.innerHTML = `
      <div class="dossier-hero">
        <div class="dossier-avatar">${doc.name.replace('Dr. ', '').slice(0, 2).toUpperCase()}</div>
        <div class="dossier-info">
          <h3>${escapeHTML(doc.name)}</h3>
          <p>${escapeHTML(doc.specialization)} · Performance Score: <strong style="color:var(--primary)">94/100</strong></p>
        </div>
      </div>

      <div class="dossier-kv-grid">
        <div class="dossier-kv">
          <span>Patient Satisfaction Rating</span>
          <strong>${doc.rating} / 5.0 (${doc.reviewsCount} reviews)</strong>
        </div>
        <div class="dossier-kv">
          <span>Consultation Completion Rate</span>
          <strong>${doc.completionRate}%</strong>
        </div>
        <div class="dossier-kv">
          <span>Average Tele-Response Time</span>
          <strong>${doc.avgResponseMin} Minutes</strong>
        </div>
        <div class="dossier-kv">
          <span>Disputed No-Shows</span>
          <strong>${doc.disputesCount} recorded</strong>
        </div>
      </div>

      <div class="dossier-section-title">Settled Doctor Financials</div>
      <div class="dossier-kv-grid">
        <div class="dossier-kv">
          <span>Total Consultations Delivered</span>
          <strong>${doc.consultationsCount} consultations</strong>
        </div>
        <div class="dossier-kv">
          <span>Estimated Cumulative Earnings</span>
          <strong>${rupeeEarnings}</strong>
        </div>
      </div>
    `;

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="window.CareXDoctorAdmin.closeModal()">Close</button>
    `;

    openModal(`Doctor Performance & Quality · ${doc.id}`, 'bar-chart-2');
  }

  // 6. Confirmation Action Dialog
  function openConfirmModal(title, message, confirmBtnLabel, confirmActionFn, isDanger = false) {
    modalBody.innerHTML = `
      <p style="font-size:0.95rem;color:var(--text-main);line-height:1.5">
        ${escapeHTML(message)}
      </p>
    `;

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="window.CareXDoctorAdmin.closeModal()">Cancel</button>
      <button class="btn ${isDanger ? 'btn-danger' : 'btn-primary'}" id="confirmModalBtn">
        ${escapeHTML(confirmBtnLabel)}
      </button>
    `;

    $('#confirmModalBtn').onclick = () => {
      closeModal();
      confirmActionFn();
    };

    openModal(title, isDanger ? 'alert-triangle' : 'help-circle');
  }

  // --- CRUD Actions & Business Logic ---

  function approveDoctor(doctorId) {
    const doc = state.doctors.find(d => d.id === doctorId);
    if (!doc) return;

    doc.status = 'Verified';
    doc.documents.forEach(docu => { docu.verified = true; });

    // Live Supabase update if connected
    syncStatusWithSupabase(doc.id, 'approved', 'Verified');

    logAuditAction(`Approved registration & credentials for ${doc.name}`, 'Verification');
    showToast(`${doc.name} has been verified and approved for consultations!`, 'success');
    closeDropdowns();
    refreshView();
  }

  function confirmVerifyDoctor(doctorId) {
    const doc = state.doctors.find(d => d.id === doctorId);
    if (!doc) return;

    const notes = $('#verifyNotes')?.value || 'Credentials verified';
    doc.status = 'Verified';
    doc.documents.forEach(d => { d.verified = true; });

    syncStatusWithSupabase(doc.id, 'approved', 'Verified');

    logAuditAction(`Verified credentials for ${doc.name}: ${notes}`, 'Doctors');
    showToast(`Credentials verified for ${doc.name}. Status updated to Verified.`, 'success');
    closeModal();
    refreshView();
  }

  function rejectDoctorPrompt(doctorId) {
    const doc = state.doctors.find(d => d.id === doctorId);
    if (!doc) return;

    openConfirmModal(
      `Reject Registration · ${doc.name}`,
      `Are you sure you want to reject the registration application for ${doc.name}? The doctor will be notified and cannot conduct consultations.`,
      'Reject Application',
      () => {
        doc.status = 'Rejected';
        syncStatusWithSupabase(doc.id, 'rejected', 'Rejected');
        logAuditAction(`Rejected registration application for ${doc.name}`, 'Verification');
        showToast(`Registration for ${doc.name} has been rejected.`, 'error');
        closeDropdowns();
        refreshView();
      },
      true
    );
  }

  function toggleSuspendDoctor(doctorId) {
    const doc = state.doctors.find(d => d.id === doctorId);
    if (!doc) return;

    const isSuspended = doc.status === 'Suspended';
    const targetStatus = isSuspended ? 'Verified' : 'Suspended';
    const actionLabel = isSuspended ? 'Reactivate' : 'Suspend';

    openConfirmModal(
      `${actionLabel} Doctor Account`,
      `Are you sure you want to ${actionLabel.toLowerCase()} the account for ${doc.name}? ${!isSuspended ? 'This doctor will not appear in patient searches and cannot accept new bookings.' : 'The doctor will be restored to active clinical duty.'}`,
      `${actionLabel} Account`,
      () => {
        doc.status = targetStatus;
        syncStatusWithSupabase(doc.id, targetStatus === 'Verified' ? 'approved' : 'suspended', targetStatus);
        logAuditAction(`${actionLabel}ed doctor account for ${doc.name}`, 'Account Management');
        showToast(`Doctor account for ${doc.name} is now ${targetStatus}.`, targetStatus === 'Verified' ? 'success' : 'warning');
        closeDropdowns();
        refreshView();
      },
      !isSuspended
    );
  }

  function saveDoctorForm(doctorIdToUpdate) {
    const name = $('#docFormName')?.value.trim();
    const spec = $('#docFormSpec')?.value;
    const fee = parseInt($('#docFormFee')?.value, 10);
    const exp = parseInt($('#docFormExp')?.value, 10);
    const reg = $('#docFormReg')?.value.trim();
    const council = $('#docFormCouncil')?.value.trim() || 'State Medical Council';
    const hospital = $('#docFormHospital')?.value.trim() || 'CareX Telehealth Network';
    const email = $('#docFormEmail')?.value.trim() || '';
    const phone = $('#docFormPhone')?.value.trim() || '';

    if (!name || isNaN(fee) || fee < 50) {
      showToast('Please provide a valid doctor name and fee (min 50 tokens).', 'warning');
      return;
    }

    if (doctorIdToUpdate) {
      // Update existing
      const doc = state.doctors.find(d => d.id === doctorIdToUpdate);
      if (doc) {
        doc.name = name;
        doc.specialization = spec;
        doc.fee = fee;
        doc.experience = exp;
        doc.regNumber = reg;
        doc.council = council;
        doc.hospital = hospital;
        doc.email = email;
        doc.phone = phone;

        logAuditAction(`Updated details & fee for ${doc.name} (${doc.id})`, 'Doctors');
        showToast(`Updated details for ${doc.name}!`, 'success');
      }
    } else {
      // Create new doctor
      const newId = `D-${201 + state.doctors.length}`;
      const newDoc = {
        id: newId,
        name,
        specialization: spec,
        fee,
        status: 'Pending',
        rating: '—',
        reviewsCount: 0,
        experience: exp,
        regNumber: reg || `REG-${Date.now().toString().slice(-5)}`,
        council,
        hospital,
        email,
        phone,
        education: 'MBBS, Clinical Degree',
        consultationsCount: 0,
        completionRate: 100,
        avgResponseMin: 0,
        disputesCount: 0,
        joinedDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        availability: 'Mon - Fri (10:00 - 18:00)',
        documents: [
          { name: 'Medical Council Registration', verified: false, date: 'Uploaded today' },
          { name: 'Degree & Medical Diploma', verified: false, date: 'Uploaded today' }
        ]
      };

      state.doctors.unshift(newDoc);
      logAuditAction(`Registered new doctor ${newDoc.name} (${newDoc.id})`, 'Onboarding');
      showToast(`Doctor ${newDoc.name} registered and queued for verification!`, 'success');
    }

    closeModal();
    refreshView();
  }

  function saveAvailability(doctorId) {
    const doc = state.doctors.find(d => d.id === doctorId);
    if (!doc) return;

    doc.availability = 'Mon - Sat (09:00 - 17:00)';
    showToast(`Availability schedule updated for ${doc.name}!`, 'success');
    closeModal();
    refreshView();
  }

  function previewDocument(docName) {
    showToast(`Displaying verified credential preview for: ${docName}`, 'info');
  }

  // Live Supabase Sync Helper (Safe & Non-blocking)
  async function syncStatusWithSupabase(doctorId, verificationStatus, generalStatus) {
    const client = getSupabaseClient();
    if (!client) return;

    try {
      await client
        .from('carex_doctors')
        .update({
          verification_status: verificationStatus,
          status: generalStatus,
          updated_at: new Date().toISOString()
        })
        .or(`doctor_id.eq.${doctorId},id.eq.${doctorId.replace('D-', '')}`);
    } catch (e) {
      console.info('Supabase sync attempted (offline or demo mode):', e);
    }
  }

  function logAuditAction(actionText, moduleName) {
    const timeStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) + ' ' + 
                    new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    
    AUDIT_LOGS.unshift({
      time: timeStr,
      admin: $('#headerUserName')?.textContent || 'Super Admin',
      action: actionText,
      module: moduleName
    });
  }

  // --- Export CSV Generator ---
  function exportDoctorsCSV() {
    const doctors = getFilteredDoctors();
    if (doctors.length === 0) {
      showToast('No doctor records to export.', 'warning');
      return;
    }

    const headers = ['Doctor ID', 'Name', 'Specialization', 'Fee (Tokens)', 'Status', 'Rating', 'Experience (Yrs)', 'Medical Reg No', 'Council', 'Hospital', 'Email', 'Phone'];
    
    const rows = doctors.map(d => [
      d.id,
      `"${d.name.replace(/"/g, '""')}"`,
      `"${d.specialization}"`,
      d.fee,
      d.status,
      d.rating,
      d.experience,
      `"${d.regNumber}"`,
      `"${d.council}"`,
      `"${d.hospital}"`,
      d.email,
      d.phone
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + 
      [headers.join(','), ...rows.map(e => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `carex-doctor-directory-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    showToast(`Exported ${doctors.length} doctor records to CSV!`, 'success');
  }

  // --- Dropdown Management ---
  function toggleDropdown(doctorId, event) {
    if (event) event.stopPropagation();
    state.openDropdownId = state.openDropdownId === doctorId ? null : doctorId;
    
    // Toggle class on the DOM element
    $$('.dropdown-menu').forEach(m => m.classList.remove('show'));
    if (state.openDropdownId) {
      const menu = $(`#dd_${state.openDropdownId}`);
      if (menu) menu.classList.add('show');
    }
  }

  function closeDropdowns() {
    state.openDropdownId = null;
    $$('.dropdown-menu').forEach(m => m.classList.remove('show'));
  }

  // --- Checkbox Selection Management ---
  function bindRowCheckboxEvents() {
    const selectAll = $('#selectAllCheckbox');
    if (selectAll) {
      selectAll.onchange = function () {
        const filtered = getFilteredDoctors();
        if (this.checked) {
          filtered.forEach(d => state.selectedDoctorIds.add(d.id));
        } else {
          filtered.forEach(d => state.selectedDoctorIds.delete(d.id));
        }
        refreshView();
      };
    }

    $$('.doctor-row-select').forEach(cb => {
      cb.onchange = function () {
        const id = this.getAttribute('data-id');
        if (this.checked) state.selectedDoctorIds.add(id);
        else state.selectedDoctorIds.delete(id);
        
        const row = $(`tr[data-id="${id}"]`);
        if (row) row.classList.toggle('row-selected', this.checked);
      };
    });
  }

  // --- Filter Removal Helper ---
  function removeFilter(key) {
    if (key === 'search') {
      state.searchQuery = '';
      if ($('#doctorSearchInput')) $('#doctorSearchInput').value = '';
      if ($('#searchClearBtn')) $('#searchClearBtn').hidden = true;
    }
    if (key === 'tab') {
      state.activeTab = 'all';
      $$('.ws-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'all'));
    }
    if (key === 'specialty') {
      state.specialtyFilter = '';
      if ($('#specialtyFilter')) $('#specialtyFilter').value = '';
    }
    if (key === 'status') {
      state.statusFilter = '';
      if ($('#statusFilter')) $('#statusFilter').value = '';
    }
    refreshView();
  }

  // --- Audit Trail Dialog Modal ---
  function openAuditModal() {
    modalBody.innerHTML = `
      <p class="doc-sub" style="margin-bottom:14px">Immutable record of doctor verifications, fee adjustments, and status changes performed by administrators.</p>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${AUDIT_LOGS.map(log => `
          <div style="padding:10px 14px;background:#f8fafc;border:1px solid var(--border-color);border-radius:var(--radius-md);display:flex;justify-content:space-between;align-items:center">
            <div>
              <strong style="font-size:0.86rem;color:var(--text-heading)">${escapeHTML(log.action)}</strong>
              <small class="doc-sub" style="display:block">By ${escapeHTML(log.admin)} · ${log.time}</small>
            </div>
            <span class="badge badge-verified">${escapeHTML(log.module)}</span>
          </div>
        `).join('')}
      </div>
    `;

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="window.CareXDoctorAdmin.closeModal()">Close</button>
    `;

    openModal('Admin Audit Trail · Doctor Registry', 'history');
  }

  // --- Department Manager Modal ---
  function openDepartmentModal() {
    modalBody.innerHTML = `
      <div class="form-group">
        <label for="newDeptName">Department Name *</label>
        <input type="text" id="newDeptName" class="form-control" placeholder="e.g. Neurology, Oncology…">
      </div>
      <div class="form-group">
        <label for="newDeptFee">Standard Consultation Fee (Tokens)</label>
        <input type="number" id="newDeptFee" class="form-control" value="500">
      </div>
    `;

    modalFooter.innerHTML = `
      <button class="btn btn-secondary" onclick="window.CareXDoctorAdmin.closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="window.CareXDoctorAdmin.saveDepartment()">
        <i data-lucide="plus"></i> Add Department
      </button>
    `;

    openModal('Add Clinical Department', 'layers');
  }

  function saveDepartment() {
    const name = $('#newDeptName')?.value.trim();
    const fee = parseInt($('#newDeptFee')?.value, 10) || 450;
    if (!name) {
      showToast('Department name is required', 'warning');
      return;
    }

    DEPARTMENTS.push({ name, doctorsCount: 0, avgFee: fee, active: true });
    
    // Also add to specialty filter dropdown
    const select = $('#specialtyFilter');
    if (select) {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      select.appendChild(opt);
    }

    showToast(`Department "${name}" registered successfully!`, 'success');
    closeModal();
    renderDepartmentStats();
  }

  // --- HTML Sanitization ---
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // --- Logout Handler ---
  async function handleLogout() {
    openConfirmModal(
      'Sign Out of CareX Admin',
      'Are you sure you want to log out of the Doctor Administration console?',
      'Sign Out',
      async () => {
        try {
          if (window.CareXAuth && typeof window.CareXAuth.signOut === 'function') {
            await window.CareXAuth.signOut();
          } else {
            const client = getSupabaseClient();
            if (client && client.auth) {
              await client.auth.signOut();
            }
          }
        } catch (e) {
          console.warn('Signout exception:', e);
        }
        showToast('Logged out successfully. Redirecting…', 'info');
        setTimeout(() => {
          window.location.href = '../CareX-Owner-Admin/owner-login.html';
        }, 600);
      }
    );
  }

  // --- Event Listeners Initialization ---
  function initEventListeners() {
    // 1. Mobile Sidebar Controls
    const mobileBtn = $('#mobileMenuBtn');
    const closeBtn = $('#sidebarCloseBtn');
    const backdrop = $('#sidebarBackdrop');
    const sidebar = $('#sidebar');

    const toggleSidebar = () => {
      if (sidebar) sidebar.classList.toggle('open');
      if (backdrop) backdrop.classList.toggle('active');
    };

    if (mobileBtn) mobileBtn.onclick = toggleSidebar;
    if (closeBtn) closeBtn.onclick = toggleSidebar;
    if (backdrop) backdrop.onclick = toggleSidebar;

    // 2. Navigation items
    $$('.sidebar-nav .nav-item').forEach(btn => {
      btn.onclick = function () {
        $$('.sidebar-nav .nav-item').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const view = this.dataset.view;
        if (view === 'all') {
          state.activeTab = 'all';
          $$('.ws-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'all'));
          refreshView();
        } else if (view === 'pending') {
          state.activeTab = 'Pending';
          $$('.ws-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'Pending'));
          refreshView();
        } else if (view === 'verified') {
          state.activeTab = 'Verified';
          $$('.ws-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'Verified'));
          refreshView();
        } else if (view === 'suspended') {
          state.activeTab = 'Suspended';
          $$('.ws-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'Suspended'));
          refreshView();
        } else if (view === 'departments') {
          openDepartmentModal();
        } else if (view === 'audit') {
          openAuditModal();
        } else if (view === 'payouts') {
          showToast('Opening 15-Day Doctor Token Payouts in Owner Console…', 'info');
          window.location.href = '../CareX-Owner-Admin/index.html';
        } else if (view === 'performance') {
          showToast('Displaying overall CareX clinical performance scorecard.', 'info');
        }

        if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
          toggleSidebar();
        }
      };
    });

    // 3. Workspace Tab Switching
    $$('.ws-tab').forEach(tab => {
      tab.onclick = function () {
        $$('.ws-tab').forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        state.activeTab = this.dataset.tab;
        refreshView();
      };
    });

    // 4. Search Input with instant filter & clear button
    const searchInput = $('#doctorSearchInput');
    const clearBtn = $('#searchClearBtn');

    if (searchInput) {
      searchInput.oninput = function () {
        state.searchQuery = this.value;
        if (clearBtn) clearBtn.hidden = !this.value;
        refreshView();
      };
    }

    if (clearBtn) {
      clearBtn.onclick = function () {
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        state.searchQuery = '';
        this.hidden = true;
        refreshView();
      };
    }

    // 5. Specialization & Status Filters
    const specFilter = $('#specialtyFilter');
    if (specFilter) {
      specFilter.onchange = function () {
        state.specialtyFilter = this.value;
        refreshView();
      };
    }

    const statFilter = $('#statusFilter');
    if (statFilter) {
      statFilter.onchange = function () {
        state.statusFilter = this.value;
        refreshView();
      };
    }

    const sortFilter = $('#sortFilter');
    if (sortFilter) {
      sortFilter.onchange = function () {
        state.sortFilter = this.value;
        refreshView();
      };
    }

    // 6. View Mode Switcher (Table vs Grid)
    const btnTable = $('#viewModeTable');
    const btnGrid = $('#viewModeGrid');

    if (btnTable && btnGrid) {
      btnTable.onclick = () => {
        state.viewMode = 'table';
        btnTable.classList.add('active');
        btnTable.setAttribute('aria-pressed', 'true');
        btnGrid.classList.remove('active');
        btnGrid.setAttribute('aria-pressed', 'false');
        refreshView();
      };

      btnGrid.onclick = () => {
        state.viewMode = 'grid';
        btnGrid.classList.add('active');
        btnGrid.setAttribute('aria-pressed', 'true');
        btnTable.classList.remove('active');
        btnTable.setAttribute('aria-pressed', 'false');
        refreshView();
      };
    }

    // 7. Modal Close Triggers
    const modalCloseBtn = $('#modalCloseBtn');
    if (modalCloseBtn) modalCloseBtn.onclick = closeModal;

    if (modalOverlay) {
      modalOverlay.onclick = e => {
        if (e.target === modalOverlay) closeModal();
      };
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeModal();
        closeDropdowns();
      }
    });

    // 8. Global Click Listener to Close Open Dropdowns
    document.addEventListener('click', () => {
      closeDropdowns();
    });

    // 9. Quick Actions
    const addDoctorBtn = $('#openAddDoctorModalBtn');
    if (addDoctorBtn) addDoctorBtn.onclick = () => openDoctorFormModal();

    const exportBtn = $('#exportDirectoryBtn');
    if (exportBtn) exportBtn.onclick = exportDoctorsCSV;

    const refreshBtn = $('#quickRefreshBtn');
    if (refreshBtn) {
      refreshBtn.onclick = () => {
        refreshBtn.querySelector('i')?.classList.add('spin-once');
        showToast('Doctor records refreshed from CareX registry.', 'success');
        refreshView();
      };
    }

    const notifBtn = $('#headerNotificationsBtn');
    if (notifBtn) {
      notifBtn.onclick = () => {
        const pendingCount = state.doctors.filter(d => d.status.toLowerCase() === 'pending').length;
        showToast(`${pendingCount} doctor registration(s) currently awaiting credential verification.`, 'warning');
      };
    }

    const logoutBtn = $('#logoutBtn');
    if (logoutBtn) logoutBtn.onclick = handleLogout;

    const dismissNotice = $('#dismissNoticeBtn');
    if (dismissNotice) {
      dismissNotice.onclick = () => {
        const banner = $('#noticeBanner');
        if (banner) banner.style.display = 'none';
      };
    }

    const resetFiltersBtn = $('#clearAllFiltersBtn');
    if (resetFiltersBtn) {
      resetFiltersBtn.onclick = () => {
        state.searchQuery = '';
        state.specialtyFilter = '';
        state.statusFilter = '';
        state.activeTab = 'all';
        if (searchInput) searchInput.value = '';
        if (specFilter) specFilter.value = '';
        if (statFilter) statFilter.value = '';
        $$('.ws-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'all'));
        refreshView();
      };
    }

    const emptyResetBtn = $('#emptyResetFiltersBtn');
    if (emptyResetBtn) {
      emptyResetBtn.onclick = () => {
        if (resetFiltersBtn) resetFiltersBtn.click();
      };
    }

    const manageDeptsBtn = $('#manageDeptsBtn');
    if (manageDeptsBtn) manageDeptsBtn.onclick = openDepartmentModal;
  }

  // --- Public API for Inline Modal Triggers ---
  window.CareXDoctorAdmin = {
    openDossierModal,
    openVerifyModal,
    openDoctorFormModal,
    openEditDoctorModal: id => {
      const doc = state.doctors.find(d => d.id === id);
      if (doc) openDoctorFormModal(doc);
    },
    openAvailabilityModal,
    openPerformanceModal,
    confirmVerifyDoctor,
    approveDoctor,
    rejectDoctorPrompt,
    toggleSuspendDoctor,
    saveDoctorForm,
    saveAvailability,
    previewDocument,
    toggleDropdown,
    closeModal,
    removeFilter,
    saveDepartment
  };

  // --- Lifecycle Bootstrapper ---
  document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    refreshView();
    initCareXIntegration();
  });

})();
