import React from 'react';
import { motion } from 'framer-motion';
import { Server, Lock, Zap, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { webHostingServiceSchema } from '../utils/structuredData';
import Contact from '../components/Contact';

const WebHosting = () => {
    const features = [
        {
            icon: <Server className="w-6 h-6 text-emerald-400" />,
            title: 'Cloud Infrastructure',
            description: 'Deploy on AWS, Azure, Google Cloud, or DigitalOcean with auto-scaling and load balancing for maximum reliability.'
        },
        {
            icon: <Lock className="w-6 h-6 text-cyan-400" />,
            title: 'Enterprise Security',
            description: 'SSL certificates, DDoS protection, automated backups, and security monitoring to keep your site safe 24/7.'
        },
        {
            icon: <Zap className="w-6 h-6 text-teal-400" />,
            title: 'Blazing Fast Performance',
            description: 'CDN integration, caching strategies, and optimized server configurations for lightning-fast load times.'
        },
        {
            icon: <Globe className="w-6 h-6 text-blue-400" />,
            title: 'Global Coverage',
            description: 'Deploy to multiple regions worldwide to ensure low latency and fast access for users anywhere.'
        }
    ];

    const hostingTypes = [
        {
            title: 'Shared Hosting',
            description: 'Cost-effective solution for small websites and blogs',
            features: ['99.9% uptime', 'Free SSL', 'Daily backups', 'Email hosting']
        },
        {
            title: 'VPS Hosting',
            description: 'Dedicated resources for growing businesses',
            features: ['Root access', 'Scalable resources', 'Full control', 'Custom configurations']
        },
        {
            title: 'Cloud Hosting',
            description: 'Enterprise-grade infrastructure that scales',
            features: ['Auto-scaling', 'Load balancing', 'Global CDN', 'High availability']
        },
        {
            title: 'Managed Hosting',
            description: 'Fully managed solution with expert support',
            features: ['24/7 monitoring', 'Security patches', 'Performance optimization', 'Expert support']
        }
    ];

    const technologies = [
        { name: 'AWS', category: 'Cloud Provider' },
        { name: 'Azure', category: 'Cloud Provider' },
        { name: 'Google Cloud', category: 'Cloud Provider' },
        { name: 'DigitalOcean', category: 'Cloud Provider' },
        { name: 'Docker', category: 'Containerization' },
        { name: 'Kubernetes', category: 'Orchestration' },
        { name: 'Nginx', category: 'Web Server' },
        { name: 'CloudFlare', category: 'CDN' }
    ];

    const benefits = [
        '99.9% uptime guarantee with SLA',
        'Free SSL certificates for all domains',
        'Automated daily backups and recovery',
        'DDoS protection and firewall security',
        'Global CDN for faster content delivery',
        '24/7 server monitoring and alerts',
        'One-click staging environments',
        'Expert technical support when you need it'
    ];

    return (
        <div className="relative min-h-screen text-slate-50" style={{
            background: 'linear-gradient(180deg, #041420 0%, #082840 50%, #0a3d5c 100%)',
            fontFamily: 'var(--font-body)'
        }}>
            <SEO
                title="Cloud Infrastructure & Web Hosting Services"
                description="Secure, scalable cloud infrastructure on AWS, Azure, GCP with 99.9% uptime, automated deployments, zero-downtime releases, and 24/7 monitoring. Enterprise web hosting solutions."
                keywords="cloud hosting, web hosting, AWS hosting, Azure cloud, Google Cloud, Kubernetes, Docker, cloud infrastructure, managed hosting, VPS hosting, dedicated servers"
                canonical="https://datavault.ai/services/web-hosting"
                structuredData={webHostingServiceSchema}
            />
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
                        animation: 'mesh-shift 20s ease-in-out infinite'
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, #ff6b35 0%, transparent 70%)',
                        animation: 'mesh-shift-alt 25s ease-in-out infinite'
                    }}
                />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-sm font-semibold mb-6">
                                Web Hosting Services
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Reliable, Fast, & Secure Hosting
                            </h1>
                            <p className="text-xl text-teal-100/70 mb-8 leading-relaxed">
                                Professional web hosting solutions built on enterprise-grade infrastructure. From shared hosting to
                                fully managed cloud deployments, we ensure your website is always fast, secure, and available.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #00d9ff 0%, #00ffcc 100%)',
                                    color: '#041420',
                                    boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)'
                                }}
                            >
                                Get Hosting Quote
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-950/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Premium Hosting Features
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                Everything you need to keep your website running at peak performance.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-teal-900/30 border border-teal-800 hover:border-emerald-500/50 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-teal-950 rounded-xl flex items-center justify-center mb-6 border border-teal-800">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-teal-100/70 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hosting Types Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Hosting Solutions for Every Need
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                From personal blogs to enterprise applications, we have the right hosting solution for you.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {hostingTypes.map((type, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-teal-900/30 border border-teal-800 hover:border-emerald-500/50 transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                                    <p className="text-teal-100/70 mb-6">{type.description}</p>
                                    <ul className="space-y-3">
                                        {type.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm text-teal-200">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-950/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Infrastructure & Technology
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                Built on industry-leading platforms and technologies.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="p-6 rounded-xl bg-teal-900/30 border border-teal-800 hover:border-emerald-500/50 transition-all duration-300 text-center"
                                >
                                    <div className="text-lg font-bold text-white mb-2">{tech.name}</div>
                                    <div className="text-sm text-teal-400">{tech.category}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                What's Included
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                Comprehensive hosting solutions with enterprise-grade features.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-teal-900/20 border border-teal-800/50"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <span className="text-teal-100/90">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-950/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-teal-100/70 mb-8">
                            Let us handle your hosting so you can focus on growing your business.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #00d9ff 0%, #00ffcc 100%)',
                                color: '#041420',
                                boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)'
                            }}
                        >
                            Contact Us Today
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </section>

                {/* Contact Section */}
                <Contact />
            </div>
        </div>
    );
};

export default WebHosting;
