import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Database, Cpu, Lock, Zap } from 'lucide-react';

const TrustBar = () => {
    const technologies = [
        { name: 'AWS', icon: Cloud },
        { name: 'Azure', icon: Cpu },
        { name: 'CrowdStrike', icon: Shield },
        { name: 'PostgreSQL', icon: Database },
        { name: 'CloudFlare', icon: Lock },
        { name: 'FastAPI', icon: Zap },
    ];

    return (
        <section className="py-16 border-y" style={{ borderColor: 'rgba(148, 163, 184, 0.1)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p
                        className="text-sm font-medium uppercase tracking-wider mb-2"
                        style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            letterSpacing: '0.1em',
                            color: '#94a3b8'
                        }}
                    >
                        TRUSTED INFRASTRUCTURE
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 group"
                            style={{
                                background: 'rgba(15, 23, 42, 0.3)',
                                border: '1px solid rgba(148, 163, 184, 0.1)'
                            }}
                        >
                            <tech.icon
                                className="w-8 h-8 mb-3 transition-all duration-300"
                                style={{ color: '#64748b' }}
                            />
                            <span
                                className="text-xs font-medium"
                                style={{
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    color: '#94a3b8',
                                    letterSpacing: '-0.01em'
                                }}
                            >
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
