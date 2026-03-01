export interface NavLink {
    label: string;
    path: string;
}

/** Main navigation links shared between Navbar and Footer */
export const navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
];

/** Footer quick links (superset of navLinks) */
export const quickLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About Kalai', path: '/about' },
    { label: 'Services & Packages', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
];

/** Footer services links */
export const serviceLinks: NavLink[] = [
    { label: 'Bridal Mehendi', path: '/services' },
    { label: 'Group Ceremonies', path: '/services' },
    { label: 'Doorstep Service', path: '/services' },
    { label: 'Arabic & Modern', path: '/services' },
    { label: 'Festival Designs', path: '/services' },
];
