(function () {
  'use strict';

  // The Owner Login page exists (owner-login.html). Set to false to show the placeholder message instead.
  var LOGIN_PAGE_READY = true;

  var btn = document.getElementById('accessBtn');
  var notice = document.getElementById('notice');
  document.getElementById('year').textContent = new Date().getFullYear();

  btn.addEventListener('click', function () {
    var url = btn.getAttribute('data-login-url');

    if (LOGIN_PAGE_READY) {
      btn.setAttribute('aria-busy', 'true');
      window.location.href = url;
      return;
    }

    // Placeholder only: no authentication is simulated.
    notice.textContent = 'The Owner Login page is not available yet. Sign-in will open here once it is ready.';
    notice.hidden = false;
    notice.style.animation = 'none';
    void notice.offsetWidth; // restart animation on repeat clicks
    notice.style.animation = '';
  });
})();
