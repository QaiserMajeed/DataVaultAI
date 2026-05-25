import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const STORAGE_KEY = 'dv_cookie_consent';

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            setVisible(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem(STORAGE_KEY, 'accepted');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem(STORAGE_KEY, 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="region"
            aria-label="Cookie consent"
            className="fixed bottom-0 left-0 right-0 z-[90] border-t-2 border-[var(--foreground)] bg-[var(--background)]"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    We use cookies to improve your experience and analyse site traffic. See our{' '}
                    <Link
                        to="/privacy"
                        className="underline hover:no-underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>

                <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                        onClick={decline}
                        className="px-5 py-2 text-xs uppercase tracking-widest border-2 border-[var(--foreground)] hover:bg-[var(--muted)] transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Decline
                    </button>
                    <button
                        onClick={accept}
                        className="px-5 py-2 text-xs uppercase tracking-widest bg-[var(--foreground)] text-[var(--background)] border-2 border-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Accept
                    </button>
                    <button
                        onClick={decline}
                        aria-label="Dismiss cookie banner"
                        className="p-2 border-2 border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3"
                    >
                        <X className="w-3 h-3" strokeWidth={2} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
