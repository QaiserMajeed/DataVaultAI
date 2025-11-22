import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: <Search className="w-6 h-6" />,
        title: 'Discovery',
        description: 'We analyze your requirements and define the project scope.',
        color: 'teal',
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: 'Design',
        description: 'We create the system architecture and technical specifications.',
        color: 'emerald',
    },
    {
        icon: <Code2 className="w-6 h-6" />,
        title: 'Development',
        description: 'We build your solution using agile methodology and best practices.',
        color: 'coral',
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: 'Deployment',
        description: 'We launch your application and provide ongoing support.',
        color: 'cyan',
    },
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-teal-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-coral-900/30 border border-coral-800 text-coral-400 text-sm font-semibold mb-4"
                    >
                        Our Process
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How We Deliver</h2>
                    <p className="text-lg text-teal-100/70">A proven methodology for successful AI implementation.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-teal-800 -translate-y-1/2 z-0" />

                    <div className="grid md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group"
                            >
                                <div className="bg-teal-900/40 p-6 rounded-2xl border border-teal-800 hover:border-teal-700 transition-all duration-300 relative h-full backdrop-blur-sm">
                                    <div className={`w-12 h-12 rounded-xl bg-${step.color}-500/10 flex items-center justify-center mb-4 text-${step.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-teal-800 rounded-full flex items-center justify-center border border-teal-700 text-sm font-bold text-teal-200">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-teal-100/70 leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
