import React from 'react';
import { Smartphone, Zap, Users, Globe, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { mobileDevServiceSchema, buildBreadcrumbSchema } from '../utils/structuredData';
import Contact from '../components/Contact';

const MobileDevelopment = () => {
    const breadcrumbs = buildBreadcrumbSchema([
        { name: 'Home', url: 'https://datavalutai.com/' },
        { name: 'Services', url: 'https://datavalutai.com/#services' },
        { name: 'Mobile Development', url: 'https://datavalutai.com/services/mobile-development' }
    ]);
    const features = [
        { icon: Smartphone, title: 'Native Performance', description: 'Build fast, responsive mobile apps for iOS and Android with native performance and user experience.' },
        { icon: Zap, title: 'Cross-Platform', description: 'Write once, deploy everywhere. Reach both iOS and Android users with a single codebase using React Native.' },
        { icon: Users, title: 'Intuitive UX', description: 'User-centered design that follows platform guidelines while maintaining your brand identity.' },
        { icon: Globe, title: 'Offline Support', description: 'Apps that work seamlessly offline with local data storage and background synchronization.' }
    ];

    const technologies = ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'GraphQL', 'Push Notifications', 'App Store Optimization'];
    const benefits = ['Native iOS and Android applications', 'App Store and Google Play deployment', 'Offline-first architecture', 'Push notifications and real-time updates', 'Biometric authentication integration', 'In-app purchases and subscriptions', 'Analytics and crash reporting'];

    return (
        <main>
            <SEO
                title="Mobile App Development Services - iOS, Android & React Native"
                description="Custom native and cross-platform mobile app development for iOS and Android. React Native, Swift, and Kotlin expertise with App Store and Google Play deployment."
                keywords="mobile app development, React Native development, iOS app development, Android app development, Swift, Kotlin, cross-platform apps, App Store optimization, push notifications, in-app purchases"
                canonical="https://datavalutai.com/services/mobile-development"
                structuredData={[mobileDevServiceSchema, breadcrumbs]}
            />
            <section className="min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 texture-grid">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-none" style={{ fontFamily: 'var(--font-display)' }}>Mobile<br />Development</h1>
                    <div className="flex items-center gap-4 mb-12"><div className="w-3 h-3 border-2 border-[var(--foreground)]"></div><div className="h-1 w-32 bg-[var(--foreground)]"></div></div>
                    <p className="text-xl md:text-2xl max-w-3xl mb-16 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>Native mobile applications for iOS and Android. Cross-platform solutions with native performance and user experience.</p>
                    <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--foreground)]" style={{ fontFamily: 'var(--font-mono)' }}>Get Started <ArrowRight className="w-4 h-4" strokeWidth={2} /></a>
                </div>
            </section>
            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-1">{features.map((feature) => (<div key={feature.title} className="p-8 border-2 border-[var(--border-light)] transition-all duration-100 hover:border-[var(--foreground)]"><div className="w-12 h-12 border-2 border-[var(--foreground)] flex items-center justify-center mb-6"><feature.icon className="w-6 h-6" strokeWidth={1.5} /></div><h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{feature.title}</h3><p className="leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{feature.description}</p></div>))}</div>
                </div>
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

export default MobileDevelopment;
