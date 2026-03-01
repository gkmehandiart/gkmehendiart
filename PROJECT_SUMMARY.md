# Project Summary - GK Mehendi Art Booking Platform

## Purpose

A full-stack booking platform for GK Mehendi Art that combines:
- Public marketing website
- Guided customer booking workflow
- Booking status tracking
- Admin operations dashboard

## Current Technical Architecture

### Frontend
- Framework: Next.js 16 (App Router)
- UI: React 19 + Tailwind CSS 4 + Framer Motion
- Auth client: Supabase JS (admin login sessions)
- State: Booking flow context (`contexts/BookingContext.tsx`)

### Backend
- Runtime: Node.js + Express
- API: REST under `/api/bookings` and `/api/admin`
- Security: Helmet, CORS allowlist, rate limiting
- Auth on admin endpoints: Bearer token validation through Supabase Auth

### Data Layer
- Database/Auth provider: Supabase
- SQL schema and RPCs: `backend/database/schema.sql`
- Important DB functions:
  - `create_booking`
  - `get_calendar_data`
  - `get_monthly_report`
  - `release_expired_pending_bookings`

## Functional Modules

### Customer-facing
- Home/About/Services/Gallery/Contact pages
- Booking flow:
  1. Service
  2. Date
  3. Time slot
  4. Client details
  5. Confirmation
- Booking status lookup by booking reference + phone number

### Admin-facing
- Login page (`/admin`) using Supabase Auth
- Dashboard widgets and recent activity
- Booking management (status updates, deletion)
- Availability settings and blocked dates management
- Monthly report endpoint and manual maintenance action

## Environment Model

### Backend (`backend/.env`)
Core keys:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `FRONTEND_URL`
- `PORT`, `NODE_ENV`

Optional behavior keys:
- `MAX_ADVANCE_BOOKING_DAYS`
- `MIN_ADVANCE_HOURS`
- `MIN_BRIDAL_ADVANCE_DAYS`
- `BUFFER_MINUTES_BETWEEN_SLOTS`
- `RATE_LIMIT_WINDOW_MS`
- `RATE_LIMIT_MAX_REQUESTS`

### Frontend (`frontend/.env.local`)
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_WHATSAPP_PHONE`
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`

## Operational Notes

- Admin user provisioning currently requires:
  - Supabase Auth user creation
  - Matching record in `public.users`
- Scheduled backend task runs every 10 minutes to release expired pending bookings.
- Static assets are mostly WebP; image helper scripts are in `frontend/scripts`.

## Quality and Risks Snapshot

See [CODEBASE_REVIEW.md](./CODEBASE_REVIEW.md) for prioritized findings and remediation recommendations.
