import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Michael Chen',
        role: 'CTO, TechCorp Solutions',
        content: "DataVault AI delivered our document intelligence system in just 12 weeks. Their expertise in LLM integration and dedication to quality exceeded our expectations.",
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    },
    {
        name: 'Sarah Johnson',
        role: 'VP of Engineering, DataFlow Inc',
        content: "Working with DataVault AI was a game-changer. Their team's deep understanding of AI and FullStack development helped us launch our platform ahead of schedule.",
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    },
    {
        name: 'David Martinez',
        role: 'Director of Innovation, ManufactureCo',
        content: "The computer vision system DataVault AI built has transformed our quality control process. The ROI was evident within weeks of deployment.",
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-teal-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Client Stories</h2>
                    <p className="text-lg text-teal-100/70">Trusted by innovative companies worldwide.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-teal-900/30 p-8 rounded-3xl border border-teal-800 relative hover:bg-teal-900/50 transition-colors"
                        >
                            <Quote className="w-10 h-10 text-coral-500/20 mb-6" />
                            <p className="text-teal-100/80 mb-8 leading-relaxed italic">"{testimonial.content}"</p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-teal-700"
                                />
                                <div>
                                    <div className="font-bold text-white">{testimonial.name}</div>
                                    <div className="text-xs text-teal-400">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
