import React from 'react';
import { Brain, Cpu, TrendingUp, Lock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { aiDevServiceSchema, buildBreadcrumbSchema } from '../utils/structuredData';
import Contact from '../components/Contact';

const AIDevelopment = () => {
    const breadcrumbs = buildBreadcrumbSchema([
        { name: 'Home', url: 'https://datavalutai.com/' },
        { name: 'Services', url: 'https://datavalutai.com/#services' },
        { name: 'AI Development', url: 'https://datavalutai.com/services/ai-development' }
    ]);
    const features = [
        { icon: Brain, title: 'LLM Integration', description: 'Custom AI solutions powered by GPT-4, Claude, and other state-of-the-art language models.' },
        { icon: Cpu, title: 'Machine Learning', description: 'Custom ML models trained on your data for predictions, classifications, and recommendations.' },
        { icon: TrendingUp, title: 'Business Intelligence', description: 'AI-driven analytics and insights that help you make data-informed decisions.' },
        { icon: Lock, title: 'Secure & Compliant', description: 'Enterprise-grade security with data privacy, encryption, and regulatory compliance.' }
    ];

    const technologies = ['OpenAI GPT-4', 'Anthropic Claude', 'LangChain', 'TensorFlow', 'PyTorch', 'Vector Databases', 'FastAPI', 'Python'];
    const benefits = ['Custom LLM integration and fine-tuning', 'Computer vision and image recognition', 'Natural language processing', 'Predictive analytics and forecasting', 'Automated data processing pipelines', 'Model training and deployment', 'Continuous monitoring and optimization'];

    return (
        <main>
            <SEO
                title="AI Development Services - LLM, Machine Learning & Custom AI"
                description="Custom AI development with GPT-4, Claude, and custom ML models. LLM integration, RAG, computer vision, and NLP solutions for enterprise. Production-ready and secure."
                keywords="AI development services, custom AI development, LLM integration, GPT-4 development, Claude integration, machine learning consulting, RAG, vector database, computer vision, NLP, AI consulting, MLOps, AI strategy"
                canonical="https://datavalutai.com/services/ai-development"
                structuredData={[aiDevServiceSchema, breadcrumbs]}
            />
            <section className="min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 texture-grid">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-none" style={{ fontFamily: 'var(--font-display)' }}>AI<br />Development</h1>
                    <div className="flex items-center gap-4 mb-12"><div className="w-3 h-3 border-2 border-[var(--foreground)]"></div><div className="h-1 w-32 bg-[var(--foreground)]"></div></div>
                    <p className="text-xl md:text-2xl max-w-3xl mb-16 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>Production-ready AI systems with LLM integration, custom ML models, and continuous monitoring and optimization.</p>
                    <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--foreground)]" style={{ fontFamily: 'var(--font-mono)' }}>Get Started <ArrowRight className="w-4 h-4" strokeWidth={2} /></a>
                </div>
            </section>
            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12"><div className="grid md:grid-cols-2 gap-1">{features.map((feature) => (<div key={feature.title} className="p-8 border-2 border-[var(--border-light)] transition-all duration-100 hover:border-[var(--foreground)]"><div className="w-12 h-12 border-2 border-[var(--foreground)] flex items-center justify-center mb-6"><feature.icon className="w-6 h-6" strokeWidth={1.5} /></div><h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{feature.title}</h3><p className="leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{feature.description}</p></div>))}</div></div>
            </section>
            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12"><h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Technologies</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-1">{technologies.map((tech) => (<div key={tech} className="p-6 border-2 border-[var(--background)] text-center uppercase tracking-wider text-sm font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>{tech}</div>))}</div></div>
            </section>
            <section className="py-24 md:py-32 border-t-2 border-[var(--foreground)]">
                <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12"><h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>What You Get</h2><div className="space-y-1">{benefits.map((benefit) => (<div key={benefit} className="p-6 border-2 border-[var(--border-light)] flex items-start gap-4 transition-all duration-100 hover:border-[var(--foreground)]"><div className="w-6 h-px bg-[var(--foreground)] mt-3 flex-shrink-0"></div><p className="text-lg" style={{ fontFamily: 'var(--font-body)' }}>{benefit}</p></div>))}</div></div>
            </section>
            <Contact />
        </main>
    );
};

export default AIDevelopment;
