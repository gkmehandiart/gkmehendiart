
'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaPalette, FaHistory, FaClock } from 'react-icons/fa';

const features = [
    {
        icon: FaLeaf,
        number: '01',
        title: '100% Organic Henna',
        description: 'We use only handmade, fresh henna cones with no chemicals or preservatives, ensuring a deep, dark, and safe stain.',
    },
    {
        icon: FaPalette,
        number: '02',
        title: 'Customized Artistry',
        description: 'From traditional Indian motifs to modern figurative and Arabic patterns, every design is uniquely tailored for you.',
    },
    {
        icon: FaHistory,
        number: '03',
        title: '10+ Years Experience',
        description: 'Kalai brings a decade of expertise in bridal mehendi, having decorated thousands of brides across Chennai.',
    },
    {
        icon: FaClock,
        number: '04',
        title: 'Stain Perfection',
        description: 'Our specialized aftercare guidance ensures your mehendi reaches its peak color exactly on your wedding day.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="relative py-28 overflow-hidden bg-[#1B4D3E]" aria-label="Why Choose GK Mehendi">
            {/* Background texture */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D3E] via-[#174438] to-[#122E2A]" />
                {/* Gold radial glow */}
                <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gold/5 blur-3xl translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/4 blur-3xl -translate-x-1/4 translate-y-1/4" />
            </div>

            {/* Top/bottom accent lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Section header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-5"
                    >
                        <span className="w-6 h-px bg-gold/60" />
                        Quality Redefined
                        <span className="w-6 h-px bg-gold/60" />
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-5"
                    >
                        The GK Mehendi Advantage
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-cream/45 font-body text-base leading-relaxed"
                    >
                        Four pillars that set us apart from every other mehendi artist in Chennai.
                    </motion.p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-7 rounded-2xl border border-white/8 bg-white/5 hover:bg-white/10 hover:border-gold/30 backdrop-blur-sm transition-all duration-[400ms]"
                            >
                                {/* Step number — decorative */}
                                <span className="absolute top-5 right-6 text-5xl font-heading font-bold text-white/5 group-hover:text-white/8 transition-colors select-none">
                                    {feature.number}
                                </span>

                                {/* Icon */}
                                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-lg mb-6 group-hover:bg-gold/20 group-hover:scale-105 transition-all duration-300">
                                    <Icon />
                                </div>

                                {/* Expanding gold line */}
                                <div className="w-8 h-0.5 bg-gold/40 mb-5 group-hover:w-14 group-hover:bg-gold transition-all duration-500" />

                                <h3 className="text-lg font-heading font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-cream/50 text-sm leading-relaxed font-body">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
