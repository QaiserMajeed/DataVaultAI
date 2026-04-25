import React from 'react';
import SEO from '../components/SEO';
import { buildBreadcrumbSchema } from '../utils/structuredData';

const Section = ({ title, children }) => (
    <section className="mb-12">
        <h2
            className="text-2xl md:text-3xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
        >
            {title}
        </h2>
        <div
            className="space-y-4 text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
        >
            {children}
        </div>
    </section>
);

const Privacy = () => {
    const breadcrumbs = buildBreadcrumbSchema([
        { name: 'Home', url: 'https://datavalutai.com/' },
        { name: 'Privacy Policy', url: 'https://datavalutai.com/privacy' }
    ]);

    return (
        <main>
            <SEO
                title="Privacy Policy"
                description="How DataVault.AI collects, uses, and protects personal information. GDPR and UK Data Protection Act compliant."
                canonical="https://datavalutai.com/privacy"
                structuredData={breadcrumbs}
            />

            <article className="pt-24 pb-16 md:pt-32 md:pb-24">
                <header className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 mb-16">
                    <h1
                        className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Privacy Policy
                    </h1>
                    <p
                        className="text-sm uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Last updated: 25 April 2026
                    </p>
                </header>

                <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
                    <Section title="1. Who we are">
                        <p>
                            DataVault.AI ("we", "us", "our") is the data
                            controller for personal information processed
                            through this website (datavalutai.com) and our
                            client engagements. We are based in the United
                            Kingdom and comply with the UK GDPR and the Data
                            Protection Act 2018.
                        </p>
                        <p>
                            For privacy questions, contact{' '}
                            <a className="underline" href="mailto:hello@datavaultai.com">hello@datavaultai.com</a>.
                        </p>
                    </Section>

                    <Section title="2. Information we collect">
                        <p>We process the following categories of personal data:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Contact details</strong> you provide
                                voluntarily via email, phone, or a form
                                (name, email, phone, company, message
                                content).
                            </li>
                            <li>
                                <strong>Technical data</strong> automatically
                                collected by our hosting and analytics
                                providers: IP address (anonymised), browser
                                type, device type, referring URL, and pages
                                visited.
                            </li>
                            <li>
                                <strong>Cookies</strong> as described in
                                section 6 below.
                            </li>
                        </ul>
                    </Section>

                    <Section title="3. Lawful basis">
                        <p>
                            We rely on the following lawful bases under
                            Article 6 of the UK GDPR:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Legitimate interest</strong> for
                                website analytics, security monitoring, and
                                responding to enquiries.
                            </li>
                            <li>
                                <strong>Contract</strong> for the delivery of
                                services to clients who have signed a
                                statement of work.
                            </li>
                            <li>
                                <strong>Consent</strong> for any non-essential
                                cookies, where applicable.
                            </li>
                            <li>
                                <strong>Legal obligation</strong> for
                                tax, accounting, and regulatory record
                                keeping.
                            </li>
                        </ul>
                    </Section>

                    <Section title="4. How we use your information">
                        <p>We use personal data to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respond to enquiries and provide quotes.</li>
                            <li>Deliver and support contracted services.</li>
                            <li>Improve the website and our offering.</li>
                            <li>Comply with legal and accounting obligations.</li>
                        </ul>
                        <p>
                            We do not sell personal data. We do not use it for
                            automated decision-making with legal effects.
                        </p>
                    </Section>

                    <Section title="5. Sharing with third parties">
                        <p>
                            We share personal data only with vetted processors
                            acting on our instructions, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Hosting and CDN providers (e.g. Netlify, CloudFlare).</li>
                            <li>Email and CRM tooling.</li>
                            <li>Analytics providers (see section 6).</li>
                            <li>Cloud platforms (AWS, Azure, GCP) where you have engaged us to deploy services on your behalf.</li>
                            <li>Professional advisors, auditors, and regulators where required.</li>
                        </ul>
                        <p>
                            Where a processor is outside the UK or EEA, we
                            rely on Standard Contractual Clauses or an
                            adequacy decision to safeguard transfers.
                        </p>
                    </Section>

                    <Section title="6. Cookies and analytics">
                        <p>
                            This site uses a small number of cookies and
                            similar technologies. Strictly necessary cookies
                            (e.g. session cookies set by our hosting provider)
                            are always active.
                        </p>
                        <p>
                            We may use{' '}
                            <strong>Google Analytics 4</strong> with IP
                            anonymisation, and/or{' '}
                            <strong>Plausible Analytics</strong>, a
                            cookie-less analytics service. Both are configured
                            to respect the browser <em>Do Not Track</em>{' '}
                            signal. You can opt out at any time by enabling
                            tracking-protection in your browser or via the
                            Google Analytics opt-out add-on.
                        </p>
                    </Section>

                    <Section title="7. Data retention">
                        <p>
                            We retain personal data only as long as necessary
                            for the purpose for which it was collected. Sales
                            enquiries are kept for 24 months; client project
                            data is retained for the duration of the
                            engagement plus 6 years for tax compliance, then
                            deleted or anonymised.
                        </p>
                    </Section>

                    <Section title="8. Your rights">
                        <p>Under UK GDPR you have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access the personal data we hold about you.</li>
                            <li>Request correction of inaccurate data.</li>
                            <li>Request erasure ("right to be forgotten").</li>
                            <li>Object to or restrict processing.</li>
                            <li>Receive your data in a portable format.</li>
                            <li>Withdraw consent at any time.</li>
                            <li>Lodge a complaint with the UK Information Commissioner's Office (ICO) at <a className="underline" href="https://ico.org.uk" rel="noopener noreferrer" target="_blank">ico.org.uk</a>.</li>
                        </ul>
                        <p>
                            To exercise these rights, email{' '}
                            <a className="underline" href="mailto:hello@datavaultai.com">hello@datavaultai.com</a>.
                            We respond within 30 days.
                        </p>
                    </Section>

                    <Section title="9. Security">
                        <p>
                            We use encryption in transit (TLS 1.2+) and at
                            rest, role-based access controls, and least
                            privilege for all systems handling personal data.
                            We follow industry best practices for credential
                            management, dependency hygiene, and incident
                            response.
                        </p>
                    </Section>

                    <Section title="10. Changes to this policy">
                        <p>
                            We will update this page when our processing
                            changes. The "last updated" date at the top
                            reflects the most recent revision. Material
                            changes will be communicated to active clients
                            directly.
                        </p>
                    </Section>
                </div>
            </article>
        </main>
    );
};

export default Privacy;
