import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Smartphone, Brain, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Server,
        title: 'Web Development',
        description: 'Enterprise web applications built with modern frameworks. Scalable architecture designed for high-traffic production environments.',
        features: ['React / Next.js', 'Node.js / Python', 'REST / GraphQL API'],
        link: '/services/web-development',
        gridClass: 'md:col-span-2 md:row-span-2'
    },
    {
        icon: Brain,
        title: 'AI Development',
        description: 'Production-ready ML systems with continuous monitoring and optimization.',
        features: ['LLM Integration', 'Computer Vision', 'NLP'],
        link: '/services/ai-development',
        gridClass: 'md:col-span-1 md:row-span-1'
    },
    {
        icon: Smartphone,
        title: 'Mobile',
        description: 'Native mobile applications for iOS and Android platforms.',
        features: ['React Native', 'Swift / Kotlin'],
        link: '/services/mobile-development',
        gridClass: 'md:col-span-1 md:row-span-1'
    },
    {
        icon: Globe,
        title: 'Cloud Infrastructure',
        description: 'Secure, scalable architecture with automated deployments and zero-downtime releases.',
        features: ['AWS / Azure / GCP', 'Kubernetes / Docker', '24/7 Monitoring'],
        link: '/services/web-hosting',
        gridClass: 'md:col-span-3 md:row-span-1'
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '48px 48px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            letterSpacing: '-0.03em',
                            color: '#f1f5f9'
                        }}
                    >
                        Technical Capabilities
                    </h2>
                    <p
                        className="text-lg max-w-2xl"
                        style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            color: '#cbd5e1',
                            letterSpacing: '-0.01em'
                        }}
                    >
                        End-to-end development across web, mobile, AI, and cloud platforms
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group ${service.gridClass}`}
                        >
                            <Link
                                to={service.link}
                                className="block h-full p-8 rounded-2xl transition-all duration-300 relative overflow-hidden"
                                style={{
                                    background: 'rgba(15, 23, 42, 0.4)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(99, 102, 241, 0.1)',
                                }}
                            >
                                {/* Hover Gradient */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)'
                                    }}
                                />

                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: 'rgba(99, 102, 241, 0.1)',
                                            border: '1px solid rgba(99, 102, 241, 0.2)'
                                        }}
                                    >
                                        <service.icon className="w-6 h-6" style={{ color: '#818cf8' }} />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-2xl font-bold mb-3"
                                        style={{
                                            fontFamily: 'Inter, system-ui, sans-serif',
                                            letterSpacing: '-0.02em',
                                            color: '#f1f5f9'
                                        }}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-sm mb-6 flex-grow"
                                        style={{
                                            fontFamily: 'Inter, system-ui, sans-serif',
                                            color: '#94a3b8',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center text-xs"
                                                style={{
                                                    fontFamily: 'Inter, system-ui, sans-serif',
                                                    color: '#cbd5e1'
                                                }}
                                            >
                                                <div
                                                    className="w-1 h-1 rounded-full mr-2"
                                                    style={{ background: '#6366f1' }}
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Link */}
                                    <div
                                        className="flex items-center gap-1 text-sm font-medium group/link"
                                        style={{
                                            fontFamily: 'Inter, system-ui, sans-serif',
                                            color: '#818cf8'
                                        }}
                                    >
                                        Learn more
                                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
