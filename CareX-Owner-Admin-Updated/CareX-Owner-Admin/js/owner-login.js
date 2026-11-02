(function () {
  'use strict';

  // The recovery page exists (owner-forgot-password.html). Set to false to show the placeholder instead.
  var RECOVERY_PAGE_READY = true;

  var form = document.getElementById('loginForm');
  var identity = document.getElementById('identity');
  var password = document.getElementById('password');
  var toggle = document.getElementById('togglePw');
  var forgot = document.getElementById('forgot');
  var notice = document.getElementById('formNotice');
  document.getElementById('year').textContent = new Date().getFullYear();

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var ID_RE = /^[A-Za-z0-9._-]{3,32}$/;

  function showNotice(msg, isError) {
    notice.textContent = msg;
    notice.classList.toggle('is-error', !!isError);
    notice.hidden = false;
    notice.style.animation = 'none';
    void notice.offsetWidth; // replay the entrance on repeat messages
    notice.style.animation = '';
  }

  function setError(input, msg) {
    var out = document.getElementById(input.id + 'Err');
    out.textContent = msg || '';
    if (msg) { input.setAttribute('aria-invalid', 'true'); }
    else { input.removeAttribute('aria-invalid'); }
    return !msg;
  }

  function checkIdentity() {
    var v = identity.value.trim();
    if (!v) return setError(identity, 'Enter your Owner Email or Owner ID.');
    if (v.indexOf('@') !== -1) {
      return setError(identity, EMAIL_RE.test(v) ? '' : 'Enter a valid email address, for example owner@example.com.');
    }
    return setError(identity, ID_RE.test(v) ? '' : 'Owner ID must be 3 to 32 characters: letters, numbers, dots, dashes or underscores.');
  }

  function checkPassword() {
    var v = password.value;
    if (!v) return setError(password, 'Enter your password.');
    if (v.length < 8) return setError(password, 'Password must be at least 8 characters.');
    return setError(password, '');
  }

  // Show / hide password
  toggle.addEventListener('click', function () {
    var show = password.type === 'password';
    password.type = show ? 'text' : 'password';
    toggle.setAttribute('aria-pressed', String(show));
    toggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    password.focus();
  });

  // Clear a field's error as soon as it is corrected
  identity.addEventListener('input', function () { if (identity.hasAttribute('aria-invalid')) checkIdentity(); });
  password.addEventListener('input', function () { if (password.hasAttribute('aria-invalid')) checkPassword(); });
  identity.addEventListener('blur', function () { if (identity.value) checkIdentity(); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    notice.hidden = true;

    var okId = checkIdentity();
    var okPw = checkPassword();
    if (!okId || !okPw) {
      (okId ? password : identity).focus();
      showNotice('Please fix the highlighted fields and try again.', true);
      return;
    }

    // Demo only: no credentials are sent, stored or checked. Continue to the verification flow.
    password.value = '';
    var btn = document.getElementById('submitBtn');
    btn.setAttribute('aria-busy', 'true');
    btn.querySelector('span').textContent = 'CONTINUING';
    showNotice('Demo: no credentials were checked and no one is signed in. Continuing to verification.', false);
    setTimeout(function () { window.location.href = 'owner-otp.html?flow=login'; }, 1000);
  });

  // Arriving from the Session Expired page
  if (new URLSearchParams(window.location.search).get('reason') === 'expired') {
    showNotice('Your session expired. Authenticate again to continue.', false);
  }

  // Forgot Password: placeholder until the recovery page exists
  forgot.addEventListener('click', function (e) {
    if (RECOVERY_PAGE_READY) return;
    e.preventDefault();
    showNotice('Password recovery is not available yet. It will open from here once the recovery page is ready.', false);
  });
})();
