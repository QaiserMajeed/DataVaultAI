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
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                isScrolled
                    ? 'bg-teal-950/80 backdrop-blur-md border-teal-800 py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl shadow-lg group-hover:shadow-teal-500/20 transition-all overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-1">
                            <Logo className="w-full h-full" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            DataVault<span className="text-teal-400">.AI</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-teal-100/80 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-500 transition-all group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all hover:scale-105 active:scale-95 border border-teal-500/20"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-teal-100 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-teal-950 border-b border-teal-800 p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-teal-100 hover:text-white hover:bg-teal-900 px-4 py-3 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="text-center font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 py-3 rounded-lg"
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
