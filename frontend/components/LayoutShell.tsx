'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith('/admin');

    if (isAdmin) {
        // Admin pages get a clean shell — no Navbar, Footer, or WhatsApp
        return <>{children}</>;
    }

    return (
        <>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-dark focus:rounded-lg focus:font-body focus:font-bold focus:text-sm">
                Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-grow">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
