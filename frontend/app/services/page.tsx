import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

export const metadata: Metadata = {
    title: 'Mehendi Packages & Pricing in Chennai | GK Mehendi Art Services',
    description: 'Explore GK Mehendi Art\'s bridal mehendi packages in Chennai from ₹300. Premium organic henna for weddings, sangeet, engagement & festivals. 10+ years of expertise, 2,000+ happy brides. Book your date today!',
    keywords: [
        'bridal mehendi packages chennai',
        'mehendi price list chennai',
        'wedding henna packages tamil nadu',
        'sangeet mehendi artist chennai',
        'organic henna pricing chennai',
        'bridal henna cost chennai',
        'mehendi per hour rate chennai',
        'function mehendi package chennai',
        'affordable mehendi artist chennai',
        'premium henna service chennai',
        'arabic mehendi cost chennai',
        'mehendi booking chennai',
        'gk mehendi art packages',
        'doorstep mehendi service chennai',
        'best mehendi packages tamil nadu',
    ].join(', '),
    authors: [{ name: 'Kalai, GK Mehendi Art' }],
    creator: 'GK Mehendi Art',
    publisher: 'GK Mehendi Art',
    openGraph: {
        title: 'Mehendi Packages & Pricing Chennai | GK Mehendi Art',
        description: 'Premium bridal mehendi packages from ₹300. Organic henna, intricate designs, professional service. Book your wedding mehendi in Chennai today!',
        url: `${siteUrl}/services`,
        siteName: 'GK Mehendi Art',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mehendi Packages Chennai | Starting from ₹300 | GK Mehendi Art',
        description: 'Premium organic henna · Bridal, Function & Event packages · 10+ years experience · Book now in Chennai!',
    },
    alternates: {
        canonical: `${siteUrl}/services`,
    },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Bridal Mehendi Services',
    description: 'Professional bridal and event mehendi services in Chennai using 100% organic, chemical-free henna. Specializing in traditional South Indian, Arabic, and contemporary designs.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'GK Mehendi Art',
        url: siteUrl,
        telephone: '+916383927576',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Chennai',
            addressRegion: 'Tamil Nadu',
            addressCountry: 'IN',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '120',
        },
    },
    areaServed: {
        '@type': 'State',
        name: 'Tamil Nadu',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'GK Mehendi Art Services',
        itemListElement: [
            {
                '@type': 'Offer',
                name: 'Bridal Mehendi Package',
                description: 'Complete bridal henna experience with intricate full hand and feet designs.',
                price: '5000',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
            },
            {
                '@type': 'Offer',
                name: 'Function Mehendi Package',
                description: 'Professional mehendi for sangeet, engagement, and group celebrations.',
                price: '2000',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
            },
            {
                '@type': 'Offer',
                name: 'Normal Mehendi',
                description: 'Quick, beautiful mehendi designs for festivals and casual occasions.',
                price: '300',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
            },
        ],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How long does bridal mehendi take?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bridal mehendi typically takes 4–6 hours depending on the design complexity and coverage area. We ensure every detail is perfect!',
            },
        },
        {
            '@type': 'Question',
            name: 'How dark will the mehendi stain be?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'With our premium organic henna and proper aftercare, you can expect a rich, dark maroon to chocolate brown stain lasting 1–2 weeks.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is your cancellation policy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Cancellations made 7+ days before the event receive a full refund. Within 7 days, the advance is non-refundable but can be rescheduled once.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do you travel for bookings in Chennai?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! We provide services across Chennai and nearby areas. Outstation bookings are available with additional travel charges.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I request a specific mehendi design?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely! We encourage you to share reference images. For bridal packages, we offer a complimentary design consultation.',
            },
        },
    ],
};

export default function Services() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <ServicesClient />
        </>
    );
}
