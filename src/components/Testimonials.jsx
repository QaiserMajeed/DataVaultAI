import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { clientReviews, profileStats } from '../data/profileData';

const testimonials = clientReviews;

const Testimonials = () => {
    const totalReviews = testimonials.length;
    const averageRating = 5.0;

    return (
        <section id="testimonials" className="py-24 bg-teal-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-sm font-semibold mb-4"
                    >
                        Client Testimonials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Trusted by Forward-Thinking Companies
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-teal-100/70 mb-8"
                    >
                        Don't just take our word for it - hear from the businesses we've helped transform with AI.
                    </motion.p>

                    {/* Social Proof Banner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-4 px-6 py-3 bg-teal-900/50 border border-emerald-800 rounded-full"
                    >
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <div className="text-white font-semibold">
                            {averageRating.toFixed(1)} / 5.0
                        </div>
                        <div className="text-teal-300 text-sm">
                            Based on {totalReviews}+ client reviews
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-teal-900/30 p-8 rounded-3xl border border-teal-800 relative hover:bg-teal-900/50 transition-all duration-300 hover:border-emerald-500/50 flex flex-col"
                        >
                            <Quote className="w-10 h-10 text-coral-500/20 mb-4" />

                            {/* Rating Stars */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-teal-100/80 mb-6 leading-relaxed">"{testimonial.content}"</p>

                            <div className="mt-auto">
                                {testimonial.project && (
                                    <div className="mb-3 pb-3 border-b border-teal-800">
                                        <div className="text-xs text-teal-400 font-semibold">Project:</div>
                                        <div className="text-sm text-teal-200">{testimonial.project}</div>
                                    </div>
                                )}
                                <div className="flex items-center gap-4 mb-2">
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
                                <div className="flex items-center gap-2 text-xs text-teal-500 mt-2">
                                    <span>{testimonial.date}</span>
                                    {testimonial.amount && (
                                        <>
                                            <span>•</span>
                                            <span className="font-semibold text-emerald-400">{testimonial.amount}</span>
                                        </>
                                    )}
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
