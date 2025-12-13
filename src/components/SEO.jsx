import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    ogType = 'website',
    ogImage = 'https://datavault.ai/og-image.jpg',
    canonical,
    structuredData,
    article = null, // For blog posts: { publishedTime, modifiedTime, author, section, tags }
    breadcrumbs = null // Array of breadcrumb items: [{ name, url }]
}) => {
    const baseUrl = 'https://datavault.ai';
    const fullTitle = title ? `${title} | DataVault.AI` : 'DataVault.AI - Enterprise Web, Mobile & AI Development';
    const defaultDescription = 'Enterprise-grade web development, mobile apps, AI solutions, and cloud infrastructure. 99.9% uptime, <15min response time, 60% cost reduction. Transform your business with DataVault.AI.';
    const metaDescription = description || defaultDescription;
    const canonicalUrl = canonical || baseUrl;

    // Generate breadcrumb structured data
    const breadcrumbSchema = breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
        }))
    } : null;

    return (
        <Helmet>
            {/* Performance Optimization - Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="DataVault.AI" />
            <meta property="og:locale" content="en_US" />

            {/* Article-specific OG tags */}
            {article && (
                <>
                    <meta property="article:published_time" content={article.publishedTime} />
                    <meta property="article:modified_time" content={article.modifiedTime} />
                    <meta property="article:author" content={article.author || "DataVault.AI"} />
                    {article.section && <meta property="article:section" content={article.section} />}
                    {article.tags && article.tags.map(tag => (
                        <meta key={tag} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@datavaultai" />
            <meta name="twitter:creator" content="@datavaultai" />

            {/* Additional SEO Meta Tags */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="author" content="DataVault.AI" />
            <meta name="revisit-after" content="7 days" />
            <meta name="rating" content="General" />
            <meta name="distribution" content="global" />

            {/* Mobile Optimization */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="apple-mobile-web-app-title" content="DataVault.AI" />

            {/* Content Type */}
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

            {/* Geo Tags for Local SEO */}
            <meta name="geo.region" content="GB" />
            <meta name="geo.placename" content="United Kingdom" />

            {/* Structured Data - Main Schema */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}

            {/* Structured Data - Breadcrumbs */}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
