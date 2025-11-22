import React from 'react';
import { Mail, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8"
                >
                    Ready to Build Your AI Solution?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-teal-50 mb-12 leading-relaxed"
                >
                    Let's discuss your project and create a custom AI solution that drives real business value.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                >
                    <a
                        href="mailto:hello@datavaultai.com?subject=AI Project Consultation Request"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-teal-700 bg-white hover:bg-teal-50 rounded-full shadow-2xl transition-all hover:scale-105 group"
                    >
                        Get Free Consultation
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="mailto:hello@datavaultai.com?subject=Request Project Quote"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full border-2 border-white transition-all"
                    >
                        Request a Quote
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
                >
                    <a
                        href="tel:+447440189478"
                        className="inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/30 transition-all hover:scale-105"
                    >
                        <Phone className="w-5 h-5" />
                        <span>+44 07440 189478</span>
                    </a>
                    <a
                        href="mailto:hello@datavaultai.com"
                        className="inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/30 transition-all hover:scale-105"
                    >
                        <Mail className="w-5 h-5" />
                        <span>hello@datavaultai.com</span>
                    </a>
                </motion.div>

                <div className="mt-6 flex items-center justify-center gap-8 text-teal-100 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                        Available for new projects
                    </div>
                    <div>Response within 24h</div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
