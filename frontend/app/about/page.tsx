import type { Metadata } from 'next';
import AboutClient from './AboutClient';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

export const metadata: Metadata = {
    title: 'About Kalai | Best Bridal Mehendi Artist in Chennai | GK Mehendi Art',
    description: "Meet Kalai — Chennai's most trusted bridal mehendi artist with 10+ years of experience and 2,000+ brides adorned. Expert in traditional, Arabic & contemporary henna using 100% organic, chemical-free ingredients. Serving weddings across Tamil Nadu.",
    keywords: [
        'best bridal mehendi artist chennai',
        'kalai gk mehendi art',
        'professional henna artist chennai',
        'organic henna artist chennai',
        'bridal henna specialist tamil nadu',
        'traditional mehendi designs chennai',
        'arabic mehendi artist chennai',
        'wedding mehendi artist chennai',
        'south indian bridal mehendi',
        'mehendi artist near me chennai',
        'chemical free mehendi chennai',
        'rajasthani mehendi chennai',
        'gk mehendi art kalai',
        'doorstep mehendi service chennai',
        'best mehendi artist tamil nadu',
    ].join(', '),
    authors: [{ name: 'Kalai, GK Mehendi Art' }],
    creator: 'GK Mehendi Art',
    publisher: 'GK Mehendi Art',
    openGraph: {
        title: 'About Kalai | Best Bridal Mehendi Artist in Chennai | GK Mehendi Art',
        description: "Discover the story of Kalai — Chennai's most trusted bridal mehendi artist. 10+ years experience, 2,000+ happy brides, 100% organic henna. Book your appointment today.",
        url: `${siteUrl}/about`,
        siteName: 'GK Mehendi Art',
        locale: 'en_IN',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Kalai | Best Bridal Mehendi Artist in Chennai',
        description: '10+ years · 2,000+ brides adorned · 100% organic henna · Traditional, Arabic & bridal designs in Chennai',
    },
    alternates: {
        canonical: `${siteUrl}/about`,
    },
};

const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kalai',
    jobTitle: 'Bridal Mehendi Artist',
    description: 'Professional bridal mehendi artist in Chennai with 10+ years of experience specializing in organic henna designs for weddings, engagements, and celebrations.',
    url: `${siteUrl}/about`,
    image: `${siteUrl}/opengraph-image`,
    worksFor: {
        '@type': 'LocalBusiness',
        name: 'GK Mehendi Art',
        url: siteUrl,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Chennai',
            addressRegion: 'Tamil Nadu',
            addressCountry: 'IN',
        },
    },
    knowsAbout: [
        'Bridal Mehendi',
        'Arabic Henna Designs',
        'Traditional South Indian Mehendi',
        'Rajasthani Henna',
        'Organic Henna Application',
        'Figurative Bridal Patterns',
    ],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${siteUrl}/about` },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Who is Kalai from GK Mehendi Art?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Kalai is Chennai's premier bridal mehendi artist with 10+ years of experience, specializing in traditional South Indian, Arabic, and contemporary henna designs using 100% organic, chemical-free henna.",
            },
        },
        {
            '@type': 'Question',
            name: 'How many brides has GK Mehendi Art served in Chennai?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'GK Mehendi Art has adorned over 2,000 brides across Chennai and Tamil Nadu since 2014.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does Kalai use organic henna?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. GK Mehendi Art exclusively uses 100% organic, chemical-free henna sourced from trusted suppliers. No PPD, no artificial colours — completely safe for all skin types.',
            },
        },
    ],
};

export default function About() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <AboutClient />
        </>
    );
}
