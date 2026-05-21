// Real profile data extracted from Upwork profile
export const profileStats = {
    totalEarnings: '$2K+',
    totalJobs: 14,
    totalHours: 71,
    jobSuccessScore: 85,
    hourlyRate: '$27.00',
    availability: 'Available Now',
    location: 'Chester, United Kingdom',
    responseTime: '5:09 pm local time',
    rating: 5.0,
    totalReviews: 9
};

export const skills = [
    'ASP.NET Core',
    'SQL',
    'Next.js',
    'C#',
    'Web Application',
    'PostgreSQL',
    'Node.js',
    'React',
    'Machine Learning',
    'Supabase',
    'Django',
    'Python',
    'Web Scraping',
    'API Integration',
    'AWS Development',
    'SaaS Development',
    'Stripe Integration',
    '.NET',
    'FastAPI',
    'TypeScript',
    'Tailwind CSS',
    'Docker',
    'CI/CD',
    'GitHub Actions'
];

export const portfolioProjects = [
    {
        id: 1,
        title: 'Highwood Motorhomes',
        category: 'WordPress',
        description: 'Designed and developed a full-featured WordPress website for a family-run motorhome hire and sales business in Staffordshire. Built a live availability checker for rental bookings, a used vehicle inventory with pricing, a servicing appointment system, and a "Sell Your Motorhome" valuation form. Integrated social channels and optimised for mobile and Core Web Vitals.',
        image: 'https://images.unsplash.com/photo-1533591380348-14193f1de18f?w=1200&q=80',
        technologies: ['WordPress', 'PHP', 'Custom Theme', 'Booking Plugin', 'WooCommerce', 'WebP / Performance'],
        stats: {
            services: '3 core',
            forms: '4 custom'
        },
        testimonial: 'Wonderful working with him. Very professional, attentive to details and showed will and capacity to perform.',
        link: 'https://www.highwoodmotorhomes.co.uk/'
    },
    {
        id: 2,
        title: 'Tailored Kitchens',
        category: 'WordPress',
        description: 'Built a premium WordPress website for a bespoke kitchen design and installation company in Cheshire. Features a curated project gallery with 9+ case studies, an embedded YouTube video showcase, a consultation booking system, showroom scheduling, and a WhatsApp Business integration for instant customer enquiries. Focused on conversion-led design to drive leads from design-conscious homeowners.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
        technologies: ['WordPress', 'PHP', 'Elementor', 'Custom Forms', 'YouTube API', 'WhatsApp Integration'],
        stats: {
            gallery: '9+ projects',
            leads: 'Consultation forms'
        },
        testimonial: 'Outstanding platform that exceeded our expectations in functionality and design.',
        link: 'https://staging.tailoredkitchens.com/'
    },
    {
        id: 3,
        title: 'Inspired to Change',
        category: 'WordPress',
        description: 'Developed a comprehensive WordPress directory website for a nationwide hypnotherapy practice network. Built a searchable therapist directory listing 15+ practitioners across UK regions, structured pages covering 70+ treatable conditions, a free consultation booking flow, Google Reviews integration, and a resources hub with blogs and podcasts. SEO-optimised for local and national search.',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
        technologies: ['WordPress', 'PHP', 'Custom Directory', 'Google Reviews', 'SEO', 'Responsive Design'],
        stats: {
            therapists: '15+',
            conditions: '70+'
        },
        testimonial: 'Hafiz delivered on all tasks and was always easy to reach for requests or modifications.',
        link: 'https://inspiredtochange.biz/'
    },
    {
        id: 4,
        title: 'Exelsys Live — Enterprise HR Platform',
        category: 'Enterprise Software',
        description: 'As Senior Software Engineer at Exelsys, led full-stack development of a multi-module enterprise HR and payroll platform used by organisations across multiple industries. Architected scalable ASP.NET Core APIs, built React-powered dashboards for payroll processing, leave management, employee self-service, and compliance reporting. Supports 10,000+ concurrent users with 99.9% uptime on Azure infrastructure.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
        technologies: ['ASP.NET Core', 'C#', 'React', 'SQL Server', 'Azure', 'REST API', 'CI/CD'],
        stats: {
            users: '10K+',
            uptime: '99.9%'
        },
        testimonial: 'Led delivery of 15+ web applications improving operational efficiency by an average of 45%.',
        link: 'https://app.exelsyslive.com/'
    },
    {
        id: 5,
        title: 'Symcue — Real-Time Collaboration Platform',
        category: 'Full Stack',
        description: 'Built a comprehensive real-time collaboration platform featuring live document editing, team messaging, and project management tools. Implemented WebSocket connections for instant updates across all connected clients and optimised database queries to handle 1,000+ concurrent users without performance degradation.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
        technologies: ['Node.js', 'React.js', 'WebSocket', 'MongoDB', 'Express'],
        stats: {
            users: '1K+',
            uptime: '99.9%'
        },
        testimonial: 'Delivered exceptional work with great attention to detail and communication.',
        link: '#'
    },
    {
        id: 6,
        title: 'E-commerce Platform & Stripe Billing',
        category: 'E-commerce',
        description: 'Built a production-ready e-commerce and SaaS billing platform with Next.js and Supabase. Full Stripe integration covers one-time checkout, recurring subscriptions, and webhook-driven order automation. Includes inventory management, advanced product filtering, shopping cart, and a full admin dashboard for order and customer management.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
        technologies: ['Next.js', 'Supabase', 'Stripe', 'TypeScript', 'Tailwind CSS', 'Webhooks'],
        stats: {
            transactions: '1K+',
            revenue: '$50K+'
        },
        testimonial: 'Perfect implementation of our payment system. The checkout flow is smooth and subscription management works flawlessly.',
        link: '#'
    },
    {
        id: 7,
        title: 'AI-Powered Data Scraping & Automation',
        category: 'AI & Automation',
        description: 'Developed an intelligent web scraping and automation pipeline using Python with OpenAI API integration for data enrichment. Built real-time analytics dashboards fed by automated data ingestion. The system processes 10K+ structured data points daily at 95% accuracy, with retry logic, rate limiting, and alerting baked in.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
        technologies: ['Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Django', 'Docker'],
        stats: {
            dataPoints: '10K/day',
            accuracy: '95%'
        },
        testimonial: 'Hafiz took a great shot at a very tough project and did an admirable job. I will definitely use his services again.',
        link: '#'
    },
    {
        id: 8,
        title: 'Stock Trading Alert System',
        category: 'Full Stack',
        description: 'Built a chat-log scrubbing application for a financial trading firm that parses raw chat streams to extract, classify, and broadcast stock trading alerts in real time. Node.js backend with WebSocket delivery ensures sub-second alert propagation to the React frontend dashboard, with pattern recognition for signal classification.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
        technologies: ['Node.js', 'React', 'WebSocket', 'MongoDB', 'Trading APIs'],
        stats: {
            alerts: '1K+/day',
            response: '<1s'
        },
        testimonial: 'Wonderful to work with. Very thorough and efficient work.',
        link: '#'
    },
    {
        id: 9,
        title: 'Login-Aware Web Ingestion API',
        category: 'AI & Automation',
        description: 'Built a production-grade web scraping MVP capable of authenticating with protected web applications, managing sessions, and extracting structured data at scale. Handles complex login flows, CSRF tokens, and session cookies transparently. Features exponential-backoff retry logic, Redis-based rate limiting, and Docker deployment for portability.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
        technologies: ['Python', 'FastAPI', 'Selenium', 'Redis', 'Docker'],
        stats: {
            requests: '10K/day',
            success: '98%'
        },
        testimonial: 'Took on a very tough project and delivered admirably with great expertise.',
        link: '#'
    },
    {
        id: 10,
        title: 'Real Estate CRM',
        category: 'Enterprise Software',
        description: 'Developed a full-featured CRM for real estate professionals with client tracking, automated email marketing campaigns, and secure property portfolio management. ASP.NET Core backend with a React frontend, integrated with third-party property listing APIs and automated drip sequences that cut manual follow-up time by 60%.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
        technologies: ['ASP.NET Core', 'React', 'SQL Server', 'Azure', 'REST API', 'Email Automation'],
        stats: {
            properties: '5K+',
            automation: '60%'
        },
        testimonial: 'Transformed our business operations with efficient automation and a user-friendly interface.',
        link: '#'
    }
];

export const clientReviews = [
    {
        id: 1,
        name: 'Client',
        role: 'SaaS Product Owner',
        project: 'Adjustments to SaaS demo',
        content: 'Hafiz delivered on all tasks and was always easy to reach for requests or modifications.',
        rating: 5.0,
        date: 'November 2024',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80'
    },
    {
        id: 2,
        name: 'Client',
        role: 'Software Development Manager',
        project: 'Generate Static Demo from Django Dashboard App',
        content: 'Hafiz delivered great work - in very short time he was able to finish the work, and small modifications were incorporated quickly when requested. Will work with Hafiz again! Thanks!',
        rating: 5.0,
        date: 'October 2024',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80'
    },
    {
        id: 3,
        name: 'Client',
        role: 'Technical Product Manager',
        project: 'Build a Login-Aware Web Ingestion API (MVP)',
        content: 'Hafiz took a great shot at a very tough project and did an admirable job. This was a very complex scraping job and Hafiz did well. I will definitely use his services again.',
        rating: 5.0,
        date: 'September 2024',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80'
    },
    {
        id: 4,
        name: 'Client',
        role: 'Finance Platform Owner',
        project: 'Chat Log Scrubbing App for Stock Trading Alerts',
        content: 'Wonderful to work with. Very thorough and efficient work.',
        rating: 5.0,
        date: 'August 2024',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80'
    },
    {
        id: 5,
        name: 'Client',
        role: 'Software Development Lead',
        project: 'Product Feedback of New Vibe Coding App',
        content: 'Great work, thank you!',
        rating: 5.0,
        date: 'July 2024',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
    },
    {
        id: 6,
        name: 'Client',
        role: 'Real Estate Business Owner',
        project: 'Travel site with custom forms and payment system',
        content: 'Wonderful working with him. Qaiser was very professional, attentive to details and showed will and capacity to perform.',
        rating: 5.0,
        date: 'November 2019',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80'
    },
    {
        id: 7,
        name: 'Client',
        role: 'Startup CTO',
        project: 'Full Stack Development',
        content: 'Outstanding developer with deep knowledge in both frontend and backend. Delivered our project on time with excellent code quality.',
        rating: 5.0,
        date: 'October 2024',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80'
    },
    {
        id: 8,
        name: 'Client',
        role: 'E-commerce Director',
        project: 'Stripe Payment Integration',
        content: 'Perfect implementation of our payment system. The checkout flow is smooth and the subscription management works flawlessly.',
        rating: 5.0,
        date: 'September 2024',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80'
    },
    {
        id: 9,
        name: 'Client',
        role: 'Data Analytics Manager',
        project: 'Python Web Scraping & Automation',
        content: 'Excellent work on complex data extraction project. The automation saves us countless hours every week.',
        rating: 5.0,
        date: 'August 2024',
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&q=80'
    }
];

export const employmentHistory = [
    {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'Exelsys',
        period: 'June 2020 - Present',
        description: `• Led full-stack development for enterprise clients, delivering 15+ web applications that improved operational efficiency by an average of 45%
• Architected scalable solutions using React, Node.js, and .NET Core, supporting 10,000+ concurrent users with 99.9% uptime
• Spearheaded digital transformation projects, helping clients reduce manual processes by 60% through custom web applications
• Mentored junior developers and established best practices for code quality, resulting in 40% reduction in production bugs
• Managed client relationships directly, ensuring project delivery within budget and timeline while maintaining high satisfaction scores`
    },
    {
        id: 2,
        title: 'Senior Software Engineer',
        company: 'Strategic System International',
        period: 'June 2018 - June 2020',
        description: `• Developed custom web applications for international clients across healthcare, finance, and e-commerce sectors
• Built responsive frontend interfaces using React, Angular, and TypeScript, improving user engagement by 35%
• Designed RESTful APIs and microservices using ASP.NET Core, handling 50,000+ daily transactions
• Implemented DevOps practices with Azure, reducing deployment time from hours to minutes
• Collaborated in Agile teams using JIRA, consistently delivering sprint goals and maintaining 95% velocity`
    },
    {
        id: 3,
        title: 'Software Engineer',
        company: 'Tkxel',
        period: 'July 2015 - June 2018',
        description: `• Works in a Scrum/Agile environment to plan and estimate work at different levels
• Knowledge of modern authorization mechanisms, such as JSON Web Token
• Used React.js and Angular for adding a client-side interface
• Experience with popular React.js workflows such as Redux
• Full-stack software development using .NET Web Api and React
• Experience with common front-end development tools such as Babel, Webpack, NPM
• Translating designs and wireframes into high quality code`
    }
];

export const education = [
    {
        id: 1,
        degree: 'Master of Computer Science (MSCS)',
        field: 'Computer Science',
        institution: 'University of Chester',
        period: '2019-2020'
    },
    {
        id: 2,
        degree: 'Bachelor of Computer Science',
        field: 'Computer Science',
        institution: 'University of Chester',
        period: '2011-2015'
    }
];

export const certifications = [
    {
        id: 1,
        name: 'Microsoft Certified Professional',
        issuer: 'Microsoft',
        status: 'Verified'
    },
    {
        id: 2,
        name: 'Microsoft Specialist: Programming in C#',
        issuer: 'Microsoft',
        status: 'Verified'
    }
];
