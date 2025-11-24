import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                {/* Badge with orchestrated entrance */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl mb-8"
                    style={{
                        background: 'rgba(0, 217, 255, 0.1)',
                        border: '1px solid rgba(0, 217, 255, 0.3)',
                        boxShadow: '0 8px 32px rgba(0, 217, 255, 0.1)'
                    }}
                >
                    <Sparkles className="w-4 h-4" style={{ color: '#00d9ff' }} />
                    <span className="text-sm font-medium tracking-wide" style={{
                        color: '#00f0ff',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.05em'
                    }}>
                        Production-Ready AI Development
                    </span>
                </motion.div>

                {/* Main heading with distinctive serif font */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8"
                    style={{
                        fontFamily: 'var(--font-display)',
                        lineHeight: '1.1',
                        background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    We Build AI Solutions
                    <br />
                    That
                    <span style={{
                        background: 'linear-gradient(135deg, #00ffcc 0%, #00d9ff 50%, #ff6b35 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontStyle: 'italic'
                    }}>
                        {' '}Drive Results
                    </span>
                </motion.h1>

                {/* Subtitle with elegant spacing */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
                    style={{
                        color: 'rgba(255, 255, 255, 0.75)',
                        fontWeight: '400',
                        letterSpacing: '-0.01em'
                    }}
                >
                    Helping businesses grow with fast, secure AI applications that increase efficiency, reduce costs, and unlock new revenue opportunities.
                </motion.p>

                {/* CTAs with sophisticated hover effects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <a
                        href="#contact"
                        className="group relative px-10 py-5 text-lg font-semibold rounded-full overflow-hidden hover-lift"
                        style={{
                            background: 'linear-gradient(135deg, #00d9ff 0%, #00ffcc 100%)',
                            color: '#041420',
                            fontFamily: 'var(--font-body)',
                            boxShadow: '0 20px 60px rgba(0, 217, 255, 0.3)',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Let's Build Your AI Solution
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #00ffcc 0%, #00d9ff 100%)'
                            }}
                        />
                    </a>
                    <a
                        href="#portfolio"
                        className="px-10 py-5 text-lg font-semibold rounded-full border-2 backdrop-blur-sm hover-lift"
                        style={{
                            borderColor: 'rgba(0, 217, 255, 0.5)',
                            color: '#00d9ff',
                            background: 'rgba(0, 217, 255, 0.05)',
                            fontFamily: 'var(--font-body)',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        View Our Work
                    </a>
                </motion.div>

                {/* Stats with staggered animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="pt-16 border-t grid grid-cols-2 md:grid-cols-4 gap-8"
                    style={{
                        borderColor: 'rgba(0, 217, 255, 0.2)'
                    }}
                >
                    {[
                        { label: 'Projects Delivered', value: '100+' },
                        { label: 'Client Satisfaction', value: '98%' },
                        { label: 'Expert Developers', value: '15+' },
                        { label: 'Years Experience', value: '5+' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="animate-in-1"
                            style={{
                                animationDelay: `${1.2 + index * 0.1}s`
                            }}
                        >
                            <div
                                className="text-4xl md:text-5xl font-bold mb-2"
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                {stat.value}
                            </div>
                            <div
                                className="text-sm font-medium uppercase tracking-wider"
                                style={{
                                    color: 'rgba(0, 217, 255, 0.7)',
                                    fontFamily: 'var(--font-mono)',
                                    letterSpacing: '0.1em'
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
