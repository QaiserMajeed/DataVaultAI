// Blog post registry. Each post owns its metadata + body (string of HTML or
// React-rendered fragments). Replace with MDX/CMS later if needed.

export const blogPosts = [
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
