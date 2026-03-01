'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';
import MandalaBackground from './MandalaBackground';
import StarRating from './ui/StarRating';
import SectionHeader from './ui/SectionHeader';

const testimonials = [
    {
        name: 'Priya S.',
        role: 'Bride · Tamil Wedding',
        review: 'Kalai did my bridal mehendi and it came out so dark and beautiful. I got so many compliments on my wedding day!',
        rating: 5,
    },
    {
        name: 'Anitha R.',
        role: 'Bride · Reception',
        review: 'The design was intricate and exactly what I wanted. She is very professional, patient, and the stain was incredible.',
        rating: 5,
    },
    {
        name: 'Deepa M.',
        role: 'Client · Baby Shower',
        review: 'Love the organic stain! It lasted for over two weeks. Highly recommend GK Mehendi Art for any occasion.',
        rating: 5,
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="relative py-28 overflow-hidden text-white" aria-label="Customer Testimonials">
            <MandalaBackground patternId="testimonial-mandala" />

            {/* Top/bottom lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-10" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <SectionHeader
                    label="Success Stories"
                    heading="Love From Our Brides"
                    theme="light"
                    className="mb-16"
                />

                {/* Rating summary */}
                <div className="text-center -mt-10 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <StarRating rating={5} className="text-gold text-sm" />
                        <span className="text-cream/60 text-xs font-body tracking-wider">4.9 · 120+ Reviews</span>
                    </motion.div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative bg-white/5 border border-white/8 hover:border-gold/25 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col gap-5 sm:gap-6 hover:-translate-y-1.5 transition-all duration-[400ms]"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors duration-300">
                                <FiMessageSquare size={15} />
                            </div>

                            {/* Stars */}
                            <StarRating rating={testimonial.rating} />

                            {/* Review */}
                            <blockquote className="flex-1 text-base text-cream/70 font-body leading-relaxed italic">
                                &ldquo;{testimonial.review}&rdquo;
                            </blockquote>

                            {/* Divider */}
                            <div className="h-px bg-white/8" />

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-[#CD853F] flex items-center justify-center text-dark font-bold font-heading text-base flex-shrink-0 border-2 border-white/10">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-white text-base leading-none mb-1">{testimonial.name}</p>
                                    <p className="text-[11px] text-cream/60 font-body tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
