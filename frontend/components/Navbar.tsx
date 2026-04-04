
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/navigation';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const progressRef = useRef<HTMLDivElement>(null);
    const isScrolledRef = useRef(false);

    useEffect(() => {
        let ticking = false;
        const applyScroll = () => {
            const scrollY = window.scrollY;
            const nextScrolled = scrollY > 60;
            if (nextScrolled !== isScrolledRef.current) {
                isScrolledRef.current = nextScrolled;
                setIsScrolled(nextScrolled);
            }
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
            const bar = progressRef.current;
            if (bar) bar.style.width = `${pct}%`;
            ticking = false;
        };
        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(applyScroll);
            }
        };
        applyScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = pathname === '/';
    const isTransparent = !isScrolled && isHome;

    return (
        <>
            {/* Top Announcement Bar */}
            <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-[#1A0F0A] border-b border-gold/20 py-2 px-6 text-center">
                <div className="flex items-center justify-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-gold animate-pulse" />
                    <p className="text-[11px] tracking-[0.2em] uppercase text-cream-soft/70 font-body">
                        Chennai&apos;s Premier Bridal Mehendi Artist &nbsp;·&nbsp; Organic &amp; Chemical-Free
                    </p>
                    <a
                        href="tel:+916383927576"
                        className="hidden sm:flex items-center gap-1.5 ml-4 text-gold text-[11px] tracking-wider hover:text-cream transition-colors"
                    >
                        <FiPhone className="w-3 h-3" />
                        <span className="font-body">Call Now</span>
                    </a>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`fixed top-0 md:top-[33px] left-0 right-0 z-50 transition-all duration-500 ${isTransparent
                    ? 'bg-transparent py-5'
                    : 'bg-[#100806]/95 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-gold/15 py-3.5'
                    }`}
            >
                {/* Scroll progress: DOM width only — avoids React re-renders every frame */}
                <div
                    ref={progressRef}
                    className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-[width] duration-150"
                    style={{ width: '0%' }}
                />

                <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-3.5 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0"
                        >
                            <Image
                                src="/gkmehandi_logo.svg"
                                alt="GK Mehendi Art Logo"
                                width={44}
                                height={44}
                                className="w-full h-full drop-shadow-lg object-contain"
                            />
                            <div className="absolute inset-0 bg-gold/15 blur-lg rounded-full scale-150 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>

                        <div className="flex flex-col leading-none">
                            <span className="text-[18px] md:text-[20px] font-bold font-heading tracking-wide text-cream">
                                GK Mehendi
                            </span>
                            <span className="text-[9px] md:text-[10px] font-medium tracking-[0.35em] text-gold/90 uppercase mt-0.5">
                                Artistry &amp; Traditions
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.path}
                                    className={`relative px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase font-body group transition-colors duration-200 ${isActive ? 'text-gold' : 'text-cream/80 hover:text-cream'
                                        }`}
                                >
                                    {link.label}
                                    {/* Active dot */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                                        />
                                    )}
                                    {/* Hover underline */}
                                    {!isActive && (
                                        <span className="absolute -bottom-0.5 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                                    )}
                                </Link>
                            );
                        })}

                    </div>

                    {/* Mobile Toggle — minimum 44×44px touch target */}
                    <button
                        className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-full border border-white/10 text-cream hover:text-gold hover:border-gold/30 transition-all"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={isMobileMenuOpen ? 'close' : 'open'}
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isMobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                            </motion.span>
                        </AnimatePresence>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        id="mobile-menu"
                        className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#100806]/98 backdrop-blur-2xl flex flex-col md:hidden"
                        style={{ paddingTop: '72px' }}
                    >
                        {/* Decorative top border */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                        <div className="flex flex-col items-center justify-center flex-1 gap-1 py-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 + i * 0.07, ease: 'easeOut' }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block py-4 text-2xl font-heading font-medium tracking-wider transition-colors ${pathname === link.path
                                            ? 'text-gold'
                                            : 'text-cream/80 hover:text-cream'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                    <div className="w-12 h-px bg-gold/10 mx-auto" />
                                </motion.div>
                            ))}

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 text-cream/30 text-xs tracking-widest uppercase font-body"
                            >
                                GK Mehendi Art · Chennai
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
