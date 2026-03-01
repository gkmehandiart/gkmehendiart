'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    FiCheck, FiClock, FiUsers, FiStar, FiTrendingUp,
    FiAward, FiShield, FiHeart, FiArrowRight,
    FiPlus, FiMinus,
} from 'react-icons/fi';
import { FaHeart, FaGem, FaLeaf, FaWhatsapp } from 'react-icons/fa';

/* ─────────────── DATA ─────────────── */

const packages = [
    {
        title: 'Bridal Mehendi',
        subtitle: 'Basic Floral Package',
        description: 'Beautiful bridal henna to make your special day unforgettable. Basic floral designs with organic henna.',
        price: '₹2,500',
        priceNote: 'Starting price · Travel charges extra · No customisation',
        icon: FaHeart,
        popular: true,
        features: [
            'Basic floral bridal designs',
            '100% organic, premium quality henna',
            'Rich, long-lasting dark stain',
            'Professional, punctual service',
            'Doorstep service available',
            'Travel charges applicable',
            'Price may vary based on design complexity',
        ],
        duration: '2–4 hours',
        advance: '30% advance required',
        idealFor: 'Brides, Pre-wedding ceremonies',
        styles: 'Basic Floral',
    },
    {
        title: 'Feet Mehendi',
        subtitle: 'Ankle Length Mandala',
        description: 'Elegant mandala pattern feet mehendi for brides and special occasions.',
        price: '₹1,000',
        priceNote: 'Ankle length · Price varies by design',
        icon: FaGem,
        popular: false,
        features: [
            'Mandala pattern design',
            'Ankle length coverage',
            '100% organic henna',
            'Rich dark stain',
            'Professional application',
            'Price may vary with customisation',
            'Suitable for brides & functions',
        ],
        duration: '1–2 hours',
        advance: '30% advance required',
        idealFor: 'Bridal feet, Functions, Ceremonies',
        styles: 'Mandala',
    },
    {
        title: 'Guest Mehendi',
        subtitle: 'Arabic & Mandala for Guests',
        description: 'Quick and beautiful designs for guests at functions and celebrations.',
        price: '₹100',
        priceNote: 'Arabic (two hands front) · Mandala from ₹300',
        icon: FaLeaf,
        popular: false,
        features: [
            'Arabic: ₹100 — two hands front side (palm length)',
            'Mandala: ₹300 — two hands front side',
            'Price increases with length & design',
            'Organic henna for safe application',
            'Quick application for multiple guests',
            'Suitable for all age groups',
            'Affordable & transparent pricing',
        ],
        duration: '15–30 mins per person',
        advance: 'Pay on the spot',
        idealFor: 'Sangeet, Engagement, Festivals, Functions',
        styles: 'Arabic, Mandala',
    },
];

const addOns = [
    { name: 'Additional Artist', price: '₹1,500 / hour', icon: FiUsers },
    { name: 'Outstation Travel', price: 'As per distance', icon: FiTrendingUp },
    { name: 'Express Booking (< 48 hrs)', price: '+20% of package', icon: FiClock },
    { name: 'Design Customization', price: 'Included in bridal', icon: FiStar },
];

const whyChoose = [
    {
        icon: FiShield,
        number: '01',
        title: '100% Organic Henna',
        description: 'Chemical-free, skin-safe henna sourced from trusted suppliers for the darkest, longest-lasting stain.',
    },
    {
        icon: FiAward,
        number: '02',
        title: '10+ Years Expertise',
        description: 'Mastery in traditional South Indian, Rajasthani, Arabic, and contemporary fusion styles.',
    },
    {
        icon: FiHeart,
        number: '03',
        title: 'Personalized Designs',
        description: 'Every design is unique, tailored to your preferences, wedding theme, and personality.',
    },
    {
        icon: FiClock,
        number: '04',
        title: 'Punctual & Professional',
        description: 'Always on time, well-prepared, and dedicated to making your experience stress-free.',
    },
];

const steps = [
    { step: '01', title: 'Book Online', desc: 'Choose your package and share your preferred date & time via contact form or WhatsApp.' },
    { step: '02', title: 'Consultation', desc: 'Discuss design preferences and share your reference images with Kalai.' },
    { step: '03', title: 'Application', desc: 'Relax while we create beautiful, intricate henna designs with precision.' },
    { step: '04', title: 'Aftercare', desc: 'Follow our care tips for the darkest, longest-lasting mehendi stain.' },
];

const faqs = [
    { q: 'How long does bridal mehendi take?', a: 'Bridal mehendi typically takes 4–6 hours depending on design complexity and coverage area. We ensure every detail is perfect.' },
    { q: 'How dark will the mehendi stain be?', a: 'With our premium organic henna and proper aftercare, you can expect a rich, dark maroon to chocolate brown stain lasting 1–2 weeks.' },
    { q: 'Do you travel for bookings?', a: 'Yes! We provide services across Chennai and nearby areas. Outstation bookings are available with additional travel charges.' },
    { q: 'What is your cancellation policy?', a: 'Cancellations made 7+ days before the event receive a full refund. Within 7 days, the advance is non-refundable but can be rescheduled once.' },
    { q: 'Can I request a specific design?', a: 'Absolutely! We encourage you to share reference images. For bridal packages, we offer a complimentary design consultation.' },
];

/* ─────────────── HELPERS ─────────────── */

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
    viewport: { once: true },
});

const SectionLabel = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
    <span className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-5 ${dark ? 'text-gold' : 'text-gold'}`}>
        <span className="w-6 h-px bg-gold/60" />
        {children}
        <span className="w-6 h-px bg-gold/60" />
    </span>
);

/* ─────────────── COMPONENT ─────────────── */

const ServicesClient: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '916383927576';

    return (
        <div className="overflow-hidden">

            {/* ══════════════════════════════════════
                1. PAGE HERO
            ══════════════════════════════════════ */}
            <section
                className="relative pt-[89px] pb-0 min-h-[60vh] flex flex-col justify-end overflow-hidden"
                aria-label="Services and packages"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#122E2A] via-[#1B4D3E] to-[#122E2A]" />

                {/* Mandala overlay */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="svc-mandala" x="0" y="0" width="220" height="220" patternUnits="userSpaceOnUse">
                                <circle cx="110" cy="110" r="50" fill="none" stroke="#D4A017" strokeWidth="1.5" />
                                <circle cx="110" cy="110" r="36" fill="none" stroke="#D4A017" strokeWidth="1" />
                                <circle cx="110" cy="110" r="22" fill="none" stroke="#D4A017" strokeWidth="0.8" />
                                {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
                                    <g key={i} transform={`rotate(${a} 110 110)`}>
                                        <ellipse cx="110" cy="72" rx="7" ry="14" fill="#D4A017" opacity="0.3" />
                                    </g>
                                ))}
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#svc-mandala)" />
                    </svg>
                </div>

                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-20 pt-16">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-2 text-[11px] tracking-widest uppercase font-body text-cream/35">
                            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                            <li className="text-cream/20">/</li>
                            <li className="text-gold/70">Services</li>
                        </ol>
                    </nav>

                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <div className="text-3xl md:text-4xl font-display text-gold/70 mb-3" aria-hidden="true">
                                Premium Packages
                            </div>
                            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white leading-[1.08] mb-6">
                                Mehendi Services &amp;{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#E8B820] to-[#CD853F]">
                                    Packages
                                </span>
                            </h1>
                            <p className="text-lg text-cream/55 font-body leading-relaxed max-w-2xl">
                                Premium organic henna, intricate artistry, and professional service for your most cherished moments — bridal from ₹2,500, guest mehendi from ₹100.
                            </p>
                        </motion.div>

                        {/* Quick price tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
                            className="flex flex-wrap gap-3 mt-8"
                        >
                            {[
                                { label: 'Bridal', price: 'From ₹2,500' },
                                { label: 'Feet', price: 'From ₹1,000' },
                                { label: 'Guest Arabic', price: 'From ₹100' },
                                { label: 'Guest Mandala', price: 'From ₹300' },
                            ].map((tag) => (
                                <span key={tag.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/25 bg-gold/8 backdrop-blur-sm">
                                    <span className="text-[10px] tracking-widest uppercase font-body text-gold/70">{tag.label}</span>
                                    <span className="w-px h-3 bg-gold/20" />
                                    <span className="text-[11px] font-bold font-body text-gold">{tag.price}</span>
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                2. WHY CHOOSE US
            ══════════════════════════════════════ */}
            <section className="relative py-24 overflow-hidden bg-[#F9F3E8]" aria-label="Why choose GK Mehendi Art">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E8] via-[#F5ECE0] to-[#F9F3E8]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-14">
                        <motion.div {...fadeUp(0)}><SectionLabel>Why Choose Us</SectionLabel></motion.div>
                        <motion.h2 {...fadeUp(0.08)} className="text-4xl md:text-5xl font-heading font-bold text-green-dark">
                            The GK Mehendi Promise
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChoose.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    {...fadeUp(i * 0.1)}
                                    className="group relative p-7 rounded-2xl bg-white border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all duration-[400ms] overflow-hidden"
                                >
                                    <span className="absolute top-4 right-5 text-5xl font-heading font-bold text-dark/[0.04] group-hover:text-dark/[0.06] select-none transition-colors">
                                        {item.number}
                                    </span>
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F5ECE0] to-[#EDD9B8] flex items-center justify-center text-gold text-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <Icon />
                                    </div>
                                    <div className="w-8 h-0.5 bg-gold/30 mb-4 group-hover:w-14 group-hover:bg-gold transition-all duration-500" />
                                    <h3 className="text-lg font-heading font-bold text-dark mb-2">{item.title}</h3>
                                    <p className="text-dark/50 text-sm leading-relaxed font-body">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                3. PACKAGES
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden bg-[#1A0F0A]" aria-label="Mehendi packages and pricing">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E0404]/50 via-[#1A0F0A] to-[#100806]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <motion.div {...fadeUp(0)}><SectionLabel>Pricing</SectionLabel></motion.div>
                        <motion.h2 {...fadeUp(0.08)} className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
                            Our Exclusive Packages
                        </motion.h2>
                        <motion.p {...fadeUp(0.14)} className="text-cream/40 font-body text-base max-w-xl mx-auto">
                            Transparent pricing, no hidden costs. Every package crafted to make your special day unforgettable.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        {packages.map((pkg, i) => {
                            const Icon = pkg.icon;
                            return (
                                <motion.article
                                    key={i}
                                    {...fadeUp(i * 0.12)}
                                    className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-[400ms] ${pkg.popular
                                        ? 'border-2 border-gold shadow-2xl shadow-gold/15'
                                        : 'border border-white/10 hover:border-white/20'
                                        }`}
                                >
                                    {/* Most Popular ribbon */}
                                    {pkg.popular && (
                                        <div className="absolute top-5 right-5 z-20 bg-gradient-to-r from-gold to-[#E8B820] text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
                                            Most Popular
                                        </div>
                                    )}

                                    {/* Card header */}
                                    <header className={`p-8 flex flex-col items-start ${pkg.popular ? 'bg-gradient-to-br from-[#2A1200] to-[#1A0C00]' : 'bg-white/5'}`}>
                                        <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center text-gold text-xl mb-5">
                                            <Icon />
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-white mb-1">{pkg.title}</h3>
                                        <p className="text-gold/80 text-[11px] tracking-widest uppercase font-body font-semibold mb-3">{pkg.subtitle}</p>
                                        <p className="text-cream/50 text-sm font-body leading-relaxed">{pkg.description}</p>
                                    </header>

                                    {/* Price */}
                                    <div className={`px-8 py-5 border-y ${pkg.popular ? 'border-gold/20 bg-gold/5' : 'border-white/8 bg-white/3'}`}>
                                        <p className="text-3xl font-heading font-bold text-gold">{pkg.price}</p>
                                        <p className="text-cream/35 text-xs font-body mt-1">{pkg.priceNote}</p>
                                    </div>

                                    {/* Features */}
                                    <div className={`px-8 py-6 flex-1 ${pkg.popular ? 'bg-[#1E0D00]/60' : 'bg-white/3'}`}>
                                        <p className="text-[10px] tracking-widest uppercase font-body font-bold text-gold/60 mb-4">What&apos;s Included</p>
                                        <ul className="space-y-2.5" role="list">
                                            {pkg.features.map((f, j) => (
                                                <li key={j} className="flex items-start gap-2.5">
                                                    <FiCheck className="text-gold flex-shrink-0 mt-0.5 w-3.5 h-3.5" />
                                                    <span className="text-cream/60 text-sm font-body leading-snug">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Meta info */}
                                    <div className={`px-8 py-5 space-y-2.5 border-t ${pkg.popular ? 'border-gold/15 bg-[#1E0D00]/60' : 'border-white/8 bg-white/3'}`}>
                                        <div className="flex items-start gap-2.5 text-xs font-body text-cream/45">
                                            <FiClock className="text-gold flex-shrink-0 mt-0.5 w-3.5 h-3.5" />
                                            <span><span className="text-cream/70 font-semibold">Duration:</span> {pkg.duration}</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 text-xs font-body text-cream/45">
                                            <FiUsers className="text-gold flex-shrink-0 mt-0.5 w-3.5 h-3.5" />
                                            <span><span className="text-cream/70 font-semibold">Ideal for:</span> {pkg.idealFor}</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 text-xs font-body text-cream/45">
                                            <FiStar className="text-gold flex-shrink-0 mt-0.5 w-3.5 h-3.5" />
                                            <span><span className="text-cream/70 font-semibold">Styles:</span> {pkg.styles}</span>
                                        </div>
                                        <p className="text-[11px] text-gold/70 font-body pt-1">
                                            Note: {pkg.advance}
                                        </p>
                                    </div>

                                    {/* CTA */}
                                    <div className={`p-6 ${pkg.popular ? 'bg-[#1E0D00]/60' : 'bg-white/3'}`}>
                                        <a
                                            href={`https://wa.me/${phone}?text=${encodeURIComponent(`Hi Kalai! I would like to book the ${pkg.title} package.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm tracking-wider uppercase font-body transition-all duration-300 ${pkg.popular
                                                ? 'bg-gradient-to-r from-gold to-[#E8B820] text-dark hover:shadow-xl hover:shadow-gold/25'
                                                : 'border border-white/20 text-cream hover:border-gold/50 hover:text-gold hover:bg-white/5'
                                                }`}
                                        >
                                            <FaWhatsapp className="w-4 h-4" />
                                            Book This Package
                                            <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" size={13} />
                                        </a>
                                        <p className="text-center text-[10px] text-cream/20 font-body mt-3">
                                            * Travel charges beyond 20 km apply
                                        </p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                4. ADD-ONS
            ══════════════════════════════════════ */}
            <section className="relative py-24 overflow-hidden bg-[#F9F3E8]" aria-label="Additional services and add-ons">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E8] via-[#F5ECE0] to-[#F9F3E8]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-12">
                        <motion.div {...fadeUp(0)}><SectionLabel>Extras</SectionLabel></motion.div>
                        <motion.h2 {...fadeUp(0.08)} className="text-4xl md:text-5xl font-heading font-bold text-green-dark mb-4">
                            Add-Ons &amp; Extras
                        </motion.h2>
                        <motion.p {...fadeUp(0.13)} className="text-dark/45 font-body text-base">
                            Customise your booking with these optional services.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {addOns.map((addon, i) => {
                            const Icon = addon.icon;
                            return (
                                <motion.div
                                    key={i}
                                    {...fadeUp(i * 0.09)}
                                    className="group flex flex-col items-center text-center gap-4 p-7 bg-white rounded-2xl border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5ECE0] to-[#EDD9B8] flex items-center justify-center text-gold text-xl group-hover:scale-110 transition-transform duration-300">
                                        <Icon />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-heading font-bold text-dark mb-1">{addon.name}</h3>
                                        <p className="text-gold font-bold text-sm font-body">{addon.price}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.p {...fadeUp(0.4)} className="text-center text-dark/40 font-body text-sm mt-10">
                        Need something custom?{' '}
                        <Link href="/contact" className="text-gold font-semibold hover:text-gold-dark underline underline-offset-2 transition-colors">
                            Contact us
                        </Link>{' '}
                        for personalized quotes.
                    </motion.p>
                </div>
            </section>

            {/* ══════════════════════════════════════
                5. PRODUCTS
            ══════════════════════════════════════ */}
            <section className="relative py-24 overflow-hidden bg-[#1A0F0A]" aria-label="Henna products for sale">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E0404]/50 via-[#1A0F0A] to-[#100806]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-14">
                        <motion.div {...fadeUp(0)}><SectionLabel dark>Products</SectionLabel></motion.div>
                        <motion.h2 {...fadeUp(0.08)} className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            Henna Products for Sale
                        </motion.h2>
                        <motion.p {...fadeUp(0.13)} className="text-cream/40 font-body text-base max-w-xl mx-auto">
                            Premium quality organic henna products available for purchase. Perfect for home use or professional artists.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Organic Henna Cones */}
                        <motion.div {...fadeUp(0)} className="rounded-2xl border border-gold/20 bg-white/5 overflow-hidden hover:border-gold/40 transition-all duration-300">
                            <div className="p-7 border-b border-gold/15">
                                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center text-gold text-lg mb-4">
                                    <FaLeaf />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-white mb-1">Organic Henna Cones</h3>
                                <p className="text-cream/40 text-sm font-body">20–25 gram · Ready to use · Minimum order 10</p>
                            </div>
                            <div className="p-7">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-3xl font-heading font-bold text-gold">₹30</p>
                                        <p className="text-cream/30 text-xs font-body mt-1">per cone</p>
                                    </div>
                                    <span className="text-xs text-gold/60 font-body border border-gold/20 px-3 py-1 rounded-full">Min. order: 10</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* BAQ Stringy Henna Powder */}
                        <motion.div {...fadeUp(0.1)} className="rounded-2xl border border-gold/20 bg-white/5 overflow-hidden hover:border-gold/40 transition-all duration-300">
                            <div className="p-7 border-b border-gold/15">
                                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center text-gold text-lg mb-4">
                                    <FaHeart />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-white mb-1">BAQ Stringy Henna Powder</h3>
                                <p className="text-cream/40 text-sm font-body">Body Art Quality · Premium grade</p>
                            </div>
                            <div className="p-7 space-y-3">
                                {[
                                    { qty: '1 kg', price: '₹380' },
                                    { qty: '500 gm', price: '₹200' },
                                    { qty: '100 gm', price: '₹70' },
                                ].map((item) => (
                                    <div key={item.qty} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                        <span className="text-cream/60 text-sm font-body">{item.qty}</span>
                                        <span className="text-gold font-bold text-sm font-body">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Eucalyptus Oil */}
                        <motion.div {...fadeUp(0.2)} className="rounded-2xl border border-gold/20 bg-white/5 overflow-hidden hover:border-gold/40 transition-all duration-300">
                            <div className="p-7 border-b border-gold/15">
                                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center text-gold text-lg mb-4">
                                    <FaGem />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-white mb-1">Eucalyptus Oil</h3>
                                <p className="text-cream/40 text-sm font-body">100% pure · Enhances henna colour</p>
                            </div>
                            <div className="p-7 space-y-2">
                                {[
                                    { qty: '1 litre', price: '₹1,750' },
                                    { qty: '500 ml', price: '₹850' },
                                    { qty: '200 ml', price: '₹450' },
                                    { qty: '100 ml', price: '₹250' },
                                    { qty: '50 ml', price: '₹150' },
                                    { qty: '30 ml', price: '₹90' },
                                ].map((item) => (
                                    <div key={item.qty} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                                        <span className="text-cream/60 text-sm font-body">{item.qty}</span>
                                        <span className="text-gold font-bold text-sm font-body">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                    <motion.p {...fadeUp(0.35)} className="text-center text-cream/30 font-body text-sm mt-10">
                        To order products, {' '}
                        <a
                            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '916383927576'}?text=Hi%20Kalai!%20I%20would%20like%20to%20order%20henna%20products.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold font-semibold hover:text-gold/80 underline underline-offset-2 transition-colors"
                        >
                            WhatsApp us
                        </a>
                        {' '}with your requirements.
                    </motion.p>
                </div>
            </section>

            {/* ══════════════════════════════════════
                6. HOW IT WORKS
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden bg-[#1B4D3E]" aria-label="Booking process">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D3E] via-[#174438] to-[#122E2A]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <motion.div {...fadeUp(0)}><SectionLabel>The Process</SectionLabel></motion.div>
                        <motion.h2 {...fadeUp(0.08)} className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
                            How It Works
                        </motion.h2>
                        <motion.p {...fadeUp(0.13)} className="text-cream/40 font-body text-base max-w-xl mx-auto">
                            From first enquiry to the final stain — a seamless, stress-free experience.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
                        {/* Connecting line on desktop */}
                        <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold/10 via-gold/30 to-gold/10 z-0" />

                        {steps.map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.12)}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center text-lg font-bold font-heading mb-6 border-2 transition-colors ${i === 0 ? 'bg-gold text-dark border-gold shadow-xl shadow-gold/30' : 'bg-white/5 text-white border-white/15 hover:border-gold/50'
                                    }`}>
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-cream/45 text-sm font-body leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                6. FAQ
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden bg-[#F9F3E8]" aria-label="Frequently asked questions about mehendi services">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E8] via-[#F5ECE0] to-[#F9F3E8]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <div className="text-center mb-14">
                        <motion.div {...fadeUp(0)}><SectionLabel>FAQ</SectionLabel></motion.div>
                        <motion.h2 {...fadeUp(0.08)} className="text-4xl md:text-5xl font-heading font-bold text-green-dark mb-4">
                            Frequently Asked Questions
                        </motion.h2>
                        <motion.p {...fadeUp(0.13)} className="text-dark/45 font-body text-base">
                            Everything you need to know before booking your session.
                        </motion.p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <motion.div
                                    key={i}
                                    {...fadeUp(i * 0.06)}
                                    className={`rounded-xl border overflow-hidden transition-all duration-300 ${isOpen ? 'border-gold/35 bg-white shadow-md shadow-gold/8' : 'border-gold/12 bg-white hover:border-gold/25'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className="w-full px-7 py-5 text-left flex items-center justify-between gap-4 group"
                                        aria-expanded={isOpen}
                                    >
                                        <span className={`font-heading font-semibold text-base leading-snug transition-colors ${isOpen ? 'text-green-dark' : 'text-dark group-hover:text-green-dark'}`}>
                                            {faq.q}
                                        </span>
                                        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gold text-dark' : 'bg-gold/10 text-gold group-hover:bg-gold/20'}`}>
                                            {isOpen ? <FiMinus size={13} /> : <FiPlus size={13} />}
                                        </span>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.27, ease: 'easeInOut' }}
                                            >
                                                <div className="px-7 pb-6">
                                                    <div className="w-full h-px bg-gold/12 mb-4" />
                                                    <p className="text-dark/55 text-sm leading-relaxed font-body">{faq.a}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                7. CTA
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden bg-[#1A0F0A]" aria-label="Book your mehendi session">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E0404]/50 via-[#1A0F0A] to-[#100806]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold/6 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-gold/8 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
                    <motion.div {...fadeUp(0)}><SectionLabel>Secure Your Slot</SectionLabel></motion.div>

                    <motion.div {...fadeUp(0.07)} className="text-3xl md:text-4xl font-display text-gold/70 mb-3" aria-hidden="true">
                        Limited slots available
                    </motion.div>

                    <motion.h2 {...fadeUp(0.12)} className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
                        Ready to Book Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#E8B820]">
                            Mehendi Session?
                        </span>
                    </motion.h2>

                    <motion.p {...fadeUp(0.17)} className="text-cream/45 font-body text-base leading-relaxed mb-12 max-w-xl mx-auto">
                        Secure your date today and let us create stunning henna art for your special occasion. Bridal slots fill up fast during wedding season.
                    </motion.p>

                    <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/${phone}?text=Hi%20Kalai!%20I%20would%20like%20to%20book%20a%20mehendi%20session.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-gold to-[#E8B820] text-dark font-bold text-sm tracking-widest uppercase font-body shadow-xl shadow-gold/20 hover:shadow-gold/35 transition-all duration-300 cursor-pointer"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                                Book Now
                                <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                            </motion.div>
                        </a>
                        <a
                            href={`https://wa.me/${phone}?text=Hi%20Kalai!%20I%20would%20like%20to%20enquire%20about%20your%20mehendi%20packages.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full border border-white/20 text-cream font-semibold text-sm tracking-widest uppercase font-body hover:border-green-400/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
                            >
                                <FaWhatsapp className="text-green-400 w-4 h-4" />
                                WhatsApp Us
                            </motion.div>
                        </a>
                    </motion.div>

                    <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-cream/25 text-[11px] tracking-wider font-body uppercase">
                        <span>✓ Organic &amp; Chemical-Free</span>
                        <span className="hidden sm:block w-px h-3 bg-white/10" />
                        <span>✓ Doorstep Service Available</span>
                        <span className="hidden sm:block w-px h-3 bg-white/10" />
                        <span>✓ 2,000+ Happy Brides</span>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default ServicesClient;
