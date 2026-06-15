import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/niches?'],
    },
    sitemap: 'https://backlinkbridge.com/sitemap.xml',
  }
}
