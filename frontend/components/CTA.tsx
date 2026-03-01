'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import MandalaBackground from './MandalaBackground';

const CTA: React.FC = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '916383927576';

    return (
        <section className="relative py-28 overflow-hidden text-white" aria-label="Book Now">
            <MandalaBackground patternId="cta-mandala" />

            {/* Extra warm overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none z-[1]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-[2]" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Label */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-6"
                    >
                        <span className="w-6 h-px bg-gold/60" />
                        Limited Slots Available
                        <span className="w-6 h-px bg-gold/60" />
                    </motion.span>

                    {/* Display script */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="text-3xl md:text-4xl font-display text-gold/70 mb-3"
                        aria-hidden="true"
                    >
                        Your Dream Mehendi
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-white leading-[1.1] mb-6 max-w-3xl"
                    >
                        Reserve Your Date Before{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#E8B820]">
                            It&apos;s Gone
                        </span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-cream/55 font-body text-base md:text-lg leading-relaxed max-w-2xl mb-12"
                    >
                        Bridal slots for the wedding season fill up fast. Book now to secure your preferred date and let us adorn your hands with a design that tells your unique story.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 items-center"
                    >
                        <a
                            href={`https://wa.me/${phone}?text=Hi%20Kalai!%20I%20would%20like%20to%20inquire%20about%20a%20mehendi%20session.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="group relative flex items-center gap-2.5 px-9 py-4 rounded-full font-bold text-sm tracking-widest uppercase font-body text-dark overflow-hidden cursor-pointer shadow-2xl shadow-gold/25"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-gold to-[#E8B820] group-hover:from-[#E8B820] group-hover:to-gold transition-all duration-[400ms]" />
                                <FaWhatsapp className="relative z-10 w-4 h-4" />
                                <span className="relative z-10">Chat on WhatsApp</span>
                            </motion.div>
                        </a>
                    </motion.div>

                    {/* Trust signals */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.45 }}
                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-cream/30 text-[11px] tracking-wider font-body uppercase"
                    >
                        <span>✓ Organic &amp; Chemical-Free</span>
                        <span className="hidden sm:block w-px h-3 bg-white/15" />
                        <span>✓ Doorstep Service</span>
                        <span className="hidden sm:block w-px h-3 bg-white/15" />
                        <span>✓ 2000+ Happy Brides</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
