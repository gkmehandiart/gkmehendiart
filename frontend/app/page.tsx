
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import ServicesPreview from '@/components/ServicesPreview';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import GalleryPreview from '@/components/GalleryPreview';
import InstagramFeed from '@/components/InstagramFeed';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

export const metadata: Metadata = {
  title: 'GK Mehendi Art | Best Bridal Mehendi Artist in Chennai | Organic Henna',
  description:
    "GK Mehendi Art — Chennai's #1 bridal mehendi artist. Over 10 years of experience, 2000+ brides adorned using 100% organic, chemical-free henna. Specialising in bridal, engagement, baby shower & festive mehendi designs across Chennai and Tamil Nadu. Book your appointment today.",
  keywords: [
    'bridal mehendi artist Chennai',
    'best mehendi artist Chennai',
    'organic henna Chennai',
    'wedding mehendi Chennai',
    'bridal henna Tamil Nadu',
    'chemical free mehendi Chennai',
    'arabic mehendi Chennai',
    'traditional mehendi designs',
    'GK Mehendi Art',
    'Kalai mehendi artist',
    'engagement mehendi Chennai',
    'baby shower mehendi',
    'festival mehendi designs',
    'mehendi booking Chennai',
    'henna artist near me Chennai',
    'mehendi for wedding Tamil Nadu',
    'professional henna artist Chennai',
    'organic henna designs',
    'bridal henna artist near me',
    'natural mehendi Chennai',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'GK Mehendi Art | Best Bridal Mehendi Artist in Chennai',
    description:
      "Chennai's #1 bridal mehendi artist — 10+ years experience, 2000+ brides adorned with 100% organic, chemical-free henna. Book your bridal, engagement or festive mehendi today!",
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
    title: 'GK Mehendi Art | Best Bridal Mehendi Artist in Chennai',
    description:
      "Chennai's #1 bridal mehendi artist. 100% organic henna for weddings, engagements & celebrations. Book now!",
    images: [`${siteUrl}/opengraph-image`],
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
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is your mehendi safe for sensitive skin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We use 100% organic henna made from premium Sojat leaves, mixed with essential oils like Eucalyptus and Tea Tree. No PPD, no chemicals, and no artificial colors — completely safe for all skin types.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before my wedding should I get mehendi applied?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the best stain result, we recommend applying mehendi 48 hours (2 days) before your main ceremony. This allows the stain to develop from orange to its deep mahogany peak, perfectly timed for your big day.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a bridal mehendi session take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depending on the complexity and coverage (elbow vs. full arm), a bridal session typically takes between 4 to 7 hours. We recommend a comfortable seating arrangement and light snacks during this time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you travel to other cities for bookings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We primarily serve Chennai and surrounding areas. However, for exclusive bridal bookings, we do travel to other cities in Tamil Nadu. Travel and accommodation charges apply — please contact us to discuss.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long will the mehendi stain last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With proper aftercare, an organic henna stain lasts between 7 to 10 days, gradually fading as your skin naturally exfoliates. We provide detailed aftercare instructions to maximize your stain.',
      },
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GK Mehendi Art',
  url: siteUrl,
  description:
    "Chennai's best bridal mehendi artist offering organic, chemical-free henna designs for weddings, engagements, and celebrations.",
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mehendi / Henna Art',
  provider: {
    '@type': 'LocalBusiness',
    name: 'GK Mehendi Art',
    url: siteUrl,
  },
  areaServed: {
    '@type': 'State',
    name: 'Tamil Nadu',
    containedInPlace: {
      '@type': 'Country',
      name: 'India',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mehendi Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bridal Mehendi',
          description:
            'Full bridal mehendi package including both hands up to elbow or full arm, with traditional and contemporary designs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Engagement Mehendi',
          description:
            'Elegant mehendi designs for engagement ceremonies, tailored to match the occasion.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Festive & Event Mehendi',
          description:
            'Quick and beautiful mehendi designs for festivals, baby showers, corporate events, and parties.',
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="overflow-hidden">
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <WhyChooseUs />
        <Process />
        <GalleryPreview />
        <InstagramFeed />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}
