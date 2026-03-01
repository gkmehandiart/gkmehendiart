'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
    /** Small uppercase label above heading */
    label: string;
    /** Main heading text */
    heading: string;
    /** Optional description below heading */
    description?: string;
    /** Light theme (for dark backgrounds) or dark theme (for light backgrounds) */
    theme?: 'light' | 'dark';
    className?: string;
}

export default function SectionHeader({
    label,
    heading,
    description,
    theme = 'dark',
    className = '',
}: SectionHeaderProps) {
    const labelColor = theme === 'light' ? 'text-gold' : 'text-gold';
    const headingColor = theme === 'light' ? 'text-white' : 'text-dark dark:text-white';
    const descColor = theme === 'light' ? 'text-cream/60' : 'text-gray-600 dark:text-gray-400';

    return (
        <div className={`text-center max-w-2xl mx-auto ${className}`}>
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`inline-flex items-center gap-2 ${labelColor} text-[11px] uppercase tracking-[0.35em] font-body font-semibold mb-5`}
            >
                <span className="w-6 h-px bg-gold/60" />
                {label}
                <span className="w-6 h-px bg-gold/60" />
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`text-4xl md:text-5xl font-heading font-bold ${headingColor} mb-5`}
            >
                {heading}
            </motion.h2>
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`text-base md:text-lg font-body ${descColor}`}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}
