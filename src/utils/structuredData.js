const BASE_URL = 'https://datavalutai.com';
const ORG_ID = `${BASE_URL}/#organization`;

// Organization Schema (canonical reference; matches index.html)
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    "name": "DataVault.AI",
    "alternateName": ["DataVault AI", "DataVaultAI"],
    "url": `${BASE_URL}/`,
    "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo.png`,
        "width": 512,
        "height": 512
    },
    "image": `${BASE_URL}/og-image.png`,
    "description": "Enterprise-grade AI, web, mobile, and cloud development. Custom LLM integration, machine learning, React/Next.js, React Native, and AWS/Azure/GCP infrastructure.",
    "email": "hello@datavaultai.com",
    "telephone": "+447440189478",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressLocality": "London"
    },
    "areaServed": [
        { "@type": "Place", "name": "Worldwide" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "European Union" }
    ],
    "sameAs": [
        "https://twitter.com/datavaultai",
        "https://linkedin.com/company/datavaultai",
        "https://github.com/datavaultai"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+447440189478",
        "contactType": "sales",
        "email": "hello@datavaultai.com",
        "availableLanguage": ["en", "en-GB", "en-US"],
        "areaServed": "Worldwide"
    }
};

// Website Schema
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "name": "DataVault.AI",
    "url": `${BASE_URL}/`,
    "description": "Enterprise-grade AI, web, mobile, and cloud development services.",
    "publisher": { "@id": ORG_ID },
    "inLanguage": "en-GB",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${BASE_URL}/?s={search_term_string}`
        },
        "query-input": "required name=search_term_string"
    }
};

// Helper: build a breadcrumb schema for a page
export const buildBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
});

// Helper: build a Service schema
const buildServiceSchema = ({ name, slug, serviceType, description, services }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${slug}#service`,
    "name": name,
    "serviceType": serviceType,
    "url": `${BASE_URL}/services/${slug}`,
    "provider": { "@id": ORG_ID },
    "description": description,
    "areaServed": [
        { "@type": "Place", "name": "Worldwide" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United States" }
    ],
    "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Enterprise"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${name} Services`,
        "itemListElement": services.map((s) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": s }
        }))
    }
});

// Service Schema for Web Development
export const webDevServiceSchema = buildServiceSchema({
    name: 'Web Development',
    slug: 'web-development',
    serviceType: 'Web Application Development',
    description: 'Enterprise web applications built with React, Next.js, and Node.js. Scalable architecture designed for high-traffic production environments.',
    services: [
        'React/Next.js Development',
        'Node.js Backend Development',
        'TypeScript Development',
        'REST and GraphQL API Development',
        'Progressive Web Apps (PWA)',
        'Headless CMS Integration'
    ]
});

// Service Schema for Mobile Development
export const mobileDevServiceSchema = buildServiceSchema({
    name: 'Mobile App Development',
    slug: 'mobile-development',
    serviceType: 'Mobile Application Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native, Swift, and Kotlin.',
    services: [
        'React Native Development',
        'iOS Development (Swift)',
        'Android Development (Kotlin)',
        'App Store Optimization (ASO)',
        'Push Notifications and Real-time Sync',
        'In-app Purchases and Subscriptions'
    ]
});

// Service Schema for AI Development
export const aiDevServiceSchema = buildServiceSchema({
    name: 'AI Development',
    slug: 'ai-development',
    serviceType: 'Artificial Intelligence Development',
    description: 'Production-ready machine learning systems, LLM integration, computer vision, and NLP solutions with continuous monitoring and optimization.',
    services: [
        'LLM Integration (GPT-4, Claude, Gemini)',
        'Custom Machine Learning Models',
        'Computer Vision Solutions',
        'Natural Language Processing',
        'RAG and Vector Database Systems',
        'AI Strategy and Consulting'
    ]
});

// Service Schema for Web Hosting / Cloud Infrastructure
export const webHostingServiceSchema = buildServiceSchema({
    name: 'Cloud Infrastructure & Web Hosting',
    slug: 'web-hosting',
    serviceType: 'Cloud Hosting and DevOps',
    description: 'Secure, scalable cloud infrastructure with automated deployments, zero-downtime releases, and 24/7 monitoring on AWS, Azure, and GCP.',
    services: [
        'AWS Cloud Hosting',
        'Microsoft Azure Hosting',
        'Google Cloud Platform Hosting',
        'Kubernetes and Docker Orchestration',
        'CI/CD Pipeline Setup',
        '24/7 Infrastructure Monitoring'
    ]
});

// FAQ Schema (matches the FAQ component content for rich results)
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much does custom AI development cost?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every AI project is unique, with costs varying based on complexity, data requirements, and integration needs. Simple chatbots or automation tools start from $15,000, while enterprise-grade ML systems with custom model training typically range from $50,000-$200,000+. We offer a free consultation to assess your needs and provide a detailed quote tailored to your budget and goals."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to build an AI solution?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Timeline depends on project scope. A basic AI integration (like adding a chatbot to your website) can be ready in 2-4 weeks. More complex solutions involving custom model training, data pipeline development, or enterprise system integration typically take 3-6 months."
            }
        },
        {
            "@type": "Question",
            "name": "What AI technologies and platforms do you work with?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We specialise in cutting-edge AI technologies including OpenAI GPT models, Anthropic Claude, LangChain, vector databases (Pinecone, Weaviate), and custom ML frameworks (TensorFlow, PyTorch). Our stack includes FastAPI and Node.js for backends, React/Next.js for frontends, and cloud platforms (AWS, GCP, Azure)."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide support and maintenance after deployment?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer ongoing support packages including monitoring, updates, bug fixes, and optimisation. Monthly support plans start at $2,500 and include model retraining, performance monitoring, security updates, and priority response times."
            }
        },
        {
            "@type": "Question",
            "name": "How do you ensure our data is secure and compliant?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We implement enterprise-grade encryption (AES-256), secure API authentication, role-based access controls, and regular security audits. We are experienced with GDPR, HIPAA, and SOC 2 compliance requirements."
            }
        },
        {
            "@type": "Question",
            "name": "How quickly will we see ROI from AI implementation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most clients see measurable results within 3-6 months of deployment. Automation projects typically show immediate cost savings (30-50% reduction in manual work), while predictive analytics and ML models improve over time as they learn from more data."
            }
        },
        {
            "@type": "Question",
            "name": "Can you integrate AI into our existing systems?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We integrate AI capabilities into existing CRMs, ERPs, databases, and custom applications through APIs and webhooks - including Salesforce, SAP, and legacy systems."
            }
        },
        {
            "@type": "Question",
            "name": "What is your uptime guarantee and support response time?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We guarantee 99.9% uptime under enterprise SLA, with under-15-minute response time and 24/7 technical support for all enterprise clients."
            }
        }
    ]
};
