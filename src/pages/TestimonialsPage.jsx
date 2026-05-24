import React from 'react';
import { Quote, Star, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clientReviews, profileStats, upworkProfileUrl } from '../data/profileData';
import SEO from '../components/SEO';

const TestimonialsPage = () => {
    return (
        <>
            <SEO
                title="Testimonials — DataVault.AI"
                description="Read verified client reviews from Upwork and beyond. 100% 5-star rating across all completed projects."
            />

            <main className="pt-16">
                {/* Page Hero */}
                <section className="py-24 md:py-32 border-b-2 border-[var(--foreground)] relative">
                    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-10 transition-colors duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            <ArrowLeft className="w-3 h-3" strokeWidth={2} />
                            Back to Home
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-2 h-2 border-2 border-[var(--foreground)]"></div>
                            <div className="h-px w-24 bg-[var(--foreground)]"></div>
                        </div>

                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Trusted by
                            <br />
                            <span className="italic">Forward-Thinking</span>
                            <br />
                            Companies
                        </h1>
                        <p
                            className="text-lg md:text-xl max-w-2xl leading-relaxed text-[var(--muted-foreground)]"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Every review is verified and sourced directly from Upwork — the world's leading
                            freelance platform. No fabricated quotes.
                        </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--foreground)]"></div>
                </section>

                {/* Upwork Verified Banner */}
                <section className="border-b-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]">
                    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                {/* Upwork-style badge */}
                                <div className="border-2 border-[var(--background)] px-4 py-2">
                                    <span
                                        className="text-xs uppercase tracking-widest font-bold"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        Upwork Verified
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 fill-current" strokeWidth={0} />
                                    ))}
                                    <span
                                        className="text-sm font-bold ml-2"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        {profileStats.rating}.0
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="text-center">
                                    <div
                                        className="text-3xl font-bold"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {profileStats.totalReviews}
                                    </div>
                                    <div
                                        className="text-xs uppercase tracking-widest opacity-70"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        Reviews
                                    </div>
                                </div>
                                <div className="w-px h-10 bg-[var(--background)] opacity-30" />
                                <div className="text-center">
                                    <div
                                        className="text-3xl font-bold"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {profileStats.jobSuccessScore}%
                                    </div>
                                    <div
                                        className="text-xs uppercase tracking-widest opacity-70"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        Job Success
                                    </div>
                                </div>
                                <div className="w-px h-10 bg-[var(--background)] opacity-30" />
                                <div className="text-center">
                                    <div
                                        className="text-3xl font-bold"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {profileStats.totalJobs}
                                    </div>
                                    <div
                                        className="text-xs uppercase tracking-widest opacity-70"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        Jobs
                                    </div>
                                </div>
                            </div>

                            <a
                                href={upworkProfileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--background)] text-xs uppercase tracking-widest font-semibold hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                View Upwork Profile <ExternalLink className="w-3 h-3" strokeWidth={2} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                            {clientReviews.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="p-8 border-2 border-[var(--border-light)] flex flex-col transition-all duration-100 hover:border-[var(--foreground)] group"
                                >
                                    {/* Review number + stars */}
                                    <div className="flex items-center justify-between mb-6">
                                        <Quote
                                            className="w-10 h-10 opacity-10 group-hover:opacity-20 transition-opacity duration-100"
                                            strokeWidth={2}
                                        />
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star
                                                    key={s}
                                                    className="w-3 h-3 fill-current text-[var(--foreground)]"
                                                    strokeWidth={0}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <p
                                        className="text-lg md:text-xl italic mb-8 leading-relaxed flex-grow border-b-2 border-[var(--border-light)] pb-8 group-hover:border-b-[3px] transition-all duration-100"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        "{testimonial.content}"
                                    </p>

                                    {/* Project */}
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

                                    {/* Author */}
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
                                            <div
                                                className="flex items-center gap-2 text-xs mt-2 text-[var(--muted-foreground)]"
                                                style={{ fontFamily: 'var(--font-mono)' }}
                                            >
                                                <span>{testimonial.date}</span>
                                                {testimonial.amount && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="font-semibold text-[var(--foreground)]">
                                                            {testimonial.amount}
                                                        </span>
                                                    </>
                                                )}
                                                <span>•</span>
                                                <span className="text-[var(--muted-foreground)]">Upwork</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]">
                    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
                        <h2
                            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Ready to add your
                            <br />
                            <span className="italic">success story?</span>
                        </h2>
                        <p
                            className="text-lg mb-10 max-w-xl mx-auto leading-relaxed opacity-80"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Join our growing list of satisfied clients and let's build something great together.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/#contact"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--background)] text-[var(--foreground)] text-sm uppercase tracking-widest font-semibold border-2 border-[var(--background)] hover:bg-transparent hover:text-[var(--background)] transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Get in Touch <ArrowRight className="w-4 h-4" strokeWidth={2} />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-transparent text-[var(--background)] text-sm uppercase tracking-widest font-semibold border-2 border-[var(--background)] opacity-60 hover:opacity-100 transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default TestimonialsPage;
