import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://datavault.ai';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const DEFAULT_DESCRIPTION = 'Enterprise AI, web, mobile, and cloud development. LLM integration, React/Next.js, React Native, AWS/Azure/GCP. 99.9% uptime, <15min response, 60% cost reduction.';

const SEO = ({
    title,
    description,
    keywords,
    ogType = 'website',
    ogImage = DEFAULT_OG_IMAGE,
    canonical,
    structuredData,
    noindex = false,
    locale = 'en_GB',
    publishedTime,
    modifiedTime,
    author = 'DataVault.AI'
}) => {
    const fullTitle = title
        ? `${title} | DataVault.AI`
        : 'DataVault.AI - Custom AI, Web, Mobile & Cloud Development for Enterprise';
    const metaDescription = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = canonical || `${BASE_URL}/`;
    const robotsContent = noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    const schemas = Array.isArray(structuredData)
        ? structuredData
        : structuredData
            ? [structuredData]
            : [];

    return (
        <Helmet prioritizeSeoTags>
            {/* Primary Meta Tags */}
            <html lang="en-GB" />
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots */}
            <meta name="robots" content={robotsContent} />
            <meta name="googlebot" content={robotsContent} />
            <meta name="bingbot" content={robotsContent} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={fullTitle} />
            <meta property="og:site_name" content="DataVault.AI" />
            <meta property="og:locale" content={locale} />

            {/* Article-specific (when ogType="article") */}
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {ogType === 'article' && <meta property="article:author" content={author} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@datavaultai" />
            <meta name="twitter:creator" content="@datavaultai" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content={fullTitle} />

            {/* Additional Meta */}
            <meta name="language" content="English" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="format-detection" content="telephone=yes" />

            {/* Structured Data */}
            {schemas.map((schema, idx) => (
                <script key={idx} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
