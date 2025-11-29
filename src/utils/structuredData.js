// Organization Schema
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DataVault.AI",
    "url": "https://datavault.ai",
    "logo": "https://datavault.ai/logo.png",
    "description": "Enterprise-grade web development, mobile apps, AI solutions, and cloud infrastructure services",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "email": "contact@datavault.ai"
    },
    "sameAs": [
        "https://www.upwork.com/freelancers/datavault",
        "https://github.com/datavault"
    ],
    "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD"
    }
};

// Website Schema
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DataVault.AI",
    "url": "https://datavault.ai",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://datavault.ai/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

// Service Schema for Web Development
export const webDevServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
        "@type": "Organization",
        "name": "DataVault.AI"
    },
    "description": "Enterprise web applications built with React, Next.js, Node.js, and modern frameworks. Scalable architecture designed for high-traffic production environments.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "React/Next.js Development"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Node.js Backend Development"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "REST/GraphQL API Development"
                }
            }
        ]
    }
};

// Service Schema for Mobile Development
export const mobileDevServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile App Development",
    "provider": {
        "@type": "Organization",
        "name": "DataVault.AI"
    },
    "description": "Native mobile applications for iOS and Android platforms using React Native, Swift, and Kotlin.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile Development Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "React Native Development"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "iOS Development (Swift)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Android Development (Kotlin)"
                }
            }
        ]
    }
};

// Service Schema for AI Development
export const aiDevServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Development",
    "provider": {
        "@type": "Organization",
        "name": "DataVault.AI"
    },
    "description": "Production-ready machine learning systems, LLM integration, computer vision, and NLP solutions with continuous monitoring and optimization.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Development Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "LLM Integration"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Computer Vision Solutions"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Natural Language Processing"
                }
            }
        ]
    }
};

// Service Schema for Web Hosting
export const webHostingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cloud Infrastructure & Web Hosting",
    "provider": {
        "@type": "Organization",
        "name": "DataVault.AI"
    },
    "description": "Secure, scalable cloud infrastructure with automated deployments, zero-downtime releases, and 24/7 monitoring on AWS, Azure, and GCP.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cloud Infrastructure Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "AWS/Azure/GCP Cloud Hosting"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Kubernetes/Docker Container Management"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "24/7 Infrastructure Monitoring"
                }
            }
        ]
    }
};

// FAQ Schema
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What services does DataVault.AI provide?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "DataVault.AI provides enterprise-grade web development, mobile app development, AI/ML solutions, and cloud infrastructure services. We specialize in React/Next.js, React Native, LLM integration, and cloud hosting on AWS/Azure/GCP."
            }
        },
        {
            "@type": "Question",
            "name": "What is your uptime guarantee?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We guarantee 99.9% uptime with enterprise SLA and 24/7 monitoring for all our cloud infrastructure and hosting services."
            }
        },
        {
            "@type": "Question",
            "name": "What is your response time for support?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide <15 minute response time with 24/7 technical support for all enterprise clients."
            }
        },
        {
            "@type": "Question",
            "name": "Which technologies do you use?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use modern technologies including React, Next.js, Node.js, Python, React Native, Swift, Kotlin, AWS, Azure, GCP, Kubernetes, Docker, PostgreSQL, and various AI/ML frameworks."
            }
        }
    ]
};
