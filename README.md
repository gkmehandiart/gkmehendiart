# GK Mehendi Art Booking Platform

Production-style booking platform for GK Mehendi Art with a marketing website, 5-step customer booking flow, booking status tracking, and an authenticated admin dashboard.

## Current Architecture

- Frontend: Next.js 16 (App Router), React 19, Tailwind CSS 4, Framer Motion
- Backend: Express 4 REST API
- Data and auth: Supabase Postgres + Supabase Auth
- Admin authentication flow:
  - Frontend signs in with Supabase Auth (`signInWithPassword`)
  - Frontend sends Supabase access token as `Authorization: Bearer ...`
  - Backend verifies token using Supabase and authorizes admin routes

## Repository Structure

```text
Mehandi Website/
  backend/
    config/
    database/
      schema.sql
    middleware/
    routes/
      bookings.js
      admin.js
    server.js
  frontend/
    app/
    components/
    contexts/
    hooks/
    lib/
    public/
  README.md
  QUICKSTART.md
  DEPLOYMENT.md
  PROJECT_SUMMARY.md
```

## Product Features

- Marketing pages: Home, About, Services, Gallery, Contact
- Booking flow:
  1. Service selection
  2. Date selection
  3. Time slot selection
  4. Client details
  5. Confirmation
- Secure booking tracking page (`/booking/status`) using booking reference + phone number
- Admin dashboard for:
  - Dashboard stats
  - Booking management and status updates
  - Availability settings
  - Blocked dates
  - Monthly report endpoint

## API Overview

Base URL (local): `http://localhost:5000`

Public routes:
- `GET /api/health`
- `GET /api/bookings/services`
- `GET /api/bookings/availability/:date`
- `GET /api/bookings/calendar/:year/:month`
- `POST /api/bookings/bookings`
- `GET /api/bookings/bookings/:id`
- `POST /api/bookings/status/lookup`

Admin routes (require Supabase Bearer token):
- `GET /api/admin/dashboard/stats`
- `GET /api/admin/bookings`
- `PATCH /api/admin/bookings/:id/status`
- `PATCH /api/admin/bookings/:id/notes`
- `DELETE /api/admin/bookings/:id`
- `DELETE /api/admin/bookings?confirm=true[&status=...]`
- `GET /api/admin/availability-settings`
- `PUT /api/admin/availability-settings/:day`
- `GET /api/admin/blocked-dates`
- `POST /api/admin/blocked-dates`
- `DELETE /api/admin/blocked-dates/:date`
- `GET /api/admin/reports/monthly/:year/:month`
- `POST /api/admin/maintenance/release-expired`

## Environment Variables

Backend (`backend/.env`):

Required:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Common:
- `PORT` (default `5000`)
- `NODE_ENV` (`development` or `production`)
- `FRONTEND_URL` (comma-separated allowed origins)
- `WHATSAPP_PHONE`
- `RATE_LIMIT_WINDOW_MS`
- `RATE_LIMIT_MAX_REQUESTS`
- `MAX_ADVANCE_BOOKING_DAYS`
- `MIN_ADVANCE_HOURS`
- `MIN_BRIDAL_ADVANCE_DAYS`
- `BUFFER_MINUTES_BETWEEN_SLOTS`

Frontend (`frontend/.env.local`):
- `NEXT_PUBLIC_API_URL` (example: `http://localhost:5000`)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_WHATSAPP_PHONE`
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`

## Local Development

Use the full guide in [QUICKSTART.md](./QUICKSTART.md).

Quick commands:

```bash
# backend
cd backend
npm install
npm run dev

# frontend (new terminal)
cd frontend
npm install
npm run dev
```

- Frontend runs at `http://localhost:3000`
- Backend runs at `http://localhost:5000`

## Scripts

Backend (`backend/package.json`):
- `npm run dev` - start API with nodemon
- `npm start` - start API
- `npm run db:setup` - reminder for schema setup in Supabase SQL editor

Frontend (`frontend/package.json`):
- `npm run dev` - start Next.js dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - ESLint check
- `npm run convert:images` - convert selected assets to WebP
- `npm run cleanup:images` - remove old image assets

## Documentation Index

- [Quick Start](./QUICKSTART.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Project Summary](./PROJECT_SUMMARY.md)
- [Codebase Review](./CODEBASE_REVIEW.md)

## Current Known Gaps

- `backend/package.json` references `scripts/createAdmin.js`, but that file is currently missing.
- Lint and type-quality checks currently fail in several frontend files.
- No automated test suite is currently configured.

See [CODEBASE_REVIEW.md](./CODEBASE_REVIEW.md) for prioritized details.
