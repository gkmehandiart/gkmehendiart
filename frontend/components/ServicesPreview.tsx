
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { FaHeart, FaGem, FaLeaf, FaMagic } from 'react-icons/fa';

const services = [
    {
        id: 1,
        icon: FaHeart,
        tag: 'Bridal',
        title: 'Bridal Mehendi',
        price: 'From ₹2,500',
        description: 'Elaborate, full-hand and full-feet bridal mehendi with traditional motifs, personalized elements, and premium natural henna for deep, long-lasting colour.',
    },
    {
        id: 2,
        icon: FaGem,
        tag: 'Feet',
        title: 'Feet Mehendi',
        price: 'From ₹1,000',
        description: 'Elegant mandala pattern feet mehendi with ankle-length coverage. Perfect for brides and special wedding occasions.',
    },
    {
        id: 3,
        icon: FaLeaf,
        tag: 'Guest · Arabic',
        title: 'Arabic Mehendi',
        price: '₹100 (two hands)',
        description: 'Bold, flowing Arabic mehendi with striking floral trails and geometric patterns. Modern yet timeless look for engagements and parties.',
    },
    {
        id: 4,
        icon: FaMagic,
        tag: 'Guest · Mandala',
        title: 'Mandala Design',
        price: '₹300 (two hands)',
        description: 'Intricate mandala mehendi designs for two hands. Customizable complexity and coverage to suit any celebration or festival.',
    },
];

const ServicesPreview: React.FC = () => {
    return (
        <section className="relative py-28 overflow-hidden bg-[#F9F3E8]" aria-label="Services Preview">
            {/* Subtle background texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E8] via-[#F5ECE0] to-[#F9F3E8]" />

            {/* Section top/bottom accent lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-5"
                    >
                        <span className="w-6 h-px bg-gold/60" />
                        What We Offer
                        <span className="w-6 h-px bg-gold/60" />
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-green-dark mb-5"
                    >
                        Exquisite Mehendi Artistry
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-dark/50 font-body text-base leading-relaxed"
                    >
                        From intimate ceremonies to grand bridal occasions — every design is handcrafted with organic henna and meticulous care. Bridal, wedding, Arabic, engagement, festival, and custom mehendi services available.
                    </motion.p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link key={service.id} href="/services" className="group">
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative bg-white rounded-2xl p-7 border border-gold/10 group-hover:border-gold/30 shadow-sm group-hover:shadow-xl transition-all duration-[400ms] flex flex-col overflow-hidden h-full"
                            >
                                {/* Hover background accent */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                                {/* Tag */}
                                <span className="inline-block self-start text-[10px] tracking-widest uppercase font-body font-bold text-gold/80 bg-gold/8 border border-gold/15 px-3 py-1 rounded-full mb-5">
                                    {service.tag}
                                </span>

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5ECE0] to-[#EDD9B8] flex items-center justify-center text-gold text-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <Icon />
                                </div>

                                {/* Title & Desc */}
                                <h3 className="text-lg font-heading font-bold text-dark mb-2 group-hover:text-green-dark transition-colors">{service.title}</h3>
                                <p className="text-dark/50 text-sm leading-relaxed font-body flex-1 mb-5">{service.description}</p>

                                {/* Price */}
                                <div className="pt-4 border-t border-gold/10">
                                    <span className="text-gold font-bold text-sm font-body">{service.price}</span>
                                </div>
                            </motion.article>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-14"
                >
                    <Link
                        href="/services"
                        className="group inline-flex items-center gap-2.5 px-9 py-3.5 bg-green-dark text-cream rounded-full font-bold text-sm tracking-wider uppercase font-body hover:bg-[#245C47] hover:shadow-xl transition-all duration-300"
                    >
                        View All Services & Packages
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPreview;
