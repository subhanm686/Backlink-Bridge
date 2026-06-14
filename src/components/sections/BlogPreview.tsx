"use client";

import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blogPosts";

export default function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="bg-white py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-teal/10 text-teal">
            From The Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mt-4">
            Learn the strategy behind better rankings.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="rounded-xl border border-border shadow-sm overflow-hidden bg-white transition-all duration-300 hover:shadow-md hover:scale-[1.02] flex flex-col h-full">
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
                  <h3 className="text-xl font-bold text-navy leading-snug hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 bg-white text-navy border border-navy hover:bg-navy hover:text-white text-[15px] px-6 py-3"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
