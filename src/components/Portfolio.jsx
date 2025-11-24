import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'AI Document Intelligence Platform',
        category: 'Enterprise NLP',
        description: 'Built an intelligent document processing system that extracts, classifies, and analyzes contracts, invoices, and reports. Reduced manual processing time by 85% and saved the client $500K annually.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
        stats: { documents: '10M+', accuracy: '95%' },
        tags: ['GPT-4', 'Pinecone', 'React'],
    },
    {
        id: 2,
        title: 'Customer Support AI Agent',
        category: 'SaaS Product',
        description: 'Developed an AI-powered chatbot that handles 70% of customer inquiries automatically. Decreased response times from 2 hours to 30 seconds while maintaining 98% customer satisfaction.',
        image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1200&q=80',
        stats: { users: '50K+', satisfaction: '98%' },
        tags: ['Claude API', 'Node.js', 'WebSocket'],
    },
    {
        id: 3,
        title: 'Visual Quality Control System',
        category: 'Manufacturing',
        description: 'Created a computer vision system that inspects products on assembly lines in real-time. Reduced defects by 40%, eliminated manual inspection costs, and achieved $200K+ ROI in the first year.',
        image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&q=80',
        stats: { speed: '50ms', detection: '99%' },
        tags: ['PyTorch', 'YOLO', 'Edge AI'],
    },
];

const Portfolio = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <section id="portfolio" className="py-24 bg-teal-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-sm font-semibold mb-4"
                    >
                        Our Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Real AI Solutions, Real Results
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-teal-100/70"
                    >
                        See how we've helped businesses like yours leverage AI to increase efficiency, reduce costs, and drive growth.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Project List */}
                    <div className="space-y-6">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                onClick={() => setActiveId(project.id)}
                                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeId === project.id
                                        ? 'bg-teal-900 border-emerald-500/50 shadow-lg shadow-emerald-900/20'
                                        : 'bg-transparent border-teal-800 hover:bg-teal-900/30'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className={`text-xl font-bold ${activeId === project.id ? 'text-white' : 'text-teal-200/70'}`}>
                                        {project.title}
                                    </h3>
                                    {activeId === project.id && <ArrowRight className="text-emerald-500" />}
                                </div>
                                <p className="text-sm text-teal-400 mb-3">{project.category}</p>
                                {activeId === project.id && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-sm text-teal-100/70 mb-4 leading-relaxed"
                                    >
                                        {project.description}
                                    </motion.p>
                                )}
                                <div className="flex gap-2 flex-wrap mt-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs rounded-md bg-teal-950 text-teal-200 border border-teal-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Project Preview */}
                    <div className="relative h-[500px] rounded-3xl overflow-hidden border border-teal-800 bg-teal-900">
                        <AnimatePresence mode="wait">
                            {projects.map((project) => (
                                project.id === activeId && (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-60"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/50 to-transparent" />

                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="grid grid-cols-2 gap-4 mb-8">
                                                {Object.entries(project.stats).map(([key, value]) => (
                                                    <div key={key} className="bg-teal-950/80 backdrop-blur-md p-4 rounded-xl border border-teal-800">
                                                        <div className="text-2xl font-bold text-white">{value}</div>
                                                        <div className="text-xs text-teal-400 uppercase tracking-wider">{key}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="flex items-center gap-2 text-white font-semibold hover:text-emerald-400 transition-colors">
                                                View Case Study <ExternalLink className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
