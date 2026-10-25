import React from 'react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { buildBreadcrumbSchema } from '../utils/structuredData';
import { cafeQrProduct } from '../data/profileData';

// Product page for Café QR, the company's own product. Its job is to explain
// what Café QR is and send visitors to the right page on cafeqr.app, so each
// link uses words that describe the page it opens.

const PAGE_URL = 'https://datavalutai.com/products/cafe-qr';

const venueLinks = [
    {
        href: 'https://cafeqr.app/pos-system-for-cafes',
        label: 'POS system for cafés',
        description: 'Counter till, card and cash, kitchen screen and QR ordering for coffee shops and cafés.'
    },
    {
        href: 'https://cafeqr.app/restaurant-pos-system',
        label: 'Restaurant POS system',
        description: 'Floor plan, tabs, waiter app and kitchen tickets by station for sit-down restaurants.'
    },
    {
        href: 'https://cafeqr.app/pub-and-bar-pos-system',
        label: 'Pub and bar EPOS',
        description: 'Open tabs, table ordering from the phone and fast rounds at the bar.'
    },
    {
        href: 'https://cafeqr.app/online-ordering-for-takeaways',
        label: 'Online ordering for takeaways',
        description: 'Your own collection and delivery page with no commission on orders.'
    }
];

const featureLinks = [
    { href: 'https://cafeqr.app/qr-table-ordering', label: 'QR table ordering', description: 'Guests scan, order and pay from their own phone. No app to download.' },
    { href: 'https://cafeqr.app/features/till', label: 'EPOS till', description: 'A card and cash till that runs on any iPad, tablet or laptop.' },
    { href: 'https://cafeqr.app/features/kitchen-display-system', label: 'Kitchen display system', description: 'Every order in one live queue, with timers and printer support.' }
];

const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Café QR',
    url: 'https://cafeqr.app/',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web browser, iPad, Android, Windows, macOS',
    description: cafeQrProduct.description,
    publisher: { '@type': 'Organization', name: 'DATA VALUT AI LTD', url: 'https://datavalutai.com/' },
    offers: {
        '@type': 'Offer',
        price: '9.99',
        priceCurrency: 'GBP',
        url: 'https://cafeqr.app/pricing'
    }
};

const CafeQR = () => {
    const breadcrumbs = buildBreadcrumbSchema([
        { name: 'Home', url: 'https://datavalutai.com/' },
        { name: 'Products', url: 'https://datavalutai.com/#product' },
        { name: 'Café QR', url: PAGE_URL }
    ]);

    return (
        <main>
            <SEO
                title="Café QR - EPOS and QR Ordering for Cafés, Restaurants and Pubs"
                description="Café QR is DataVault.AI's own product: an EPOS with QR table ordering, kitchen screens and online ordering for independent cafés, restaurants, bars and pubs. From £9.99 a month."
                keywords="Café QR, cafe POS system, cafe EPOS, QR table ordering, restaurant POS system, pub EPOS, takeaway online ordering, kitchen display system"
                canonical={PAGE_URL}
                structuredData={[productSchema, breadcrumbs]}
            />

            <section className="min-h-[80vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 texture-grid">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <p className="text-xs uppercase tracking-widest font-medium mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
                        Our product
                    </p>
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                        Café QR
                    </h1>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-3 h-3 border-2 border-[var(--foreground)]"></div>
                        <div className="h-1 w-32 bg-[var(--foreground)]"></div>
                    </div>
                    <p className="text-xl md:text-2xl max-w-3xl mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                        {cafeQrProduct.description}
                    </p>
                    <p className="text-lg max-w-3xl mb-12 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                        We built Café QR in Liverpool and run it ourselves. {cafeQrProduct.pricing} per venue, with a {cafeQrProduct.trial.toLowerCase()} and no card or contract.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://cafeqr.app/"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--foreground)]"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Visit Café QR, the café POS <ExternalLink className="w-4 h-4" strokeWidth={2} />
                        </a>
                        <a
                            href="https://cafeqr.app/demo"
                            className="inline-flex items-center gap-3 px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)] border-2 border-[var(--foreground)]"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Try the live demo café <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        Made for your kind of venue
                    </h2>
                    <div className="grid md:grid-cols-2 gap-1">
                        {venueLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="group block p-8 border-2 border-[var(--border-light)] transition-all duration-100 hover:border-[var(--foreground)]"
                            >
                                <h3 className="text-2xl font-bold mb-3 tracking-tight flex items-center gap-3" style={{ fontFamily: 'var(--font-display)' }}>
                                    {item.label}
                                    <ArrowRight className="w-5 h-5 transition-transform duration-100 group-hover:translate-x-1" strokeWidth={2} />
                                </h3>
                                <p className="leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{item.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        What's inside
                    </h2>
                    <div className="grid md:grid-cols-3 gap-1">
                        {featureLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block p-8 border-2 border-[var(--background)] transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                            >
                                <h3 className="text-xl font-bold mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{item.label}</h3>
                                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{item.description}</p>
                            </a>
                        ))}
                    </div>
                    <ul className="mt-12 grid md:grid-cols-2 gap-4">
                        {cafeQrProduct.features.map((feature) => (
                            <li key={feature.title} className="flex items-start gap-3" style={{ fontFamily: 'var(--font-body)' }}>
                                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2} />
                                <span><strong>{feature.title}.</strong> {feature.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                            {cafeQrProduct.pricing}
                        </h2>
                        <p className="text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                            Per venue. {cafeQrProduct.trial}, no card, no contract.
                        </p>
                    </div>
                    <a
                        href="https://cafeqr.app/pricing"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--foreground)]"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        See Café QR pricing <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default CafeQR;
