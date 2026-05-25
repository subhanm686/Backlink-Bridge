import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://backlinkbridge.com'

  // Static routes
  const staticRoutes = [
    '',
    '/services',
    '/guest-posting',
    '/niche-edits',
    '/gbob-management',
    '/link-building-campaigns',
    '/dr-da-improvement',
    '/spam-cleanup',
    '/niches',
    '/how-it-works',
    '/case-studies',
    '/about',
    '/blog',
    '/contact',
    '/free-site-audit',
    '/seo-tools',
    '/dashboard'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic blog routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
