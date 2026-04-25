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

const Terms = () => {
    const breadcrumbs = buildBreadcrumbSchema([
        { name: 'Home', url: 'https://datavalutai.com/' },
        { name: 'Terms of Service', url: 'https://datavalutai.com/terms' }
    ]);

    return (
        <main>
            <SEO
                title="Terms of Service"
                description="The terms governing use of the DataVault.AI website and services."
                canonical="https://datavalutai.com/terms"
                structuredData={breadcrumbs}
            />

            <article className="pt-24 pb-16 md:pt-32 md:pb-24">
                <header className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 mb-16">
                    <h1
                        className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Terms of Service
                    </h1>
                    <p
                        className="text-sm uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        Last updated: 25 April 2026
                    </p>
                </header>

                <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
                    <Section title="1. Acceptance">
                        <p>
                            By accessing datavalutai.com or engaging
                            DataVault.AI for services, you agree to these
                            Terms. If you do not agree, please do not use the
                            site or our services.
                        </p>
                    </Section>

                    <Section title="2. Scope of services">
                        <p>
                            DataVault.AI provides bespoke software, AI, and
                            cloud-infrastructure services. The specific
                            deliverables, timeline, fees, and acceptance
                            criteria for any engagement are governed by a
                            separate Statement of Work or Master Services
                            Agreement signed by both parties. In the event of
                            conflict, the signed agreement takes precedence
                            over these Terms.
                        </p>
                    </Section>

                    <Section title="3. Website use">
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Use the site for any unlawful purpose or in a
                                way that could damage, disable, or impair it.
                            </li>
                            <li>
                                Attempt to gain unauthorised access to any
                                part of the site, server, or network connected
                                to it.
                            </li>
                            <li>
                                Scrape, mirror, or reproduce the site at scale
                                without prior written consent.
                            </li>
                            <li>
                                Use the site to transmit malware, spam, or
                                misleading content.
                            </li>
                        </ul>
                    </Section>

                    <Section title="4. Intellectual property">
                        <p>
                            The site content, design, code, and brand assets
                            are owned by DataVault.AI or its licensors and are
                            protected by UK and international intellectual
                            property law. You may view and share content for
                            personal, non-commercial purposes with attribution.
                        </p>
                        <p>
                            For client engagements, ownership of bespoke
                            deliverables transfers on full payment as set out
                            in the relevant Statement of Work. We retain
                            ownership of pre-existing tools, libraries, and
                            know-how used in delivery.
                        </p>
                    </Section>

                    <Section title="5. Third-party services">
                        <p>
                            The site links to and may rely on third-party
                            services (analytics, font hosting, social
                            networks). We are not responsible for the content
                            or practices of those third parties. Their use is
                            subject to their own terms and privacy policies.
                        </p>
                    </Section>

                    <Section title="6. Disclaimers">
                        <p>
                            The website and its content are provided "as is"
                            without warranties of any kind, either express or
                            implied. To the fullest extent permitted by law,
                            we disclaim warranties of merchantability,
                            fitness for a particular purpose, accuracy, and
                            non-infringement. Nothing in these Terms limits
                            liability that cannot be limited by law.
                        </p>
                    </Section>

                    <Section title="7. Limitation of liability">
                        <p>
                            To the fullest extent permitted by law,
                            DataVault.AI's total liability arising out of or
                            relating to your use of the website is limited to
                            GBP 100. Liability for client engagements is
                            governed exclusively by the relevant signed
                            agreement.
                        </p>
                    </Section>

                    <Section title="8. Governing law">
                        <p>
                            These Terms are governed by the laws of England
                            and Wales. Any dispute will be subject to the
                            exclusive jurisdiction of the courts of England
                            and Wales, save where a different jurisdiction is
                            specified in a signed client agreement.
                        </p>
                    </Section>

                    <Section title="9. Changes">
                        <p>
                            We may revise these Terms at any time. The "last
                            updated" date reflects the most recent revision.
                            Continued use of the site after changes
                            constitutes acceptance of the revised Terms.
                        </p>
                    </Section>

                    <Section title="10. Contact">
                        <p>
                            Questions about these Terms? Email{' '}
                            <a className="underline" href="mailto:hello@datavaultai.com">hello@datavaultai.com</a>.
                        </p>
                    </Section>
                </div>
            </article>
        </main>
    );
};

export default Terms;
