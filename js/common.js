const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const toast = m => {
  const t = $('#toast') || document.createElement('div');
  if (!t.id) { t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = m; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
};

document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-item').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
  
  // Chip toggles
  $$('.chip').forEach(c => {
    c.addEventListener('click', () => {
      c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    });
  });
});

// Date helpers
const todayStr = () => new Date().toISOString().slice(0, 10);
const parse = s => new Date(s + 'T00:00:00Z');
const diff = (a, b) => Math.round((parse(b) - parse(a)) / 864e5);
const addDays = (s, n) => new Date(parse(s).getTime() + n * 864e5).toISOString().slice(0, 10);
const fmt = s => parse(s).toLocaleDateString(getLang() === 'hi' ? 'hi-IN' : 'en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });