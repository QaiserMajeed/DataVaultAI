// Blog post registry. Each post owns its metadata + body (string of HTML or
// React-rendered fragments). Replace with MDX/CMS later if needed.

export const blogPosts = [
    {
        slug: 'qr-code-ordering-and-pos-for-independent-cafes',
        title: 'QR code ordering and POS for independent cafés: what we learned building Café QR',
        excerpt: 'Why we built Café QR, a browser-based EPOS with QR table ordering for UK cafés, restaurants, bars and pubs, and what independent venues should look for in a till in 2026.',
        date: '2026-10-19',
        readingMinutes: 7,
        category: 'Product',
        tags: ['Café QR', 'QR Ordering', 'EPOS', 'Hospitality', 'SaaS', 'Stripe'],
        author: 'DataVault.AI',
        body: [
            { type: 'p', content: ['Most of what we write here is about shipping AI and data systems for clients. This post is about a product we build and run ourselves: ', { text: 'Café QR', href: 'https://cafeqr.app/' }, ', a cloud-based EPOS and QR ordering platform for independent cafés, restaurants, bars and pubs. Below is why it exists, how it is put together, and the checklist we would give any independent owner choosing a till today.'] },
            { type: 'h2', content: 'The problem: independents pay enterprise prices for half a system' },
            { type: 'p', content: 'Talking to café owners across the UK, we heard the same story. The till came from one vendor, QR ordering from a second, online delivery from a marketplace taking a large commission, and loyalty from a fourth app nobody used. Each had its own monthly fee, its own login and its own hardware. Small venues were paying for an enterprise stack while getting none of the joined-up reporting that makes one worth having.' },
            { type: 'p', content: 'We set ourselves a simple brief: one system that runs in a web browser on hardware the venue already owns, with QR ordering, the counter till, the kitchen screen and online orders all writing to the same order stream.' },
            { type: 'h2', content: 'What Café QR does' },
            { type: 'p', content: ['Café QR combines the till, kitchen screens, waiter app, tabs and online orders in one place. It runs in a browser on an iPad, Android tablet, phone or laptop, so there is no proprietary terminal to buy. The full list lives on the ', { text: 'Café QR features page', href: 'https://cafeqr.app/features' }, ', but the core pieces are:'] },
            {
                type: 'ul',
                items: [
                    ['QR code ordering and payment: guests scan at the table or the counter and order without downloading an app. See how it works on the ', { text: 'live demo', href: 'https://cafeqr.app/demo' }, '.'],
                    'A kitchen screen and printers that receive QR, counter and online orders in a single queue.',
                    'Your own online ordering page for collection and delivery, with delivery zones and no commission on delivery orders.',
                    'A counter till for card and cash, a waiter app, a floor plan, a self-order kiosk, table bookings and gift cards.',
                    'Menu and allergen management, plus food safety and HACCP checklists.',
                    'Stock and recipes, cash-up and reporting, loyalty and promotions.'
                ]
            },
            { type: 'h2', content: 'Architecture decisions that mattered' },
            { type: 'h3', content: 'Browser-first, not app-first' },
            { type: 'p', content: 'Asking a customer to install an app before they can order a flat white loses a lot of orders. Asking a venue to install native software on every device makes it harder to support. Building the whole platform as a web app meant guests order from a link and staff log in from whatever tablet is behind the counter.' },
            { type: 'h3', content: 'Payments go straight to the venue' },
            { type: 'p', content: ['Card payments are processed through the venue\'s own Stripe account, so the money lands with the business rather than passing through us. Café QR charges no platform fee per transaction. We cover how data and payments are handled on the ', { text: 'Café QR security page', href: 'https://cafeqr.app/security' }, '.'] },
            { type: 'h3', content: 'Designing for bad Wi-Fi' },
            { type: 'p', content: 'Café connections drop. If the internet goes down, the Café QR till keeps taking cash and uploads those sales once it reconnects. Card payments, tabs and QR ordering need a connection, and we say so plainly rather than over-promise offline behaviour.' },
            { type: 'h2', content: 'Choosing a POS for an independent café: a checklist' },
            { type: 'p', content: ['Whatever system you choose, these are the questions we would ask. We have also written a longer ', { text: 'comparison of POS systems in the UK', href: 'https://cafeqr.app/compare-pos-systems-uk' }, ' on the Café QR site.'] },
            {
                type: 'ul',
                items: [
                    'Does QR ordering feed the same kitchen screen as the counter till, or is it a separate system?',
                    'Who holds the card payments, and is there a per-transaction platform fee on top of card processing?',
                    'Can you take delivery orders without paying marketplace commission?',
                    'What happens to the till when the internet drops?',
                    'Is there a contract or a setup fee, and can you try it before committing?',
                    'Does it export to your accounting software, such as Xero or QuickBooks?'
                ]
            },
            { type: 'h2', content: 'Pricing' },
            { type: 'p', content: ['Café QR is priced per venue per month, starting at £9.99 for Order & Pay and going up to £59 for multi-site groups. Every plan has a one-month free trial with no card required, no contract and no setup fee. Current plans are on the ', { text: 'Café QR pricing page', href: 'https://cafeqr.app/pricing' }, ', and early UK venues can check the ', { text: 'founding venue offer', href: 'https://cafeqr.app/founding-venues' }, '.'] },
            { type: 'h2', content: 'Try it' },
            { type: 'p', content: ['If you run a café, bakery, takeaway, bar or pub, you can ', { text: 'start a free trial of Café QR', href: 'https://cafeqr.app/get-started' }, ' or read more about our ', { text: 'POS system for cafés', href: 'https://cafeqr.app/pos-system-for-cafes' }, '. If you want a product like this built for your own business, ', { text: 'get in touch with DataVault.AI', href: '/#contact' }, '.'] }
        ]
    },
    {
        slug: 'choosing-the-right-llm-for-enterprise',
        title: 'Choosing the right LLM for enterprise: GPT-4, Claude, or open weights',
        excerpt: 'A practical decision framework for picking a language model in production - cost, latency, accuracy, data residency, and vendor lock-in.',
        date: '2026-04-20',
        readingMinutes: 8,
        category: 'AI Strategy',
        tags: ['LLM', 'GPT-4', 'Claude', 'Open Source', 'Enterprise'],
        author: 'DataVault.AI',
        body: [
            { type: 'p', content: 'Picking a language model in 2026 is no longer a binary choice between OpenAI and "the rest". The decision matrix has expanded to include data residency, prompt caching economics, fine-tuning maturity, and the evolving copyright posture of each vendor. This guide walks through how we approach the decision for enterprise clients.' },
            { type: 'h2', content: 'Start with the workload, not the model' },
            { type: 'p', content: 'A frequent failure mode is selecting the model first. Begin instead with a one-page workload spec: expected query volume, p95 latency budget, allowable error rate, sensitivity of inputs and outputs, and the regulatory regime of the data. From those constraints, only one or two models typically remain.' },
            { type: 'h2', content: 'Cost is not just per-token price' },
            { type: 'p', content: 'Per-token list price is the most-quoted number and the least useful in isolation. The true cost includes: cache hit rate (caching can move TCO by an order of magnitude), retry overhead, embedding model costs, vector DB hosting, observability, and the engineering hours to maintain prompts as models change.' },
            { type: 'h2', content: 'When to consider open weights' },
            { type: 'p', content: 'Open-weight models (Llama, Mistral, Qwen) become compelling when you have steady high-volume traffic, strict data residency requirements, or an in-house ML team comfortable with serving infrastructure. They are usually a poor fit for low-volume conversational features where the operations cost dwarfs the per-token savings.' }
        ]
    },
    {
        slug: 'rag-vs-fine-tuning-2026',
        title: 'RAG vs fine-tuning in 2026: when to use which',
        excerpt: 'Retrieval-augmented generation and fine-tuning solve different problems. Most teams default to one when the other fits better.',
        date: '2026-03-30',
        readingMinutes: 6,
        category: 'AI Strategy',
        tags: ['RAG', 'Fine-tuning', 'Vector Search', 'LLM'],
        author: 'DataVault.AI',
        body: [
            { type: 'p', content: 'RAG and fine-tuning are not competing strategies. They sit at different points on the cost / freshness / determinism axis, and the right answer is often "both" - retrieval to ground the model in current facts, and a small amount of fine-tuning to teach a house style or tool-use pattern.' },
            { type: 'h2', content: 'Pick RAG when knowledge changes weekly' },
            { type: 'p', content: 'Anything that needs to reflect the latest product docs, ticketing data, or HR policy belongs in RAG. Re-indexing is cheap; re-fine-tuning is not.' },
            { type: 'h2', content: 'Pick fine-tuning for behaviour, not facts' },
            { type: 'p', content: 'Use fine-tuning to lock in tone, structured-output formats, or domain jargon. Trying to teach a fine-tune the answers to FAQ questions is a recipe for hallucination.' }
        ]
    },
    {
        slug: 'shipping-llm-features-without-blowing-the-bill',
        title: 'Shipping LLM features without blowing the bill',
        excerpt: 'Six prompt-caching, batching, and routing patterns we use to keep enterprise AI costs predictable.',
        date: '2026-02-14',
        readingMinutes: 7,
        category: 'Engineering',
        tags: ['Cost Optimization', 'Prompt Caching', 'Batching', 'LLM'],
        author: 'DataVault.AI',
        body: [
            { type: 'p', content: 'The fastest way to a runaway AI bill is shipping a feature without a cost model. Below are the patterns that consistently move the needle for the teams we work with.' },
            { type: 'h2', content: '1. Cache the system prompt aggressively' },
            { type: 'p', content: 'For Claude and GPT-4, prompt caching can move steady-state cost by 70 to 90 percent on chat-style workloads where the system prompt is large and stable. Make it the first optimisation, not the last.' },
            { type: 'h2', content: '2. Route by difficulty, not by feature' },
            { type: 'p', content: 'A common anti-pattern is "this feature uses GPT-4". A more economical pattern is "this feature classifies the request first with a cheap model, then routes only the genuinely hard tail to the flagship model". 70 percent of typical traffic is easy.' },
            { type: 'h2', content: '3. Batch where you can tolerate latency' },
            { type: 'p', content: 'Background workloads (summaries, classifications, enrichment) often have hours of latency budget. Move them to the batch API and pay roughly half the price.' }
        ]
    }
];

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (slug, limit = 2) =>
    blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
