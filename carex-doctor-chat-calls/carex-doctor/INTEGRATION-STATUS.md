# CareX Doctor Dashboard — feature update scaffold

## What changed
- Preserved the existing multi-page HTML/CSS/JS project and its CareX teal theme.
- Added sidebar navigation and pages for Connect Patient, Messages, Audio/Video Calls, Token Earnings, Claim Tokens, and Payout Requests.
- Kept existing dashboard, appointments, patient, prescription, profile, availability, and settings pages.
- Added basic client-side form validation and explicit UI notes where live services are not configured.

## Critical integration status
This ZIP originally contained static HTML/CSS/JS only. It did not include a package manifest, API server, database migrations/schema, configured Supabase client initialization, realtime messaging service, or WebRTC signaling server. Therefore the added pages are **integration-ready UI scaffolding, not a live connected system**. They do not create fake balances, send pretend messages, create claims/payouts, or place calls.

## Required before production
1. Provide/configure the existing CareX backend and admin project (if separate), Supabase project/schema, and authentication initialization.
2. Implement server-side unique patient/doctor IDs and connection requests with patient consent and row-level authorization.
3. Implement message storage and realtime delivery; authorize every conversation against an accepted connection.
4. Implement WebRTC signaling or a managed calling service, plus call records and permissions.
5. Implement an append-only token ledger and database transactions/constraints for idempotent claims and payouts. Do not trust token amounts or conversion rates supplied by the browser.
6. Implement admin-only conversion-rate configuration, claim/payout approvals, and status changes.
7. Add tests for cross-user access, duplicate requests, balance races, payout state transitions, and role permissions.

## Security notes
- Never put service-role secrets in browser code.
- Patient details and payment destinations must be access-controlled and minimized.
- All balances, conversion math, claim eligibility, and payout transitions must be validated server-side.
