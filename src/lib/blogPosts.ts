// ============================================================
//  BacklinkBridge — Central Blog Data File
//  src/lib/blogPosts.ts
//
//  HOW TO ADD A NEW BLOG POST (takes 2 minutes):
//  1. Add a new object to the TOP of the BLOG_POSTS array below
//  2. Create the matching page at:
//     src/app/blog/[your-slug]/page.tsx
//  3. Commit both files — done. It appears everywhere automatically.
//
//  The slug here MUST exactly match the folder name in src/app/blog/
// ============================================================

export type BlogPost = {
  slug: string;           // URL: /blog/[slug] — must match folder name
  title: string;          // Article heading shown on listing + SEO title
  excerpt: string;        // Short description shown on the card (2–3 sentences)
  category: string;       // Badge label: "Link Building" | "DR & DA" | "Spam Score" | "SEO Strategy" | "SEO Health"
  readTime: string;       // e.g. "8 min read"
  date: string;           // Display date e.g. "June 14, 2026"
  dateISO: string;        // ISO format for schema e.g. "2026-06-14"
  image: string;          // Path from /public e.g. "/images/dr-improvement-ahrefs-dashboard.webp"
  imageAlt: string;       // SEO alt text for the card image
  featured?: boolean;     // Set true to pin to top of sidebar "Popular" list
};

// ============================================================
//  ADD NEW POSTS AT THE TOP — newest first
// ============================================================

export const BLOG_POSTS: BlogPost[] = [

  // ── POST 1 (your new post — add this first) ─────────────
  {
    slug: "how-to-improve-domain-rating-remove-toxic-backlinks",
    title: "How to Improve Domain Rating (DR) and Remove Toxic Backlinks in 2026",
    excerpt:
      "A step-by-step guide to improving your Ahrefs Domain Rating, cleaning toxic backlinks, and building white-hat links that actually rank.",
    category: "Link Building",
    readTime: "8 min read",
    date: "June 14, 2026",
    dateISO: "2026-06-14",
    image: "/images/dr-improvement-ahrefs-dashboard.webp",
    imageAlt: "Ahrefs Domain Rating dashboard showing DR improvement trend",
    featured: true,
  },

  // ── EXISTING POSTS (kept exactly as they were) ───────────
  {
    slug: "anchor-text-ratio-guide",
    title: "The Guide to Keyword-Targeted Anchor Text",
    excerpt:
      "Anchor text profiles can make or break a ranking campaign. Discover how to balance brand, naked url, and keyword phrase match ratios.",
    category: "SEO Strategy",
    readTime: "11 min read",
    date: "June 05, 2026",
    dateISO: "2026-06-05",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: The Guide to Keyword-Targeted Anchor Text",
    featured: false,
  },
  {
    slug: "improve-domain-rating-2026",
    title: "What Is Domain Rating and How to Improve It in 2026",
    excerpt:
      "Domain Rating is Ahrefs' measure of your backlink profile strength on a 0–100 scale. Here is exactly how to move it.",
    category: "DR & DA",
    readTime: "8 min read",
    date: "May 12, 2026",
    dateISO: "2026-05-12",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: What Is Domain Rating and How to Improve It in 2026",
    featured: true,
  },
  {
    slug: "guest-posting-vs-niche-edits",
    title: "Guest Posting vs. Niche Edits: Which Builds Authority Faster?",
    excerpt:
      "Both tactics build backlinks — but they work differently and suit different goals. We break down when to use each.",
    category: "Link Building",
    readTime: "6 min read",
    date: "April 28, 2026",
    dateISO: "2026-04-28",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: Guest Posting vs. Niche Edits: Which Builds Authority Faster?",
    featured: true,
  },
  {
    slug: "reduce-spam-score-guide-2026",
    title: "How to Reduce Spam Score: Complete 2026 Guide",
    excerpt:
      "A high Moz Spam Score can suppress your rankings even with great content. Here is the step-by-step process to clean it up.",
    category: "SEO Health",
    readTime: "10 min read",
    date: "March 15, 2026",
    dateISO: "2026-03-15",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: How to Reduce Spam Score: Complete 2026 Guide",
    featured: false,
  },
  {
    slug: "gbob-outreach-explained",
    title: "What is GBOB? The Outreach Business Model Explained",
    excerpt:
      "GBOB stands for Guest Blogging Outreach Business. It is a highly-effective model for scaling link placements. Here is how it functions.",
    category: "Link Building",
    readTime: "7 min read",
    date: "February 10, 2026",
    dateISO: "2026-02-10",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: What is GBOB? The Outreach Business Model Explained",
    featured: false,
  },
  {
    slug: "white-hat-vs-black-hat",
    title: "White Hat vs Black Hat Link Building: The Real Risks",
    excerpt:
      "Understanding the separation between search safe outreach and manipulative schemes that trigger manual audit penalties.",
    category: "SEO Strategy",
    readTime: "9 min read",
    date: "January 18, 2026",
    dateISO: "2026-01-18",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: White Hat vs Black Hat Link Building: The Real Risks",
    featured: false,
  },
];

// ── Helpers used by blog listing page & sidebar ───────────

/** All unique categories for filter buttons */
export const BLOG_CATEGORIES = [
  "All",
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
];

/** Top 3 featured posts for the sidebar */
export const FEATURED_POSTS = BLOG_POSTS.filter((p) => p.featured).slice(0, 3);
