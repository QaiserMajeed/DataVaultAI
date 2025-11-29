import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Tablet, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { mobileDevServiceSchema } from '../utils/structuredData';
import Contact from '../components/Contact';

const MobileDevelopment = () => {
    const features = [
        {
            icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
            title: 'Native & Cross-Platform Apps',
            description: 'Build high-performance mobile applications for iOS and Android using React Native, Flutter, or native technologies.'
        },
        {
            icon: <Zap className="w-6 h-6 text-cyan-400" />,
            title: 'Offline-First Architecture',
            description: 'Apps that work seamlessly even without internet connection, syncing data when back online.'
        },
        {
            icon: <Users className="w-6 h-6 text-teal-400" />,
            title: 'Intuitive User Experience',
            description: 'Beautiful, user-friendly interfaces designed following platform-specific guidelines for the best UX.'
        },
        {
            icon: <Tablet className="w-6 h-6 text-blue-400" />,
            title: 'Multi-Device Support',
            description: 'Responsive designs that adapt perfectly to phones, tablets, and foldable devices.'
        }
    ];

    const technologies = [
        { name: 'React Native', category: 'Cross-Platform' },
        { name: 'Flutter', category: 'Cross-Platform' },
        { name: 'Swift', category: 'iOS Native' },
        { name: 'Kotlin', category: 'Android Native' },
        { name: 'Firebase', category: 'Backend' },
        { name: 'GraphQL', category: 'API' },
        { name: 'Redux', category: 'State Management' },
        { name: 'Push Notifications', category: 'Features' }
    ];

    const benefits = [
        'Single codebase for iOS and Android (cross-platform)',
        'App Store and Google Play submission support',
        'Real-time features with WebSocket integration',
        'Secure authentication and data encryption',
        'In-app purchases and subscription management',
        'Push notifications and deep linking',
        'Analytics and crash reporting integration',
        'Regular updates and maintenance support'
    ];

    return (
        <div className="relative min-h-screen text-slate-50" style={{
            background: 'linear-gradient(180deg, #041420 0%, #082840 50%, #0a3d5c 100%)',
            fontFamily: 'var(--font-body)'
        }}>
            <SEO
                title="Mobile App Development Services"
                description="Native mobile applications for iOS and Android using React Native, Swift, and Kotlin. Build high-performance cross-platform apps with offline-first architecture and intuitive user experience."
                keywords="mobile app development, React Native, iOS development, Android development, Swift, Kotlin, Flutter, cross-platform apps, native mobile apps, mobile development services"
                canonical="https://datavault.ai/services/mobile-development"
                structuredData={mobileDevServiceSchema}
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
                                Mobile Development Services
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Create Exceptional Mobile Experiences
                            </h1>
                            <p className="text-xl text-teal-100/70 mb-8 leading-relaxed">
                                Build native-quality mobile applications for iOS and Android that engage users and drive business results.
                                From concept to deployment, we handle everything.
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
                                Start Your App Project
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
                                Why Choose Our Mobile Development
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                We create mobile applications that users love and businesses depend on.
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
                                Mobile Technologies We Use
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                From cross-platform to native development, we choose the right tools for your project.
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
                                Complete Mobile Solutions
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                Everything you need to launch and grow your mobile application.
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
                            Ready to Launch Your Mobile App?
                        </h2>
                        <p className="text-xl text-teal-100/70 mb-8">
                            Let's turn your mobile app idea into reality with a solution that delights users.
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

export default MobileDevelopment;
