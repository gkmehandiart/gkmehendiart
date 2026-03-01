# Deployment Guide - GK Mehendi Art Booking Platform

This guide reflects the current implementation:
- Frontend: Next.js app
- Backend: Express API
- Data/Auth: Supabase (Postgres + Auth)

## Recommended Stack

- Frontend: Vercel
- Backend: Railway or Render
- Database/Auth: Supabase

## Deployment Architecture

- Browser -> Frontend (Vercel)
- Frontend -> Backend API (`NEXT_PUBLIC_API_URL`)
- Frontend admin login -> Supabase Auth (anon key)
- Backend -> Supabase Postgres/Auth using service role key

## 1. Prepare Supabase (Production)

1. Create production Supabase project.
2. Run `backend/database/schema.sql` in SQL Editor.
3. Create admin Auth user in Supabase Authentication -> Users.
4. Insert matching row in `public.users`:

```sql
insert into public.users (username, email, password_hash, role)
values ('admin', 'admin@gkmehendi.com', 'managed-by-supabase-auth', 'admin')
on conflict (email) do update set role = excluded.role;
```

## 2. Deploy Backend

Deploy `backend` folder to Railway/Render.

Required backend environment variables:

```env
NODE_ENV=production
PORT=5000
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
FRONTEND_URL=https://your-domain.com,https://www.your-domain.com
WHATSAPP_PHONE=+919876543210
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
MAX_ADVANCE_BOOKING_DAYS=90
MIN_ADVANCE_HOURS=3
MIN_BRIDAL_ADVANCE_DAYS=2
BUFFER_MINUTES_BETWEEN_SLOTS=30
```

Backend validation:
- `GET https://api.your-domain.com/api/health` should return `success: true`.

## 3. Deploy Frontend

Deploy `frontend` folder to Vercel.

Required frontend environment variables:

```env
NEXT_PUBLIC_API_URL=https://api.your-domain.com
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_WHATSAPP_PHONE=+919876543210
NEXT_PUBLIC_APP_NAME=GK Mehendi Art
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 4. DNS and CORS

- Point frontend domain to Vercel.
- Point API subdomain (example `api.your-domain.com`) to backend host.
- Ensure backend `FRONTEND_URL` includes every frontend origin that should access the API.

## 5. Post-Deploy Validation

Customer:
- Homepage loads
- Booking flow works end-to-end
- Booking status lookup works

Admin:
- `/admin` login with Supabase Auth user
- Dashboard data loads
- Status updates, blocked dates, settings updates work

API:
- Health endpoint responds
- CORS allows only configured frontend origins

## 6. Security Checklist

- Never expose `SUPABASE_SERVICE_ROLE_KEY` to frontend
- Use separate Supabase projects for staging and production
- Restrict `FRONTEND_URL` to trusted domains only
- Rotate keys if compromised
- Keep dependencies updated and monitor logs

## 7. Known Deployment Caveats

- Current backend package references `scripts/createAdmin.js`, but file is missing. Admin must be provisioned through Supabase dashboard + SQL as shown above.
- Existing frontend lint issues should be resolved before enforcing strict CI quality gates.
- Automated tests are not yet configured in backend/frontend.

## Useful Commands

```bash
# backend
cd backend
npm install
npm start

# frontend
cd frontend
npm install
npm run build
npm start
```
