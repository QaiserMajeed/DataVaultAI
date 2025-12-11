import React from 'react';
import { Mail, ArrowRight, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-[var(--foreground)] text-[var(--background)] texture-radial-inverted">
            <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 text-center">
                {/* Section Header - Inverted */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-2 h-2 border-2 border-[var(--background)]"></div>
                    <div className="h-px w-24 bg-[var(--background)]"></div>
                </div>

                <h2
                    className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tighter"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    Ready to Build
                    <br />
                    Your AI <span className="italic">Solution?</span>
                </h2>

                <p
                    className="text-xl md:text-2xl mb-16 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    Let's discuss your project and create a custom AI solution that drives real business value.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <a
                        href="mailto:hello@datavaultai.com?subject=AI Project Consultation Request"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--background)] text-[var(--foreground)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)] border-2 border-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Get Free Consultation
                        <ArrowRight
                            className="w-4 h-4 transition-transform duration-100 group-hover:translate-x-1"
                            strokeWidth={2}
                        />
                    </a>
                    <a
                        href="mailto:hello@datavaultai.com?subject=Request Project Quote"
                        className="inline-flex items-center px-8 py-4 bg-[var(--foreground)] text-[var(--background)] border-2 border-[var(--background)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Request a Quote
                    </a>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 border-t-2 border-b-2 border-[var(--background)] py-8">
                    <a
                        href="tel:+447440189478"
                        className="inline-flex items-center gap-3 transition-all duration-100 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                    >
                        <Phone className="w-5 h-5" strokeWidth={2} />
                        <span
                            className="font-medium tracking-wider"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            +44 07440 189478
                        </span>
                    </a>
                    <a
                        href="mailto:hello@datavaultai.com"
                        className="inline-flex items-center gap-3 transition-all duration-100 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                    >
                        <Mail className="w-5 h-5" strokeWidth={2} />
                        <span
                            className="font-medium tracking-wider"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            hello@datavaultai.com
                        </span>
                    </a>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-center gap-6 text-sm uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[var(--background)] border border-[var(--background)]" />
                        Available for New Projects
                    </div>
                    <span>•</span>
                    <div>Response within 24h</div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
