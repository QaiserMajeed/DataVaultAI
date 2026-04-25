import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/#faq' },
    ];

    const serviceLinks = [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Mobile Development', href: '/services/mobile-development' },
        { name: 'AI Development', href: '/services/ai-development' },
        { name: 'Web Hosting', href: '/services/web-hosting' },
    ];

    const isActive = (href) => {
        if (href === '/') return location.pathname === '/';
        return location.pathname.startsWith(href);
    };

    return (
        <>
            {/* Desktop Sharp Navbar */}
            <nav
                aria-label="Primary"
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-100',
                    'border-b bg-[var(--background)]',
                    isScrolled ? 'border-[var(--foreground)]' : 'border-[var(--border-light)]'
                )}
            >
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo - Pure Typography */}
                        <Link
                            to="/"
                            className="flex items-center gap-3 group"
                        >
                            <div className="w-8 h-8 border-2 border-[var(--foreground)] flex items-center justify-center transition-all duration-100 group-hover:bg-[var(--foreground)]">
                                <span className="font-mono text-xs font-bold group-hover:text-[var(--background)] transition-colors duration-100">
                                    DV
                                </span>
                            </div>
                            <span
                                className="text-lg font-bold tracking-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                DataVault.AI
                            </span>
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={cn(
                                        'relative text-sm uppercase tracking-widest font-medium transition-all duration-100',
                                        'focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3',
                                        isActive(link.href)
                                            ? 'text-[var(--foreground)] border-b-2 border-[var(--foreground)] pb-1'
                                            : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-b-2 hover:border-[var(--foreground)] hover:pb-1'
                                    )}
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <button
                                    className={cn(
                                        'flex items-center gap-2 text-sm uppercase tracking-widest font-medium transition-all duration-100',
                                        'focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3',
                                        isServicesOpen
                                            ? 'text-[var(--foreground)] border-b-2 border-[var(--foreground)] pb-1'
                                            : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-b-2 hover:border-[var(--foreground)] hover:pb-1'
                                    )}
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    Services
                                    <ChevronDown
                                        className={cn(
                                            'w-3 h-3 transition-transform duration-100',
                                            isServicesOpen && 'rotate-180'
                                        )}
                                        strokeWidth={2}
                                    />
                                </button>

                                {isServicesOpen && (
                                    <div className="absolute top-full left-0 pt-4">
                                        <div className="bg-[var(--background)] border-2 border-[var(--foreground)] min-w-[240px]">
                                            {serviceLinks.map((link, index) => (
                                                <React.Fragment key={link.name}>
                                                    <Link
                                                        to={link.href}
                                                        className="block px-6 py-4 text-sm transition-all duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-[-3px]"
                                                        style={{ fontFamily: 'var(--font-body)' }}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                    {index < serviceLinks.length - 1 && (
                                                        <div className="h-px bg-[var(--border-light)]" />
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CTA Button - Inverted */}
                            <a
                                href="/#contact"
                                className="px-8 py-3 bg-[var(--foreground)] text-[var(--background)] text-sm uppercase tracking-widest font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--foreground)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 border-2 border-[var(--foreground)] transition-all duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X size={20} strokeWidth={2} />
                            ) : (
                                <Menu size={20} strokeWidth={2} />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden" style={{ top: '64px' }}>
                    <div className="absolute inset-0 bg-[var(--background)] border-t-2 border-[var(--foreground)] overflow-y-auto">
                        <div className="px-6 py-8 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={cn(
                                        'block px-4 py-4 text-sm uppercase tracking-widest font-medium transition-all duration-100',
                                        'border-2',
                                        isActive(link.href)
                                            ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                                            : 'bg-[var(--background)] text-[var(--foreground)] border-[var(--border-light)] hover:border-[var(--foreground)]'
                                    )}
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="pt-6">
                                <div className="h-px bg-[var(--foreground)] mb-6" />
                                <div
                                    className="text-xs uppercase tracking-widest font-bold mb-4 px-4"
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    Services
                                </div>
                                {serviceLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="block px-4 py-4 text-sm border-2 border-[var(--border-light)] mb-1 transition-all duration-100 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <a
                                href="/#contact"
                                className="block mt-6 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] text-sm uppercase tracking-widest font-semibold text-center border-2 border-[var(--foreground)] transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                                style={{ fontFamily: 'var(--font-mono)' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
