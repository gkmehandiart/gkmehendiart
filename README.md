# GK Mehendi Art

Production website for **GK Mehendi Art** — a premium bridal mehendi studio in Chennai, India.

**Live:** [gkmehendiart.in](https://gkmehendiart.in)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Fonts | Google Fonts (Great Vibes, Playfair Display, Montserrat) |
| Deployment | Vercel (Edge Network) |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero slideshow, services preview, gallery preview, testimonials, FAQ |
| `/about` | About the artist — story, credentials, specializations |
| `/services` | Service packages with WhatsApp booking |
| `/gallery` | Full portfolio with lightbox viewer (39 images) |
| `/contact` | Contact form with direct WhatsApp enquiry |
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |

---

## Architecture

This project was developed as a Next.js 16 Static Website utilizing the App router to create high-performance static pages. 
The application interfaces directly with WhatsApp to allow users to make direct bookings rather than keeping state within a database.
This limits complexity, removes the operational overhead of managing a database, and gives a direct conduit between the clients and the studio.

---

## Features

- **WhatsApp Integration** — All booking buttons open WhatsApp with pre-filled messages
- **SEO Optimized** — JSON-LD schemas (LocalBusiness, FAQPage, Service, BreadcrumbList), Open Graph, Twitter Cards, XML sitemap, canonical URLs
- **Accessible** — WCAG 2.1 AA: skip navigation, focus traps, ARIA labels, keyboard nav, `prefers-reduced-motion` support
- **Performance** — Static generation (SSG), optimized images (WebP + next/image), font subsetting, `requestAnimationFrame` scroll throttling
- **Security** — CSP headers, HSTS, X-Frame-Options, `noopener`/`noreferrer` on external links, `poweredByHeader: false`
- **Mobile-First** — Responsive design targeting Indian mobile-heavy traffic

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create `.env.local` in the `frontend` directory:

```env
NEXT_PUBLIC_WHATSAPP_PHONE=916383927576
NEXT_PUBLIC_APP_URL=https://gkmehendiart.in
```

> `.env.local` is gitignored. Set these variables in Vercel dashboard for production.

---

## Scripts

```bash
# In the `frontend` directory
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Serve production build locally
npm run lint      # Run ESLint
```

---

## Project Structure

```
frontend/
  app/
    layout.tsx            # Root layout — fonts, metadata, JSON-LD, viewport
    page.tsx              # Home page (12 sections)
    about/                # About page
    services/             # Services & packages
    gallery/              # Gallery with lightbox
    contact/              # Contact with WhatsApp form
    privacy/              # Privacy policy
    terms/                # Terms and conditions
    sitemap.ts            # XML sitemap (7 routes)
    opengraph-image.tsx   # Auto-generated OG image (1200x630)
    error.tsx             # Error boundary
    not-found.tsx         # Custom 404

  components/
    LayoutShell.tsx       # Shell with skip nav, Navbar, Footer, WhatsApp button
    Navbar.tsx            # Fixed navbar with scroll progress bar
    Footer.tsx            # Footer with contact info, social links
    Hero.tsx              # Image carousel with auto-advance
    WhatsAppButton.tsx    # Floating WhatsApp CTA
    ui/
      SectionHeader.tsx   # Reusable section header component
      StarRating.tsx      # Star rating display

  lib/
    constants.ts          # Shared phone number, URLs, WhatsApp helper
    animations.ts         # Shared Framer Motion animation variants
    navigation.ts         # Navigation link definitions

  public/                 # Static assets
    *.webp                # Portfolio images, hero backgrounds, product images
    gkmehandi_logo.svg    # Brand logo
    kalai.webp            # Artist portrait
    robots.txt            # Robots directives
```

---

## Accessibility

- Skip navigation link for keyboard users
- `prefers-reduced-motion` CSS support
- Focus trap in gallery lightbox with focus restore
- ARIA labels on all interactive elements
- Form inputs with proper label associations
- Color contrast minimum 4.5:1 (WCAG AA)
- Semantic HTML landmarks (`main`, `nav`, `footer`)

---

## Deployment

Deployed on **Vercel** via GitHub integration. Every push to `main` triggers an automatic production redeploy.
See [DEPLOYMENT.md](./DEPLOYMENT.md) for more info.

---

## Business Hours

Mon–Sun: 9:00 AM – 9:00 PM IST

---

Built by [Siru AI Labs](https://siruailabs.com)
