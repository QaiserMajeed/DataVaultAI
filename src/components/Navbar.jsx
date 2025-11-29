import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import Logo from './Logo';

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
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Mobile Development', href: '/services/mobile-development' },
        { name: 'AI Development', href: '/services/ai-development' },
        { name: 'Web Hosting', href: '/services/web-hosting' },
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
                    ? 'rgba(15, 23, 42, 0.7)'
                    : 'rgba(15, 23, 42, 0.3)',
                backdropFilter: 'blur(20px)',
                borderBottom: isScrolled ? '1px solid rgba(99, 102, 241, 0.1)' : '1px solid transparent',
                boxShadow: isScrolled ? '0 4px 24px rgba(0, 0, 0, 0.1)' : 'none'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
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
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
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
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"
                                    style={{
                                        width: '0',
                                        background: 'linear-gradient(90deg, #00d9ff 0%, #00ffcc 100%)'
                                    }}
                                />
                            </Link>
                        ))}

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 relative group"
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontFamily: 'var(--font-body)',
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                Services
                                <ChevronDown className="w-4 h-4" />
                                <span
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"
                                    style={{
                                        width: '0',
                                        background: 'linear-gradient(90deg, #00d9ff 0%, #00ffcc 100%)'
                                    }}
                                />
                            </button>

                            {isServicesOpen && (
                                <div
                                    className="absolute top-full left-0 pt-2 w-56"
                                >
                                    <div
                                        className="py-2 rounded-xl shadow-xl border"
                                        style={{
                                            background: 'rgba(4, 20, 32, 0.95)',
                                            backdropFilter: 'blur(20px)',
                                            borderColor: 'rgba(0, 217, 255, 0.2)'
                                        }}
                                    >
                                        {serviceLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.href}
                                                className="block px-4 py-2.5 transition-colors duration-200 hover:bg-teal-900/50"
                                                style={{
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    color: 'rgba(255, 255, 255, 0.9)',
                                                    fontFamily: 'var(--font-body)'
                                                }}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <a
                            href="/#contact"
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
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-base font-medium px-4 py-3 rounded-lg transition-all duration-300"
                            style={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontFamily: 'var(--font-body)'
                            }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Services Section in Mobile */}
                    <div className="border-t border-teal-800 pt-4 mt-2">
                        <div className="text-sm font-semibold text-teal-400 px-4 mb-2">Services</div>
                        {serviceLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-base font-medium px-4 py-2.5 rounded-lg transition-all duration-300 block"
                                style={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontFamily: 'var(--font-body)'
                                }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <a
                        href="/#contact"
                        className="text-center font-semibold py-3 rounded-lg mt-2"
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
