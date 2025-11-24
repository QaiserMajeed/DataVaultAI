import React from 'react';
import { Server, Monitor, Brain, Lightbulb, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Server className="w-8 h-8 text-emerald-400" />,
        title: 'AI Backend Development',
        description: 'Build intelligent systems that automate workflows, process data at scale, and deliver instant insights. From chatbots to recommendation engines, we create backends that work hard for your business.',
        features: ['Custom LLM Integration', 'RAG Pipelines', 'FastAPI/Node.js'],
        gradient: 'from-emerald-500/20 to-teal-500/20',
        border: 'group-hover:border-emerald-500/50',
    },
    {
        icon: <Monitor className="w-8 h-8 text-teal-400" />,
        title: 'AI Frontend Development',
        description: 'Create intuitive interfaces that make AI accessible to your users. Fast, beautiful, and easy to use - we build frontends that turn complex AI into simple experiences.',
        features: ['React & Next.js', 'Real-time Streaming', 'Accessible Design'],
        gradient: 'from-teal-500/20 to-cyan-500/20',
        border: 'group-hover:border-teal-500/50',
    },
    {
        icon: <Brain className="w-8 h-8 text-coral-400" />,
        title: 'ML Model Development',
        description: 'Train custom models that solve your specific challenges. Whether detecting fraud, predicting customer behavior, or analyzing images - we build AI that delivers measurable ROI.',
        features: ['Model Training', 'Computer Vision', 'NLP Solutions'],
        gradient: 'from-coral-500/20 to-orange-500/20',
        border: 'group-hover:border-coral-500/50',
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
        title: 'AI Consulting & Strategy',
        description: 'Not sure where to start? We help you identify high-impact AI opportunities, prioritize initiatives, and create roadmaps that deliver value fast.',
        features: ['Feasibility Assessment', 'Solution Architecture', 'Tech Stack Selection'],
        gradient: 'from-yellow-500/20 to-amber-500/20',
        border: 'group-hover:border-yellow-500/50',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-teal-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-800 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-sm font-semibold mb-4"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Full-Stack AI Development Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-teal-100/70"
                    >
                        From strategy to deployment, we handle every aspect of your AI project. Fast, secure, and built to scale.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-3xl bg-teal-900/30 border border-teal-800 ${service.border} hover:bg-teal-900/50 transition-all duration-300`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-teal-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-teal-800 group-hover:border-teal-700">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-teal-100/70 mb-6 leading-relaxed">{service.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-teal-200">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
