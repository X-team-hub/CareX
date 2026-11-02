/* CareX Owner auth flow (FRONTEND DEMO ONLY).
   Nothing here authenticates anyone. No passwords, codes or sessions are stored or sent.
   Real verification and Owner permissions must come from the secure backend later. */
(function () {
  'use strict';

  var page = document.body.getAttribute('data-page');
  var params = new URLSearchParams(window.location.search);
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var DEMO_CODE_OK = '123456', DEMO_CODE_EXPIRED = '000000', DEMO_RECOVERY_OK = 'DEMO-0000';

  function $(id) { return document.getElementById(id); }
  function go(url) { window.location.href = url; }
  var yr = $('year'); if (yr) yr.textContent = new Date().getFullYear();

  function notice(msg, isError) {
    var n = $('notice'); if (!n) return;
    n.textContent = msg;
    n.classList.toggle('is-error', !!isError);
    n.hidden = false;
    n.style.animation = 'none'; void n.offsetWidth; n.style.animation = '';
  }
  function hideNotice() { var n = $('notice'); if (n) n.hidden = true; }

  function busy(btn, on, label) {
    var s = btn.querySelector('span');
    if (on) { btn.dataset.label = s.textContent; s.textContent = label; btn.setAttribute('aria-busy', 'true'); }
    else { s.textContent = btn.dataset.label || s.textContent; btn.removeAttribute('aria-busy'); }
  }
  function show(id) {
    ['stForm', 'stDone', 'stLoading', 'stOk', 'stDenied', 'stExpired'].forEach(function (k) {
      var el = $(k); if (el) el.hidden = (k !== id);
    });
    var t = $(id) && $(id).querySelector('h1');
    if (t) t.focus();
  }

  /* ---------- Six-digit input ---------- */
  function otpBoxes(host, len) {
    var boxes = [];
    for (var i = 0; i < len; i++) {
      var b = document.createElement('input');
      b.type = 'text'; b.inputMode = 'numeric'; b.autocomplete = i === 0 ? 'one-time-code' : 'off';
      b.setAttribute('aria-label', 'Digit ' + (i + 1) + ' of ' + len);
      host.appendChild(b); boxes.push(b);
    }
    function fill(from, digits) {
      var k = from;
      for (var j = 0; j < digits.length && k < len; j++, k++) boxes[k].value = digits[j];
      boxes[Math.min(k, len - 1)].focus();
    }
    boxes.forEach(function (b, i) {
      b.addEventListener('input', function () {
        var d = b.value.replace(/\D/g, '');
        b.value = '';
        if (d) fill(i, d);
        host.dispatchEvent(new Event('otpchange'));
      });
      b.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && !b.value && i > 0) { boxes[i - 1].value = ''; boxes[i - 1].focus(); e.preventDefault(); host.dispatchEvent(new Event('otpchange')); }
        else if (e.key === 'ArrowLeft' && i > 0) { boxes[i - 1].focus(); e.preventDefault(); }
        else if (e.key === 'ArrowRight' && i < len - 1) { boxes[i + 1].focus(); e.preventDefault(); }
      });
      b.addEventListener('paste', function (e) {
        e.preventDefault();
        var d = ((e.clipboardData || window.clipboardData).getData('text') || '').replace(/\D/g, '');
        if (d) fill(i, d);
        host.dispatchEvent(new Event('otpchange'));
      });
      b.addEventListener('focus', function () { b.select(); });
    });
    return {
      value: function () { return boxes.map(function (b) { return b.value; }).join(''); },
      clear: function () { boxes.forEach(function (b) { b.value = ''; }); boxes[0].focus(); },
      invalid: function (on) { boxes.forEach(function (b) { if (on) b.setAttribute('aria-invalid', 'true'); else b.removeAttribute('aria-invalid'); }); },
      focus: function () { boxes[0].focus(); }
    };
  }
  function setErr(el, msg) { el.textContent = msg || ''; }

  /* ---------- Forgot password ---------- */
  function forgot() {
    var form = $('forgotForm'), email = $('email'), btn = $('submitBtn');
    function check() {
      var v = email.value.trim(), msg = '';
      if (!v) msg = 'Enter your Owner email.';
      else if (!EMAIL_RE.test(v)) msg = 'Enter a valid email address, for example owner@example.com.';
      setErr($('emailErr'), msg);
      if (msg) email.setAttribute('aria-invalid', 'true'); else email.removeAttribute('aria-invalid');
      return !msg;
    }
    email.addEventListener('input', function () { if (email.hasAttribute('aria-invalid')) check(); });
    form.addEventListener('submit', function (e) {
      e.preventDefault(); hideNotice();
      if (!check()) { email.focus(); return; }
      busy(btn, true, 'SENDING REQUEST');
      setTimeout(function () {
        busy(btn, false);
        if (/\.invalid$/i.test(email.value.trim())) {
          notice('Demo error: the recovery service could not process this request. Try again in a moment.', true);
        } else { show('stDone'); }
      }, 900);
    });
  }

  /* ---------- Email OTP ---------- */
  function otp() {
    var flow = params.get('flow') === 'recovery' ? 'recovery' : 'login';
    var box = otpBoxes($('otp'), 6), form = $('otpForm'), btn = $('submitBtn');
    var rBtn = $('resendBtn'), rText = $('resendText'), timer, left;

    $('otpSub').textContent = flow === 'recovery'
      ? 'Enter the 6-digit code to continue with account recovery.'
      : 'Enter the 6-digit code to confirm it is you.';
    if (flow === 'recovery') $('changeEmail').setAttribute('href', 'owner-forgot-password.html');

    function tick() {
      if (left <= 0) { clearInterval(timer); rText.textContent = 'You can request a new code now.'; rBtn.disabled = false; return; }
      rText.textContent = 'Resend available in 0:' + (left < 10 ? '0' : '') + left; left--;
    }
    function start() { clearInterval(timer); left = 30; rBtn.disabled = true; tick(); timer = setInterval(tick, 1000); }
    start();
    rBtn.addEventListener('click', function () {
      hideNotice(); box.clear(); box.invalid(false); setErr($('otpErr'), '');
      start(); notice('Demo: no new code was sent. The resend countdown restarted.', false);
    });
    $('otp').addEventListener('otpchange', function () { box.invalid(false); setErr($('otpErr'), ''); });

    form.addEventListener('submit', function (e) {
      e.preventDefault(); hideNotice();
      var v = box.value();
      if (v.length < 6) { box.invalid(true); setErr($('otpErr'), 'Enter all 6 digits of the code.'); box.focus(); return; }
      busy(btn, true, 'VERIFYING');
      setTimeout(function () {
        busy(btn, false);
        if (v === DEMO_CODE_OK) {
          if (flow === 'recovery') { show('stDone'); }
          else { notice('Demo: code accepted. Continuing to two-factor authentication.', false); setTimeout(function () { go('owner-2fa.html'); }, 900); }
          return;
        }
        box.invalid(true);
        setErr($('otpErr'), v === DEMO_CODE_EXPIRED
          ? 'This code has expired. Request a new code and try again.'
          : 'That code is not valid. Check the digits and try again.');
        box.clear();
      }, 800);
    });
  }

  /* ---------- Two-factor authentication ---------- */
  function tfa() {
    var box = otpBoxes($('otp'), 6), form = $('tfaForm'), btn = $('submitBtn'), rec = $('recovery');
    var useRecovery = false, fails = 0;
    function err(m) { setErr($('tfaErr'), m); }
    $('otp').addEventListener('otpchange', function () { box.invalid(false); err(''); });
    rec.addEventListener('input', function () { rec.removeAttribute('aria-invalid'); err(''); });

    $('modeToggle').addEventListener('click', function () {
      useRecovery = !useRecovery; hideNotice(); err(''); box.invalid(false); rec.removeAttribute('aria-invalid');
      $('modeCode').hidden = useRecovery; $('modeRecovery').hidden = !useRecovery;
      $('modeToggle').textContent = useRecovery ? 'Use authenticator code instead' : 'Use a recovery code instead';
      $('tfaSub').textContent = useRecovery ? 'Enter one of your single-use recovery codes.' : 'Enter the 6-digit code from your authenticator app.';
      if (useRecovery) rec.focus(); else box.focus();
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault(); hideNotice();
      var ok, bad = '';
      if (useRecovery) {
        var r = rec.value.trim().toUpperCase();
        if (!r) bad = 'Enter your recovery code.';
        else if (!/^[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(r)) bad = 'Recovery codes look like XXXX-XXXX.';
        ok = r === DEMO_RECOVERY_OK;
        if (bad) { rec.setAttribute('aria-invalid', 'true'); err(bad); rec.focus(); return; }
      } else {
        var v = box.value();
        if (v.length < 6) { box.invalid(true); err('Enter all 6 digits from your authenticator app.'); box.focus(); return; }
        ok = v === DEMO_CODE_OK;
      }
      busy(btn, true, 'VERIFYING');
      setTimeout(function () {
        busy(btn, false);
        if (ok) { notice('Demo: verification accepted. Continuing to device verification.', false); setTimeout(function () { go('owner-new-device.html'); }, 900); return; }
        fails++;
        if (useRecovery) { rec.setAttribute('aria-invalid', 'true'); err('That recovery code is not valid or was already used.'); rec.select(); }
        else { box.invalid(true); err('That code is not valid or has expired. Wait for the next code and try again.'); box.clear(); }
        if (fails >= 3) notice('Several failed attempts. In the live portal, repeated failures would temporarily lock this step.', true);
      }, 800);
    });
  }

  /* ---------- New device verification ---------- */
  function device() {
    var ua = navigator.userAgent, m;
    var browser = (m = ua.match(/Edg\/(\d+)/)) ? 'Microsoft Edge ' + m[1]
      : (m = ua.match(/OPR\/(\d+)/)) ? 'Opera ' + m[1]
      : (m = ua.match(/(?:Firefox|FxiOS)\/(\d+)/)) ? 'Firefox ' + m[1]
      : (m = ua.match(/(?:Chrome|CriOS)\/(\d+)/)) ? 'Chrome ' + m[1]
      : (m = ua.match(/Version\/(\d+).*Safari/)) ? 'Safari ' + m[1] : 'Unknown browser';
    var os = /Android/.test(ua) ? 'Android' : /iPhone|iPad|iPod/.test(ua) ? 'iOS' : /Windows/.test(ua) ? 'Windows'
      : /Mac OS X/.test(ua) ? 'macOS' : /CrOS/.test(ua) ? 'ChromeOS' : /Linux/.test(ua) ? 'Linux' : 'Unknown system';
    var tz = '';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { tz = 'Unavailable'; }
    $('dBrowser').textContent = browser;
    $('dOs').textContent = os;
    $('dLang').textContent = navigator.language || 'Unavailable';
    $('dTz').textContent = tz || 'Unavailable';
    $('dScreen').textContent = screen.width + ' \u00D7 ' + screen.height;
    $('dTime').textContent = new Date().toLocaleString();

    var btn = $('continueBtn'), st = $('devStatus'), tx = $('devStatusText');
    btn.addEventListener('click', function () {
      busy(btn, true, 'VERIFYING DEVICE');
      $('cancelBtn').setAttribute('aria-disabled', 'true');
      st.className = 'status busy'; tx.textContent = 'Verifying device\u2026';
      setTimeout(function () {
        st.className = 'status ok'; tx.textContent = 'Device verified (demo). Continuing\u2026';
        setTimeout(function () { go('owner-verify.html'); }, 800);
      }, 1100);
    });
  }

  /* ---------- Owner identity and permission verification ---------- */
  function verify() {
    var scenario = params.get('scenario'), run = 0;
    var steps = Array.prototype.slice.call($('steps').children);
    var btns = Array.prototype.slice.call(document.querySelectorAll('.demo-bar button'));
    var end = { owner: 'stOk', denied: 'stDenied', expired: 'stExpired' };
    if (!end[scenario]) scenario = 'owner';

    function start(s) {
      var id = ++run; scenario = s;
      btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.s === s)); });
      steps.forEach(function (li) { li.classList.remove('done'); });
      show('stLoading');
      steps.forEach(function (li, i) { setTimeout(function () { if (id === run) li.classList.add('done'); }, 650 * (i + 1)); });
      setTimeout(function () { if (id === run) show(end[s]); }, 650 * (steps.length + 1));
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { start(b.dataset.s); }); });
    start(scenario);
  }

  var pages = { forgot: forgot, otp: otp, '2fa': tfa, device: device, verify: verify };
  if (pages[page]) pages[page]();
})();
