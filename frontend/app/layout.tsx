

import type { Metadata, Viewport } from 'next';
import { Great_Vibes, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';
import MotionProvider from '@/components/MotionProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
    default: 'GK Mehendi Art | Professional Bridal Mehendi Artist in Chennai, India',
    template: '%s | GK Mehendi Art',
  },
  description:
    'GK Mehendi Art offers professional bridal mehendi, wedding henna & Arabic mehendi designs in Chennai, India. 100% organic henna, 10+ years experience, 2000+ brides adorned. Book the best mehendi artist for your special day!',
  keywords: [
    'mehendi artist',
    'bridal mehendi artist',
    'professional mehendi artist',
    'wedding mehendi artist',
    'mehendi design services',
    'best mehendi artist near me',
    'bridal henna artist',
    'mehendi for wedding',
    'arabic mehendi artist',
    'mehendi artist India',
    'bridal mehendi artist Chennai',
    'organic mehendi Chennai',
    'wedding henna artist Tamil Nadu',
    'bridal mehendi designs',
    'engagement mehendi artist',
    'party mehendi services',
    'festival mehendi designs',
    'traditional mehendi artist',
    'custom mehendi designs',
    'book mehendi artist online',
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
    title: 'GK Mehendi Art | Professional Bridal Mehendi Artist in Chennai, India',
    description:
      'Professional bridal mehendi, wedding henna & Arabic mehendi designs in Chennai, India. Book the best mehendi artist for your special day!',
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
    title: 'GK Mehendi Art | Professional Bridal Mehendi Artist in Chennai, India',
    description:
      'Professional bridal mehendi, wedding henna & Arabic mehendi designs in Chennai, India. Book the best mehendi artist for your special day!',
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
              description: 'Professional bridal mehendi artist in Chennai offering stunning wedding henna, Arabic mehendi, and custom henna designs across India. 100% organic, chemical-free henna for weddings, engagements, and celebrations.',
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
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Mehendi Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bridal Mehendi' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Mehendi' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Arabic Mehendi' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engagement Mehendi' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Festival Mehendi' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Party Mehendi' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Mehendi Designs' } },
                ],
              },
              sameAs: [
                'https://www.instagram.com/gk_mehendi_art_official',
              ],
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
        <MotionProvider>
          <LayoutShell>
            {children}
          </LayoutShell>
        </MotionProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
