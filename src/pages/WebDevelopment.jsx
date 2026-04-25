import React from 'react';
import { Code, Zap, Shield, Smartphone, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { webDevServiceSchema, buildBreadcrumbSchema } from '../utils/structuredData';
import Contact from '../components/Contact';

const WebDevelopment = () => {
    const breadcrumbs = buildBreadcrumbSchema([
        { name: 'Home', url: 'https://datavalutai.com/' },
        { name: 'Services', url: 'https://datavalutai.com/#services' },
        { name: 'Web Development', url: 'https://datavalutai.com/services/web-development' }
    ]);
    const features = [
        { icon: Code, title: 'Custom Web Applications', description: 'Tailored solutions built with modern frameworks like React, Next.js, and Node.js to meet your unique business needs.' },
        { icon: Zap, title: 'High Performance', description: 'Lightning-fast applications optimized for speed, scalability, and exceptional user experience across all devices.' },
        { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security implementation with encryption, authentication, and compliance with industry standards.' },
        { icon: Smartphone, title: 'Responsive Design', description: 'Flawless experience across desktop, tablet, and mobile devices with modern, intuitive interfaces.' }
    ];

    const technologies = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'REST APIs'];
    const benefits = ['Scalable architecture that grows with your business', 'SEO-optimized for maximum visibility', 'Real-time data synchronization', 'Cloud deployment on AWS, Azure, or GCP', 'Continuous integration and deployment (CI/CD)', 'Comprehensive testing and quality assurance', 'Ongoing maintenance and support'];

    return (
        <main>
            <SEO
                title="Enterprise Web Development Services - React, Next.js, Node.js"
                description="Custom enterprise web development with React, Next.js, TypeScript, and Node.js. Scalable, secure, high-performance web applications with SEO and CI/CD built-in."
                keywords="web development agency, React development, Next.js development, Node.js, TypeScript, enterprise web apps, custom web application, SaaS development, headless CMS, GraphQL, REST API"
                canonical="https://datavalutai.com/services/web-development"
                structuredData={[webDevServiceSchema, breadcrumbs]}
            />

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 texture-grid">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                        Web
                        <br />
                        Development
                    </h1>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-3 h-3 border-2 border-[var(--foreground)]"></div>
                        <div className="h-1 w-32 bg-[var(--foreground)]"></div>
                    </div>
                    <p className="text-xl md:text-2xl max-w-3xl mb-16 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                        Enterprise-grade web applications built with modern frameworks. Scalable architecture designed for high-traffic production environments.
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--foreground)]" style={{ fontFamily: 'var(--font-mono)' }}>
                        Get Started <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </a>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-1">
                        {features.map((feature) => (
                            <div key={feature.title} className="p-8 border-2 border-[var(--border-light)] transition-all duration-100 hover:border-[var(--foreground)]">
                                <div className="w-12 h-12 border-2 border-[var(--foreground)] flex items-center justify-center mb-6">
                                    <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{feature.title}</h3>
                                <p className="leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Technologies</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                        {technologies.map((tech) => (
                            <div key={tech} className="p-6 border-2 border-[var(--background)] text-center uppercase tracking-wider text-sm font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>{tech}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>What You Get</h2>
                    <div className="space-y-1">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="p-6 border-2 border-[var(--border-light)] flex items-start gap-4 transition-all duration-100 hover:border-[var(--foreground)]">
                                <div className="w-6 h-px bg-[var(--foreground)] mt-3 flex-shrink-0"></div>
                                <p className="text-lg" style={{ fontFamily: 'var(--font-body)' }}>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
};

export default WebDevelopment;
