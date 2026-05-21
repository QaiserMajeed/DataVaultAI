import React, { useState } from 'react';
import { ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioProjects } from '../data/profileData';
import SEO from '../components/SEO';

const categories = ['All', ...Array.from(new Set(portfolioProjects.map((p) => p.category)))];

const PortfolioPage = () => {
    const [activeId, setActiveId] = useState(portfolioProjects[0].id);
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered =
        activeCategory === 'All'
            ? portfolioProjects
            : portfolioProjects.filter((p) => p.category === activeCategory);

    const activeProject = filtered.find((p) => p.id === activeId) || filtered[0];

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        const first = cat === 'All' ? portfolioProjects[0] : portfolioProjects.find((p) => p.category === cat);
        if (first) setActiveId(first.id);
    };

    return (
        <>
            <SEO
                title="Portfolio — DataVault.AI"
                description="Explore our portfolio of real-world projects spanning full-stack development, AI automation, e-commerce, fintech, and more."
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
                            Real Solutions,
                            <br />
                            <span className="italic">Real Results</span>
                        </h1>
                        <p
                            className="text-lg md:text-xl max-w-2xl leading-relaxed text-[var(--muted-foreground)]"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            {portfolioProjects.length} projects delivered across full-stack development, AI automation,
                            e-commerce, fintech, and more.
                        </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--foreground)]"></div>
                </section>

                {/* Category Filter */}
                <section className="border-b border-[var(--border-light)]">
                    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                        <div className="flex gap-0 overflow-x-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`px-6 py-4 text-xs uppercase tracking-widest whitespace-nowrap border-r border-[var(--border-light)] transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-[-3px] ${
                                        activeCategory === cat
                                            ? 'bg-[var(--foreground)] text-[var(--background)]'
                                            : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                                    }`}
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Project Explorer */}
                <section className="py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                        <div className="grid lg:grid-cols-2 gap-1">
                            {/* Project List */}
                            <div className="space-y-1">
                                {filtered.map((project) => (
                                    <div
                                        key={project.id}
                                        onClick={() => setActiveId(project.id)}
                                        className={`p-8 cursor-pointer transition-all duration-100 border-2 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3 ${
                                            activeProject?.id === project.id
                                                ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                                                : 'bg-[var(--background)] text-[var(--foreground)] border-[var(--border-light)] hover:border-[var(--foreground)]'
                                        }`}
                                        tabIndex={0}
                                        role="button"
                                        aria-pressed={activeProject?.id === project.id}
                                        onKeyDown={(e) => e.key === 'Enter' && setActiveId(project.id)}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h2
                                                className="text-xl font-bold tracking-tight pr-4"
                                                style={{ fontFamily: 'var(--font-display)' }}
                                            >
                                                {project.title}
                                            </h2>
                                            {activeProject?.id === project.id && (
                                                <ArrowRight className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                                            )}
                                        </div>
                                        <p
                                            className="text-xs uppercase tracking-wider mb-4"
                                            style={{ fontFamily: 'var(--font-mono)' }}
                                        >
                                            {project.category}
                                        </p>
                                        {activeProject?.id === project.id && (
                                            <p
                                                className="text-sm leading-relaxed mb-6"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                                {project.description}
                                            </p>
                                        )}
                                        <div className="flex gap-2 flex-wrap">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`px-3 py-1 text-xs uppercase tracking-wider border ${
                                                        activeProject?.id === project.id
                                                            ? 'border-[var(--background)]'
                                                            : 'border-[var(--foreground)]'
                                                    }`}
                                                    style={{ fontFamily: 'var(--font-mono)' }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Project Preview */}
                            <div className="relative min-h-[500px] border-2 border-[var(--foreground)] overflow-hidden lg:sticky lg:top-24 lg:self-start">
                                {activeProject && (
                                    <div className="absolute inset-0">
                                        <img
                                            src={activeProject.image}
                                            alt={activeProject.title}
                                            className="w-full h-full object-cover grayscale"
                                        />
                                        <div className="absolute inset-0 bg-[var(--foreground)] opacity-50" />

                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-[var(--foreground)] text-[var(--background)] border-t-2 border-[var(--background)]">
                                            <div className="grid grid-cols-2 gap-1 mb-8">
                                                {Object.entries(activeProject.stats).map(([key, value]) => (
                                                    <div
                                                        key={key}
                                                        className="p-4 border-2 border-[var(--background)] text-center"
                                                    >
                                                        <div
                                                            className="text-3xl font-bold mb-2"
                                                            style={{ fontFamily: 'var(--font-display)' }}
                                                        >
                                                            {value}
                                                        </div>
                                                        <div
                                                            className="text-xs uppercase tracking-widest"
                                                            style={{ fontFamily: 'var(--font-mono)' }}
                                                        >
                                                            {key}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {activeProject.testimonial && (
                                                <p
                                                    className="text-sm italic mb-6 leading-relaxed border-l-2 border-[var(--background)] pl-4"
                                                    style={{ fontFamily: 'var(--font-display)' }}
                                                >
                                                    "{activeProject.testimonial}"
                                                </p>
                                            )}
                                            <button
                                                className="flex items-center gap-2 uppercase tracking-widest text-sm font-semibold transition-all duration-100 border-b-2 border-[var(--background)] hover:border-transparent focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                                                style={{ fontFamily: 'var(--font-mono)' }}
                                            >
                                                View Case Study <ExternalLink className="w-4 h-4" strokeWidth={2} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
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
                            Ready to be our next
                            <br />
                            <span className="italic">success story?</span>
                        </h2>
                        <p
                            className="text-lg mb-10 max-w-xl mx-auto leading-relaxed opacity-80"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Let's discuss your project and build something remarkable together.
                        </p>
                        <Link
                            to="/#contact"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--background)] text-[var(--foreground)] text-sm uppercase tracking-widest font-semibold border-2 border-[var(--background)] hover:bg-transparent hover:text-[var(--background)] transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Start a Project <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PortfolioPage;
