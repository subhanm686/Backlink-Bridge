import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from './Card'
import Badge from './Badge'
import { getUnsplashUrl } from '@/lib/utils'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  tag: string
  readTime: string
  unsplashQuery: string
  date: string
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  tag,
  readTime,
  unsplashQuery,
  date
}: BlogCardProps) {
  const imageUrl = getUnsplashUrl(unsplashQuery, 400, 220)

  return (
    <Card className="flex flex-col h-full">
      <div className="relative h-[200px] w-full bg-slate-100">
        <Image
          src={imageUrl}
          alt={`SEO Strategy Article: ${title}`}
          fill
          sizes="(max-w-7xl) 33vw, 50vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="teal">{tag}</Badge>
            <span className="text-xs text-slate-400 font-medium">{readTime}</span>
          </div>
          
          <h3 className="text-xl font-bold text-navy leading-snug hover:text-primary transition-colors">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>
          
          <p className="text-[14px] text-slate-500 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
          <span className="text-xs text-slate-400">{date}</span>
          <Link
            href={`/blog/${slug}`}
            className="text-[14px] font-semibold text-primary hover:underline inline-flex items-center gap-1"
          >
            Read Article
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  )
}
