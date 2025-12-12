import React from 'react';
import { Quote } from 'lucide-react';
import { clientReviews } from '../data/profileData';

const testimonials = clientReviews;

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-2 h-2 border-2 border-[var(--foreground)]"></div>
                        <div className="h-px w-24 bg-[var(--foreground)]"></div>
                    </div>
                    <h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Trusted by
                        <br />
                        <span className="italic">Forward-Thinking</span>
                        <br />
                        Companies
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Don't just take our word for it—hear from the businesses we've helped transform with AI.
                    </p>
                </div>

                {/* Testimonials Grid - Editorial Pull Quotes */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="p-8 border-2 border-[var(--border-light)] flex flex-col transition-all duration-100 hover:border-[var(--foreground)] group"
                        >
                            {/* Oversized Quote Mark */}
                            <Quote 
                                className="w-16 h-16 mb-6 opacity-10 group-hover:opacity-20 transition-opacity duration-100" 
                                strokeWidth={2}
                            />

                            {/* Testimonial Content - Editorial Style */}
                            <p
                                className="text-lg md:text-xl italic mb-8 leading-relaxed flex-grow border-b-2 border-[var(--border-light)] pb-8 group-hover:border-b-[3px] transition-all duration-100"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                "{testimonial.content}"
                            </p>

                            {/* Project Info */}
                            {testimonial.project && (
                                <div className="mb-4 pb-4 border-b border-[var(--border-light)]">
                                    <div 
                                        className="text-xs uppercase tracking-widest font-semibold mb-1"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        Project
                                    </div>
                                    <div
                                        className="text-sm"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {testimonial.project}
                                    </div>
                                </div>
                            )}

                            {/* Author Info */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 border-2 border-[var(--foreground)] overflow-hidden flex-shrink-0">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover grayscale"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <div
                                        className="font-bold text-base mb-1"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {testimonial.name}
                                    </div>
                                    <div
                                        className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        {testimonial.role}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs mt-2" style={{ fontFamily: 'var(--font-mono)' }}>
                                        <span>{testimonial.date}</span>
                                        {testimonial.amount && (
                                            <>
                                                <span>•</span>
                                                <span className="font-semibold">{testimonial.amount}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Thick Section Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--foreground)]"></div>
        </section>
    );
};

export default Testimonials;
