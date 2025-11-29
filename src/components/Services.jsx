import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Smartphone, Brain, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Server className="w-8 h-8 text-emerald-400" />,
        title: 'Web Development',
        description: 'Build powerful, scalable web applications with modern frameworks. From custom CMS to enterprise solutions, we deliver high-performance applications that drive business growth.',
        features: ['React & Next.js', 'Node.js Backend', 'API Development'],
        gradient: 'from-emerald-500/20 to-teal-500/20',
        border: 'group-hover:border-emerald-500/50',
        link: '/services/web-development'
    },
    {
        icon: <Smartphone className="w-8 h-8 text-teal-400" />,
        title: 'Mobile Development',
        description: 'Create exceptional mobile experiences for iOS and Android. Native or cross-platform, we build apps that users love with seamless performance and beautiful design.',
        features: ['React Native', 'iOS & Android', 'Cross-Platform'],
        gradient: 'from-teal-500/20 to-cyan-500/20',
        border: 'group-hover:border-teal-500/50',
        link: '/services/mobile-development'
    },
    {
        icon: <Brain className="w-8 h-8 text-coral-400" />,
        title: 'AI Development',
        description: 'Transform your business with intelligent automation. From chatbots to custom ML models, we build AI solutions that deliver measurable ROI and competitive advantage.',
        features: ['LLM Integration', 'Machine Learning', 'AI Automation'],
        gradient: 'from-coral-500/20 to-orange-500/20',
        border: 'group-hover:border-coral-500/50',
        link: '/services/ai-development'
    },
    {
        icon: <Globe className="w-8 h-8 text-blue-400" />,
        title: 'Web Hosting',
        description: 'Reliable, fast, and secure hosting solutions. From shared hosting to enterprise cloud deployments, we ensure your website is always available and performing at its best.',
        features: ['Cloud Infrastructure', '99.9% Uptime', 'DDoS Protection'],
        gradient: 'from-blue-500/20 to-cyan-500/20',
        border: 'group-hover:border-blue-500/50',
        link: '/services/web-hosting'
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-teal-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-800 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-sm font-semibold mb-4"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Full-Stack AI Development Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-teal-100/70"
                    >
                        From strategy to deployment, we handle every aspect of your AI project. Fast, secure, and built to scale.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-3xl bg-teal-900/30 border border-teal-800 ${service.border} hover:bg-teal-900/50 transition-all duration-300`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-teal-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-teal-800 group-hover:border-teal-700">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-teal-100/70 mb-6 leading-relaxed">{service.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-teal-200">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link to={service.link} className="inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
