import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioProjects } from '../data/profileData';

const projects = portfolioProjects;

const Portfolio = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <section id="portfolio" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-2 h-2 border-2 border-[var(--foreground)]"></div>
                        <div className="h-px w-24 bg-[var(--foreground)]"></div>
                    </div>
                    <h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Real Solutions,
                        <br />
                        <span className="italic">Real Results</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-2xl leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        See how we've helped businesses like yours leverage AI to increase efficiency, reduce costs, and drive growth.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-1">
                    {/* Project List */}
                    <div className="space-y-1">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setActiveId(project.id)}
                                className={`p-8 cursor-pointer transition-all duration-100 border-2 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3 ${
                                    activeId === project.id
                                        ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                                        : 'bg-[var(--background)] text-[var(--foreground)] border-[var(--border-light)] hover:border-[var(--foreground)]'
                                }`}
                                tabIndex={0}
                                role="button"
                                onKeyDown={(e) => e.key === 'Enter' && setActiveId(project.id)}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3
                                        className="text-2xl font-bold tracking-tight"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {project.title}
                                    </h3>
                                    {activeId === project.id && (
                                        <ArrowRight className="w-6 h-6" strokeWidth={2} />
                                    )}
                                </div>
                                <p
                                    className="text-sm uppercase tracking-wider mb-4"
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    {project.category}
                                </p>
                                {activeId === project.id && (
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
                                                activeId === project.id
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
                    <div className="relative min-h-[600px] border-2 border-[var(--foreground)] overflow-hidden">
                        {projects.map(
                            (project) =>
                                project.id === activeId && (
                                    <div key={project.id} className="absolute inset-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale"
                                        />
                                        <div className="absolute inset-0 bg-[var(--foreground)] opacity-50" />

                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-[var(--foreground)] text-[var(--background)] border-t-2 border-[var(--background)]">
                                            <div className="grid grid-cols-2 gap-1 mb-8">
                                                {Object.entries(project.stats).map(([key, value]) => (
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
                                            {project.link && project.link !== '#' ? (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-semibold transition-all duration-100 border-b-2 border-[var(--background)] hover:border-transparent focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--background)] focus-visible:outline-offset-3"
                                                    style={{ fontFamily: 'var(--font-mono)' }}
                                                >
                                                    Visit Live Site <ExternalLink className="w-4 h-4" strokeWidth={2} />
                                                </a>
                                            ) : (
                                                <span
                                                    className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-semibold opacity-50"
                                                    style={{ fontFamily: 'var(--font-mono)' }}
                                                >
                                                    Private / NDA Project
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>

            {/* Thick Section Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--foreground)]"></div>
        </section>
    );
};

export default Portfolio;
