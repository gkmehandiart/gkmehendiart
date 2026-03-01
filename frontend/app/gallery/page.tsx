import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

type GalleryImage = {
    id: number;
    src: string;
    alt: string;
    caption: string;
};

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

const legacyGalleryImages: Omit<GalleryImage, 'id'>[] = [
    {
        src: '/bridal-mehendi-masterpiece.webp',
        alt: 'Bridal Mehendi Masterpiece',
        caption: 'Full bridal coverage with traditional motifs',
    },
    {
        src: '/intricate-bridal-pattern.webp',
        alt: 'Intricate Bridal Pattern',
        caption: 'Detailed finger and wrist work',
    },
    {
        src: '/traditional-henna-art.webp',
        alt: 'Traditional Henna Art',
        caption: 'South Indian traditional patterns',
    },
    {
        src: '/elegant-arabic-design.webp',
        alt: 'Elegant Arabic Design',
        caption: 'Modern Arabic florals with shading',
    },
    {
        src: '/arabic-geometric-pattern.webp',
        alt: 'Arabic Geometric Pattern',
        caption: 'Geometric Arabic with negative space',
    },
    {
        src: '/bridal-hand-adornment.webp',
        alt: 'Bridal Hand Adornment',
        caption: 'Elbow-length bridal coverage',
    },
    {
        src: '/traditional-rajasthani-motifs.webp',
        alt: 'Traditional Rajasthani Motifs',
        caption: 'Classic Rajasthani paisley patterns',
    },
    {
        src: '/function-occasion-mehendi.webp',
        alt: 'Function Occasion Mehendi',
        caption: 'Elegant function-wear design',
    },
    {
        src: '/bridal-portfolio-piece.webp',
        alt: 'Bridal Portfolio Piece',
        caption: 'Intricate palm and back hand design',
    },
    {
        src: '/occasion-henna-design.webp',
        alt: 'Occasion Henna Design',
        caption: 'Simple yet striking occasion mehendi',
    },
];

function toTitle(filename: string): string {
    const base = filename.replace(/\.[^/.]+$/, '');
    return base
        .split('-')
        .filter(Boolean)
        .map(part => (/^\d+$/.test(part) ? part : `${part.charAt(0).toUpperCase()}${part.slice(1)}`))
        .join(' ');
}

function getGalleryImages(): GalleryImage[] {
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
        return legacyGalleryImages.map((image, index) => ({ id: index + 1, ...image }));
    }

    const files = fs.readdirSync(publicDir);
    const fileSet = new Set(files);

    const legacyImages = legacyGalleryImages
        .filter(image => fileSet.has(image.src.replace('/', '')))
        .map((image, index) => ({ id: index + 1, ...image }));

    const numberedFiles = files
        .filter(file => /^mehandi-design-gallery-\d{3}\.webp$/i.test(file))
        .sort((a, b) => {
            const aNum = Number((a.match(/(\d{3})\.webp$/i) || [])[1] || 0);
            const bNum = Number((b.match(/(\d{3})\.webp$/i) || [])[1] || 0);
            return aNum - bNum;
        });

    const numberedImages: GalleryImage[] = numberedFiles.map((file, index) => ({
        id: legacyImages.length + index + 1,
        src: `/${file}`,
        alt: toTitle(file),
        caption: 'Organic mehendi design from our latest portfolio',
    }));

    return [...legacyImages, ...numberedImages];
}

const galleryImages = getGalleryImages();

export const metadata: Metadata = {
    title: 'Mehendi Design Gallery | Bridal, Arabic & Traditional Henna | GK Mehendi Art Chennai',
    description: "Explore GK Mehendi Art's portfolio of bridal, Arabic, and traditional henna designs by Kalai in Chennai. Stunning organic mehendi work for weddings, receptions, and special occasions across Tamil Nadu.",
    keywords: [
        'bridal mehendi gallery chennai',
        'henna design portfolio',
        'arabic mehendi designs',
        'traditional mehendi art',
        'bridal henna photos',
        'mehendi artist portfolio chennai',
        'best mehendi designs chennai',
        'organic henna art gallery',
        'rajasthani mehendi gallery',
        'south indian bridal henna',
        'mehendi design ideas',
        'kalai gk mehendi art portfolio',
        'intricate henna designs',
        'mehendi work photos',
        'bridal henna inspiration chennai',
    ].join(', '),
    authors: [{ name: 'Kalai, GK Mehendi Art' }],
    creator: 'GK Mehendi Art',
    publisher: 'GK Mehendi Art',
    openGraph: {
        title: 'Mehendi Design Gallery | GK Mehendi Art Chennai',
        description: 'Browse our stunning mehendi design portfolio. 2,000+ brides adorned. 100% organic mehendi by Kalai in Chennai.',
        url: `${siteUrl}/gallery`,
        siteName: 'GK Mehendi Art',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mehendi Design Gallery | GK Mehendi Art Chennai',
        description: 'Mehendi portfolio by Kalai in Chennai. 2,000+ brides adorned. 100% organic henna.',
    },
    alternates: {
        canonical: `${siteUrl}/gallery`,
    },
};

const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GK Mehendi Art Gallery - Mehendi Designs Portfolio',
    description: 'Portfolio of mehendi designs by Kalai of GK Mehendi Art, Chennai.',
    url: `${siteUrl}/gallery`,
    image: `${siteUrl}/opengraph-image`,
    author: {
        '@type': 'Person',
        name: 'Kalai',
        jobTitle: 'Bridal Mehendi Artist',
        worksFor: {
            '@type': 'LocalBusiness',
            name: 'GK Mehendi Art',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chennai',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
            },
        },
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${siteUrl}/gallery` },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What mehendi styles does GK Mehendi Art offer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'GK Mehendi Art creates custom mehendi designs for weddings and special occasions. Each design is handcrafted for the individual client.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I request a custom mehendi design inspired by your gallery?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely. You can share any design inspiration from our gallery or elsewhere, and Kalai will create a custom design tailored to your preferences, occasion, and skin tone.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I book a mehendi session after viewing the gallery?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Visit our contact page or WhatsApp us directly. Share your preferred date and event details, and we will confirm your appointment promptly.',
            },
        },
    ],
};

export default function Gallery() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <GalleryClient images={galleryImages} />
        </>
    );
}
