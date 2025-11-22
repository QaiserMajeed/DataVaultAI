import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-teal-950 text-teal-200/60 py-12 border-t border-teal-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold shadow-lg bg-white/5 border border-white/10 p-1">
                                <Logo className="w-full h-full" />
                            </div>
                            <span className="text-xl font-bold">DataVault AI</span>
                        </div>
                        <p className="text-sm mb-6 max-w-md">
                            Custom FullStack AI development services for enterprise clients. Expert team delivering production-ready AI solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#services" className="hover:text-white transition-colors">AI Backend</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">AI Frontend</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">ML Development</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Consulting</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-teal-900 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} DataVault AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
