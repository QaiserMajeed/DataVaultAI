import React from 'react';
import { Mail, ArrowRight, Phone, Calendar } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

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
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12">
                    <a
                        href="https://calendly.com/datavaultai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--background)] text-[var(--foreground)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)] border-2 border-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        <Calendar className="w-4 h-4" strokeWidth={2} />
                        Book a Call
                    </a>
                    <a
                        href="https://wa.me/447440189478"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--background)] text-[var(--foreground)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)] border-2 border-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        <WhatsAppIcon />
                        WhatsApp Us
                    </a>
                    <a
                        href="mailto:hello@datavaultai.com?subject=AI Project Consultation Request"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Get Free Consultation
                        <ArrowRight
                            className="w-4 h-4 transition-transform duration-100 group-hover:translate-x-1"
                            strokeWidth={2}
                        />
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
