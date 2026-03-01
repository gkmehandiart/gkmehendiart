'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    FiChevronRight, FiPhone, FiMapPin,
    FiClock, FiPlus, FiMinus, FiSend, FiCalendar, FiArrowRight,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import type { ReactNode } from 'react';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: 'easeOut' as const },
    viewport: { once: true },
});

function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
    return (
        <motion.span
            {...fadeUp(0)}
            className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-5 ${dark ? 'text-gold' : 'text-gold'}`}
        >
            <span className="w-8 h-px bg-gold/50" />
            {children}
            <span className="w-8 h-px bg-gold/50" />
        </motion.span>
    );
}

const faqs = [
    {
        question: 'How long will the mehendi colour last?',
        answer: 'With proper aftercare, an organic henna stain lasts 7–15 days depending on your skin type and care routine. We provide detailed aftercare instructions to help you get the deepest, longest-lasting stain.',
    },
    {
        question: 'Is your mehendi chemical-free?',
        answer: 'Yes — we use 100% handmade, organic, chemical-free henna paste made from premium Sojat leaves and natural essential oils. No PPD, no artificial colours. Safe for all skin types including sensitive skin.',
    },
    {
        question: 'Do you travel to venues and homes?',
        answer: 'Yes! We offer full doorstep service across Chennai. For outstation bookings within Tamil Nadu, travel and accommodation charges apply. Please contact us to discuss your requirements.',
    },
    {
        question: 'How early should I book bridal mehendi?',
        answer: 'We recommend booking at least 4–6 weeks in advance, especially during peak wedding season (October–March). Bridal slots fill up quickly, so earlier is always better to secure your preferred date.',
    },
];

const subjectOptions = [
    'Bridal Booking',
    'Arabic Mehendi',
    'Traditional Mehendi',
    'Price Inquiry',
    'General Query',
];

export default function ContactClient() {
    const [activeId, setActiveId] = useState<number | null>(null);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('Bridal Booking');
    const [message, setMessage] = useState('');

    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '916383927576';
    const phoneDisplay = `+${phone.slice(0, 2)} ${phone.slice(2, 7)} ${phone.slice(7)}`;

    const handleWhatsAppSend = () => {
        const text = `Hi Kalai! My name is ${name || 'a visitor'}. I'm enquiring about: ${subject}. ${message}`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    };

    const contactItems = [
        {
            Icon: FiPhone,
            label: 'Call Us',
            value: phoneDisplay,
            href: `tel:+${phone}`,
        },
        {
            Icon: FaWhatsapp,
            label: 'WhatsApp',
            value: phoneDisplay,
            href: `https://wa.me/${phone}`,
            isExternal: true,
        },
        {
            Icon: FiMapPin,
            label: 'Location',
            value: 'Chennai, Tamil Nadu, India',
            href: null,
        },
        {
            Icon: FiClock,
            label: 'Business Hours',
            value: '9:00 AM – 9:00 PM, Mon–Sun',
            href: null,
        },
    ];

    return (
        <div className="bg-[#1A0F0A] min-h-screen">

            {/* ─── PAGE HERO ─── */}
            <section
                className="relative pt-[89px] pb-24 bg-[#1A0F0A] overflow-hidden"
                aria-label="Contact Header"
            >
                {/* Mandala pattern */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.035]"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern id="contact-mandala" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="18" fill="none" stroke="#D4A017" strokeWidth="0.35" />
                                <circle cx="20" cy="20" r="12" fill="none" stroke="#D4A017" strokeWidth="0.35" />
                                <circle cx="20" cy="20" r="6" fill="none" stroke="#D4A017" strokeWidth="0.35" />
                                <line x1="20" y1="2" x2="20" y2="38" stroke="#D4A017" strokeWidth="0.2" />
                                <line x1="2" y1="20" x2="38" y2="20" stroke="#D4A017" strokeWidth="0.2" />
                                <line x1="7" y1="7" x2="33" y2="33" stroke="#D4A017" strokeWidth="0.2" />
                                <line x1="33" y1="7" x2="7" y2="33" stroke="#D4A017" strokeWidth="0.2" />
                            </pattern>
                        </defs>
                        <rect width="200" height="200" fill="url(#contact-mandala)" />
                    </svg>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A] via-transparent to-[#1A0F0A] pointer-events-none" />
                <div className="absolute top-[89px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">

                    {/* Breadcrumb */}
                    <motion.nav
                        {...fadeUp(0)}
                        aria-label="Breadcrumb"
                        className="flex items-center justify-center gap-2 text-[11px] text-cream/60 font-body tracking-wider uppercase mb-8"
                    >
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <FiChevronRight size={10} />
                        <span className="text-gold">Contact</span>
                    </motion.nav>

                    {/* Display script */}
                    <motion.div
                        {...fadeUp(0.06)}
                        className="text-3xl font-display text-gold/60 mb-3"
                        aria-hidden="true"
                    >
                        Get in Touch
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        {...fadeUp(0.12)}
                        className="text-5xl md:text-6xl font-heading font-bold text-cream leading-tight mb-6"
                    >
                        Let&apos;s Create Something{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#E8B820]">
                            Beautiful Together
                        </span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp(0.18)}
                        className="text-cream/70 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
                    >
                        Have a question or ready to book? Reach out and Kalai will respond within a few hours.
                    </motion.p>

                    {/* Quick connect pills */}
                    <motion.div
                        {...fadeUp(0.24)}
                        className="flex flex-wrap items-center justify-center gap-3"
                    >
                        <a
                            href={`tel:+${phone}`}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 text-cream/60 text-xs font-body font-semibold uppercase tracking-widest hover:border-gold/40 hover:text-gold transition-all duration-300"
                        >
                            <FiPhone size={12} />
                            Call Now
                        </a>
                        <a
                            href={`https://wa.me/${phone}?text=Hi%20Kalai!%20I%20would%20like%20to%20enquire%20about%20your%20mehendi%20services.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-600/20 border border-green-400/30 text-green-400 text-xs font-body font-semibold uppercase tracking-widest hover:bg-green-600/30 hover:border-green-400/50 transition-all duration-300"
                        >
                            <FaWhatsapp size={13} />
                            WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ─── CONTACT INFO + WHATSAPP FORM ─── */}
            <section className="bg-[#F9F3E8] py-20 relative overflow-hidden" aria-label="Contact Details">
                {/* Subtle texture */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.025]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

                        {/* Contact info cards */}
                        <div>
                            <div className="mb-8">
                                <SectionLabel>Reach Us</SectionLabel>
                                <motion.h2
                                    {...fadeUp(0.06)}
                                    className="text-3xl md:text-4xl font-heading font-bold text-[#1A0F0A] leading-snug"
                                >
                                    We&apos;re Always{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#B8860B]">
                                        Here for You
                                    </span>
                                </motion.h2>
                                <motion.p
                                    {...fadeUp(0.1)}
                                    className="text-dark/50 font-body text-sm mt-3 leading-relaxed max-w-md"
                                >
                                    Available every day of the week. Reach us by phone or WhatsApp — we respond promptly.
                                </motion.p>
                            </div>

                            <address className="not-italic space-y-3">
                                {contactItems.map(({ Icon, label, value, href, isExternal }, index) => (
                                    <motion.div
                                        key={label}
                                        {...fadeUp(0.06 + index * 0.07)}
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gold/12 hover:border-gold/30 hover:shadow-md hover:shadow-gold/8 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-gold to-[#B8860B] flex items-center justify-center text-dark shadow-md shadow-gold/20">
                                            <Icon size={16} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] text-dark/60 font-body uppercase tracking-widest mb-0.5">{label}</p>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                                    className="text-sm font-heading font-semibold text-dark group-hover:text-gold transition-colors truncate block"
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="text-sm font-heading font-semibold text-dark">{value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </address>
                        </div>

                        {/* WhatsApp quick-message form */}
                        <motion.div
                            {...fadeUp(0.15)}
                            className="relative bg-[#1A0F0A] rounded-2xl p-8 border border-white/5 shadow-2xl shadow-dark/30 overflow-hidden"
                        >
                            {/* Subtle glow */}
                            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-green-600/20 border border-green-400/20 flex items-center justify-center">
                                        <FaWhatsapp className="text-green-400 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-cream/60 font-body uppercase tracking-[0.25em]">Quick Message</p>
                                        <h2 className="text-lg font-heading font-bold text-cream leading-none">Chat with Kalai</h2>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-white/8 mb-6" />

                                {/* Subject pills */}
                                <div className="mb-5">
                                    <p className="text-[10px] text-cream/60 font-body uppercase tracking-widest mb-2.5">I&apos;m enquiring about</p>
                                    <div className="flex flex-wrap gap-2">
                                        {subjectOptions.map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setSubject(opt)}
                                                className={`px-3 py-1 rounded-full text-[10px] font-body font-semibold uppercase tracking-wider transition-all duration-200 ${
                                                    subject === opt
                                                        ? 'bg-gold text-dark shadow-sm shadow-gold/30'
                                                        : 'border border-white/15 text-cream/50 hover:border-gold/40 hover:text-cream/80'
                                                }`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Name */}
                                <div className="mb-4">
                                    <label htmlFor="contact-name" className="block text-[10px] text-cream/60 font-body uppercase tracking-widest mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="e.g. Priya Sharma"
                                        className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-cream text-sm font-body placeholder-cream/25 focus:outline-none focus:border-gold/40 focus:bg-white/8 transition-all duration-200"
                                    />
                                </div>

                                {/* Message */}
                                <div className="mb-6">
                                    <label htmlFor="contact-message" className="block text-[10px] text-cream/60 font-body uppercase tracking-widest mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        rows={4}
                                        placeholder="Tell us your event date, location, and design preferences…"
                                        className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-cream text-sm font-body placeholder-cream/25 focus:outline-none focus:border-gold/40 focus:bg-white/8 transition-all duration-200 resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={handleWhatsAppSend}
                                    className="group relative w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase font-body text-dark overflow-hidden shadow-lg shadow-gold/20"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-gold to-[#E8B820] group-hover:from-[#E8B820] group-hover:to-gold transition-all duration-[400ms]" />
                                    <FiSend className="relative z-10 w-4 h-4" />
                                    <span className="relative z-10">Send on WhatsApp</span>
                                </motion.button>

                                <p className="text-center text-[10px] text-cream/25 font-body mt-3">
                                    Opens WhatsApp with your message pre-filled
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ACCORDION ─── */}
            <section className="relative py-20 bg-[#1B4D3E] overflow-hidden" aria-label="Frequently Asked Questions">
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D3E] via-[#163D31] to-[#1B4D3E] pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

                <div className="container mx-auto px-6 max-w-3xl relative z-10">

                    <div className="text-center mb-12">
                        <SectionLabel>Common Questions</SectionLabel>
                        <motion.h2
                            {...fadeUp(0.06)}
                            className="text-3xl md:text-4xl font-heading font-bold text-cream"
                        >
                            Quick Answers
                        </motion.h2>
                        <motion.p
                            {...fadeUp(0.1)}
                            className="text-cream/60 font-body text-sm mt-3"
                        >
                            Everything you need to know before getting in touch.
                        </motion.p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = activeId === index;
                            return (
                                <motion.div
                                    key={index}
                                    {...fadeUp(0.06 + index * 0.08)}
                                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                                        isOpen
                                            ? 'border-gold/35 bg-white/8 shadow-md shadow-black/20'
                                            : 'border-white/10 bg-white/5 hover:border-white/20'
                                    }`}
                                >
                                    <button
                                        onClick={() => setActiveId(isOpen ? null : index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                                        aria-expanded={isOpen}
                                    >
                                        <span className={`font-heading font-semibold text-sm leading-snug transition-colors ${
                                            isOpen ? 'text-gold' : 'text-cream/80 group-hover:text-cream'
                                        }`}>
                                            {faq.question}
                                        </span>
                                        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            isOpen
                                                ? 'bg-gold text-dark'
                                                : 'bg-white/10 text-cream/60 group-hover:bg-white/15'
                                        }`}>
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
                                                transition={{ duration: 0.28, ease: 'easeInOut' }}
                                            >
                                                <div className="px-6 pb-5 pt-0">
                                                    <div className="w-full h-px bg-white/10 mb-4" />
                                                    <p className="text-cream/55 text-sm leading-relaxed font-body">
                                                        {faq.answer}
                                                    </p>
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

            {/* ─── BOOK CTA ─── */}
            <section className="bg-[#1A0F0A] py-20 border-t border-white/5" aria-label="Book Appointment">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <SectionLabel>Ready to Begin?</SectionLabel>

                    <motion.h2
                        {...fadeUp(0.06)}
                        className="text-3xl md:text-4xl font-heading font-bold text-cream mb-4"
                    >
                        Book Your Mehendi{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#E8B820]">
                            Session Today
                        </span>
                    </motion.h2>

                    <motion.p
                        {...fadeUp(0.12)}
                        className="text-cream/45 font-body text-base max-w-xl mx-auto mb-10"
                    >
                        Bridal slots fill up fast during wedding season. Reserve your date early and let Kalai craft a design that tells your unique story.
                    </motion.p>

                    <motion.div
                        {...fadeUp(0.18)}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                    >
                        <Link href="/services">
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="group relative flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase font-body text-dark overflow-hidden cursor-pointer shadow-xl shadow-gold/20"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-gold to-[#E8B820] group-hover:from-[#E8B820] group-hover:to-gold transition-all duration-[400ms]" />
                                <FiCalendar className="relative z-10 w-4 h-4" />
                                <span className="relative z-10">View Packages</span>
                                <FiArrowRight className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </motion.div>
                        </Link>

                        <a
                            href={`https://wa.me/${phone}?text=Hi%20Kalai!%20I%20would%20like%20to%20enquire%20about%20booking%20a%20mehendi%20session.`}
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

                    {/* Trust signals */}
                    <motion.div
                        {...fadeUp(0.24)}
                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-cream/25 text-[10px] tracking-wider font-body uppercase"
                    >
                        <span>✓ Organic &amp; Chemical-Free</span>
                        <span className="hidden sm:block w-px h-3 bg-white/15" />
                        <span>✓ Doorstep Service</span>
                        <span className="hidden sm:block w-px h-3 bg-white/15" />
                        <span>✓ 2000+ Happy Brides</span>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
