import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import BottomCTA from '@/components/sections/BottomCTA'
import { BLOG_POSTS } from '@/lib/constants'
import { constructMetadata } from '@/lib/metadata'
import { getUnsplashUrl } from '@/lib/utils'
import AuthorBio from '@/components/AuthorBio'
import { getBlogContent } from '@/lib/blogContent'
interface PageProps {
  params: {
    slug: string
  }
}

// Generate dynamic metadata for each article
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}

  return constructMetadata({
    title: `${post.title} | Backlink Bridge Blog`,
    description: post.excerpt,
    canonicalUrl: `https://backlinkbridge.com/blog/${post.slug}`,
    image: getUnsplashUrl(post.unsplash, 1200, 630)
  })
}

// Generate static params for the blog posts for SSG
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostDetailPage({ params }: PageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
    const content = getBlogContent(params.slug)
  const _readTime = content?.readTime ?? post.readTime
  }

  // Schema markup
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": getUnsplashUrl(post.unsplash, 800, 450),
    "datePublished": new Date(post.date).toISOString(),
   "author": {
            "@type": "Person",
            "name": "Muhammad Subhan",
            "url": "https://backlinkbridge.com/about"
          },
    "publisher": {
      "@type": "Organization",
      "name": "Backlink Bridge",
      "logo": "https://backlinkbridge.com/logo.png"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

      <article className="bg-white min-h-screen">
        
        {/* Article Header Hero */}
        <section className="bg-surface py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center gap-3">
              <Link href="/blog" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                ← Back to Blog
              </Link>
              <span className="text-slate-300">|</span>
              <Badge variant="teal">{post.tag}</Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold font-display text-navy leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-[14px] text-slate-400 font-semibold uppercase tracking-wider">
              <span>Published: {post.date}</span>
              <span>•</span>
              <span>Read time: {_readTime}</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Cover Image */}
          <div className="relative h-[260px] md:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-100 mb-12 shadow-sm">
            <Image
              src={getUnsplashUrl(post.unsplash, 800, 450)}
              alt={post.title}
              fill
              sizes="(max-w-4xl) 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content — unique per post */}
<div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium space-y-6 text-[16px] md:text-[17px]">
  {content?.sections ?? (
    <p className="font-semibold text-navy text-lg leading-relaxed">
      {post.excerpt}
    </p>
  )}
</div>
            <AuthorBio />

          <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
            <Link href="/blog" className="text-[15px] font-bold text-primary hover:underline">
              ← Back to all articles
            </Link>
            <Button href="/contact" variant="primary">
              Book a Strategy Call
            </Button>
          </div>
        </section>

        {/* Bottom CTA */}
        <BottomCTA />

      </article>
    </>
  )
}
