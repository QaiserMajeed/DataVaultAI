import React from 'react';
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
        <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-[var(--foreground)] text-[var(--background)] texture-vertical-lines-inverted">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
                {/* Section Header - Inverted */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-2 h-2 border-2 border-[var(--background)]"></div>
                        <div className="h-px w-24 bg-[var(--background)]"></div>
                    </div>
                    <h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Performance
                        <br />
                        That <span className="italic">Matters</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-[var(--background)]"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Metrics-driven results you can measure and trust
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="p-8 border-2 border-[var(--background)] text-center group transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 border-2 border-[var(--background)] flex items-center justify-center group-hover:bg-[var(--foreground)] transition-colors duration-100">
                                    <metric.icon
                                        className="w-8 h-8 group-hover:text-[var(--background)] transition-colors duration-100"
                                        strokeWidth={1.5}
                                    />
                                </div>
                            </div>

                            {/* Value */}
                            <div
                                className="text-6xl md:text-7xl font-bold mb-4 tracking-tighter"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {metric.value}
                            </div>

                            {/* Label */}
                            <div
                                className="text-sm font-semibold mb-2 uppercase tracking-widest"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                {metric.label}
                            </div>

                            {/* Description */}
                            <p
                                className="text-sm leading-relaxed"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {metric.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Thick Section Divider - White on Black */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--background)]"></div>
        </section>
    );
};

export default WhyUs;
