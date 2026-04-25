// Lightweight client analytics loader.
// Reads two optional env vars at build time:
//   VITE_GA_MEASUREMENT_ID   - e.g. "G-ABC123XYZ" (Google Analytics 4)
//   VITE_PLAUSIBLE_DOMAIN    - e.g. "datavalutai.com" (Plausible)
// If neither is set, this module is a no-op and ships zero third-party scripts.

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_SRC =
    import.meta.env.VITE_PLAUSIBLE_SRC || 'https://plausible.io/js/script.js';

let initialized = false;

const injectScript = (src, attrs = {}) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.defer = true;
    for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
    document.head.appendChild(s);
    return s;
};

const initGA4 = (id) => {
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    // Disable automatic page_view; we'll send them on route change.
    gtag('config', id, { send_page_view: false, anonymize_ip: true });
};

const initPlausible = (domain) => {
    injectScript(PLAUSIBLE_SRC, { 'data-domain': domain });
    // Plausible queue for SPA pageviews via the manual extension would go here;
    // we'll just call window.plausible if present.
    window.plausible = window.plausible || function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
    };
};

export const initAnalytics = () => {
    if (initialized || typeof window === 'undefined') return;
    initialized = true;
    // Honour Do Not Track.
    if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return;
    if (GA_ID) initGA4(GA_ID);
    if (PLAUSIBLE_DOMAIN) initPlausible(PLAUSIBLE_DOMAIN);
};

export const trackPageView = (path, title) => {
    if (typeof window === 'undefined') return;
    const url = path || window.location.pathname + window.location.search;
    const pageTitle = title || document.title;

    if (GA_ID && typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
            page_path: url,
            page_title: pageTitle,
            page_location: window.location.href
        });
    }
    if (PLAUSIBLE_DOMAIN && typeof window.plausible === 'function') {
        window.plausible('pageview', { u: window.location.href });
    }
};
