import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Discovery & Strategy',
        description: 'We identify high-impact AI opportunities for your business. Free consultation to understand your challenges, assess feasibility, and create a clear roadmap with defined success metrics.',
    },
    {
        icon: PenTool,
        title: 'Design & Planning',
        description: 'We design a solution architecture that scales with your business. Detailed specifications, timeline, and cost estimates so you know exactly what to expect before we write a single line of code.',
    },
    {
        icon: Code2,
        title: 'Agile Development',
        description: 'See progress every 2 weeks with working demos. We build in short sprints so you can provide feedback early and often, ensuring the final product matches your vision perfectly.',
    },
    {
        icon: Rocket,
        title: 'Launch & Support',
        description: 'We handle deployment, monitoring, and optimization. Comprehensive training for your team, plus ongoing support packages to keep your AI solution running smoothly and improving over time.',
    },
];

const Process = () => {
    return (
        <section id="process" className="py-24 md:py-32 lg:py-40 relative overflow-hidden texture-diagonal-lines">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-2 h-2 border-2 border-[var(--foreground)]"></div>
                        <div className="h-px w-24 bg-[var(--foreground)]"></div>
                    </div>
                    <h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        From Idea to
                        <br />
                        Impact
                    </h2>
                    <p
                        className="text-lg md:text-xl leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Our proven process ensures your AI project delivers measurable results on time and within budget.
                    </p>
                </div>

                {/* Timeline - Vertical on Mobile, Horizontal on Desktop */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-24 left-0 w-full h-px bg-[var(--foreground)]" />

                    {/* Connecting Line (Mobile) */}
                    <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-[var(--foreground)]" />

                    <div className="grid lg:grid-cols-4 gap-8 lg:gap-1 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="relative pl-16 lg:pl-0">
                                {/* Step Number Circle */}
                                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-16 w-16 h-16 border-4 border-[var(--foreground)] bg-[var(--background)] flex items-center justify-center">
                                    <span
                                        className="text-2xl font-bold"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="lg:pt-32 border-2 border-[var(--border-light)] p-8 transition-all duration-100 hover:border-[var(--foreground)] group">
                                    {/* Icon */}
                                    <div className="w-12 h-12 border-2 border-[var(--foreground)] flex items-center justify-center mb-6 group-hover:bg-[var(--foreground)] transition-colors duration-100">
                                        <step.icon
                                            className="w-6 h-6 group-hover:text-[var(--background)] transition-colors duration-100"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-2xl md:text-3xl font-bold mb-4 tracking-tight"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Thick Section Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--foreground)]"></div>
        </section>
    );
};

export default Process;
