import React from 'react';
import { Server, Shield, Zap, BarChart, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { webHostingServiceSchema, buildBreadcrumbSchema } from '../utils/structuredData';
import Contact from '../components/Contact';

const WebHosting = () => {
    const breadcrumbs = buildBreadcrumbSchema([
        { name: 'Home', url: 'https://datavalutai.com/' },
        { name: 'Services', url: 'https://datavalutai.com/#services' },
        { name: 'Cloud Infrastructure', url: 'https://datavalutai.com/services/web-hosting' }
    ]);
    const features = [
        { icon: Server, title: 'Cloud Infrastructure', description: 'Scalable cloud hosting on AWS, Azure, or GCP with automated deployments and zero-downtime releases.' },
        { icon: Shield, title: '99.9% Uptime', description: 'Enterprise SLA with 24/7 monitoring, automatic failover, and disaster recovery.' },
        { icon: Zap, title: 'Global CDN', description: 'Lightning-fast content delivery worldwide with edge caching and DDoS protection.' },
        { icon: BarChart, title: 'Auto-Scaling', description: 'Automatically handle traffic spikes with horizontal and vertical scaling.' }
    ];

    const technologies = ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'CloudFlare', 'Nginx', 'Terraform'];
    const benefits = ['99.9% uptime guarantee', 'Automated backups and disaster recovery', 'SSL certificates and HTTPS enforcement', 'DDoS protection and web application firewall', 'Performance monitoring and alerting', 'Database replication and caching', 'CI/CD pipeline setup'];

    return (
        <main>
            <SEO
                title="Cloud Hosting & DevOps Services - AWS, Azure, GCP & Kubernetes"
                description="Enterprise cloud hosting with 99.9% uptime SLA. AWS, Azure, GCP deployment with auto-scaling, Kubernetes, CI/CD, DDoS protection, and 24/7 monitoring."
                keywords="cloud hosting, managed cloud, AWS consulting, Azure hosting, GCP hosting, Kubernetes, Docker, DevOps, CI/CD, infrastructure as code, Terraform, CloudFlare, DDoS protection, enterprise hosting"
                canonical="https://datavalutai.com/services/web-hosting"
                structuredData={[webHostingServiceSchema, breadcrumbs]}
            />
            <section className="min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 texture-grid">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-none" style={{ fontFamily: 'var(--font-display)' }}>Cloud<br />Infrastructure</h1>
                    <div className="flex items-center gap-4 mb-12"><div className="w-3 h-3 border-2 border-[var(--foreground)]"></div><div className="h-1 w-32 bg-[var(--foreground)]"></div></div>
                    <p className="text-xl md:text-2xl max-w-3xl mb-16 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>Secure, scalable cloud architecture with automated deployments, 99.9% uptime, and zero-downtime releases.</p>
                    <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--foreground)]" style={{ fontFamily: 'var(--font-mono)' }}>Get Started <ArrowRight className="w-4 h-4" strokeWidth={2} /></a>
                </div>
            </section>
            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12"><div className="grid md:grid-cols-2 gap-1">{features.map((feature) => (<div key={feature.title} className="p-8 border-2 border-[var(--border-light)] transition-all duration-100 hover:border-[var(--foreground)]"><div className="w-12 h-12 border-2 border-[var(--foreground)] flex items-center justify-center mb-6"><feature.icon className="w-6 h-6" strokeWidth={1.5} /></div><h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{feature.title}</h3><p className="leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{feature.description}</p></div>))}</div></div>
            </section>
            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12"><h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Technologies</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-1">{technologies.map((tech) => (<div key={tech} className="p-6 border-2 border-[var(--background)] text-center uppercase tracking-wider text-sm font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>{tech}</div>))}</div></div>
            </section>
            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12"><h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>What You Get</h2><div className="space-y-1">{benefits.map((benefit) => (<div key={benefit} className="p-6 border-2 border-[var(--border-light)] flex items-start gap-4 transition-all duration-100 hover:border-[var(--foreground)]"><div className="w-6 h-px bg-[var(--foreground)] mt-3 flex-shrink-0"></div><p className="text-lg" style={{ fontFamily: 'var(--font-body)' }}>{benefit}</p></div>))}</div></div>
            </section>
            <Contact />
        </main>
    );
};

export default WebHosting;
