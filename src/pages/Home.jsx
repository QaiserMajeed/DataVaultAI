import React from 'react';
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema, faqSchema } from '../utils/structuredData';
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
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [organizationSchema, websiteSchema, faqSchema]
    };

    return (
        <main>
            <SEO
                title="Enterprise Web, Mobile & AI Development"
                description="Enterprise-grade web development, mobile apps, AI solutions, and cloud infrastructure. 99.9% uptime, <15min response time, 60% cost reduction. Transform your business with DataVault.AI."
                keywords="web development, mobile app development, AI development, cloud hosting, React, Next.js, Node.js, React Native, machine learning, AWS, Azure, GCP, enterprise software"
                canonical="https://datavault.ai"
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
