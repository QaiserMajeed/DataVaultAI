import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                isScrolled
                    ? 'py-3'
                    : 'py-5'
            )}
            style={{
                background: isScrolled
                    ? 'rgba(4, 20, 32, 0.85)'
                    : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(0, 217, 255, 0.15)' : '1px solid transparent'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div
                            className="w-10 h-10 rounded-xl overflow-hidden transition-all duration-300"
                            style={{
                                background: 'rgba(0, 217, 255, 0.1)',
                                border: '1px solid rgba(0, 217, 255, 0.2)',
                                padding: '2px',
                                boxShadow: '0 4px 12px rgba(0, 217, 255, 0.15)'
                            }}
                        >
                            <Logo className="w-full h-full" />
                        </div>
                        <span
                            className="text-xl font-bold text-white tracking-tight"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            DataVault<span style={{ color: '#00d9ff' }}>.AI</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative group"
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontFamily: 'var(--font-body)',
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                {link.name}
                                <span
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                                    style={{
                                        width: '0',
                                        background: 'linear-gradient(90deg, #00d9ff 0%, #00ffcc 100%)'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.width = '100%'}
                                    onMouseLeave={(e) => e.currentTarget.style.width = '0'}
                                />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 py-2.5 text-sm font-semibold rounded-full hover-lift"
                            style={{
                                background: 'linear-gradient(135deg, #00d9ff 0%, #00ffcc 100%)',
                                color: '#041420',
                                fontFamily: 'var(--font-body)',
                                boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 transition-colors duration-300"
                        style={{ color: '#00d9ff' }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden absolute top-full left-0 right-0 p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5"
                    style={{
                        background: 'rgba(4, 20, 32, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderBottom: '1px solid rgba(0, 217, 255, 0.2)'
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium px-4 py-3 rounded-lg transition-all duration-300"
                            style={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontFamily: 'var(--font-body)'
                            }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="text-center font-semibold py-3 rounded-lg"
                        style={{
                            background: 'linear-gradient(135deg, #00d9ff 0%, #00ffcc 100%)',
                            color: '#041420',
                            fontFamily: 'var(--font-body)'
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get Started
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
