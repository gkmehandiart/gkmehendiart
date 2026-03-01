export const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: 'easeOut' as const },
    viewport: { once: true },
});
