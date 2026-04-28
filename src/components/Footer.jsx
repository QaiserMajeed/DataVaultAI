import React from 'react';
import { Github, Twitter, Linkedin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[var(--background)] text-[var(--foreground)] py-12 border-t-2 border-[var(--foreground)]" role="contentinfo">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 border-2 border-[var(--foreground)] flex items-center justify-center">
                                <span
                                    className="font-bold text-sm"
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    DV
                                </span>
                            </div>
                            <span
                                className="text-xl font-bold tracking-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                DataVault AI
                            </span>
                        </div>
                        <p
                            className="text-sm mb-8 max-w-md leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Custom FullStack AI development services for enterprise clients. Expert team delivering production-ready AI solutions.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/datavaultai"
                                target="_blank"
                                rel="noopener noreferrer me"
                                className="w-10 h-10 border-2 border-[var(--foreground)] flex items-center justify-center transition-all duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                aria-label="DataVault.AI on GitHub"
                                title="DataVault.AI on GitHub"
                            >
                                <Github className="w-5 h-5" strokeWidth={2} />
                            </a>
                            <a
                                href="https://twitter.com/datavaultai"
                                target="_blank"
                                rel="noopener noreferrer me"
                                className="w-10 h-10 border-2 border-[var(--foreground)] flex items-center justify-center transition-all duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                aria-label="DataVault.AI on Twitter / X"
                                title="DataVault.AI on Twitter / X"
                            >
                                <Twitter className="w-5 h-5" strokeWidth={2} />
                            </a>
                            <a
                                href="https://linkedin.com/company/datavaultai"
                                target="_blank"
                                rel="noopener noreferrer me"
                                className="w-10 h-10 border-2 border-[var(--foreground)] flex items-center justify-center transition-all duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                aria-label="DataVault.AI on LinkedIn"
                                title="DataVault.AI on LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" strokeWidth={2} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4
                            className="font-bold mb-4 uppercase tracking-widest text-sm"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                            <li>
                                <Link
                                    to="/services/web-development"
                                    className="transition-all duration-100 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                >
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/mobile-development"
                                    className="transition-all duration-100 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                >
                                    Mobile Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/ai-development"
                                    className="transition-all duration-100 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                >
                                    AI Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/web-hosting"
                                    className="transition-all duration-100 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                >
                                    Cloud Hosting
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            className="font-bold mb-4 uppercase tracking-widest text-sm"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Contact
                        </h4>
                        <address className="not-italic">
                        <ul className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                            <li>
                                <a
                                    href="tel:+447440189478"
                                    className="flex items-center gap-2 transition-all duration-100 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                >
                                    <Phone className="w-4 h-4" strokeWidth={2} />
                                    <span>+44 07440 189478</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:hello@datavaultai.com"
                                    className="flex items-center gap-2 transition-all duration-100 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                >
                                    <Mail className="w-4 h-4" strokeWidth={2} />
                                    <span>hello@datavaultai.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="transition-all duration-100 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    className="transition-all duration-100 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                >
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                        </address>
                    </div>
                </div>

                {/* Legal */}
                <div className="pt-8 border-t-2 border-[var(--foreground)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <p
                            className="text-xs uppercase tracking-widest"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            &copy; {new Date().getFullYear()} DataVault AI. All rights reserved.
                        </p>
                        <p
                            className="text-xs opacity-60"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            DataVault AI Ltd · Registered in England &amp; Wales · Company No. [YOUR_COMPANY_NO]
                        </p>
                    </div>
                    <ul
                        className="flex flex-wrap gap-6 text-xs uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        <li>
                            <Link to="/blog" className="hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3">
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3">
                                Terms
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
