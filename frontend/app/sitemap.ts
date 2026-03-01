import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

    const lastUpdated = new Date('2026-02-24');

    return [
        { url: baseUrl, lastModified: lastUpdated, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: lastUpdated, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services`, lastModified: lastUpdated, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/gallery`, lastModified: lastUpdated, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/contact`, lastModified: lastUpdated, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/privacy`, lastModified: lastUpdated, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: lastUpdated, changeFrequency: 'yearly', priority: 0.3 },
    ];
}
