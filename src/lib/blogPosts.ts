export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  dateISO: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-improve-domain-rating-remove-toxic-backlinks",
    title: "How to Improve Domain Rating (DR) and Remove Toxic Backlinks in 2026",
    excerpt: "A step-by-step guide to improving your Ahrefs Domain Rating, cleaning toxic backlinks, and building white-hat links that actually rank.",
    category: "Link Building",
    readTime: "8 min read",
    date: "June 14, 2026",
    dateISO: "2026-06-14",
    image: "/images/dr-improvement-ahrefs-dashboard.webp",
    imageAlt: "Ahrefs Domain Rating dashboard showing DR improvement trend",
    featured: true,
  },
  {
    slug: "anchor-text-ratio-guide",
    title: "The Guide to Keyword-Targeted Anchor Text",
    excerpt: "Anchor text profiles can make or break a ranking campaign. Discover how to balance brand, naked url, and keyword phrase match ratios.",
    category: "SEO Strategy",
    readTime: "11 min read",
    date: "June 05, 2026",
    dateISO: "2026-06-05",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: The Guide to Keyword-Targeted Anchor Text",
    featured: false,
  },
  {
    slug: "improve-domain-rating-2026",
    title: "What Is Domain Rating and How to Improve It in 2026",
    excerpt: "Domain Rating is Ahrefs' measure of your backlink profile strength on a 0-100 scale. Here is exactly how to move it.",
    category: "DR & DA",
    readTime: "8 min read",
    date: "May 12, 2026",
    dateISO: "2026-05-12",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: What Is Domain Rating and How to Improve It in 2026",
    featured: true,
  },
  {
    slug: "guest-posting-vs-niche-edits",
    title: "Guest Posting vs. Niche Edits: Which Builds Authority Faster?",
    excerpt: "Both tactics build backlinks — but they work differently and suit different goals. We break down when to use each.",
    category: "Link Building",
    readTime: "6 min read",
    date: "April 28, 2026",
    dateISO: "2026-04-28",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: Guest Posting vs. Niche Edits: Which Builds Authority Faster?",
    featured: true,
  },
  {
    slug: "reduce-spam-score-guide-2026",
    title: "How to Reduce Spam Score: Complete 2026 Guide",
    excerpt: "A high Moz Spam Score can suppress your rankings even with great content. Here is the step-by-step process to clean it up.",
    category: "SEO Health",
    readTime: "10 min read",
    date: "March 15, 2026",
    dateISO: "2026-03-15",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: How to Reduce Spam Score: Complete 2026 Guide",
    featured: false,
  },
  {
    slug: "gbob-outreach-explained",
    title: "What is GBOB? The Outreach Business Model Explained",
    excerpt: "GBOB stands for Guest Blogging Outreach Business. It is a highly-effective model for scaling link placements. Here is how it functions.",
    category: "Link Building",
    readTime: "7 min read",
    date: "February 10, 2026",
    dateISO: "2026-02-10",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: What is GBOB? The Outreach Business Model Explained",
    featured: false,
  },
  {
    slug: "white-hat-vs-black-hat",
    title: "White Hat vs Black Hat Link Building: The Real Risks",
    excerpt: "Understanding the separation between search safe outreach and manipulative schemes that trigger manual audit penalties.",
    category: "SEO Strategy",
    readTime: "9 min read",
    date: "January 18, 2026",
    dateISO: "2026-01-18",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=400&h=220&q=80",
    imageAlt: "SEO Strategy Article: White Hat vs Black Hat Link Building: The Real Risks",
    featured: false,
  },
    {
      slug: "how-to-get-backlinks-for-new-website",
      title: "How to Get Backlinks for a New Website in 2026: A Proven Foundational Framework",
      excerpt: "New websites face a brutal cold-start problem. This guide covers a systematic approach to foundational link building — covering DR targets, outreach mechanics, guest posting, and dofollow link acquisition from scratch.",
      category: "Link Building",
      readTime: "9 min read",
      date: "June 16, 2026",
      dateISO: "2026-06-16",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&h=220&q=80",
      imageAlt: "Link Building Article: How to Get Backlinks for a New Website in 2026",
      featured: false,
    },
  ];

export const BLOG_CATEGORIES = [
  "All",
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
];

export const FEATURED_POSTS = BLOG_POSTS.filter((p) => p.featured).slice(0, 3);
