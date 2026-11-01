# CareX

Static CareX frontend connected to the CareX Supabase project.

## Configuration

1. Keep the public Supabase values in `.env`.
2. Run:

   ```bash
   node scripts/sync-config.mjs
   ```

3. The script writes `js/config.js`, which is what the browser loads.

Only a Supabase **publishable** key belongs in browser code. Never put a `service_role` or secret key in `.env` for a static frontend or in `js/config.js`.

## Structure

- `*.html` — application pages
- `css/` — shared and page-specific styles
- `js/` — shared runtime, auth, data and page scripts
- `assets/` — images and static assets
- `supabase/functions/` — Edge Functions
- `supabase/migrations/` — database migrations
- `scripts/` — local build/config helpers

## Development

This is a static frontend, so serve the project through a local HTTP server rather than opening HTML files with `file://`.

Example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/`.

## Doctor module

The doctor experience is a self-contained module under `doctor/`:

- `doctor/index.html` — doctor home/overview
- `doctor/login.html` — doctor/admin authentication
- `doctor/register.html` — doctor registration
- `doctor/dashboard.html` — verification dashboard, profile and document submission
- `doctor/admin.html` — authorized admin verification workflow
- `doctor/js/` — doctor-only authentication, Supabase client, workflow helpers
- `doctor/css/` — doctor-specific visual layer

There is intentionally **one project configuration**. The root `.env` is used only for local development/config generation and is not shipped in the distribution ZIP. The browser-facing publishable configuration remains in `js/config.js`; no service-role/secret key belongs there.

Doctor authentication and workflow code do not reuse the patient's `js/auth.js`. They have their own doctor module while still connecting to the same CareX Supabase project and the same central project configuration.
