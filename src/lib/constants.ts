export interface Niche {
  id: number
  name: string
  slug: string
  unsplash: string
}

export interface Stat {
  value: string
  label: string
}

export interface Service {
  id: string
  name: string
  slug: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  tag: string
  readTime: string
  date: string
  unsplash: string
}

export const NICHES: Niche[] = [
  { id: 1, name: "Health & Wellness", slug: "health-wellness", unsplash: "wellness yoga meditation healthy lifestyle" },
  { id: 2, name: "Finance & Investing", slug: "finance-investing", unsplash: "finance investment stock market professional" },
  { id: 3, name: "Technology & SaaS", slug: "technology-saas", unsplash: "technology software developer laptop modern" },
  { id: 4, name: "Real Estate", slug: "real-estate", unsplash: "real estate luxury home architecture" },
  { id: 5, name: "Legal & Law", slug: "legal-law", unsplash: "law legal courtroom professional lawyer" },
  { id: 6, name: "Travel & Tourism", slug: "travel-tourism", unsplash: "travel destination landscape tourism" },
  { id: 7, name: "E-Commerce & Retail", slug: "ecommerce-retail", unsplash: "ecommerce retail shopping online store" },
  { id: 8, name: "Education & E-Learning", slug: "education", unsplash: "education learning student classroom" },
  { id: 9, name: "Food & Nutrition", slug: "food-nutrition", unsplash: "food nutrition healthy meal restaurant" },
  { id: 10, name: "Automotive", slug: "automotive", unsplash: "automotive car dealership modern vehicle" },
  { id: 11, name: "Home Improvement", slug: "home-improvement", unsplash: "home improvement interior design renovation" },
  { id: 12, name: "Beauty & Skincare", slug: "beauty-skincare", unsplash: "beauty skincare cosmetics professional" },
  { id: 13, name: "Fashion & Lifestyle", slug: "fashion-lifestyle", unsplash: "fashion lifestyle style photography" },
  { id: 14, name: "Sports & Fitness", slug: "sports-fitness", unsplash: "sports fitness gym training athlete" },
  { id: 15, name: "Parenting & Family", slug: "parenting-family", unsplash: "family parenting children lifestyle home" },
  { id: 16, name: "Business & Entrepreneurship", slug: "business", unsplash: "business entrepreneur office startup" },
  { id: 17, name: "Digital Marketing & SEO", slug: "digital-marketing-seo", unsplash: "digital marketing seo analytics strategy" },
  { id: 18, name: "Cybersecurity & IT", slug: "cybersecurity", unsplash: "cybersecurity network technology security" },
  { id: 19, name: "Mental Health", slug: "mental-health", unsplash: "mental health therapy calm peaceful" },
  { id: 20, name: "Insurance", slug: "insurance", unsplash: "insurance protection business professional" },
  { id: 21, name: "Crypto & Blockchain", slug: "crypto-blockchain", unsplash: "cryptocurrency blockchain technology digital" },
  { id: 22, name: "Gaming & Esports", slug: "gaming-esports", unsplash: "gaming esports computer setup professional" },
  { id: 23, name: "Pets & Animals", slug: "pets-animals", unsplash: "pets animals dog cat lifestyle" },
  { id: 24, name: "Environment & Sustainability", slug: "environment", unsplash: "environment sustainability green nature" },
  { id: 25, name: "HR & Recruitment", slug: "hr-recruitment", unsplash: "human resources recruitment hiring professional" },
  { id: 26, name: "Healthcare & Medical", slug: "healthcare-medical", unsplash: "healthcare medical hospital professional" },
  { id: 27, name: "Architecture & Construction", slug: "architecture", unsplash: "architecture construction building design" },
  { id: 28, name: "Entertainment & Media", slug: "entertainment", unsplash: "entertainment media production studio" },
]

export const STATS: Stat[] = [
  { value: "1,200+", label: "Websites Served" },
  { value: "50,000+", label: "Backlinks Placed" },
  { value: "25+", label: "Niches Covered" },
  { value: "98%", label: "Client Retention Rate" },
]

export const SERVICES: Service[] = [
  { id: "guest-posting", name: "Guest Posting", slug: "/guest-posting" },
  { id: "gbob", name: "GBOB Management", slug: "/gbob-management" },
  { id: "niche-edits", name: "Niche Edits", slug: "/niche-edits" },
  { id: "dr-improvement", name: "DR / DA Improvement", slug: "/dr-da-improvement" },
  { id: "spam-cleanup", name: "Spam Score Cleanup", slug: "/spam-cleanup" },
  { id: "organic-traffic", name: "Organic Traffic Growth", slug: "/link-building-campaigns" },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "improve-domain-rating-2026",
    title: "What Is Domain Rating and How to Improve It in 2026",
    excerpt: "Domain Rating is Ahrefs' measure of your backlink profile strength on a 0–100 scale. Here is exactly how to move it.",
    tag: "DR & DA",
    readTime: "8 min read",
    date: "May 12, 2026",
    unsplash: "domain authority seo analytics laptop"
  },
  {
    id: "blog-2",
    slug: "guest-posting-vs-niche-edits",
    title: "Guest Posting vs. Niche Edits: Which Builds Authority Faster?",
    excerpt: "Both tactics build backlinks — but they work differently and suit different goals. We break down when to use each.",
    tag: "Link Building",
    readTime: "6 min read",
    date: "April 28, 2026",
    unsplash: "guest posting writing content editorial"
  },
  {
    id: "blog-3",
    slug: "reduce-spam-score-guide-2026",
    title: "How to Reduce Spam Score: Complete 2026 Guide",
    excerpt: "A high Moz Spam Score can suppress your rankings even with great content. Here is the step-by-step process to clean it up.",
    tag: "SEO Health",
    readTime: "10 min read",
    date: "March 15, 2026",
    unsplash: "spam score moz toxic links cleanup"
  },
  {
    id: "blog-4",
    slug: "gbob-outreach-explained",
    title: "What is GBOB? The Outreach Business Model Explained",
    excerpt: "GBOB stands for Guest Blogging Outreach Business. It is a highly-effective model for scaling link placements. Here is how it functions.",
    tag: "Link Building",
    readTime: "7 min read",
    date: "February 10, 2026",
    unsplash: "outreach email marketing team office"
  },
  {
    id: "blog-5",
    slug: "white-hat-vs-black-hat",
    title: "White Hat vs Black Hat Link Building: The Real Risks",
    excerpt: "Understanding the separation between search safe outreach and manipulative schemes that trigger manual audit penalties.",
    tag: "SEO Strategy",
    readTime: "9 min read",
    date: "January 18, 2026",
    unsplash: "toxic links penalty google disavow"
  },
  {
    id: "blog-6",
    slug: "anchor-text-ratio-guide",
    title: "The Guide to Keyword-Targeted Anchor Text",
    excerpt: "Anchor text profiles can make or break a ranking campaign. Discover how to balance brand, naked url, and keyword phrase match ratios.",
    tag: "SEO Strategy",
    readTime: "11 min read",
    date: "December 05, 2025",
    unsplash: "domain authority analytics growth chart"
  }
]
