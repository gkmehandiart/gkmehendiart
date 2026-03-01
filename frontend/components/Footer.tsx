
'use client';

import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiMapPin, FiArrowUp, FiClock } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { quickLinks, serviceLinks } from '@/lib/navigation';

const Footer: React.FC = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '916383927576';
    const phoneDisplay = `+${phone.slice(0, 2)} ${phone.slice(2, 7)} ${phone.slice(7)}`;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <footer className="relative bg-[#100806] text-cream overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            {/* Background mandala decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="footer-mandala" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                            <circle cx="150" cy="150" r="80" fill="none" stroke="#D4A017" strokeWidth="1" />
                            <circle cx="150" cy="150" r="60" fill="none" stroke="#D4A017" strokeWidth="0.8" />
                            <circle cx="150" cy="150" r="40" fill="none" stroke="#D4A017" strokeWidth="0.6" />
                            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => (
                                <line
                                    key={i}
                                    x1="150" y1="70"
                                    x2="150" y2="130"
                                    stroke="#D4A017"
                                    strokeWidth="0.5"
                                    transform={`rotate(${a} 150 150)`}
                                />
                            ))}
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#footer-mandala)" />
                </svg>
            </div>

            {/* Quote / Tagline Banner */}
            <div className="relative border-b border-white/5 py-8 sm:py-10 px-4 sm:px-6 text-center">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl text-gold/80 leading-tight">
                    Every hand tells a story worth adorning
                </p>
                <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-cream/60 font-body">
                    GK Mehendi Art · Est. 2014 · Chennai
                </p>
            </div>

            {/* Main Footer Grid */}
            <div className="relative container mx-auto px-6 py-16 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Col 1: Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
                            <div className="relative">
                                <Image
                                    src="/gkmehandi_logo.svg"
                                    alt="GK Mehendi Art Logo"
                                    width={44}
                                    height={44}
                                    className="object-contain drop-shadow-lg"
                                />
                                <div className="absolute inset-0 bg-gold/10 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-[17px] font-bold font-heading text-cream tracking-wide">GK Mehendi</span>
                                <span className="text-[9px] tracking-[0.35em] text-gold/70 uppercase mt-0.5 font-body">Artistry &amp; Traditions</span>
                            </div>
                        </Link>

                        <p className="text-cream/50 text-sm leading-relaxed font-body mb-7 max-w-xs">
                            Bringing timeless elegance to your most cherished celebrations. Handcrafted organic henna for brides across Chennai.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/gk_mehendi_art_official"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/50 hover:border-gold/50 hover:text-gold hover:bg-gold/5 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={16} />
                            </a>
                            <a
                                href={`https://wa.me/${phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/50 hover:border-gold/50 hover:text-gold hover:bg-gold/5 transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={16} />
                            </a>
                            <a
                                href={`tel:+${phone}`}
                                className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/50 hover:border-gold/50 hover:text-gold hover:bg-gold/5 transition-all duration-300"
                                aria-label="Phone"
                            >
                                <FiPhone size={15} />
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h3 className="text-[11px] tracking-[0.3em] uppercase font-bold text-gold/80 font-body mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.path}
                                        className="group flex items-center gap-2 text-sm text-cream/50 hover:text-cream transition-colors duration-200 font-body"
                                    >
                                        <span className="w-3 h-px bg-gold/30 group-hover:w-5 group-hover:bg-gold transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Services */}
                    <div>
                        <h3 className="text-[11px] tracking-[0.3em] uppercase font-bold text-gold/80 font-body mb-6">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((s) => (
                                <li key={s.label}>
                                    <Link
                                        href={s.path}
                                        className="group flex items-center gap-2 text-sm text-cream/50 hover:text-cream transition-colors duration-200 font-body"
                                    >
                                        <span className="w-3 h-px bg-gold/30 group-hover:w-5 group-hover:bg-gold transition-all duration-300" />
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div>
                        <h3 className="text-[11px] tracking-[0.3em] uppercase font-bold text-gold/80 font-body mb-6">
                            Get In Touch
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`tel:+${phone}`}
                                    className="flex items-start gap-3 group"
                                >
                                    <FiPhone className="text-gold mt-0.5 flex-shrink-0 w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm text-cream/50 group-hover:text-cream transition-colors font-body">{phoneDisplay}</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiMapPin className="text-gold mt-0.5 flex-shrink-0 w-4 h-4" />
                                <span className="text-sm text-cream/50 font-body">
                                    Chennai, Tamil Nadu<br />
                                    <span className="text-cream/60 text-xs">Doorstep service available</span>
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiClock className="text-gold mt-0.5 flex-shrink-0 w-4 h-4" />
                                <span className="text-sm text-cream/50 font-body">
                                    Mon – Sun: 9 AM – 8 PM<br />
                                    <span className="text-cream/60 text-xs">Advance booking preferred</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 py-5 max-w-7xl flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                    <p className="text-[10px] sm:text-[11px] text-cream/60 font-body tracking-wider text-center sm:text-left">
                        &copy; {new Date().getFullYear()} GK Mehendi Art. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-x-5 text-[10px] sm:text-[11px] text-cream/60 font-body">
                        <Link href="/privacy" className="hover:text-cream/60 transition-colors">Privacy</Link>
                        <span className="hidden sm:block w-px h-3 bg-white/10" />
                        <Link href="/terms" className="hover:text-cream/60 transition-colors">Terms</Link>
                        <span className="hidden sm:block w-px h-3 bg-white/10" />
                        <span className="text-center">Made with ♥ in Chennai</span>
                        <span className="hidden sm:block w-px h-3 bg-white/10" />
                        <a
                            href="https://siruailabs.pages.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gold transition-colors text-center"
                        >
                            Designed by Siru AI Labs
                        </a>
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-[10px] sm:text-[11px] text-cream/60 hover:text-gold transition-colors font-body tracking-wider uppercase"
                        aria-label="Back to top"
                    >
                        <FiArrowUp className="group-hover:-translate-y-0.5 transition-transform duration-200" size={13} />
                        Back to top
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
