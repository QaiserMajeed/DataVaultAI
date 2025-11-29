import React from 'react';
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
    return (
        <main>
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
