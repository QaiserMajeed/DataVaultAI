import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-slate-50" style={{
      background: 'linear-gradient(180deg, #041420 0%, #082840 50%, #0a3d5c 100%)',
      fontFamily: 'var(--font-body)'
    }}>
      {/* Atmospheric background layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated mesh gradients */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
            animation: 'mesh-shift 20s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ff6b35 0%, transparent 70%)',
            animation: 'mesh-shift-alt 25s ease-in-out infinite'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #00ffcc 0%, transparent 70%)',
            animation: 'pulse-glow 15s ease-in-out infinite'
          }}
        />

        {/* Geometric grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
