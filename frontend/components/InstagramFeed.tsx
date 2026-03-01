'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa';
import Image from 'next/image';

const posts = [
    { id: 1, image: '/intricate-bridal-pattern.webp', likes: '124', comments: '12', link: 'https://www.instagram.com/gk_mehendi_art_official' },
    { id: 2, image: '/traditional-rajasthani-motifs.webp', likes: '89', comments: '5', link: 'https://www.instagram.com/gk_mehendi_art_official' },
    { id: 3, image: '/bridal-hand-adornment.webp', likes: '210', comments: '18', link: 'https://www.instagram.com/gk_mehendi_art_official' },
    { id: 4, image: '/bridal-mehendi-masterpiece.webp', likes: '156', comments: '9', link: 'https://www.instagram.com/gk_mehendi_art_official' },
    { id: 5, image: '/elegant-arabic-design.webp', likes: '178', comments: '14', link: 'https://www.instagram.com/gk_mehendi_art_official' },
    { id: 6, image: '/occasion-henna-design.webp', likes: '142', comments: '7', link: 'https://www.instagram.com/gk_mehendi_art_official' },
];

const InstagramFeed: React.FC = () => {
    return (
        <section className="relative py-28 overflow-hidden bg-[#100806]" aria-label="Instagram Feed">
            {/* Background accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F0A] via-[#100806] to-[#100806] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#f09433]/4 blur-3xl pointer-events-none" />
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
                            Follow Along
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl md:text-5xl font-heading font-bold text-white"
                        >
                            Our Instagram
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-cream/35 mt-3 font-body text-sm tracking-wide"
                        >
                            @gk_mehendi_art_official
                        </motion.p>
                    </div>

                    <motion.a
                        href="https://www.instagram.com/gk_mehendi_art_official"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="self-start md:self-auto inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-bold text-sm tracking-wider uppercase font-body text-white border border-white/15 hover:border-[#f09433]/60 hover:bg-white/5 transition-all duration-300"
                    >
                        <FaInstagram size={15} />
                        Follow Us
                    </motion.a>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.06 }}
                            className="relative aspect-square overflow-hidden rounded-xl border border-white/5 hover:border-[#f09433]/40 group transition-all duration-300"
                        >
                            <Image
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 16vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                                <div className="flex items-center gap-3 text-xs font-body font-semibold">
                                    <span className="flex items-center gap-1">
                                        <FaHeart className="text-[#f09433]" size={11} /> {post.likes}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaComment size={11} /> {post.comments}
                                    </span>
                                </div>
                                <FaInstagram size={18} className="text-white/60 mt-1" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
