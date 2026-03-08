
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import StarRating from './ui/StarRating';

// Stable module-level constant — not re-created on each render
const HERO_IMAGES = [
    '/hero-bg1.webp',
    '/hero-bg2.webp',
    '/hero-bg3.webp',
    '/hero-bg4.webp',
    '/hero-bg5.webp',
];
const IMAGE_COUNT = HERO_IMAGES.length;

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadTimer = setTimeout(() => setIsLoaded(true), 10);
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % IMAGE_COUNT);
        }, 6000);
        return () => {
            clearTimeout(loadTimer);
            clearInterval(timer);
        };
    }, []);

    const stats = [
        { value: '10+', label: 'Years of Artistry' },
        { value: '2000+', label: 'Brides Adorned' },
        { value: '100%', label: 'Organic Henna' },
        { value: '5★', label: 'Rated in Chennai' },
    ];

    return (
        <section
            id="home"
            className="relative w-full h-[100dvh] min-h-[780px] md:min-h-[700px] overflow-hidden flex flex-col items-center justify-center pb-[160px] md:pb-24"
            style={{ paddingTop: 'var(--nav-total-height, 89px)' }}
        >
            {/* Background Slideshow */}
            <div className="absolute inset-0 w-full h-full z-0 bg-[#1A0F0A]">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.8, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={HERO_IMAGES[currentImage]}
                            alt={[
                                'Intricate bridal mehendi design on full hands by GK Mehendi Art',
                                'Bold Arabic mehendi design with floral trail pattern',
                                'Professional mehendi artist GK Mehendi Art creating bridal henna design',
                                'Beautiful bridal mehendi design on feet with traditional motifs',
                                'Detailed back-hand bridal henna design with paisley and floral motifs',
                            ][currentImage]}
                            fill
                            className="object-cover"
                            priority={currentImage === 0}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Layered Overlays for premium depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A]/85 via-[#1A0F0A]/30 to-[#1A0F0A]/90 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F0A]/60 via-transparent to-[#1A0F0A]/40 z-10" />
                {/* Radial vignette */}
                <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(26,15,10,0.75) 100%)' }} />
            </div>

            {/* Slide Indicators — positioned above the stats bar with safe clearance */}
            <div className="absolute bottom-[160px] md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {HERO_IMAGES.map((_: string, i: number) => (
                    <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`transition-all duration-500 rounded-full ${i === currentImage
                            ? 'w-8 h-1.5 bg-gold'
                            : 'w-1.5 h-1.5 bg-cream/30 hover:bg-cream/60'
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-20 container mx-auto px-6 text-center max-w-6xl">
                <motion.div
                    initial="hidden"
                    animate={isLoaded ? 'visible' : 'hidden'}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.18 } },
                    }}
                    className="flex flex-col items-center gap-4 md:gap-7"
                >
                    {/* Trust Badge */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                        className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 px-5 sm:px-5 py-2.5 sm:py-2 rounded-2xl sm:rounded-full border border-gold/30 bg-[#1A0F0A]/60 backdrop-blur-sm"
                    >
                        <StarRating rating={5} className="text-gold text-[12px] sm:text-[10px]" />
                        <div className="hidden sm:block w-px h-3 bg-gold/30" />
                        <span className="text-[9.5px] sm:text-[11px] font-semibold tracking-widest sm:tracking-[0.25em] text-gold uppercase font-body text-center max-w-[240px] sm:max-w-none leading-snug mt-0.5 sm:mt-0">
                            India&apos;s Trusted Bridal Mehendi Artist
                        </span>
                    </motion.div>

                    {/* Decorative display script */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
                        className="text-3xl md:text-5xl font-display text-gold/80 leading-none tracking-wide"
                        aria-hidden="true"
                    >
                        Kalai&apos;s Artistry
                    </motion.div>

                    {/* Main Headline — visually unchanged; SEO-enriched via aria-label */}
                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } } }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-cream font-heading drop-shadow-2xl max-w-4xl"
                        aria-label="Professional Bridal Mehendi Artist — Stunning Henna Designs for Your Special Day"
                    >
                        Where Every Stroke{' '}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#E8B820] to-[#CD853F]">
                                Tells a Story
                            </span>
                            {/* Underline accent */}
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 300 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 7 Q75 3 150 6 Q225 9 295 4"
                                    stroke="url(#gold-line)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="gold-line" x1="0" y1="0" x2="300" y2="0">
                                        <stop offset="0%" stopColor="#D4A017" stopOpacity="0" />
                                        <stop offset="40%" stopColor="#D4A017" />
                                        <stop offset="100%" stopColor="#CD853F" stopOpacity="0.3" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                        className="text-base md:text-lg text-cream/70 max-w-xl font-body font-light leading-relaxed tracking-wide"
                    >
                        From intricate bridal patterns to elegant Arabic designs, GK Mehendi Art brings beauty, tradition, and artistry to every celebration across India.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                        className="flex flex-col sm:flex-row gap-4 mt-2"
                    >
                        <a
                            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '916383927576'}?text=Hi%20Kalai!%20I%20would%20like%20to%20book%20a%20mehendi%20session.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="group relative flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-bold text-sm tracking-widest uppercase font-body text-dark overflow-hidden cursor-pointer shadow-2xl shadow-gold/20"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-gold to-[#E8B820] group-hover:from-[#E8B820] group-hover:to-gold transition-all duration-[400ms]" />
                                <FaWhatsapp className="relative z-10 w-4 h-4" />
                                <span className="relative z-10">Book Now</span>
                                <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                            </motion.div>
                        </a>

                        <Link href="/gallery">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-semibold text-sm tracking-widest uppercase font-body text-cream border border-cream/20 hover:border-gold/50 hover:bg-cream/5 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                            >
                                View Gallery
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Stats Bar — pinned to bottom */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
                className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#1A0F0A]/70 backdrop-blur-md"
            >
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`flex flex-col items-center justify-center py-4 md:py-5 gap-0.5 ${
                                    /* Right border on all except last in each row */
                                    i % 2 === 0 ? 'border-r border-white/10' : ''
                                    } ${
                                    /* Bottom border on mobile top row (first 2 items) */
                                    i < 2 ? 'border-b md:border-b-0 border-white/10' : ''
                                    } ${
                                    /* Vertical dividers on desktop for all except last */
                                    i < 3 ? 'md:border-r md:border-white/10' : ''
                                    }`}
                            >
                                <span className="text-xl md:text-2xl font-bold font-heading text-gold">
                                    {stat.value}
                                </span>
                                <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-cream/50 font-body text-center px-2">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
