import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cream px-6">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-heading font-bold text-gold mb-4">404</h1>
                <h2 className="text-2xl font-heading font-bold text-green-dark mb-4">Page Not Found</h2>
                <p className="text-gray-600 font-body mb-8">The page you are looking for does not exist.</p>
                <Link href="/" className="bg-gold hover:bg-gold-dark text-dark px-8 py-3 rounded-full font-semibold font-body transition-colors inline-block">
                    Go Home
                </Link>
            </div>
        </div>
    );
}
