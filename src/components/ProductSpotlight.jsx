import React from 'react';
import { ExternalLink, Check } from 'lucide-react';
import { cafeQrProduct } from '../data/profileData';

const ProductSpotlight = () => {
    return (
        <section id="product" className="py-24 md:py-32 lg:py-40 relative overflow-hidden border-b-2 border-[var(--foreground)]">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-2 h-2 border-2 border-[var(--foreground)]"></div>
                        <div className="h-px w-24 bg-[var(--foreground)]"></div>
                    </div>
                    <p
                        className="text-xs uppercase tracking-widest font-medium mb-4"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Built &amp; Operated by DataVault.AI
                    </p>
                    <h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Meet {cafeQrProduct.name}
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-2xl leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        {cafeQrProduct.description}
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-1">
                    {cafeQrProduct.features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-8 border-2 border-[var(--border-light)] hover:border-[var(--foreground)] transition-all duration-100"
                        >
                            <div className="w-10 h-10 border-2 border-[var(--foreground)] flex items-center justify-center mb-6">
                                <Check className="w-5 h-5" strokeWidth={2} />
                            </div>
                            <h3
                                className="text-xl font-bold mb-3 tracking-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {feature.title}
                            </h3>
                            <p
                                className="text-sm leading-relaxed"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pricing + CTA Bar */}
                <div className="p-8 md:p-10 bg-[var(--foreground)] text-[var(--background)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex flex-wrap gap-8">
                        <div>
                            <div
                                className="text-2xl font-bold mb-1"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {cafeQrProduct.pricing}
                            </div>
                            <div
                                className="text-xs uppercase tracking-widest opacity-70"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Per Location
                            </div>
                        </div>
                        <div>
                            <div
                                className="text-2xl font-bold mb-1"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {cafeQrProduct.trial}
                            </div>
                            <div
                                className="text-xs uppercase tracking-widest opacity-70"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                No Setup Fees
                            </div>
                        </div>
                    </div>
                    <a
                        href={cafeQrProduct.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--background)] text-[var(--foreground)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-transparent hover:text-[var(--background)] border-2 border-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Visit cafeqr.app
                        <ExternalLink
                            className="w-4 h-4 transition-transform duration-100 group-hover:translate-x-1"
                            strokeWidth={2}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductSpotlight;
