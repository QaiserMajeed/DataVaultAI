import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnalyticsTracker from './components/AnalyticsTracker';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import AIDevelopment from './pages/AIDevelopment';
import WebHosting from './pages/WebHosting';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AnalyticsTracker />
        <div
          className="min-h-screen texture-horizontal-lines"
          style={{
            background: 'var(--background)',
            color: 'var(--foreground)',
            fontFamily: 'var(--font-body)'
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-development" element={<MobileDevelopment />} />
            <Route path="/services/ai-development" element={<AIDevelopment />} />
            <Route path="/services/web-hosting" element={<WebHosting />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
