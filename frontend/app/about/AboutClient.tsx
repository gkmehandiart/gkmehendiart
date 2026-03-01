'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
    FiAward, FiUsers, FiStar, FiHeart,
    FiCheckCircle, FiArrowRight,
} from 'react-icons/fi';
import { FaLeaf, FaMagic, FaWhatsapp } from 'react-icons/fa';

/* ─────────────────────────────── DATA ─────────────────────────────── */

const stats = [
    { icon: FiAward, value: '10+', label: 'Years of Artistry' },
    { icon: FiUsers, value: '2,000+', label: 'Brides Adorned' },
    { icon: FiStar, value: '4.9★', label: 'Average Rating' },
    { icon: FiHeart, value: '100%', label: 'Organic Henna' },
];

const certifications = [
    'MSME Certificate — Mehndi Artist / Henna Designer',
    'Traditional & Contemporary Design Expert',
    'Organic Henna Safety Certified',
    '10+ Years Professional Experience',
];

const values = [
    {
        number: '01',
        title: 'Hygiene & Safety First',
        description: 'Exclusively 100% organic, chemical-free henna sourced from trusted suppliers. Every cone is freshly prepared for the safest application on your skin.',
    },
    {
        number: '02',
        title: 'Artistic Excellence',
        description: 'Each design is meticulously crafted with attention to detail — from traditional Indian motifs to modern Arabic patterns, blending creativity with precision.',
    },
    {
        number: '03',
        title: 'Client-Centric Approach',
        description: 'Personalized consultations, flexible scheduling, and dedicated service — your comfort and satisfaction come first, every single time.',
    },
    {
        number: '04',
        title: 'Timeless Traditions',
        description: 'Honoring the rich cultural heritage of mehendi art while incorporating contemporary trends, creating designs that are both traditional and modern.',
    },
];

const specializations = [
    {
        icon: FiHeart,
        title: 'Bridal Mehendi',
        description: 'Full hand and feet designs with intricate figurative patterns, personalized story elements, and hidden initials — the complete bridal experience.',
        tag: 'Signature Service',
    },
    {
        icon: FiUsers,
        title: 'Function Mehendi',
        description: 'Beautiful, swift designs for sangeet, engagement, baby shower, and pre-wedding celebrations. Professional service for large groups.',
        tag: 'Group Friendly',
    },
    {
        icon: FaMagic,
        title: 'Contemporary Designs',
        description: 'Modern Arabic, Indo-Arabic, and minimalist patterns perfect for festivals, parties, and casual occasions. Trendy yet timeless.',
        tag: 'Trending Styles',
    },
];

const whyUs = [
    'Premium quality, 100% organic henna with rich, long-lasting colour',
    'Customized designs tailored to your preferences and wedding theme',
    'Punctual service with flexible scheduling for your convenience',
    'Hygienic application with disposable cones and sanitized tools',
    'Expertise in South Indian, Rajasthani, and Arabic styles',
    'Transparent pricing with no hidden costs',
];

/* ─────────────────────────────── HELPERS ─────────────────────────────── */

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: 'easeOut' as const },
    viewport: { once: true },
});

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-5">
        <span className="w-6 h-px bg-gold/60" />
        {children}
        <span className="w-6 h-px bg-gold/60" />
    </span>
);

/* ─────────────────────────────── COMPONENT ─────────────────────────────── */

const AboutClient: React.FC = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '916383927576';

    return (
        <div className="overflow-hidden">

            {/* ══════════════════════════════════════
                1. PAGE HERO
            ══════════════════════════════════════ */}
            <section
                className="relative pt-[89px] pb-0 min-h-[72vh] flex flex-col justify-end overflow-hidden"
                aria-label="About Kalai"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E0404] via-[#4A0606] to-[#2E0404]" />

                {/* Mandala pattern */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="hero-mandala" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
                                <circle cx="120" cy="120" r="55" fill="none" stroke="#D4A017" strokeWidth="1.5" />
                                <circle cx="120" cy="120" r="40" fill="none" stroke="#D4A017" strokeWidth="1" />
                                <circle cx="120" cy="120" r="25" fill="none" stroke="#D4A017" strokeWidth="0.8" />
                                {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
                                    <g key={i} transform={`rotate(${a} 120 120)`}>
                                        <ellipse cx="120" cy="78" rx="8" ry="16" fill="#D4A017" opacity="0.3" />
                                    </g>
                                ))}
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-mandala)" />
                    </svg>
                </div>

                <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-gold/6 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-20 pt-16">
                    {/* Breadcrumb — SEO */}
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-2 text-[11px] tracking-widest uppercase font-body text-cream/35">
                            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                            <li className="text-cream/20">/</li>
                            <li className="text-gold/70">About</li>
                        </ol>
                    </nav>

                    <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <div className="text-3xl md:text-4xl font-display text-gold/70 mb-3" aria-hidden="true">
                                    Kalai&apos;s Story
                                </div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] mb-6">
                                    Chennai&apos;s Most{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#E8B820] to-[#CD853F]">
                                        Trusted
                                    </span>{' '}
                                    <br className="hidden md:block" />
                                    Mehendi Artist
                                </h1>
                                <p className="text-lg text-cream/60 font-body leading-relaxed max-w-xl">
                                    A decade of passion, thousands of brides adorned, and a commitment to organic artistry that sets every design apart.
                                </p>
                            </motion.div>
                        </div>

                        {/* Stats grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            className="grid grid-cols-2 gap-4 w-full lg:w-auto lg:min-w-[340px]"
                        >
                            {stats.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={i} className="flex flex-col gap-1 p-5 rounded-xl border border-white/8 bg-white/5 backdrop-blur-sm">
                                        <Icon className="text-gold w-5 h-5 mb-1" />
                                        <span className="text-2xl font-bold font-heading text-white">{stat.value}</span>
                                        <span className="text-[11px] text-cream/40 tracking-wider uppercase font-body">{stat.label}</span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                2. ARTIST STORY
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden bg-[#F9F3E8]" aria-label="Kalai's story and background">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E8] via-[#F5ECE0] to-[#F9F3E8]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

                        {/* Image */}
                        <motion.div {...fadeUp(0)} className="w-full lg:w-5/12 flex-shrink-0">
                            <div className="relative max-w-[460px] mx-auto lg:mx-0">
                                <div className="absolute -inset-3 border border-gold/20 rounded-[2.5rem] pointer-events-none hidden md:block" />
                                <div className="absolute -inset-6 border border-gold/10 rounded-[3rem] pointer-events-none hidden md:block" />

                                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-gold/10">
                                    <Image
                                        src="/kalai.webp"
                                        alt="Kalai, professional bridal mehendi artist in Chennai, applying intricate organic henna designs"
                                        width={460}
                                        height={575}
                                        sizes="(max-width: 768px) 100vw, 460px"
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E0404]/30 via-transparent to-transparent" />
                                </div>

                                <div className="absolute -bottom-5 -right-4 md:-right-8 bg-gradient-to-br from-gold to-[#CD853F] text-dark px-5 py-4 rounded-2xl shadow-xl z-20 hidden sm:block">
                                    <div className="flex flex-col leading-none">
                                        <span className="text-[10px] uppercase tracking-widest font-body opacity-70">Serving Since</span>
                                        <span className="text-xl font-bold font-heading">2014</span>
                                    </div>
                                </div>

                                <div className="absolute -top-4 -left-4 md:-left-6 bg-white border border-gold/20 text-dark px-4 py-3 rounded-xl shadow-lg z-20 hidden sm:block">
                                    <div className="flex items-center gap-2">
                                        <FaLeaf className="text-green-dark text-sm" />
                                        <span className="text-[11px] font-body font-semibold tracking-wider">100% Organic</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text content */}
                        <article className="w-full lg:w-7/12 space-y-10">
                            <div>
                                <motion.div {...fadeUp(0)}>
                                    <SectionLabel>The Beginning</SectionLabel>
                                </motion.div>
                                <motion.h2 {...fadeUp(0.08)} className="text-4xl md:text-5xl font-heading font-bold text-green-dark mb-6">
                                    A Passion Born from Tradition
                                </motion.h2>
                                <motion.div {...fadeUp(0.13)} className="space-y-4 text-dark/60 font-body text-base leading-relaxed">
                                    <p>
                                        My love affair with mehendi began in childhood, watching my grandmother create mesmerizing patterns on brides&apos; hands during family weddings in Tamil Nadu. The way henna transformed simple hands into works of art fascinated me — I knew this was my calling.
                                    </p>
                                    <p>
                                        What started as sketching designs in notebooks evolved into a professional career spanning over a decade. I trained under renowned mehendi artists across India, learning traditional Rajasthani, Arabic, and South Indian styles before developing my signature fusion technique.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="pt-6 border-t border-gold/15">
                                <motion.h2 {...fadeUp(0.18)} className="text-3xl md:text-4xl font-heading font-bold text-dark mb-5">
                                    My Artistic Philosophy
                                </motion.h2>
                                <motion.div {...fadeUp(0.22)} className="space-y-4 text-dark/60 font-body text-base leading-relaxed">
                                    <p>
                                        I believe mehendi is more than decoration — it&apos;s a sacred tradition, a form of storytelling, and a celebration of life&apos;s most precious moments. Each design I create is a unique narrative, incorporating elements that reflect your personality, love story, and cultural heritage.
                                    </p>
                                    <p>
                                        Whether it&apos;s a traditional bridal design with intricate peacocks and paisleys, or a modern minimalist pattern, every stroke carries meaning and every detail speaks to your individual style.
                                    </p>
                                </motion.div>
                            </div>

                            <motion.div {...fadeUp(0.28)} className="pt-6 border-t border-gold/15">
                                <h2 className="text-2xl font-heading font-bold text-dark mb-5">Certifications &amp; Training</h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                                    {certifications.map((cert, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <FiCheckCircle className="text-gold mt-0.5 flex-shrink-0 w-4 h-4" />
                                            <span className="text-sm text-dark/65 font-body">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </article>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                3. CORE VALUES
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden bg-[#1B4D3E]" aria-label="GK Mehendi Art core values">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D3E] via-[#174438] to-[#122E2A]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <motion.div {...fadeUp(0)}><SectionLabel>Our Principles</SectionLabel></motion.div>
                        <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
                            What Sets Us Apart
                        </motion.h2>
                        <motion.p {...fadeUp(0.15)} className="text-cream/40 font-body text-base max-w-xl mx-auto">
                            Four pillars that guide every appointment, every design, and every bride we serve in Chennai.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="group relative p-8 rounded-2xl border border-white/8 bg-white/5 hover:bg-white/10 hover:border-gold/30 backdrop-blur-sm transition-all duration-[400ms]"
                            >
                                <span className="absolute top-6 right-7 text-5xl font-heading font-bold text-white/5 group-hover:text-white/8 transition-colors select-none">
                                    {value.number}
                                </span>
                                <div className="w-8 h-0.5 bg-gold/40 mb-5 group-hover:w-14 group-hover:bg-gold transition-all duration-500" />
                                <h3 className="text-xl font-heading font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-cream/50 text-sm leading-relaxed font-body">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                4. SPECIALIZATIONS
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden bg-[#F9F3E8]" aria-label="Mehendi specializations in Chennai">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E8] via-[#F5ECE0] to-[#F9F3E8]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <motion.div {...fadeUp(0)}><SectionLabel>Areas of Expertise</SectionLabel></motion.div>
                        <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-heading font-bold text-green-dark mb-5">
                            My Specializations
                        </motion.h2>
                        <motion.p {...fadeUp(0.15)} className="text-dark/45 font-body text-base max-w-xl mx-auto">
                            From elaborate bridal designs to contemporary party patterns — every service delivered with the same care and organic henna.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {specializations.map((spec, i) => {
                            const Icon = spec.icon;
                            return (
                                <motion.article
                                    key={i}
                                    {...fadeUp(i * 0.12)}
                                    className="group relative bg-white rounded-2xl p-8 border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all duration-[400ms] flex flex-col overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/4 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                                    <span className="self-start text-[10px] tracking-widest uppercase font-body font-bold text-gold/80 bg-gold/8 border border-gold/15 px-3 py-1 rounded-full mb-6 relative z-10">
                                        {spec.tag}
                                    </span>

                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5ECE0] to-[#EDD9B8] flex items-center justify-center text-gold text-xl mb-5 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                        <Icon />
                                    </div>

                                    <h3 className="text-xl font-heading font-bold text-dark mb-3 relative z-10">{spec.title}</h3>
                                    <p className="text-dark/50 text-sm leading-relaxed font-body flex-1 relative z-10">{spec.description}</p>

                                    <div className="mt-6 pt-5 border-t border-gold/10 relative z-10">
                                        <Link
                                            href="/services"
                                            className="group/link inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-wider text-gold hover:text-green-dark transition-colors"
                                        >
                                            View Packages
                                            <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" size={12} />
                                        </Link>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                5. WHY CHOOSE GK MEHENDI
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden bg-[#1A0F0A]" aria-label="Why choose GK Mehendi Art in Chennai">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E0404]/60 via-[#1A0F0A] to-[#100806]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-14">
                        <motion.div {...fadeUp(0)}><SectionLabel>Why Brides Trust Us</SectionLabel></motion.div>
                        <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
                            Why Brides Choose GK Mehendi Art
                        </motion.h2>
                        <motion.p {...fadeUp(0.15)} className="text-cream/40 font-body text-base max-w-xl mx-auto">
                            Every bride deserves a mehendi experience as flawless as her wedding day.
                        </motion.p>
                    </div>

                    <motion.ul {...fadeUp(0.2)} className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
                        {whyUs.map((point, i) => (
                            <motion.li
                                key={i}
                                {...fadeUp(i * 0.07)}
                                className="flex items-start gap-4 p-5 rounded-xl border border-white/7 bg-white/4 hover:border-gold/25 hover:bg-white/7 transition-all duration-300"
                            >
                                <FiCheckCircle className="text-gold mt-0.5 flex-shrink-0 w-5 h-5" />
                                <span className="text-cream/65 font-body text-sm leading-relaxed">{point}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </section>

            {/* ══════════════════════════════════════
                6. CTA
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden bg-[#F9F3E8]" aria-label="Book your mehendi appointment">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E8] to-[#F0E4CE]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/8 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/10 pointer-events-none" />

                <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
                    <motion.div {...fadeUp(0)}><SectionLabel>Take the Next Step</SectionLabel></motion.div>

                    <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-heading font-bold text-green-dark mb-5">
                        Ready to Adorn Your Hands?
                    </motion.h2>
                    <motion.p {...fadeUp(0.15)} className="text-dark/50 font-body text-base leading-relaxed mb-10 max-w-xl mx-auto">
                        Let&apos;s create beautiful memories together. Book your mehendi session today and experience the art of traditional henna with a modern touch.
                    </motion.p>

                    <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/${phone}?text=Hi%20Kalai!%20I%20would%20like%20to%20book%20a%20mehendi%20appointment.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-gold to-[#E8B820] text-dark font-bold text-sm tracking-widest uppercase font-body shadow-lg shadow-gold/20 hover:shadow-gold/35 transition-all duration-300 cursor-pointer"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                                Book Now
                                <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                            </motion.div>
                        </a>
                        <a
                            href={`https://wa.me/${phone}?text=Hi%20Kalai!%20I%20saw%20your%20About%20page%20and%20would%20like%20to%20book%20a%20session.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full border-2 border-green-dark text-green-dark font-bold text-sm tracking-widest uppercase font-body hover:bg-green-dark hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                <FaWhatsapp className="text-green-500 w-4 h-4" />
                                Chat on WhatsApp
                            </motion.div>
                        </a>
                    </motion.div>

                    <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-dark/30 text-[11px] tracking-wider font-body uppercase">
                        <span>✓ Organic &amp; Safe</span>
                        <span className="hidden sm:block w-px h-3 bg-dark/15" />
                        <span>✓ Doorstep Service Available</span>
                        <span className="hidden sm:block w-px h-3 bg-dark/15" />
                        <span>✓ Flexible Scheduling</span>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default AboutClient;
