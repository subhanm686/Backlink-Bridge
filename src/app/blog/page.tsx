"use client";
 
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES, FEATURED_POSTS } from "@/lib/blogPosts";
 
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
 
  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);
 
  return (
    <main className="bg-white min-h-screen">
 
      {/* ── HERO ── */}
      <section className="bg-navy py-20 border-b border-navy-light/35 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/90 opacity-80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-teal/10 text-teal bg-teal/20 text-white border border-teal/40">
            The Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight max-w-3xl mx-auto">
            The Backlink Bridge Blog.
          </h1>
          <p className="text-[18px] text-slate-300 max-w-xl mx-auto leading-relaxed font-medium font-sans">
            Strategy, guides, and insights for better SEO.
          </p>
        </div>
      </section>
 
      {/* ── MAIN CONTENT ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
 
          {/* ── LEFT: Article listing ── */}
          <div className="lg:col-span-8 space-y-10">
 
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border rounded-xl px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-slate-700"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
 
            {/* Category filters — generated automatically from BLOG_CATEGORIES */}
            <div className="flex flex-wrap border-b border-border pb-6 gap-2">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-semibold transition-all border ${
                    activeCategory === cat
                      ? "bg-primary border-primary text-white"
                      : "bg-white border-border text-slate-500 hover:text-navy hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
 
            {/* Article grid — rendered from BLOG_POSTS automatically */}
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-slate-400">
                <p className="text-lg font-medium">No articles found.</p>
                <p className="text-sm mt-1">Try a different search term or category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filtered.map((post) => (
                  <article
                    key={post.slug}
                    className="rounded-xl border border-border shadow-sm overflow-hidden bg-white transition-all duration-300 hover:shadow-md hover:scale-[1.02] flex flex-col h-full"
                  >
                    {/* Card image */}
                    <div className="relative h-[200px] w-full bg-slate-100">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover"
                        loading="lazy"
                        unoptimized={post.image.startsWith("http")}
                      />
                    </div>
 
                    {/* Card body */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-teal/10 text-teal">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-navy leading-snug hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="text-[14px] text-slate-500 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                        <span className="text-xs text-slate-400">{post.date}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-[14px] font-semibold text-primary hover:underline inline-flex items-center gap-1"
                        >
                          Read Article
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
 
            {/* Post count */}
            <p className="text-xs text-slate-400 text-center pt-4">
              Showing {filtered.length} of {BLOG_POSTS.length} articles
            </p>
          </div>
 
          {/* ── RIGHT: Sidebar ── */}
          <aside className="lg:col-span-4 space-y-8">
 
            {/* Popular posts — auto-populated from featured: true */}
            <div className="rounded-xl border border-border shadow-sm overflow-hidden bg-white p-6">
              <h3 className="text-navy font-bold uppercase tracking-wider text-xs mb-4 pb-2.5 border-b border-border">
                Popular Strategy Guides
              </h3>
              <ul className="space-y-4">
                {FEATURED_POSTS.map((post, i) => (
                  <li key={post.slug} className="group flex items-start gap-3">
                    <span className="text-slate-300 font-bold text-lg select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[14px] font-bold text-navy group-hover:text-primary transition-colors leading-snug"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
 
            {/* Newsletter */}
            <div className="rounded-xl border border-border shadow-sm overflow-hidden bg-surface p-6">
              <h3 className="text-navy font-bold uppercase tracking-wider text-xs mb-3 pb-2.5 border-b border-border">
                Subscribe to SEO Insights
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-4">
                Get high-authority, actionable link building breakdowns delivered straight to your inbox once a month.
              </p>
              <div className="space-y-3">
                <div>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white border border-border rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700 font-medium"
                  />
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-sm py-2.5 rounded-lg transition-all">
                  Join Newsletter
                </button>
              </div>
            </div>
 
            {/* CTA box */}
            <div className="rounded-xl bg-navy p-6 text-white">
              <h3 className="font-bold text-base mb-2">Need backlinks that move your DR?</h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                BacklinkBridge builds white-hat editorial links from real DR 30–70+ websites — done for you.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-primary hover:bg-primary-dark text-white font-semibold text-sm py-2.5 rounded-lg transition-all"
              >
                Get a Free Backlink Audit →
              </Link>
            </div>
 
          </aside>
        </div>
      </section>
    </main>
  );
}
 
