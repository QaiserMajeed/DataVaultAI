import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
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
        { name: 'FAQ', href: '/#faq' },
    ];

    const serviceLinks = [
        { name: 'Web Development', href: '/services/web-development', icon: '🌐' },
        { name: 'Mobile Development', href: '/services/mobile-development', icon: '📱' },
        { name: 'AI Development', href: '/services/ai-development', icon: '🤖' },
        { name: 'Web Hosting', href: '/services/web-hosting', icon: '☁️' },
    ];

    const isActive = (href) => {
        if (href === '/') return location.pathname === '/';
        return location.pathname.startsWith(href);
    };

    return (
        <>
            {/* Desktop Floating Navbar */}
            <nav
                className={cn(
                    'fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 hidden md:block',
                    isScrolled ? 'top-4' : 'top-6'
                )}
            >
                <div
                    className="flex items-center gap-1 px-3 py-2 rounded-full"
                    style={{
                        background: 'rgba(15, 23, 42, 0.6)',
                        backdropFilter: 'blur(24px)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/5"
                    >
                        <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)',
                                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                            }}
                        >
                            <Sparkles className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span
                            className="text-sm font-bold"
                            style={{
                                fontFamily: 'Inter, system-ui, sans-serif',
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            DataVault.AI
                        </span>
                    </Link>

                    {/* Divider */}
                    <div className="w-px h-6 bg-white/10" />

                    {/* Nav Links */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={cn(
                                'relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                                isActive(link.href)
                                    ? 'text-white'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                            )}
                            style={{
                                fontFamily: 'Inter, system-ui, sans-serif',
                                letterSpacing: '-0.01em'
                            }}
                        >
                            {isActive(link.href) && (
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)',
                                        border: '1px solid rgba(99, 102, 241, 0.3)'
                                    }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
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
                                'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                                isServicesOpen
                                    ? 'text-white bg-white/5'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                            )}
                            style={{
                                fontFamily: 'Inter, system-ui, sans-serif',
                                letterSpacing: '-0.01em'
                            }}
                        >
                            Services
                            <ChevronDown className={cn(
                                'w-3.5 h-3.5 transition-transform duration-300',
                                isServicesOpen && 'rotate-180'
                            )} />
                        </button>

                        {isServicesOpen && (
                            <div
                                className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                            >
                                <div
                                    className="p-2 rounded-2xl min-w-[280px]"
                                    style={{
                                        background: 'rgba(15, 23, 42, 0.95)',
                                        backdropFilter: 'blur(24px)',
                                        border: '1px solid rgba(99, 102, 241, 0.2)',
                                        boxShadow: '0 12px 48px rgba(0, 0, 0, 0.5)'
                                    }}
                                >
                                    {serviceLinks.map((link, index) => (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/5 group"
                                        >
                                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                                {link.icon}
                                            </span>
                                            <span
                                                className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors"
                                                style={{
                                                    fontFamily: 'Inter, system-ui, sans-serif',
                                                    letterSpacing: '-0.01em'
                                                }}
                                            >
                                                {link.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="w-px h-6 bg-white/10" />

                    {/* CTA Button */}
                    <a
                        href="/#contact"
                        className="relative px-6 py-2 rounded-full text-sm font-semibold overflow-hidden group"
                        style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            letterSpacing: '-0.01em'
                        }}
                    >
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)',
                                boxShadow: '0 4px 16px rgba(99, 102, 241, 0.4)'
                            }}
                        />
                        <div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #4f46e5 0%, #0d9488 100%)'
                            }}
                        />
                        <span className="relative z-10 text-white">Get Started</span>
                    </a>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 md:hidden"
                style={{
                    background: 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(99, 102, 241, 0.1)'
                }}
            >
                <div className="flex items-center justify-between px-4 py-4">
                    <Link to="/" className="flex items-center gap-2">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)'
                            }}
                        >
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span
                            className="text-lg font-bold text-white"
                            style={{
                                fontFamily: 'Inter, system-ui, sans-serif',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            DataVault.AI
                        </span>
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-lg transition-colors"
                        style={{
                            background: isMobileMenuOpen ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                            color: '#cbd5e1'
                        }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div
                        className="px-4 pb-6 space-y-2"
                        style={{
                            borderTop: '1px solid rgba(99, 102, 241, 0.1)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-4 py-3 rounded-xl text-sm font-medium transition-all"
                                style={{
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    background: isActive(link.href) ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                                    color: isActive(link.href) ? '#f1f5f9' : '#94a3b8',
                                    border: isActive(link.href) ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid transparent'
                                }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-4 space-y-2">
                            <div
                                className="text-xs font-semibold uppercase tracking-wider px-4 py-2"
                                style={{
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    color: '#64748b'
                                }}
                            >
                                Services
                            </div>
                            {serviceLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all"
                                    style={{
                                        fontFamily: 'Inter, system-ui, sans-serif',
                                        background: 'transparent',
                                        color: '#94a3b8'
                                    }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="text-xl">{link.icon}</span>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <a
                            href="/#contact"
                            className="block mt-4 px-6 py-3 rounded-xl text-sm font-semibold text-center text-white"
                            style={{
                                fontFamily: 'Inter, system-ui, sans-serif',
                                background: 'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)',
                                boxShadow: '0 4px 16px rgba(99, 102, 241, 0.4)'
                            }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
