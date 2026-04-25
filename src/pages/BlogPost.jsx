import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import { buildBreadcrumbSchema } from '../utils/structuredData';

const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

const renderBlock = (block, idx) => {
    switch (block.type) {
        case 'h2':
            return (
                <h2
                    key={idx}
                    className="text-3xl md:text-4xl font-bold mt-12 mb-6 tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    {block.content}
                </h2>
            );
        case 'h3':
            return (
                <h3
                    key={idx}
                    className="text-2xl font-bold mt-8 mb-4 tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    {block.content}
                </h3>
            );
        case 'p':
        default:
            return (
                <p
                    key={idx}
                    className="text-lg leading-relaxed mb-6"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    {block.content}
                </p>
            );
    }
};

const BlogPost = () => {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    if (!post) return <Navigate to="/blog" replace />;

    const url = `https://datavalutai.com/blog/${post.slug}`;
    const breadcrumbs = buildBreadcrumbSchema([
        { name: 'Home', url: 'https://datavalutai.com/' },
        { name: 'Blog', url: 'https://datavalutai.com/blog' },
        { name: post.title, url }
    ]);

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        url,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Organization',
            name: post.author,
            url: 'https://datavalutai.com/'
        },
        publisher: { '@id': 'https://datavalutai.com/#organization' },
        image: 'https://datavalutai.com/og-image.svg',
        keywords: post.tags.join(', '),
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        wordCount: post.body
            .map((b) => (typeof b.content === 'string' ? b.content.split(/\s+/).length : 0))
            .reduce((a, b) => a + b, 0)
    };

    const related = getRelatedPosts(post.slug, 2);

    return (
        <main>
            <SEO
                title={post.title}
                description={post.excerpt}
                keywords={post.tags.join(', ')}
                canonical={url}
                ogType="article"
                publishedTime={post.date}
                modifiedTime={post.date}
                author={post.author}
                structuredData={[articleSchema, breadcrumbs]}
            />

            <article className="pt-24 pb-16 md:pt-32 md:pb-24">
                <header className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 mb-16">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 mb-12 text-sm uppercase tracking-widest hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                        All posts
                    </Link>
                    <div
                        className="flex flex-wrap items-center gap-4 mb-6 text-xs uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        <span>{post.category}</span>
                        <span>•</span>
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span>•</span>
                        <span>{post.readingMinutes} min read</span>
                    </div>
                    <h1
                        className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {post.title}
                    </h1>
                    <p
                        className="text-xl md:text-2xl leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        {post.excerpt}
                    </p>
                </header>

                <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
                    {post.body.map(renderBlock)}

                    <div
                        className="mt-12 pt-8 border-t-2 border-[var(--border-light)] flex flex-wrap gap-2"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        {post.tags.map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 text-xs uppercase tracking-wider border border-[var(--foreground)]"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {related.length > 0 && (
                    <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 mt-24 pt-16 border-t-2 border-[var(--foreground)]">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Related reading
                        </h2>
                        <div className="grid md:grid-cols-2 gap-1">
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    to={`/blog/${r.slug}`}
                                    className="block p-8 border-2 border-[var(--border-light)] transition-all duration-100 hover:border-[var(--foreground)] group"
                                >
                                    <h3
                                        className="text-2xl font-bold mb-4 tracking-tight"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {r.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed mb-6"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {r.excerpt}
                                    </p>
                                    <div
                                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest"
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        Read
                                        <ArrowRight
                                            className="w-4 h-4 transition-transform duration-100 group-hover:translate-x-1"
                                            strokeWidth={2}
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </main>
    );
};

export default BlogPost;
