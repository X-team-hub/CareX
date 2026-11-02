# CareX Owner Admin Panel (Demo / Prototype)

A front-end prototype of the **CareX Platform Owner / Super Admin control panel**. It is for the owner of the platform only. There are no patient pages, no doctor pages and no booking or consultation screens. Doctors, patients and appointments appear only as management and monitoring sections.

> **All data is fictional and lives only in browser memory. Reloading the page resets everything.**

## Folder structure

```
CareX-Owner-Admin/
├── index.html            Page shell (sidebar, header, containers)
├── css/style.css         All styles (responsive, light/white content area, navy sidebar)
├── js/app.js             Demo data, page renderers, modals, router, demo flows
├── assets/
│   ├── images/carex-logo.svg
│   └── icons/favicon.svg
├── README.md
└── SETUP-GUIDE.txt
```

## Modules

Platform Overview · Token & Wallet Management · User Token Purchases · Token Package Configuration · Revenue & Commission · Doctor Account Management · Patient Account Management · Appointment Monitoring · Complaint Investigation · Doctor Performance & Eligibility · 15-Day Doctor Payouts · Refund & Dispute Management · Payment Gateway & Transactions · Financial Reports · Staff Accounts & Permissions · Platform Notifications · Security & Audit Logs · Global Platform Settings.

## How to open

1. Extract the ZIP.
2. Double-click `index.html` (works from `file://`).

An internet connection is needed for Chart.js, Lucide icons and the Plus Jakarta Sans font (loaded from CDNs). Without it the panel still works, but charts and icons are replaced by a short notice or left blank and the font falls back to a system font.

## Run on a local server (optional)

```
cd CareX-Owner-Admin
python3 -m http.server 8080      # then open http://localhost:8080
# or: npx serve .
```

## Financial logic kept from the original file

- Token top-ups are customer credit (a liability), **not** platform revenue. Only settled consultations create revenue.
- Appointment tokens are held, then released on consultation completion. Doctor earning and CareX commission are split at the configured percentages (demo default 80/20).
- Doctors claim earned tokens on a **15-day payout cycle**. The owner converts tokens to rupees at an **owner-configurable rate** (demo default ₹0.80 per doctor token), adjusted by a **performance-based payout factor**.
- Complaints: staff investigate; a verified valid complaint reverses the disputed appointment tokens to the user and is recorded in an adjustment ledger. A penalty applies only to a verified knowingly false complaint and goes to a separate platform ledger.

No calculations were changed during packaging.

## Demo-only features (not real)

- Every table, balance, ledger and chart is sample data in memory.
- Payout approval, refunds, token reversals, wallet adjustments and complaint decisions only change in-browser arrays.
- Payment gateway, webhooks, reconciliation, notifications and CSV/Excel/PDF exports are UI mockups only.
- Staff roles and the permission matrix are visual only and enforce nothing.
- **There is no login.** The "Dr. Meera Iyer, Platform Owner" profile is a static label. Any PIN prompt marked "demo" is not security.

## Security: read this before any real use

Front-end HTML/JS cannot secure anything by itself. Anyone can open the browser tools, read or change the code, and call any function. Real owner-only access must be enforced on the **server**.

### Owner-only authentication integration points

1. **Gate the page.** Serve the panel only after a server-verified session with `role = owner` (or a named permission). Redirect everyone else to a login route. A client-side check alone is not a gate.
2. **Session.** Use secure, HTTP-only, same-site cookies or short-lived tokens, with MFA for owner and finance roles.
3. **Bootstrap in `js/app.js`.** Before the final `go('dash')` call, fetch the signed-in user and permissions from the API and fail closed on error.
4. **Profile block** in `index.html` (`.me`) should render the real user.
5. **Replace demo data and actions.** Swap the in-memory `D` object and handlers (`setRow`, claim, complaint, package and wallet handlers) with API calls. The server must re-check permission, validate input, and write the ledger.
6. **Step-up authentication** for payouts, refunds and manual wallet changes (re-auth or OTP), enforced server-side, with dual approval for large amounts.
7. **Audit logging** written by the server, append-only, with actor, IP, time and before/after values.

## Production requirements

- **Backend and API:** server-side business rules, RBAC, input validation, rate limiting, idempotency keys.
- **Database:** transactional store with an append-only double-entry token ledger; separate purchased and promotional balances; hold/release records per appointment; no direct balance edits.
- **Authentication:** owner/staff login with MFA, session management, password/credential policy, device and IP monitoring.
- **Payment gateway:** server-created orders, webhook signature verification, duplicate-callback protection, reconciliation jobs, refund API, gateway fee tracking.
- **Payouts:** verified bank accounts (KYC), real bank/payout API, settlement checks, dispute holds, tax (TDS/GST) handling.
- **Compliance and operations:** privacy and health-data protection, encryption, backups, monitoring, legal review of refund, penalty and payout policies, and testing before launch.
