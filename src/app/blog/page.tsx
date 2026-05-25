"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import BlogCard from '@/components/ui/BlogCard'
import { BLOG_POSTS } from '@/lib/constants'
import { newsletterSchema } from '@/lib/schemas'

type NewsletterInputs = z.infer<typeof newsletterSchema>

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState("All")
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  const tags = ["All", "Link Building", "DR & DA", "Spam Score", "SEO Strategy"]

  // Filter posts based on search input and selected tag
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    
    // Allow partial match of tag grouping (e.g. "Spam Score" filters "SEO Health" or "Spam Score" tags)
    let matchesTag = false
    if (selectedTag === "All") {
      matchesTag = true
    } else if (selectedTag === "Link Building") {
      matchesTag = post.tag === "Link Building"
    } else if (selectedTag === "DR & DA") {
      matchesTag = post.tag === "DR & DA"
    } else if (selectedTag === "Spam Score") {
      matchesTag = post.tag === "SEO Health"
    } else if (selectedTag === "SEO Strategy") {
      matchesTag = post.tag === "SEO Strategy"
    }

    return matchesSearch && matchesTag
  })

  // Popular posts list for the sidebar
  const popularPosts = [
    { title: "What Is Domain Rating and How to Improve It in 2025", slug: "improve-domain-rating-2025" },
    { title: "Guest Posting vs. Niche Edits: Which Builds Authority Faster?", slug: "guest-posting-vs-niche-edits" },
    { title: "How to Reduce Spam Score: Complete 2025 Guide", slug: "reduce-spam-score-guide" }
  ]

  // Form for sidebar newsletter
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<NewsletterInputs>({
    resolver: zodResolver(newsletterSchema)
  })

  const onSubscribe = async (data: NewsletterInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log("Sidebar subscription email:", data.email)
    setNewsletterSuccess(true)
    reset()
    setTimeout(() => setNewsletterSuccess(false), 5000)
  }

  // Schema for blog listing
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Backlink Bridge SEO Blog",
    "description": "Guides, tactics, and analyses on domain rating improvement, spam reduction, and guest blogging outreach.",
    "publisher": {
      "@type": "Organization",
      "name": "Backlink Bridge"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-navy py-20 border-b border-navy-light/35 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/90 opacity-80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">The Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight max-w-3xl mx-auto">
              The Backlink Bridge Blog.
            </h1>
            <p className="text-[18px] text-slate-300 max-w-xl mx-auto leading-relaxed font-medium font-sans">
              Strategy, guides, and insights for better SEO.
            </p>
          </div>
        </section>

        {/* Content Layout */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Articles Area (col-span-8) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles by keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface border border-border rounded-xl px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-slate-700"
                />
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap border-b border-border pb-6 gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4.5 py-2 rounded-full text-[13.5px] font-semibold transition-all border ${
                      selectedTag === tag
                        ? "bg-primary border-primary text-white"
                        : "bg-white border-border text-slate-500 hover:text-navy hover:border-slate-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    tag={post.tag}
                    readTime={post.readTime}
                    unsplashQuery={post.unsplash}
                    date={post.date}
                  />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20 border border-dashed border-border rounded-xl">
                  <p className="text-slate-400 text-base font-semibold font-sans">No articles found matching &quot;{searchQuery}&quot;</p>
                </div>
              )}

            </div>

            {/* Sidebar (col-span-4) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Popular Articles */}
              <Card hoverEffect={false} className="p-6 bg-white border border-border">
                <h3 className="text-navy font-bold uppercase tracking-wider text-xs mb-4 pb-2.5 border-b border-border">
                  Popular Strategy Guides
                </h3>
                <ul className="space-y-4">
                  {popularPosts.map((item, idx) => (
                    <li key={idx} className="group flex items-start gap-3">
                      <span className="text-slate-300 font-bold text-lg select-none">0{idx + 1}</span>
                      <Link 
                        href={`/blog/${item.slug}`} 
                        className="text-[14px] font-bold text-navy group-hover:text-primary transition-colors leading-snug"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Sidebar Newsletter */}
              <Card hoverEffect={false} className="p-6 bg-surface border border-border">
                <h3 className="text-navy font-bold uppercase tracking-wider text-xs mb-3 pb-2.5 border-b border-border">
                  Subscribe to SEO Insights
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-4">
                  Get high-authority, actionable link building breakdowns delivered straight to your inbox once a month.
                </p>
                <form onSubmit={handleSubmit(onSubscribe)} className="space-y-3">
                  <div>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      {...register("email")}
                      className="w-full bg-white border border-border rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700 font-medium"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 mt-1 block">{errors.email.message}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-bold text-sm py-2.5 rounded-lg transition-all"
                  >
                    {isSubmitting ? "Subscribing..." : "Join Newsletter"}
                  </button>
                  {newsletterSuccess && (
                    <span className="text-[11px] text-emerald-600 font-semibold block text-center mt-1">
                      Success! Welcome to the newsletter.
                    </span>
                  )}
                </form>
              </Card>

            </aside>

          </div>
        </section>
      </main>
    </>
  )
}
