export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '916383927576';
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

export const whatsappUrl = (message?: string) =>
    `https://wa.me/${WHATSAPP_PHONE}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const HERO_SLIDESHOW_INTERVAL = 6000;
