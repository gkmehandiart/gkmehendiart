import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

export const metadata: Metadata = {
    title: 'Privacy Policy | GK Mehendi Art',
    description: 'Read the Privacy Policy for GK Mehendi Art. Learn how we collect, use, protect, and manage your personal information.',
    alternates: {
        canonical: `${siteUrl}/privacy`,
    },
    openGraph: {
        title: 'Privacy Policy | GK Mehendi Art',
        description: 'How GK Mehendi Art handles your personal information.',
        url: `${siteUrl}/privacy`,
        siteName: 'GK Mehendi Art',
        locale: 'en_IN',
        type: 'website',
    },
};

export default function PrivacyPage() {
    return (
        <div className="bg-[#F9F3E8] min-h-screen pt-[110px] pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-body font-semibold mb-3">
                    Legal
                </p>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0F0A] mb-4">
                    Privacy Policy
                </h1>
                <p className="text-sm text-dark/55 font-body mb-10">
                    Last updated: February 24, 2026
                </p>

                <div className="space-y-8 text-dark/80 font-body leading-relaxed">
                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">1. Overview</h2>
                        <p>
                            GK Mehendi Art respects your privacy. This policy explains how we collect, use, and protect your information when you visit our website, contact us, or book our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">2. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Contact details such as your name, phone number, and email (if provided).</li>
                            <li>Booking details such as event date, location, service preferences, and notes.</li>
                            <li>Communication records from WhatsApp, calls, and website forms.</li>
                            <li>Basic technical data such as browser type and pages visited for site performance and security.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">3. How We Use Information</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>To respond to inquiries and confirm appointments.</li>
                            <li>To deliver and manage mehendi services.</li>
                            <li>To send booking updates, reminders, and support messages.</li>
                            <li>To improve website quality, safety, and customer experience.</li>
                            <li>To comply with legal and regulatory requirements.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">4. Sharing of Information</h2>
                        <p>
                            We do not sell your personal information. We may share information only with trusted service providers (such as hosting or communication tools), when required by law, or when needed to complete your booking request.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">5. Data Retention</h2>
                        <p>
                            We keep your information only as long as needed for service delivery, record keeping, dispute handling, and legal compliance. When no longer required, data is deleted or anonymized where practical.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">6. Cookies and Analytics</h2>
                        <p>
                            This website may use essential cookies and basic analytics tools to maintain functionality and understand traffic patterns. You can control cookies through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">7. Security</h2>
                        <p>
                            We use reasonable administrative and technical safeguards to protect your information. However, no online platform can guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">8. Your Choices and Rights</h2>
                        <p>
                            You may request access, correction, or deletion of your personal information, subject to legal obligations. To make a request, contact us using the details below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">9. Children&apos;s Privacy</h2>
                        <p>
                            Our services are not directed to children under 13. We do not knowingly collect personal information from children without appropriate guardian involvement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">10. Policy Updates</h2>
                        <p>
                            We may update this Privacy Policy periodically. Changes will be posted on this page with the revised effective date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">11. Contact</h2>
                        <p>
                            For privacy questions, please contact GK Mehendi Art through our <Link href="/contact" className="text-gold hover:underline">Contact page</Link>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
