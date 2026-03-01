

import type { Metadata, Viewport } from 'next';
import { Great_Vibes, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';

// Main Headings - Decorative Script Font
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400'],
  display: 'swap',
});

// Sub-headings - Elegant Serif Font
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '600', '700'],
  display: 'swap',
});

// Body Text - Clean Sans-Serif Font
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

export const viewport: Viewport = {
  themeColor: '#1E4D3A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'GK Mehendi Art',
  title: {
    default: 'GK Mehendi Art | Best Bridal Mehendi Artist in Chennai | Organic Henna',
    template: '%s | GK Mehendi Art',
  },
  description:
    'Experience premium bridal mehendi artistry in Chennai with GK Mehendi Art. We use 100% organic, chemical-free henna for long-lasting, deep mahogany stains. Best mehendi designs for weddings, engagements, and baby showers across Chennai and Tamil Nadu.',
  keywords: [
    'bridal mehendi artist Chennai',
    'organic mehendi Chennai',
    'wedding henna artist Tamil Nadu',
    'chemical free mehendi',
    'traditional mehendi designs',
    'arabic mehendi Chennai',
    'GK Mehendi Art',
    'Kalai mehendi artist',
    'henna artist Chennai',
    'bridal henna designs',
    'natural henna Chennai',
  ],
  authors: [{ name: 'GK Mehendi Art', url: siteUrl }],
  creator: 'GK Mehendi Art',
  publisher: 'GK Mehendi Art',
  category: 'Beauty & Personal Care',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'GK Mehendi Art | Premium Organic Mehendi in Chennai',
    description:
      'Beautiful, organic, and intricate mehendi designs for your special day. Book the best bridal mehendi artist in Chennai.',
    type: 'website',
    url: siteUrl,
    siteName: 'GK Mehendi Art',
    locale: 'en_IN',
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'GK Mehendi Art — Premium Bridal Mehendi Artist in Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GK Mehendi Art | Premium Organic Mehendi in Chennai',
    description:
      'Beautiful, organic, and intricate mehendi designs for your special day. Book the best bridal mehendi artist in Chennai.',
    images: [`${siteUrl}/opengraph-image`],
  },
  appleWebApp: {
    capable: true,
    title: 'GK Mehendi Art',
    statusBarStyle: 'default',
  },
  icons: {
    icon: '/gkmehandi_logo.svg',
    shortcut: '/gkmehandi_logo.svg',
    apple: '/gkmehandi_logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${greatVibes.variable} ${playfair.variable} ${montserrat.variable}`}>
      <body className="font-body bg-cream text-dark overflow-x-hidden min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'BeautySalon', 'ProfessionalService'],
              name: 'GK Mehendi Art',
              description: 'Premium bridal mehendi artist in Chennai specializing in organic, chemical-free henna designs for weddings, engagements, and celebrations.',
              url: siteUrl,
              telephone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+916383927576',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chennai',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 13.0827,
                longitude: 80.2707,
              },
              priceRange: '₹₹',
              image: `${siteUrl}/opengraph-image`,
              logo: `${siteUrl}/gkmehandi_logo.svg`,
              sameAs: [],
              currenciesAccepted: 'INR',
              paymentAccepted: 'Cash, UPI, Bank Transfer',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '09:00',
                  closes: '21:00',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                bestRating: '5',
                worstRating: '1',
                reviewCount: '120',
              },
            }),
          }}
        />
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
