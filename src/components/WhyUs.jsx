import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, TrendingUp, Zap } from 'lucide-react';

const WhyUs = () => {
    const metrics = [
        {
            icon: Shield,
            value: '99.9%',
            label: 'Uptime Guarantee',
            description: 'Enterprise SLA with monitoring'
        },
        {
            icon: Clock,
            value: '<15min',
            label: 'Response Time',
            description: '24/7 technical support'
        },
        {
            icon: TrendingUp,
            value: '60%',
            label: 'Cost Reduction',
            description: 'Average operational savings'
        },
        {
            icon: Zap,
            value: '3x',
            label: 'Faster Deployment',
            description: 'Compared to industry average'
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background accent */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            letterSpacing: '-0.03em',
                            color: '#f1f5f9'
                        }}
                    >
                        Performance That Matters
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            color: '#cbd5e1',
                            letterSpacing: '-0.01em'
                        }}
                    >
                        Metrics-driven results you can measure and trust
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl group hover:scale-[1.02] transition-all duration-300"
                            style={{
                                background: 'rgba(15, 23, 42, 0.4)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(99, 102, 241, 0.1)',
                                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                                style={{
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    border: '1px solid rgba(99, 102, 241, 0.2)'
                                }}
                            >
                                <metric.icon className="w-6 h-6" style={{ color: '#818cf8' }} />
                            </div>

                            <div
                                className="text-4xl font-bold mb-2"
                                style={{
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    color: '#f1f5f9',
                                    letterSpacing: '-0.03em'
                                }}
                            >
                                {metric.value}
                            </div>

                            <div
                                className="text-sm font-semibold mb-2"
                                style={{
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    color: '#e2e8f0',
                                    letterSpacing: '-0.01em'
                                }}
                            >
                                {metric.label}
                            </div>

                            <p
                                className="text-sm"
                                style={{
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    color: '#94a3b8',
                                    lineHeight: '1.6'
                                }}
                            >
                                {metric.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
