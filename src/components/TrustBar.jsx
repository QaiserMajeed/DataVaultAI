import React from 'react';
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
        <section className="py-16 border-t-2 border-b-2 border-[var(--foreground)]">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="text-center mb-12">
                    <p
                        className="text-xs uppercase tracking-widest font-medium"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        TRUSTED INFRASTRUCTURE
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center justify-center p-8 border border-[var(--border-light)] transition-all duration-100 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] group"
                        >
                            <tech.icon
                                className="w-8 h-8 mb-3 transition-colors duration-100"
                                strokeWidth={1.5}
                            />
                            <span
                                className="text-xs font-medium uppercase tracking-wider"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
