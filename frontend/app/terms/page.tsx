import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gkmehendiart.com';

export const metadata: Metadata = {
    title: 'Terms and Conditions | GK Mehendi Art',
    description: 'Read the Terms and Conditions for booking and using services from GK Mehendi Art.',
    alternates: {
        canonical: `${siteUrl}/terms`,
    },
    openGraph: {
        title: 'Terms and Conditions | GK Mehendi Art',
        description: 'Service terms for bookings with GK Mehendi Art.',
        url: `${siteUrl}/terms`,
        siteName: 'GK Mehendi Art',
        locale: 'en_IN',
        type: 'website',
    },
};

export default function TermsPage() {
    return (
        <div className="bg-[#F9F3E8] min-h-screen pt-[110px] pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-body font-semibold mb-3">
                    Legal
                </p>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0F0A] mb-4">
                    Terms and Conditions
                </h1>
                <p className="text-sm text-dark/55 font-body mb-10">
                    Last updated: February 24, 2026
                </p>

                <div className="space-y-8 text-dark/80 font-body leading-relaxed">
                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">1. Acceptance of Terms</h2>
                        <p>
                            By using this website or booking with GK Mehendi Art, you agree to these Terms and Conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">2. Services</h2>
                        <p>
                            GK Mehendi Art provides mehendi services for bridal, personal, and event bookings. Service availability depends on date, location, and schedule confirmation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">3. Booking and Confirmation</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Bookings are confirmed only after acceptance by GK Mehendi Art.</li>
                            <li>You must provide accurate details for date, time, venue, and service scope.</li>
                            <li>For major event bookings, advance payment may be required to lock the slot.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">4. Pricing and Payments</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>All prices are quoted in INR unless stated otherwise.</li>
                            <li>Final pricing may vary based on design complexity, number of people, and travel requirements.</li>
                            <li>Any applicable travel or waiting charges will be communicated before final confirmation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">5. Cancellation and Rescheduling</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Please notify us as early as possible for date changes or cancellations.</li>
                            <li>Advance payments, if any, may be non-refundable for last-minute cancellations.</li>
                            <li>Rescheduling is subject to date availability.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">6. Client Responsibilities</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Provide a safe, clean, and well-lit setup for service.</li>
                            <li>Arrive prepared and on time for appointments.</li>
                            <li>Follow aftercare instructions for best stain results.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">7. Allergy and Skin Sensitivity</h2>
                        <p>
                            We use organic henna ingredients. However, skin reactions can vary by person. Clients should disclose known sensitivities before service and request a patch test if needed.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">8. Photos and Portfolio Use</h2>
                        <p>
                            With client permission, service photos may be used for portfolio, social media, or promotional purposes. If you do not want your photos shared, please inform us in advance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">9. Intellectual Property</h2>
                        <p>
                            Website content, branding, and original design materials are the property of GK Mehendi Art or their respective owners and may not be copied or reused without permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">10. Limitation of Liability</h2>
                        <p>
                            GK Mehendi Art is not liable for indirect or incidental losses arising from website use or service delays beyond reasonable control (for example, travel delays, weather, or venue restrictions).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">11. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of India. Disputes, if any, will be subject to the jurisdiction of courts in Chennai, Tamil Nadu.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-[#1A0F0A] mb-2">12. Contact</h2>
                        <p>
                            For questions about these terms, please reach us via our <Link href="/contact" className="text-gold hover:underline">Contact page</Link>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
