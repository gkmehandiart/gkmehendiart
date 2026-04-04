import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

const AboutPreview = dynamic(() => import('@/components/AboutPreview'));
const ServicesPreview = dynamic(() => import('@/components/ServicesPreview'));
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const Process = dynamic(() => import('@/components/Process'));
const GalleryPreview = dynamic(() => import('@/components/GalleryPreview'));
const InstagramFeed = dynamic(() => import('@/components/InstagramFeed'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const CTA = dynamic(() => import('@/components/CTA'));

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

export const metadata: Metadata = {
  title: 'GK Mehendi Art | Professional Bridal Mehendi Artist in Chennai, India',
  description:
    "GK Mehendi Art offers professional bridal mehendi, wedding henna & Arabic mehendi designs in Chennai, India. 10+ years experience, 2000+ brides adorned with 100% organic henna. Book the best mehendi artist for your special day!",
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
    'best mehendi artist Chennai',
    'organic henna Chennai',
    'wedding mehendi Chennai',
    'engagement mehendi artist',
    'party mehendi services',
    'festival mehendi designs',
    'traditional mehendi artist',
    'custom mehendi designs',
    'book mehendi artist online',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'GK Mehendi Art | Professional Bridal Mehendi Artist in Chennai, India',
    description:
      "Professional bridal mehendi, wedding henna & Arabic mehendi designs in Chennai, India. 10+ years experience, 2000+ brides. Book the best mehendi artist today!",
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
      "Professional bridal mehendi artist in Chennai, India. 100% organic henna for weddings, engagements & celebrations. Book now!",
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
      name: 'How far in advance should I book a bridal mehendi artist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking your bridal mehendi artist at least 2\u20134 weeks before your wedding date, especially during peak wedding season. Early booking ensures availability and gives us time to discuss your preferred designs and personalization. Contact GK Mehendi Art today to reserve your date.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of henna does GK Mehendi Art use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use 100% natural, chemical-free henna paste made from premium-quality henna powder. Our natural henna is safe for all skin types and produces a rich, deep maroon-to-brown stain that lasts 1\u20133 weeks depending on aftercare.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does bridal mehendi take to apply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full bridal mehendi session \u2014 covering both hands (front and back) and feet \u2014 typically takes 3\u20135 hours depending on the complexity and level of detail. We recommend scheduling your bridal mehendi the evening before or the morning of your wedding for the best colour results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you travel for destination weddings and events outside your city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! GK Mehendi Art is available for destination weddings and events across India. Travel arrangements and any additional charges will be discussed during the booking process. We love being part of celebrations in beautiful locations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I request a custom mehendi design for my wedding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! Custom designs are our specialty. We work closely with every bride to incorporate personal elements \u2014 initials, portraits, love stories, religious symbols, or specific motifs \u2014 into the mehendi. Share your ideas and inspiration, and we will create a one-of-a-kind design just for you.',
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
    "Professional bridal mehendi artist in Chennai offering stunning wedding henna, Arabic mehendi, and custom designs across India.",
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
            'Full bridal mehendi package with elaborate, full-hand and full-feet designs featuring traditional motifs, personalized elements, and intricate detailing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wedding Mehendi',
          description:
            'Professional wedding mehendi services for the entire wedding party \u2014 from the bride\u2019s family to bridesmaids and guests at sangeet, haldi, and reception.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Arabic Mehendi',
          description:
            'Bold, flowing Arabic mehendi designs featuring striking floral trails, leaf motifs, and geometric patterns for engagements, receptions, and parties.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Engagement Mehendi',
          description:
            'Elegant mehendi designs for engagement ceremonies, tailored to match the occasion and your personal style.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Festival & Party Mehendi',
          description:
            'Quick and beautiful mehendi designs for festivals, baby showers, corporate events, and celebrations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Mehendi Designs',
          description:
            'Personalized mehendi designs incorporating initials, portraits, love stories, and specific motifs \u2014 crafted uniquely for you.',
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
