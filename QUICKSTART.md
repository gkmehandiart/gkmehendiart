# Quick Start - GK Mehendi Art Booking Platform

This guide matches the current codebase implementation (Express API + Supabase).

## Prerequisites

- Node.js 18+
- npm
- A Supabase project (free tier is fine)

## 1. Create and Configure Supabase

1. Create a Supabase project.
2. Open SQL Editor.
3. Run `backend/database/schema.sql`.
4. Collect these values from Supabase settings:
   - Project URL
   - Anon key
   - Service role key

## 2. Create Admin Auth User (Supabase)

The admin UI logs in via Supabase Auth, so you must create an Auth user first.

1. In Supabase Dashboard: Authentication -> Users.
2. Create user with email/password (example: `admin@gkmehendi.com`).

## 3. Create Matching Admin Row in `users` Table

Backend admin middleware expects a row in `public.users` matching the Auth user email.

Run in Supabase SQL Editor:

```sql
insert into public.users (username, email, password_hash, role)
values ('admin', 'admin@gkmehendi.com', 'managed-by-supabase-auth', 'admin')
on conflict (email) do update set role = excluded.role;
```

Important:
- Email must match the Supabase Auth user email.
- `password_hash` is required by table schema, but Supabase Auth manages actual login password.

## 4. Backend Setup

```bash
cd backend
npm install
copy .env.example .env
```

Update `backend/.env`:

```env
PORT=5000
NODE_ENV=development
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
FRONTEND_URL=http://localhost:3000
WHATSAPP_PHONE=+919876543210
```

Start backend:

```bash
npm run dev
```

API health check:
- `http://localhost:5000/api/health`

## 5. Frontend Setup

```bash
cd frontend
npm install
copy .env.local.example .env.local
```

Update `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_WHATSAPP_PHONE=+919876543210
NEXT_PUBLIC_APP_NAME=GK Mehendi Art
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Start frontend:

```bash
npm run dev
```

App URL:
- `http://localhost:3000`

## 6. Smoke Test Checklist

Customer flow:
- Open `/booking`
- Select service, date, time, and submit details
- Verify booking confirmation + WhatsApp link
- Open `/booking/status` and look up with booking ref + phone

Admin flow:
- Open `/admin`
- Sign in using the Supabase Auth user created earlier
- Verify dashboard loads
- Confirm/cancel a booking

## Notes

- `backend` currently has a `setup:admin` script entry, but the referenced file is missing (`scripts/createAdmin.js`). Use Supabase dashboard + SQL steps above instead.
- `backend/package.json` currently has no automated test suite.
- `frontend` lint currently reports existing errors/warnings in source files.

## Useful Commands

```bash
# frontend lint
cd frontend
npm run lint

# frontend production build
npm run build

# backend run (prod mode)
cd ../backend
npm start
```
