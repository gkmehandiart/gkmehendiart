
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Inquiry & Design",
            description: "Reach out via our booking form or WhatsApp. We'll discuss your event type, design preferences, and bridal style."
        },
        {
            number: "02",
            title: "Consultation",
            description: "For bridal bookings, we offer a consultation to finalize the layout—covering hands, feet, and intricate stories (figures)."
        },
        {
            number: "03",
            title: "Application",
            description: "Using our signature 100% organic mix, we apply the design with precision, focusing on neatness and symmetry."
        },
        {
            number: "04",
            title: "Aftercare & Stain",
            description: "We provide specialized sealant and aftercare tips to ensure the most vibrant mahogany stain for your big day."
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden text-white" aria-label="Our Artistic Journey">
            {/* Peacock Green & Gold Premium Background */}
            <div className="absolute inset-0 z-0 bg-[#003135]">
                {/* Deep Peacock Green Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#004953] via-[#003135] to-[#012124]" />

                {/* Subtle Mehendi Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50c10-10 20-10 30 0s10 20 0 30-20 10-30 0-10-20 0-30z' fill='%23D4A017' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                        backgroundSize: '150px 150px'
                    }}
                />

                {/* Golden Light Effects */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(212,160,23,0.15)_0%,_transparent_40%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(212,160,23,0.1)_0%,_transparent_40%)]" />

                {/* Section Border Design */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.4em] font-body font-bold text-sm block mb-4"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight"
                    >
                        Our Artistic Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-cream-soft/70 text-base sm:text-lg md:text-xl leading-relaxed font-body"
                    >
                        From the initial sketch to the final deep-maroon stain, we ensure a seamless and magical experience for every bride and client.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative p-7 sm:p-8 lg:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all duration-500"
                        >
                            <div className="text-7xl font-heading font-bold text-gold/10 absolute top-4 right-8 group-hover:text-gold/20 transition-colors">
                                {step.number}
                            </div>

                            <div className="relative z-10 mt-12">
                                <h3 className="text-2xl font-heading font-bold text-gold mb-6 group-hover:translate-x-1 transition-transform">
                                    {step.title}
                                </h3>
                                <div className="w-12 h-1 bg-gold/30 mb-6 group-hover:w-24 transition-all duration-500" />
                                <p className="text-cream-soft/80 leading-relaxed font-body text-base">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
