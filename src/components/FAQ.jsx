import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'How much does custom AI development cost?',
        answer: 'Every AI project is unique, with costs varying based on complexity, data requirements, and integration needs. Simple chatbots or automation tools start from $15,000, while enterprise-grade ML systems with custom model training typically range from $50,000-$200,000+. We offer a free consultation to assess your needs and provide a detailed quote tailored to your budget and goals.'
    },
    {
        question: 'How long does it take to build an AI solution?',
        answer: 'Timeline depends on project scope. A basic AI integration (like adding a chatbot to your website) can be ready in 2-4 weeks. More complex solutions involving custom model training, data pipeline development, or enterprise system integration typically take 3-6 months. We work in agile sprints, so you\'ll see progress every 2 weeks and can provide feedback throughout development.'
    },
    {
        question: 'What AI technologies and platforms do you work with?',
        answer: 'We specialize in cutting-edge AI technologies including OpenAI GPT models, Anthropic Claude, LangChain, vector databases (Pinecone, Weaviate), and custom ML frameworks (TensorFlow, PyTorch). Our stack includes FastAPI and Node.js for backends, React/Next.js for frontends, and cloud platforms (AWS, GCP, Azure) for scalable deployment. We choose the right tools for your specific use case.'
    },
    {
        question: 'Do you provide support and maintenance after deployment?',
        answer: 'Yes, absolutely. We offer ongoing support packages that include monitoring, updates, bug fixes, and optimization. AI systems need regular attention as your data grows and requirements evolve. Our monthly support plans start at $2,500 and include model retraining, performance monitoring, security updates, and priority response times.'
    },
    {
        question: 'How do you ensure our data is secure and compliant?',
        answer: 'Data security is our top priority. We implement enterprise-grade encryption (AES-256), secure API authentication, role-based access controls, and regular security audits. We\'re experienced with GDPR, HIPAA, and SOC 2 compliance requirements. Your data can be hosted on your own infrastructure, private cloud, or we can manage secure cloud hosting with full data isolation.'
    },
    {
        question: 'How quickly will we see ROI from AI implementation?',
        answer: 'Most clients see measurable results within 3-6 months of deployment. Automation projects typically show immediate cost savings (30-50% reduction in manual work), while predictive analytics and ML models improve over time as they learn from more data. We establish clear KPIs during planning and provide monthly performance reports so you can track ROI throughout the project lifecycle.'
    },
    {
        question: 'Can you integrate AI into our existing systems?',
        answer: 'Yes, that\'s one of our specialties. We integrate AI capabilities into existing CRMs, ERPs, databases, and custom applications through APIs and webhooks. Whether you\'re using Salesforce, SAP, custom databases, or legacy systems, we design seamless integrations that enhance your current workflow without requiring a complete rebuild.'
    },
    {
        question: 'What\'s the first step to get started?',
        answer: 'Book a free 30-minute consultation call where we\'ll discuss your business challenges, explore AI opportunities, and determine if there\'s a good fit. No technical knowledge required - we speak business, not just tech. After the call, we\'ll send you a custom proposal with timeline, costs, and expected outcomes. From there, you decide if you want to move forward.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-teal-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-800 to-transparent" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-sm font-semibold mb-4"
                    >
                        Frequently Asked Questions
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Everything You Need to Know
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-teal-100/70"
                    >
                        Have questions about custom AI development? We've got answers.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-teal-900/30 border border-teal-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                            >
                                <span className="text-lg font-semibold text-white pr-8 group-hover:text-emerald-400 transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-teal-100/70 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA after FAQ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-teal-100/70 mb-6">
                        Still have questions? We're here to help.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-teal-950 hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
                    >
                        Book Free Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
