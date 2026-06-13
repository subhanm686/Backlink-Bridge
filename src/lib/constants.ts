export interface Niche {
  id: number
  name: string
  slug: string
  image: string
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
  { id: 1, name: "Health & Wellness", slug: "health-wellness", image: "/niche-health.jpg" },
  { id: 2, name: "Finance & Investing", slug: "finance-investing",image: "/niche-finance.jpg" },
  { id: 3, name: "Technology & SaaS", slug: "technology-saas",image: "/niche-tech.jpg" },
  { id: 4, name: "Real Estate", slug: "real-estate", image: "/niche-realestate.jpg" },
  { id: 5, name: "Legal & Law", slug: "legal-law", image: "/niche-legal.jpg" },
  { id: 6, name: "Travel & Tourism", slug: "travel-tourism", image: "/niche-realestate.jpg" },
  { id: 7, name: "E-Commerce & Retail", slug: "ecommerce-retail", image: "/niche-ecommerce.jpg" },
  { id: 8, name: "Education & E-Learning", slug: "education", image: "/niche-education.jpg" },
  { id: 9, name: "Food & Nutrition", slug: "food-nutrition", image: "/niche-food.jpg" },
  { id: 10, name: "Automotive", slug: "automotive", image: "/niche-auto.jpg" },
  { id: 11, name: "Home Improvement", slug: "home-improvement", image: "/niche-health.jpg" },
  { id: 12, name: "Beauty & Skincare", slug: "beauty-skincare", image: "/niche-health.jpg },
  { id: 13, name: "Fashion & Lifestyle", slug: "fashion-lifestyle", image: "/niche-health.jpg },
  { id: 14, name: "Sports & Fitness", slug: "sports-fitness", image: "/niche-health.jpg },
  { id: 15, name: "Parenting & Family", slug: "parenting-family",image: "/niche-health.jpg },
  { id: 16, name: "Business & Entrepreneurship", slug: "business", image: "/niche-health.jpg },
  { id: 17, name: "Digital Marketing & SEO", slug: "digital-marketing-seo",image: "/niche-health.jpg },
  { id: 18, name: "Cybersecurity & IT", slug: "cybersecurity", image: "/niche-health.jpg },
  { id: 19, name: "Mental Health", slug: "mental-health",image: "/niche-health.jpg},
  { id: 20, name: "Insurance", slug: "insurance", image: "/niche-health.jpg },
  { id: 21, name: "Crypto & Blockchain", slug: "crypto-blockchain", image: "/niche-health.jpg },
  { id: 22, name: "Gaming & Esports", slug: "gaming-esports", image: "/niche-health.jpg },
  { id: 23, name: "Pets & Animals", slug: "pets-animals", image: "/niche-health.jpg },
  { id: 24, name: "Environment & Sustainability", slug: "environment", image: "/niche-health.jpg },
  { id: 25, name: "HR & Recruitment", slug: "hr-recruitment", image: "/niche-health.jpg },
  { id: 26, name: "Healthcare & Medical", slug: "healthcare-medical", image: "/niche-health.jpg },
  { id: 27, name: "Architecture & Construction", slug: "architecture", image: "/niche-health.jpg },
  { id: 28, name: "Entertainment & Media", slug: "entertainment", image: "/niche-health.jpg},
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
    unsplash: "/blog-domain-rating.jpg"
  },
  {
    id: "blog-2",
    slug: "guest-posting-vs-niche-edits",
    title: "Guest Posting vs. Niche Edits: Which Builds Authority Faster?",
    excerpt: "Both tactics build backlinks — but they work differently and suit different goals. We break down when to use each.",
    tag: "Link Building",
    readTime: "6 min read",
    date: "April 28, 2026",
    unsplash: "/blog-guest-vs-niche.jpg"
  },
  {
    id: "blog-3",
    slug: "reduce-spam-score-guide-2026",
    title: "How to Reduce Spam Score: Complete 2026 Guide",
    excerpt: "A high Moz Spam Score can suppress your rankings even with great content. Here is the step-by-step process to clean it up.",
    tag: "SEO Health",
    readTime: "10 min read",
    date: "March 15, 2026",
    unsplash: "/blog-spam-score.jpg"
  },
  {
    id: "blog-4",
    slug: "gbob-outreach-explained",
    title: "What is GBOB? The Outreach Business Model Explained",
    excerpt: "GBOB stands for Guest Blogging Outreach Business. It is a highly-effective model for scaling link placements. Here is how it functions.",
    tag: "Link Building",
    readTime: "7 min read",
    date: "February 10, 2026",
    unsplash: "/blog-gbob.jpg"
  },
  {
    id: "blog-5",
    slug: "white-hat-vs-black-hat",
    title: "White Hat vs Black Hat Link Building: The Real Risks",
    excerpt: "Understanding the separation between search safe outreach and manipulative schemes that trigger manual audit penalties.",
    tag: "SEO Strategy",
    readTime: "9 min read",
    date: "January 18, 2026",
    unsplash: "/blog-white-hat.jpg"
  },
  {
    id: "blog-6",
    slug: "anchor-text-ratio-guide",
    title: "The Guide to Keyword-Targeted Anchor Text",
    excerpt: "Anchor text profiles can make or break a ranking campaign. Discover how to balance brand, naked url, and keyword phrase match ratios.",
    tag: "SEO Strategy",
    readTime: "11 min read",
    date: "June 05, 2026",
   unsplash: "/blog-anchor-text.jpg"
  }
]
