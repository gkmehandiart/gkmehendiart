
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { FaLeaf, FaAward } from 'react-icons/fa';

const stats = [
    { value: '10+', label: 'Years of Artistry' },
    { value: '2000+', label: 'Brides Adorned' },
    { value: '5★', label: 'Average Rating' },
];

const AboutPreview: React.FC = () => {
    return (
        <section className="relative py-28 overflow-hidden" aria-label="About Kalai">
            {/* Deep maroon background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3D0505] via-[#5A0808] to-[#3D0505]" />

            {/* Subtle mandala overlay */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="about-mandala" x="0" y="0" width="220" height="220" patternUnits="userSpaceOnUse">
                            <circle cx="110" cy="110" r="50" fill="none" stroke="#D4A017" strokeWidth="1.5" />
                            <circle cx="110" cy="110" r="36" fill="none" stroke="#D4A017" strokeWidth="1" />
                            <circle cx="110" cy="110" r="22" fill="none" stroke="#D4A017" strokeWidth="0.8" />
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
                                <g key={i} transform={`rotate(${a} 110 110)`}>
                                    <ellipse cx="110" cy="72" rx="7" ry="14" fill="#D4A017" opacity="0.35" />
                                </g>
                            ))}
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#about-mandala)" />
                </svg>
            </div>

            {/* Top/bottom gold lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            {/* Radial glow accents */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-24">

                    {/* --- Image Column --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="w-full lg:w-5/12 flex-shrink-0"
                    >
                        <div className="relative max-w-[460px] mx-auto lg:mx-0">
                            {/* Decorative border frame */}
                            <div className="absolute -inset-3 border border-gold/20 rounded-[2.5rem] pointer-events-none hidden md:block" />
                            <div className="absolute -inset-6 border border-gold/10 rounded-[3rem] pointer-events-none hidden md:block" />

                            {/* Main image */}
                            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
                                <Image
                                    src="/kalai.webp"
                                    alt="Kalai — Professional bridal mehendi artist at GK Mehendi Art, Chennai"
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                />
                                {/* Image gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0505]/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating badge – bottom right */}
                            <div className="absolute -bottom-5 -right-4 md:-right-8 bg-gradient-to-br from-gold to-[#CD853F] text-dark px-5 py-4 rounded-2xl shadow-2xl shadow-gold/30 z-20 hidden sm:block">
                                <div className="flex items-center gap-2">
                                    <FaAward className="text-xl" />
                                    <div className="flex flex-col leading-none">
                                        <span className="text-[10px] uppercase tracking-widest font-body opacity-70">Experience</span>
                                        <span className="text-lg font-bold font-heading">10+ Years</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge – top left */}
                            <div className="absolute -top-4 -left-4 md:-left-6 bg-[#3D0505] border border-gold/30 text-cream px-4 py-3 rounded-xl shadow-xl z-20 hidden sm:block backdrop-blur-md">
                                <div className="flex items-center gap-2">
                                    <FaLeaf className="text-gold text-sm" />
                                    <span className="text-[11px] font-body font-semibold tracking-wider">100% Organic</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Content Column --- */}
                    <div className="w-full lg:w-7/12">
                        <div className="space-y-8">

                            <div>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-5"
                                >
                                    <span className="w-6 h-px bg-gold/60" />
                                    Meet the Visionary
                                </motion.span>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1]"
                                >
                                    The Artist Behind{' '}
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#E8B820] to-[#CD853F]">
                                        GK Mehendi Art
                                    </span>
                                </motion.h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className="space-y-4"
                            >
                                <p className="text-lg text-cream/80 font-body leading-relaxed">
                                    GK Mehendi Art is a trusted name in professional mehendi services across India. With years of experience and a passion for henna artistry, we specialize in creating breathtaking{' '}
                                    <span className="text-gold font-semibold">bridal mehendi</span>, elegant Arabic designs, and custom henna patterns for every occasion.
                                </p>
                                <p className="text-base text-cream/55 font-body leading-relaxed">
                                    Every design tells a story — from the intricate details of a bride&apos;s wedding mehendi to the joyful patterns adorning hands during festivals and celebrations. We use premium-quality, natural henna to ensure rich colour and safe application every time. Whether you are planning a grand wedding, an intimate engagement, or a festive gathering, GK Mehendi Art delivers designs that leave a lasting impression.
                                </p>
                            </motion.div>

                            {/* Stats row */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-8 py-6 border-t border-b border-white/10"
                            >
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex flex-col min-w-[80px]">
                                        <span className="text-2xl md:text-3xl font-bold font-heading text-gold">{stat.value}</span>
                                        <span className="text-[10px] sm:text-[11px] text-cream/40 tracking-wider uppercase font-body mt-0.5">{stat.label}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link
                                    href="/about"
                                    className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-gold to-[#E8B820] rounded-full font-bold text-sm tracking-wider uppercase font-body text-dark hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
                                >
                                    Discover Our Story
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wider uppercase font-body text-cream border border-white/20 hover:border-gold/50 hover:text-gold backdrop-blur-sm transition-all duration-300"
                                >
                                    Explore Services
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
