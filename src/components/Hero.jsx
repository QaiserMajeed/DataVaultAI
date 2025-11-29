import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute w-full h-full"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)',
                        animation: 'mesh-move 20s ease-in-out infinite'
                    }}
                />
                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '64px 64px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                {/* Premium Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                    style={{
                        background: 'rgba(15, 23, 42, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        boxShadow: '0 4px 24px rgba(99, 102, 241, 0.1)'
                    }}
                >
                    <Zap className="w-4 h-4 text-indigo-400" />
                    <span
                        className="text-sm font-semibold"
                        style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            letterSpacing: '-0.01em',
                            color: '#a5b4fc'
                        }}
                    >
                        ENTERPRISE-GRADE INFRASTRUCTURE
                    </span>
                </motion.div>

                {/* Power Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                    style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        letterSpacing: '-0.04em',
                        lineHeight: '1.05',
                        color: '#f1f5f9'
                    }}
                >
                    Engineering Excellence
                    <br />
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Measurable Results
                    </span>
                </motion.h1>

                {/* ROI-Focused Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-12"
                    style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: '#cbd5e1',
                        lineHeight: '1.6',
                        fontWeight: '400',
                        letterSpacing: '-0.01em'
                    }}
                >
                    Deploy production-ready infrastructure that scales with precision.
                    <strong style={{ color: '#e2e8f0', fontWeight: '600' }}> Reduce operational overhead by 60%</strong> while maintaining 99.9% uptime.
                </motion.p>

                {/* Dual CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Primary CTA */}
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 font-semibold rounded-lg overflow-hidden transition-all duration-300"
                        style={{
                            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                            color: '#ffffff',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: '0.95rem',
                            letterSpacing: '-0.01em',
                            boxShadow: '0 8px 24px rgba(99, 102, 241, 0.35)'
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Schedule Technical Consultation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    {/* Secondary CTA */}
                    <a
                        href="#portfolio"
                        className="px-8 py-4 font-semibold rounded-lg transition-all duration-300"
                        style={{
                            background: 'rgba(15, 23, 42, 0.6)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(148, 163, 184, 0.2)',
                            color: '#e2e8f0',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: '0.95rem',
                            letterSpacing: '-0.01em'
                        }}
                    >
                        View Case Studies
                    </a>
                </motion.div>
            </div>

            <style>{`
                @keyframes mesh-move {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.95);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
