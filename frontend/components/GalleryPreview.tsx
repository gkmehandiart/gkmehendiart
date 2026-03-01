'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const galleryItems = [
    { src: '/intricate-bridal-pattern.webp', alt: 'Bridal Mehendi Design', tag: 'Bridal' },
    { src: '/traditional-rajasthani-motifs.webp', alt: 'Intricate Mehendi Art', tag: 'Traditional' },
    { src: '/bridal-hand-adornment.webp', alt: 'Traditional Mehendi', tag: 'Full Hand' },
];

const GalleryPreview: React.FC = () => {
    return (
        <section className="relative py-28 overflow-hidden bg-[#F9F3E8]" aria-label="Gallery Preview">
            {/* Subtle texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.035]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E8] via-[#F5ECE0] to-[#F9F3E8]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-4"
                        >
                            <span className="w-6 h-px bg-gold/60" />
                            Our Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl md:text-5xl font-heading font-bold text-green-dark"
                        >
                            Our Masterpieces
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/gallery"
                            className="group inline-flex items-center gap-2.5 text-sm font-semibold tracking-wider uppercase font-body text-dark/60 hover:text-green-dark transition-colors duration-200"
                        >
                            View Full Gallery
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                    </motion.div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                    {galleryItems.map((image, index) => (
                        <motion.figure
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="group relative overflow-hidden rounded-2xl border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-2xl transition-all duration-500 m-0"
                        >
                            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px]">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    priority={index === 0}
                                />
                            </div>

                            {/* Persistent gradient — for caption readability; deepens on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-[400ms]" />

                            {/* Tag — top left, always visible */}
                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase font-body">
                                {image.tag}
                            </div>

                            {/* Instagram badge — top right, on hover only */}
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                <FaInstagram size={13} />
                            </div>

                            {/* Caption — always visible on mobile; slides up on desktop hover */}
                            <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-[400ms]">
                                <p className="text-white font-heading font-semibold text-base sm:text-lg drop-shadow-lg">{image.alt}</p>
                                <div className="w-8 h-0.5 bg-gold mt-1.5" />
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 border-t border-gold/15"
                >
                    <p className="text-dark/40 text-sm font-body">Freshly curated from our latest sessions.</p>
                    <Link
                        href="/gallery"
                        className="group inline-flex items-center gap-2 px-8 py-3 bg-green-dark text-cream rounded-full font-bold text-sm tracking-wider uppercase font-body hover:bg-[#245C47] hover:shadow-lg transition-all duration-300"
                    >
                        Browse Full Gallery
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default GalleryPreview;
