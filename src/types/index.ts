export type { Niche, Stat, Service, BlogPost } from '../lib/constants'

export interface FAQItem {
  question: string
  answer: string
}

export interface CaseStudy {
  id: string
  tag: string
  title: string
  description: string
  metrics: string[]
  slug: string
  unsplash: string
  isFeatured?: boolean
}
