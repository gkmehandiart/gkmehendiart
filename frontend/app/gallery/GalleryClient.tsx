'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiX, FiMaximize2, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import type { ReactNode } from 'react';

type GalleryImage = {
    id: number;
    src: string;
    alt: string;
    caption: string;
};

type GalleryClientProps = {
    images: GalleryImage[];
};

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: 'easeOut' as const },
    viewport: { once: true },
});

function SectionLabel({ children }: { children: ReactNode }) {
    return (
        <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 text-gold text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-5"
        >
            <span className="w-8 h-px bg-gold/50" />
            {children}
            <span className="w-8 h-px bg-gold/50" />
        </motion.span>
    );
}

export default function GalleryClient({ images }: GalleryClientProps) {
    const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '916383927576';

    // Tie overflow lock, escape key, and focus trap to lightbox state
    useEffect(() => {
        if (lightboxImage) {
            document.body.style.overflow = 'hidden';
            const previouslyFocused = document.activeElement as HTMLElement | null;

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    setLightboxImage(null);
                    return;
                }
                // Focus trap: cycle focus within lightbox
                if (e.key === 'Tab') {
                    const dialog = document.querySelector('[role="dialog"]');
                    if (!dialog) return;
                    const focusable = dialog.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])');
                    if (focusable.length === 0) return;
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    } else if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            };

            document.addEventListener('keydown', handleKeyDown);

            // Auto-focus close button
            requestAnimationFrame(() => {
                const closeBtn = document.querySelector<HTMLElement>('[role="dialog"] button[aria-label="Close lightbox"]');
                closeBtn?.focus();
            });

            return () => {
                document.body.style.overflow = '';
                document.removeEventListener('keydown', handleKeyDown);
                previouslyFocused?.focus();
            };
        }
    }, [lightboxImage]);

    const openLightbox = useCallback((image: GalleryImage) => {
        setLightboxImage(image);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxImage(null);
    }, []);

    return (
        <div className="bg-[#1A0F0A] min-h-screen">
            <section
                className="relative pt-[89px] pb-24 bg-[#1A0F0A] overflow-hidden"
                aria-label="Gallery Header"
            >
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.035]"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern id="gallery-mandala" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="18" fill="none" stroke="#D4A017" strokeWidth="0.35" />
                                <circle cx="20" cy="20" r="12" fill="none" stroke="#D4A017" strokeWidth="0.35" />
                                <circle cx="20" cy="20" r="6" fill="none" stroke="#D4A017" strokeWidth="0.35" />
                                <line x1="20" y1="2" x2="20" y2="38" stroke="#D4A017" strokeWidth="0.2" />
                                <line x1="2" y1="20" x2="38" y2="20" stroke="#D4A017" strokeWidth="0.2" />
                                <line x1="7" y1="7" x2="33" y2="33" stroke="#D4A017" strokeWidth="0.2" />
                                <line x1="33" y1="7" x2="7" y2="33" stroke="#D4A017" strokeWidth="0.2" />
                            </pattern>
                        </defs>
                        <rect width="200" height="200" fill="url(#gallery-mandala)" />
                    </svg>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A] via-transparent to-[#1A0F0A] pointer-events-none" />
                <div className="absolute top-[89px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                    <motion.nav
                        {...fadeUp(0)}
                        aria-label="Breadcrumb"
                        className="flex items-center justify-center gap-2 text-[11px] text-cream/40 font-body tracking-wider uppercase mb-8"
                    >
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <FiChevronRight size={10} />
                        <span className="text-gold">Gallery</span>
                    </motion.nav>

                    <motion.div
                        {...fadeUp(0.06)}
                        className="text-3xl font-display text-gold/60 mb-3"
                        aria-hidden="true"
                    >
                        Our Portfolio
                    </motion.div>

                    <motion.h1
                        {...fadeUp(0.12)}
                        className="text-5xl md:text-7xl font-heading font-bold text-cream leading-tight mb-6"
                    >
                        A Gallery of{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#E8B820]">
                            Artistry
                        </span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp(0.18)}
                        className="text-cream/50 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
                    >
                        Each design is a one-of-a-kind story told in henna. Explore our full portfolio collection.
                    </motion.p>

                    <motion.div
                        {...fadeUp(0.24)}
                        className="flex items-center justify-center gap-10 text-center"
                    >
                        {[
                            { number: String(images.length), label: 'Portfolio Pieces' },
                            { number: 'All', label: 'Design Styles' },
                            { number: '2000+', label: 'Brides Adorned' },
                        ].map(({ number, label }) => (
                            <div key={label}>
                                <p className="text-2xl font-heading font-bold text-gold">{number}</p>
                                <p className="text-[10px] text-cream/35 font-body uppercase tracking-widest mt-0.5">{label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="bg-[#F9F3E8] py-20" aria-label="Gallery Collection">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        {...fadeUp(0)}
                        className="flex items-center justify-center mb-12"
                    >
                        <span className="text-[11px] text-dark/35 font-body uppercase tracking-[0.2em]">
                            Showing all {images.length} {images.length === 1 ? 'piece' : 'pieces'}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' as const }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {images.map((image, index) => (
                            <motion.figure
                                key={image.id}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.03, ease: 'easeOut' as const }}
                                className="relative group overflow-hidden rounded-2xl shadow-md border border-gold/10 cursor-pointer aspect-[4/5] m-0 bg-white"
                                onClick={() => openLightbox(image)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && openLightbox(image)}
                                aria-label={`View ${image.alt} in lightbox`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />

                                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-gold/25">
                                    <FiMaximize2 size={13} />
                                </div>


                            </motion.figure>
                        ))}
                    </motion.div>

                    {images.length === 0 && (
                        <p className="text-center text-dark/45 font-body text-sm mt-10">
                            No gallery images found in `frontend/public`.
                        </p>
                    )}
                </div>
            </section>

            <section className="bg-[#100806] py-16 border-t border-white/5" aria-label="Follow on Instagram">
                <div className="container mx-auto px-6 max-w-2xl text-center">
                    <motion.div {...fadeUp(0)} className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F09433] via-[#E6683C] to-[#DC2743] flex items-center justify-center shadow-lg shadow-red-700/20">
                            <FaInstagram className="text-white text-xl" />
                        </div>

                        <div>
                            <p className="text-cream/35 text-[10px] font-body uppercase tracking-[0.3em] mb-1">Follow Our Work</p>
                            <a
                                href="https://www.instagram.com/gk_mehendi_art_official"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-heading font-bold text-white hover:text-gold transition-colors"
                            >
                                @gk_mehendi_art_official
                            </a>
                        </div>

                        <p className="text-cream/30 font-body text-sm max-w-xs">
                            New designs posted daily. Follow us for fresh work and behind-the-scenes moments.
                        </p>

                        <a
                            href="https://www.instagram.com/gk_mehendi_art_official"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/12 text-cream/50 text-xs font-body font-semibold uppercase tracking-widest hover:border-gold/40 hover:text-gold transition-all duration-300 mt-1"
                        >
                            <FaInstagram size={12} />
                            Follow on Instagram
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="bg-[#1A0F0A] py-20 border-t border-white/5" aria-label="Book Appointment">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <SectionLabel>Ready to Book?</SectionLabel>

                    <motion.h2
                        {...fadeUp(0.06)}
                        className="text-3xl md:text-4xl font-heading font-bold text-cream mb-4"
                    >
                        Loved What You See?{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#E8B820]">
                            Let&apos;s Create Yours
                        </span>
                    </motion.h2>

                    <motion.p
                        {...fadeUp(0.12)}
                        className="text-cream/45 font-body text-base max-w-xl mx-auto mb-10"
                    >
                        Every design is custom-crafted for you. Book your mehendi session and let Kalai bring your vision to life with organic, chemical-free henna.
                    </motion.p>

                    <motion.div
                        {...fadeUp(0.18)}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                    >
                        <a
                            href={`https://wa.me/${phone}?text=Hi%20Kalai!%20I%20saw%20your%20gallery%20and%20would%20like%20to%20book%20a%20mehendi%20session.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="group relative flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase font-body text-dark overflow-hidden cursor-pointer shadow-xl shadow-gold/20"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-gold to-[#E8B820] group-hover:from-[#E8B820] group-hover:to-gold transition-all duration-[400ms]" />
                                <FaWhatsapp className="relative z-10 w-4 h-4" />
                                <span className="relative z-10">Book Now</span>
                                <FiArrowRight className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </motion.div>
                        </a>

                        <a
                            href={`https://wa.me/${phone}?text=Hi%20Kalai!%20I%20saw%20your%20gallery%20and%20would%20like%20to%20book%20a%20mehendi%20session.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm tracking-widest uppercase font-body text-white border border-white/15 hover:border-green-400/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                            >
                                <FaWhatsapp className="text-green-400 w-4 h-4" />
                                Chat on WhatsApp
                            </motion.div>
                        </a>
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md"
                        role="dialog"
                        aria-modal="true"
                        aria-label={lightboxImage.alt}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' as const }}
                            className="relative max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="relative aspect-[4/5] w-full">
                                <Image
                                    src={lightboxImage.src}
                                    alt={lightboxImage.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 512px) 100vw, 512px"
                                    priority
                                />
                            </div>



                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                                aria-label="Close lightbox"
                            >
                                <FiX size={16} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
