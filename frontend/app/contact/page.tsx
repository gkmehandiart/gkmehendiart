import type { Metadata } from 'next';
import ContactClient from './ContactClient';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

export const metadata: Metadata = {
    title: 'Book Your Mehendi Artist — Contact GK Mehendi Art Today',
    description: "Book your bridal mehendi session with GK Mehendi Art in Chennai. Reach us by phone or WhatsApp. Available 7 days a week, 9 AM\u20139 PM. Doorstep service across Chennai, Tamil Nadu & India.",
    keywords: [
        'contact mehendi artist chennai',
        'book bridal mehendi chennai',
        'whatsapp mehendi booking',
        'mehendi artist contact chennai',
        'kalai gk mehendi art contact',
        'henna booking chennai',
        'bridal henna appointment chennai',
        'doorstep mehendi service chennai',
        'mehendi artist phone number chennai',
        'book mehendi for wedding chennai',
        'henna artist near me chennai',
        'mehendi consultation chennai',
        'organic mehendi booking tamil nadu',
    ].join(', '),
    authors: [{ name: 'Kalai, GK Mehendi Art' }],
    creator: 'GK Mehendi Art',
    publisher: 'GK Mehendi Art',
    openGraph: {
        title: 'Book Your Mehendi Artist — Contact GK Mehendi Art Today',
        description: 'Book bridal, Arabic & traditional henna with GK Mehendi Art. Available 7 days a week. Doorstep service across Chennai & India.',
        url: `${siteUrl}/contact`,
        siteName: 'GK Mehendi Art',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact GK Mehendi Art | Book Bridal Mehendi in Chennai',
        description: 'Reach Kalai for bridal, Arabic & traditional mehendi bookings. 7 days a week · Doorstep service · Chennai & Tamil Nadu.',
    },
    alternates: {
        canonical: `${siteUrl}/contact`,
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GK Mehendi Art',
    description: 'Professional bridal mehendi artist in Chennai specialising in organic henna for weddings, receptions, and special occasions. Serving Chennai and Tamil Nadu since 2014.',
    url: siteUrl,
    telephone: '+916383927576',
    image: `${siteUrl}/opengraph-image`,
    priceRange: '₹₹',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '13.0827',
        longitude: '80.2707',
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 'Saturday', 'Sunday',
            ],
            opens: '09:00',
            closes: '21:00',
        },
    ],
    sameAs: [
        'https://www.instagram.com/gk_mehendi_art_official',
    ],
    founder: {
        '@type': 'Person',
        name: 'Kalai',
        jobTitle: 'Bridal Mehendi Artist',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How long will the mehendi colour last?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'With proper aftercare, an organic henna stain lasts 7–15 days depending on skin type and care routine. GK Mehendi Art provides detailed aftercare instructions with every session.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is GK Mehendi Art henna chemical-free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. GK Mehendi Art uses 100% handmade, organic, chemical-free henna paste made from premium Sojat leaves and natural essential oils. No PPD, no artificial colours — safe for all skin types.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does GK Mehendi Art offer home and venue service?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Full doorstep service is available across Chennai. For outstation bookings within Tamil Nadu, travel and accommodation charges apply. Contact us to discuss your requirements.',
            },
        },
        {
            '@type': 'Question',
            name: 'How early should I book bridal mehendi in Chennai?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We recommend booking at least 4–6 weeks in advance, especially during peak wedding season (October–March). Bridal slots fill up quickly, so earlier booking is always advised.',
            },
        },
    ],
};

export default function Contact() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <ContactClient />
        </>
    );
}
