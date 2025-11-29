import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Process />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <Contact />
        </main>
    );
};

export default Home;
