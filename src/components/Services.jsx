import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Smartphone, Brain, Globe, ArrowRight } from 'lucide-react';

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
        <section id="services" className="py-24 md:py-32 lg:py-40 relative overflow-hidden texture-grid">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-2 h-2 border-2 border-[var(--foreground)]"></div>
                        <div className="h-px w-24 bg-[var(--foreground)]"></div>
                    </div>
                    <p
                        className="text-xs uppercase tracking-widest font-medium mb-4"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Beyond Café QR
                    </p>
                    <h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Technical
                        <br />
                        Capabilities
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-2xl leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        We also build custom AI, web, mobile, and cloud software for enterprise clients.
                    </p>
                </div>

                {/* Bento Grid - Line-Based Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={`group ${service.gridClass}`}
                        >
                            <Link
                                to={service.link}
                                className="block h-full p-8 md:p-10 border-2 border-[var(--border-light)] transition-all duration-100 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                            >
                                <div className="h-full flex flex-col">
                                    {/* Icon - Circle with Border */}
                                    <div className="w-16 h-16 border-2 border-[var(--foreground)] flex items-center justify-center mb-8 group-hover:bg-[var(--background)] transition-colors duration-100">
                                        <service.icon
                                            className="w-8 h-8 group-hover:text-[var(--foreground)] transition-colors duration-100"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-base mb-6 flex-grow leading-relaxed"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Features - Line List */}
                                    <ul className="space-y-2 mb-8 pb-8 border-b border-[var(--border-light)] group-hover:border-[var(--background)]">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center text-sm uppercase tracking-wider"
                                                style={{ fontFamily: 'var(--font-mono)' }}
                                            >
                                                <div className="w-4 h-px bg-[var(--foreground)] mr-3 group-hover:bg-[var(--background)]"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Link */}
                                    <div
                                        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        Learn more
                                        <ArrowRight
                                            className="w-4 h-4 transition-transform duration-100 group-hover:translate-x-1"
                                            strokeWidth={2}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Thick Section Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--foreground)]"></div>
        </section>
    );
};

export default Services;
