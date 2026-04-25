import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { buildBreadcrumbSchema } from '../utils/structuredData';

const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

const Blog = () => {
    const breadcrumbs = buildBreadcrumbSchema([
        { name: 'Home', url: 'https://datavalutai.com/' },
        { name: 'Blog', url: 'https://datavalutai.com/blog' }
    ]);

    const blogListSchema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': 'https://datavalutai.com/blog#blog',
        name: 'DataVault.AI Blog',
        description:
            'Engineering and AI strategy notes from the DataVault.AI team.',
        url: 'https://datavalutai.com/blog',
        publisher: { '@id': 'https://datavalutai.com/#organization' },
        blogPost: blogPosts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            url: `https://datavalutai.com/blog/${p.slug}`,
            author: { '@type': 'Organization', name: p.author }
        }))
    };

    return (
        <main>
            <SEO
                title="Blog - AI Strategy, Engineering & Cloud Notes"
                description="Engineering and AI strategy notes from the DataVault.AI team. LLM architecture, RAG, prompt caching, cloud cost, and enterprise software."
                keywords="AI blog, LLM blog, machine learning engineering, RAG, prompt caching, enterprise AI, software engineering blog"
                canonical="https://datavalutai.com/blog"
                structuredData={[blogListSchema, breadcrumbs]}
            />

            <section className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-2 h-2 border-2 border-[var(--foreground)]"></div>
                            <div className="h-px w-24 bg-[var(--foreground)]"></div>
                        </div>
                        <h1
                            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Field
                            <br />
                            <span className="italic">Notes</span>
                        </h1>
                        <p
                            className="text-lg md:text-xl max-w-2xl leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Practical lessons from building AI, web, and cloud
                            systems for enterprise clients.
                        </p>
                    </div>

                    <div className="grid gap-1">
                        {blogPosts.map((post) => (
                            <article
                                key={post.slug}
                                className="border-2 border-[var(--border-light)] transition-all duration-100 hover:border-[var(--foreground)]"
                            >
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="block p-8 md:p-10 group focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                >
                                    <div
                                        className="flex flex-wrap items-center gap-4 mb-4 text-xs uppercase tracking-widest"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        <span>{post.category}</span>
                                        <span>•</span>
                                        <time dateTime={post.date}>
                                            {formatDate(post.date)}
                                        </time>
                                        <span>•</span>
                                        <span>{post.readingMinutes} min read</span>
                                    </div>
                                    <h2
                                        className="text-2xl md:text-4xl font-bold mb-4 tracking-tight"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {post.title}
                                    </h2>
                                    <p
                                        className="text-base md:text-lg mb-6 leading-relaxed max-w-3xl"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {post.excerpt}
                                    </p>
                                    <div
                                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        Read article
                                        <ArrowRight
                                            className="w-4 h-4 transition-transform duration-100 group-hover:translate-x-1"
                                            strokeWidth={2}
                                        />
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
