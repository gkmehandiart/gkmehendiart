'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Link from 'next/link';

const faqs = [
    {
        question: 'Is your mehendi safe for sensitive skin?',
        answer: 'Absolutely! We use 100% organic henna made from premium Sojat leaves, mixed with essential oils like Eucalyptus and Tea Tree. No PPD, no chemicals, and no artificial colors — completely safe for all skin types.',
    },
    {
        question: 'How long before my wedding should I get mehendi applied?',
        answer: 'For the best stain result, we recommend applying mehendi 48 hours (2 days) before your main ceremony. This allows the stain to develop from orange to its deep mahogany peak, perfectly timed for your big day.',
    },
    {
        question: 'How long does a bridal mehendi session take?',
        answer: 'Depending on the complexity and coverage (elbow vs. full arm), a bridal session typically takes between 4 to 7 hours. We recommend a comfortable seating arrangement and light snacks during this time.',
    },
    {
        question: 'Do you travel to other cities for bookings?',
        answer: 'We primarily serve Chennai and surrounding areas. However, for exclusive bridal bookings, we do travel to other cities in Tamil Nadu. Travel and accommodation charges apply — please contact us to discuss.',
    },
    {
        question: 'How long will the mehendi stain last?',
        answer: 'With proper aftercare, an organic henna stain lasts between 7 to 10 days, gradually fading as your skin naturally exfoliates. We provide detailed aftercare instructions to maximize your stain.',
    },
];

const FAQ = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section className="relative py-28 overflow-hidden bg-[#F9F3E8]" aria-label="Frequently Asked Questions">
            {/* Subtle background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E8] via-[#F5ECE0] to-[#F9F3E8]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-5"
                    >
                        <span className="w-6 h-px bg-gold/60" />
                        Common Inquiries
                        <span className="w-6 h-px bg-gold/60" />
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-green-dark mb-4"
                    >
                        Questions & Answers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-dark/45 font-body text-base"
                    >
                        Everything you need to know before booking.{' '}
                        <Link href="/contact" className="text-gold underline underline-offset-2 hover:text-gold-dark transition-colors">
                            Contact us
                        </Link>{' '}
                        if you need more help.
                    </motion.p>
                </div>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = activeId === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.07 }}
                                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? 'border-gold/35 shadow-md shadow-gold/8 bg-white'
                                        : 'border-gold/12 bg-white hover:border-gold/25'
                                }`}
                            >
                                <button
                                    onClick={() => setActiveId(isOpen ? null : index)}
                                    className="w-full px-7 py-5 text-left flex items-center justify-between gap-4 group"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-heading font-semibold text-base leading-snug transition-colors ${
                                        isOpen ? 'text-green-dark' : 'text-dark group-hover:text-green-dark'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        isOpen
                                            ? 'bg-gold text-dark'
                                            : 'bg-gold/10 text-gold group-hover:bg-gold/20'
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
                                            <div className="px-7 pb-6 pt-0">
                                                <div className="w-full h-px bg-gold/12 mb-5" />
                                                <p className="text-dark/55 text-sm leading-relaxed font-body">
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
    );
};

export default FAQ;
