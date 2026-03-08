# Deployment Guide - GK Mehendi Art Booking Platform

This guide reflects the current static web implementation:
- **Frontend Framework**: Next.js 16 (App Router)
- **Deployment Platform**: Vercel
- **Domain Mapping**: `gkmehendiart.in`

## Overview

Unlike legacy implementations requiring a fully qualified backend environment, this iteration of GK Mehendi Art utilizes a highly scalable static architecture targeting Vercel deployments. It offloads standard administrative constraints by adopting a direct WhatsApp booking workflow instead.

## 1. Prepare Environment Variables

You need to establish your Vercel instance variables prior to deploying the final codebase. 

Navigate to your Vercel Project Settings > Environment Variables:

```env
NEXT_PUBLIC_WHATSAPP_PHONE=916383927576
NEXT_PUBLIC_APP_URL=https://gkmehendiart.in
```

*Make sure `NEXT_PUBLIC_APP_URL` uses the exact domain users will be accessing (e.g., `.in` over `.com` to properly match generated XML sitemap and API limits)*.

## 2. Deploy Next.js Frontend (Vercel)

### Option 1: Vercel CLI (For CI/CD or Terminal Setup)
```bash
npm i -g vercel
cd frontend
vercel
vercel --prod
```

### Option 2: Automatic GitHub Deployment (Preferred)
1. Commit the `frontend` folder into your GitHub repository securely.
2. Link the repository to your Vercel account.
3. Keep the Root Directory config to `frontend` so Vercel can find the Next.js `package.json`.
4. Deploy on each commit made on the master/main branch automatically.

## 3. DNS Configuration

Your Vercel deployment will offer you a default `.vercel.app` domain. You must configure your production DNS settings to route `gkmehendiart.in` traffic directly into Vercel's endpoints. 

Update your Domain Registrar (e.g. GoDaddy/Namecheap):
1. Create an `A Record` for `@` pointing to Vercel's Anycast IP (`76.76.21.21`).
2. Create a `CNAME Record` for `www` pointing to `cname.vercel-dns.com.`.

Vercel will manage SSL encryptions internally. Wait up to 48 hours for TTL DNS propagation if you are migrating domains. 

## 4. Post-Deploy Validation

Customer validations when the website is live over the network:
- [ ] Homepage loads properly with `<title>` referencing the new SEO schemas.
- [ ] The Hero carousels execute Framer Motion animations without latency.
- [ ] Clicking to "Book Service" correctly triggers a `https://wa.me/` referral link matching `NEXT_PUBLIC_WHATSAPP_PHONE`.
- [ ] Direct SEO paths `gkmehendiart.in/sitemap.xml` and `gkmehendiart.in/robots.txt` show matching properties with `gkmehendiart.in`.
- [ ] Google PageSpeed insights are solid.

## 5. Analytics (Optional)

Include a `<Script>` tag appending tracking properties within `./frontend/app/layout.tsx` for deeper visitor diagnostics, or utilize Vercel Web Analytics through your Vercel project's settings tab.

## Summary 

All prior infrastructure files such as `backend/` have been unlinked. To restore any Express API flows, revert the code history from git and utilize Railway hosting pipelines as outlined in previously saved documentation models.
