'use client';

import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

const pageMessages: Record<string, string> = {
    '/': 'Hi! I visited your website and would like to know more about your mehendi services.',
    '/services': 'Hi! I am interested in your mehendi services. Can you share more details about pricing?',
    '/gallery': 'Hi! I loved the designs in your gallery. I would like to book a session.',
    '/contact': 'Hi! I have a question about your mehendi services.',
    '/about': 'Hi! I would like to learn more about GK Mehendi Art and book an appointment.',
};

export default function WhatsAppButton() {
    const pathname = usePathname();
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '916383927576';
    const message = encodeURIComponent(pageMessages[pathname] || pageMessages['/']);

    return (
        <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
}
