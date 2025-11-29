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
        title: 'Symcue - Real-Time Collaboration Platform',
        category: 'Full Stack Development',
        description: 'Built a comprehensive real-time collaboration platform using Node.js and React.js. Features include live document editing, team messaging, and project management tools. Implemented WebSocket connections for real-time updates and optimized database queries for handling 1000+ concurrent users.',
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
        id: 2,
        title: 'Real Estate CRM Application',
        category: 'Enterprise CRM',
        description: 'Developed a full-featured CRM system for real estate professionals with client tracking, automated marketing, and secure property management. Built with ASP.NET Core backend and React frontend. Integrated with third-party APIs for property listings and automated email campaigns.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
        technologies: ['ASP.NET Core', 'React', 'SQL Server', 'Azure', 'REST API'],
        stats: {
            properties: '5K+',
            automation: '60%'
        },
        testimonial: 'Transformed our business operations with efficient automation and user-friendly interface.',
        link: '#'
    },
    {
        id: 3,
        title: 'Real Estate Platform',
        category: 'Property Management',
        description: 'Created a comprehensive real estate platform with advanced search capabilities, property listings, virtual tours, and integrated payment processing. Implemented responsive design for seamless experience across all devices. Features include map integration, saved searches, and instant notifications.',
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Google Maps API'],
        stats: {
            listings: '10K+',
            searches: '50K/mo'
        },
        testimonial: 'Outstanding platform that exceeded our expectations in functionality and design.',
        link: '#'
    },
    {
        id: 4,
        title: 'E-commerce Platform with Stripe Integration',
        category: 'SaaS/E-commerce',
        description: 'Built a complete e-commerce platform using Next.js and Supabase with full Stripe integration for checkout, billing, and subscription management. Implemented webhook automation for payment processing, inventory management, and order fulfillment. Features include advanced product filtering, shopping cart, and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
        technologies: ['Next.js', 'Supabase', 'Stripe', 'TypeScript', 'Tailwind CSS'],
        stats: {
            transactions: '1K+',
            revenue: '$50K+'
        },
        testimonial: 'Complete checkout flow and subscription management exceeded requirements.',
        link: '#'
    },
    {
        id: 5,
        title: 'AI-Powered Data Scraping & Automation',
        category: 'Python Automation',
        description: 'Developed an intelligent web scraping and automation system using Python with OpenAI API integration. Built data pipelines for real-time analytics dashboards with automated data enrichment. System handles 10K+ data points daily with 95% accuracy.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
        technologies: ['Python', 'Django', 'FastAPI', 'OpenAI API', 'PostgreSQL'],
        stats: {
            dataPoints: '10K/day',
            accuracy: '95%'
        },
        testimonial: 'Complex scraping project handled admirably with great technical expertise.',
        link: '#'
    },
    {
        id: 6,
        title: 'Stock Trading Alert System',
        category: 'Financial Technology',
        description: 'Created a chat log scrubbing application for stock trading alerts that integrates financial data processing with real-time notifications. Built with Node.js backend and React frontend, featuring advanced pattern recognition and automated alert generation for trading signals.',
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
        id: 7,
        title: 'Django Dashboard Static Demo Generator',
        category: 'Python/Django',
        description: 'Generated static HTML demo from Django dashboard application using provided Docker image and SQLite database. Optimized for fast loading and deployed with comprehensive documentation. Implemented automated build process for easy updates.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        technologies: ['Python', 'Django', 'Docker', 'SQLite', 'HTML/CSS'],
        stats: {
            loadTime: '<2s',
            pages: '20+'
        },
        testimonial: 'Delivered great work in very short time with quick modifications when requested.',
        link: '#'
    },
    {
        id: 8,
        title: 'Login-Aware Web Ingestion API',
        category: 'API Development',
        description: 'Built a sophisticated web scraping MVP with login-aware capabilities using Python. Handles authentication, session management, and data extraction from protected resources. Implemented retry logic, rate limiting, and error handling for robust performance.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
        technologies: ['Python', 'FastAPI', 'Selenium', 'Redis', 'Docker'],
        stats: {
            requests: '10K/day',
            success: '98%'
        },
        testimonial: 'Took on a very tough project and delivered admirably with great expertise.',
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
