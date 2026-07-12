import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cafeQrProduct } from '../data/profileData';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
                {/* Premium Label - Monospace Typography */}
                <div className="mb-3">
                    <span
                        className="text-xs uppercase tracking-widest font-medium border-2 border-[var(--foreground)] px-4 py-2 inline-block"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        OUR FLAGSHIP PRODUCT
                    </span>
                </div>
                <p
                    className="text-xs mb-8 opacity-50 italic"
                    style={{ fontFamily: 'var(--font-mono)' }}
                >
                    yes, DataVault is spelt Valut
                </p>

                {/* Oversized Hero Typography - Editorial Scale */}
                <h1
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-none"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    {cafeQrProduct.name}
                    <br />
                    <span className="italic">{cafeQrProduct.tagline}</span>
                </h1>

                {/* Decorative Rule with Square - Architectural Detail */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-3 h-3 border-2 border-[var(--foreground)]"></div>
                    <div className="h-1 w-32 bg-[var(--foreground)]"></div>
                </div>

                {/* Product-Focused Subheadline - Elegant Serif */}
                <p
                    className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-16 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    {cafeQrProduct.description}{' '}
                    <strong className="font-semibold">Built by DataVault.AI Ltd, a UK Ltd in Liverpool</strong>, who also build custom AI, web, and mobile software for enterprise clients.
                </p>

                {/* Dual CTAs - Sharp & Inverted */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                    {/* Primary CTA - Black Button */}
                    <a
                        href={cafeQrProduct.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--foreground)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Try Café QR
                        <ExternalLink
                            className="w-4 h-4 transition-transform duration-100 group-hover:translate-x-1"
                            strokeWidth={2}
                        />
                    </a>

                    {/* Secondary CTA - Outline Button */}
                    <a
                        href="#services"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--background)] text-[var(--foreground)] border-2 border-[var(--foreground)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Our Dev Services
                        <ArrowRight
                            className="w-4 h-4 transition-transform duration-100 group-hover:translate-x-1"
                            strokeWidth={2}
                        />
                    </a>
                </div>
            </div>

            {/* Thick Section Divider - Architectural Element */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--foreground)]"></div>
        </section>
    );
};

export default Hero;
