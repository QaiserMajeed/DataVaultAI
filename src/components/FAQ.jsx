import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
        <section id="faq" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-2 h-2 border-2 border-[var(--foreground)]"></div>
                        <div className="h-px w-24 bg-[var(--foreground)]"></div>
                    </div>
                    <h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Everything
                        <br />
                        You Need to <span className="italic">Know</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Have questions about custom AI development? We've got answers.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-1">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-2 border-[var(--border-light)] overflow-hidden transition-all duration-100 hover:border-[var(--foreground)]"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-[-3px] group"
                            >
                                <span
                                    className="text-lg md:text-xl font-bold pr-8 tracking-tight"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-100 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                    strokeWidth={2}
                                />
                            </button>
                            {openIndex === index && (
                                <div
                                    className="px-6 pb-6 leading-relaxed border-t-2 border-[var(--border-light)] pt-6"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA after FAQ */}
                <div className="text-center mt-16">
                    <p
                        className="mb-8 text-lg"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Still have questions? We're here to help.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-widest text-sm font-semibold transition-all duration-100 hover:bg-[var(--background)] hover:text-[var(--foreground)] border-2 border-[var(--foreground)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Book Free Consultation
                    </a>
                </div>
            </div>

            {/* Thick Section Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--foreground)]"></div>
        </section>
    );
};

export default FAQ;
