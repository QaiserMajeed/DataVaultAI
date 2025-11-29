import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Shield, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { webDevServiceSchema } from '../utils/structuredData';
import Contact from '../components/Contact';

const WebDevelopment = () => {
    const features = [
        {
            icon: <Code className="w-6 h-6 text-emerald-400" />,
            title: 'Custom Web Applications',
            description: 'Tailored solutions built with modern frameworks like React, Next.js, and Node.js to meet your unique business needs.'
        },
        {
            icon: <Zap className="w-6 h-6 text-cyan-400" />,
            title: 'High Performance',
            description: 'Lightning-fast applications optimized for speed, scalability, and exceptional user experience across all devices.'
        },
        {
            icon: <Shield className="w-6 h-6 text-teal-400" />,
            title: 'Enterprise Security',
            description: 'Bank-level security implementation with encryption, authentication, and compliance with industry standards.'
        },
        {
            icon: <Smartphone className="w-6 h-6 text-blue-400" />,
            title: 'Responsive Design',
            description: 'Flawless experience across desktop, tablet, and mobile devices with modern, intuitive interfaces.'
        }
    ];

    const technologies = [
        { name: 'React', category: 'Frontend' },
        { name: 'Next.js', category: 'Framework' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'REST APIs', category: 'Integration' }
    ];

    const benefits = [
        'Scalable architecture that grows with your business',
        'SEO-optimized for maximum visibility',
        'Real-time data synchronization',
        'Cloud deployment on AWS, Azure, or GCP',
        'Continuous integration and deployment (CI/CD)',
        'Comprehensive testing and quality assurance',
        'Ongoing maintenance and support',
        'Performance monitoring and analytics'
    ];

    return (
        <div className="relative min-h-screen text-slate-50" style={{
            background: 'linear-gradient(180deg, #041420 0%, #082840 50%, #0a3d5c 100%)',
            fontFamily: 'var(--font-body)'
        }}>
            <SEO
                title="Web Development Services"
                description="Enterprise web applications built with React, Next.js, Node.js, and modern frameworks. Scalable architecture designed for high-traffic production environments with 99.9% uptime guarantee."
                keywords="web development, React development, Next.js, Node.js, TypeScript, custom web applications, enterprise web apps, REST API, GraphQL, web development services"
                canonical="https://datavault.ai/services/web-development"
                structuredData={webDevServiceSchema}
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
                                Web Development Services
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Build Powerful Web Applications
                            </h1>
                            <p className="text-xl text-teal-100/70 mb-8 leading-relaxed">
                                Transform your ideas into scalable, high-performance web applications that drive business growth.
                                We deliver custom solutions using cutting-edge technologies and best practices.
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
                                Start Your Project
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
                                Why Choose Our Web Development Services
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                We combine technical expertise with business acumen to deliver solutions that exceed expectations.
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

                {/* Technologies Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Technologies We Master
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                We leverage the latest and most reliable technologies to build robust web applications.
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
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-950/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                What You Get
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                Comprehensive web development services designed to deliver results.
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
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Build Your Web Application?
                        </h2>
                        <p className="text-xl text-teal-100/70 mb-8">
                            Let's discuss your project and create a solution that drives your business forward.
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
                            Get Started Today
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

export default WebDevelopment;
