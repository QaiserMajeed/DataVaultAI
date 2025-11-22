import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-teal-950">
                <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
                <div className="absolute top-0 -right-4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-coral-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/50 border border-teal-800 backdrop-blur-sm mb-8"
                >
                    <Sparkles className="w-4 h-4 text-coral-400" />
                    <span className="text-sm font-medium text-teal-100">Next-Gen AI Development</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8"
                >
                    We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Intelligent</span>
                    <br />
                    Digital Solutions
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-teal-100/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Transform your business with custom AI applications. From predictive analytics to generative AI, we deliver enterprise-grade solutions that drive growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="group px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full hover:shadow-2xl hover:shadow-teal-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#portfolio"
                        className="px-8 py-4 text-lg font-semibold text-teal-100 bg-teal-900/50 border border-teal-800 rounded-full hover:bg-teal-800 hover:text-white transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
                    >
                        View Our Work
                    </a>
                </motion.div>

                {/* Stats/Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 pt-10 border-t border-teal-800/50 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { label: 'Projects Delivered', value: '100+' },
                        { label: 'Client Satisfaction', value: '98%' },
                        { label: 'Expert Developers', value: '15+' },
                        { label: 'Years Experience', value: '5+' },
                    ].map((stat, index) => (
                        <div key={index}>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-teal-500 font-medium uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
