import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Sparkles, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import Contact from '../components/Contact';

const AIDevelopment = () => {
    const features = [
        {
            icon: <Brain className="w-6 h-6 text-emerald-400" />,
            title: 'Custom AI Solutions',
            description: 'Tailored AI models and systems designed specifically for your business needs, from chatbots to predictive analytics.'
        },
        {
            icon: <Bot className="w-6 h-6 text-cyan-400" />,
            title: 'LLM Integration',
            description: 'Seamlessly integrate GPT-4, Claude, or other large language models into your applications with custom prompts and workflows.'
        },
        {
            icon: <Sparkles className="w-6 h-6 text-teal-400" />,
            title: 'Machine Learning Models',
            description: 'Train and deploy custom ML models for classification, prediction, recommendation, and computer vision tasks.'
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
            title: 'Data Analytics & Insights',
            description: 'Transform raw data into actionable insights with advanced analytics, visualization, and AI-powered reporting.'
        }
    ];

    const technologies = [
        { name: 'OpenAI GPT-4', category: 'LLM' },
        { name: 'Anthropic Claude', category: 'LLM' },
        { name: 'TensorFlow', category: 'ML Framework' },
        { name: 'PyTorch', category: 'ML Framework' },
        { name: 'LangChain', category: 'AI Framework' },
        { name: 'Pinecone', category: 'Vector DB' },
        { name: 'FastAPI', category: 'Backend' },
        { name: 'Hugging Face', category: 'Models' }
    ];

    const useCases = [
        {
            title: 'Intelligent Chatbots',
            description: 'Customer support bots that understand context and provide accurate responses 24/7.'
        },
        {
            title: 'Document Analysis',
            description: 'Automatically extract insights, summarize content, and process large document volumes.'
        },
        {
            title: 'Predictive Analytics',
            description: 'Forecast trends, predict customer behavior, and make data-driven decisions.'
        },
        {
            title: 'Content Generation',
            description: 'Automate content creation for marketing, documentation, and personalized communications.'
        },
        {
            title: 'Computer Vision',
            description: 'Image recognition, object detection, and visual quality control systems.'
        },
        {
            title: 'Recommendation Systems',
            description: 'Personalized product, content, and service recommendations that drive engagement.'
        }
    ];

    const benefits = [
        'Reduce operational costs by up to 60% with automation',
        'Process data 100x faster than manual methods',
        'Scale AI capabilities as your business grows',
        'Secure and compliant AI implementations',
        'Real-time insights and decision support',
        'Custom training on your proprietary data',
        'Continuous model monitoring and improvement',
        'Full documentation and knowledge transfer'
    ];

    return (
        <div className="relative min-h-screen text-slate-50" style={{
            background: 'linear-gradient(180deg, #041420 0%, #082840 50%, #0a3d5c 100%)',
            fontFamily: 'var(--font-body)'
        }}>
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-sm font-semibold mb-6">
                                AI Development Services
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Transform Your Business with AI
                            </h1>
                            <p className="text-xl text-teal-100/70 mb-8 leading-relaxed">
                                Build intelligent systems that automate workflows, unlock insights from data, and deliver exceptional
                                customer experiences. From chatbots to custom ML models, we make AI work for your business.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #00d9ff 0%, #00ffcc 100%)',
                                    color: '#041420',
                                    boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)'
                                }}
                            >
                                Start AI Integration
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-950/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Comprehensive AI Solutions
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                From strategy to deployment, we deliver AI solutions that drive real business value.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-teal-900/30 border border-teal-800 hover:border-emerald-500/50 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-teal-950 rounded-xl flex items-center justify-center mb-6 border border-teal-800">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-teal-100/70 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                AI Use Cases We Specialize In
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                Proven AI solutions that solve real business challenges.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {useCases.map((useCase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-xl bg-teal-900/30 border border-teal-800 hover:border-emerald-500/50 transition-all duration-300"
                                >
                                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                                    <p className="text-teal-100/70 text-sm leading-relaxed">{useCase.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-950/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                AI Technologies & Frameworks
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                We work with the latest and most powerful AI tools and platforms.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="p-6 rounded-xl bg-teal-900/30 border border-teal-800 hover:border-emerald-500/50 transition-all duration-300 text-center"
                                >
                                    <div className="text-lg font-bold text-white mb-2">{tech.name}</div>
                                    <div className="text-sm text-teal-400">{tech.category}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Why Partner With Us
                            </h2>
                            <p className="text-lg text-teal-100/70 max-w-3xl mx-auto">
                                We deliver AI solutions that provide measurable business impact.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-teal-900/20 border border-teal-800/50"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <span className="text-teal-100/90">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-950/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Harness the Power of AI?
                        </h2>
                        <p className="text-xl text-teal-100/70 mb-8">
                            Let's discuss how AI can transform your business operations and drive growth.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #00d9ff 0%, #00ffcc 100%)',
                                color: '#041420',
                                boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)'
                            }}
                        >
                            Get Started with AI
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </section>

                {/* Contact Section */}
                <Contact />
            </div>
        </div>
    );
};

export default AIDevelopment;
