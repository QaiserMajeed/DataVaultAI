import React from 'react';
import SEO from '../components/SEO';
import {
    organizationSchema,
    websiteSchema,
    faqSchema
} from '../utils/structuredData';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
    const structuredData = [
        organizationSchema,
        websiteSchema,
        faqSchema
    ];

    return (
        <main>
            <SEO
                title="Custom AI, Web, Mobile & Cloud Development for Enterprise"
                description="Enterprise AI, web, mobile, and cloud development. LLM integration, React/Next.js, React Native, AWS/Azure/GCP. 99.9% uptime, <15min response, 60% cost reduction."
                keywords="AI development agency, custom AI development, LLM integration, GPT-4, Claude, machine learning consulting, web development, React, Next.js, mobile app development, React Native, cloud hosting, AWS, Azure, GCP, enterprise software"
                canonical="https://datavalutai.com/"
                structuredData={structuredData}
            />
            <Hero />
            <TrustBar />
            <Services />
            <WhyUs />
            <Process />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <Contact />
        </main>
    );
};

export default Home;
