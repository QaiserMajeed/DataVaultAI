import React from 'react';
import SEO from '../components/SEO';
import { faqSchema } from '../utils/structuredData';
import Hero from '../components/Hero';
import ProductSpotlight from '../components/ProductSpotlight';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
    // Organization + WebSite live in the static index.html JSON-LD graph,
    // so we only inject the FAQ schema here to avoid duplicates.
    const structuredData = [faqSchema];

    return (
        <main>
            <SEO
                title="Café QR — QR Ordering & Loyalty Platform for Cafés"
                description="Café QR is DataVault.AI's flagship product: scan-to-order, Stripe payments, and loyalty marketing for independent cafés. We also build custom AI, web, mobile, and cloud software for enterprise clients."
                keywords="Cafe QR, QR ordering, cafe ordering app, hospitality loyalty platform, AI development agency, custom AI development, LLM integration, web development, React, Next.js, mobile app development, cloud hosting, AWS, Azure, GCP, enterprise software"
                canonical="https://datavalutai.com/"
                structuredData={structuredData}
            />
            <Hero />
            <ProductSpotlight />
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
