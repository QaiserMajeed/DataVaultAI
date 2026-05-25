import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Tag } from 'lucide-react';

const STORAGE_KEY = 'dv_popup_dismissed';

const DiscountPopup = () => {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem(STORAGE_KEY)) return;

        const onScroll = () => {
            const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrolled >= 0.5) {
                setVisible(true);
                window.removeEventListener('scroll', onScroll);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const dismiss = () => {
        sessionStorage.setItem(STORAGE_KEY, '1');
        setVisible(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        setError(false);
        try {
            const body = new URLSearchParams({ 'form-name': 'discount-popup', email });
            const res = await fetch('/', { method: 'POST', body });
            if (!res.ok) throw new Error();
            setSubmitted(true);
            setTimeout(() => {
                sessionStorage.setItem(STORAGE_KEY, '1');
                setVisible(false);
            }, 3000);
        } catch {
            setError(true);
        }
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Exclusive discount offer"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[var(--foreground)] opacity-60"
                onClick={dismiss}
                aria-hidden="true"
            />

            {/* Panel */}
            <div className="relative bg-[var(--background)] border-2 border-[var(--foreground)] max-w-md w-full">
                {/* Close */}
                <button
                    onClick={dismiss}
                    aria-label="Close popup"
                    className="absolute top-4 right-4 p-1 border-2 border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                >
                    <X className="w-4 h-4" strokeWidth={2} />
                </button>

                {/* Top accent bar */}
                <div className="h-2 bg-[var(--foreground)]" />

                <div className="p-8 md:p-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 border-2 border-[var(--foreground)] px-3 py-1 mb-6">
                        <Tag className="w-3 h-3" strokeWidth={2} />
                        <span
                            className="text-xs uppercase tracking-widest font-bold"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Limited Offer
                        </span>
                    </div>

                    {!submitted ? (
                        <>
                            <h2
                                className="text-4xl md:text-5xl font-bold tracking-tighter mb-3 leading-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Get <span className="italic">10% off</span>
                                <br />your first project
                            </h2>
                            <p
                                className="text-sm leading-relaxed mb-8 text-[var(--muted-foreground)]"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Drop your email and we'll send you a 10% discount code to use on your first project with DataVault.AI.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-3" name="discount-popup" data-netlify="true" data-netlify-honeypot="bot-field">
                                <input type="hidden" name="form-name" value="discount-popup" />
                                <input type="hidden" name="bot-field" />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 border-2 border-[var(--foreground)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-[-3px] text-sm"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                />
                                {error && (
                                    <p className="text-xs text-red-600" style={{ fontFamily: 'var(--font-mono)' }}>
                                        Something went wrong — please try again or email us directly.
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] text-sm uppercase tracking-widest font-semibold border-2 border-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    Claim My 10% Off <ArrowRight className="w-4 h-4" strokeWidth={2} />
                                </button>
                            </form>

                            <button
                                onClick={dismiss}
                                className="mt-4 w-full text-xs text-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                No thanks, I'll pay full price
                            </button>
                        </>
                    ) : (
                        <div className="text-center py-4">
                            <div
                                className="text-4xl font-bold tracking-tighter mb-4"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                You're in!
                            </div>
                            <p
                                className="text-sm leading-relaxed text-[var(--muted-foreground)]"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Check your inbox — your 10% discount code is on its way.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DiscountPopup;
