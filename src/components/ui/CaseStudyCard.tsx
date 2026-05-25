import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from './Card'
import Badge from './Badge'
import { getUnsplashUrl } from '@/lib/utils'

interface CaseStudyCardProps {
  tag: string
  title: string
  description: string
  metrics: string[]
  unsplashQuery: string
  slug: string
  isFeatured?: boolean
}

export default function CaseStudyCard({
  tag,
  title,
  description,
  metrics,
  unsplashQuery,
  slug,
  isFeatured = false
}: CaseStudyCardProps) {
  const imageUrl = getUnsplashUrl(unsplashQuery, isFeatured ? 800 : 400, 360)

  if (isFeatured) {
    return (
      <Card variant="surface" className="flex flex-col lg:flex-row p-8 lg:p-10 gap-8 lg:gap-10 items-stretch" hoverEffect={false}>
        <div className="relative w-full lg:w-1/2 min-h-[260px] lg:min-h-[360px] rounded-xl overflow-hidden bg-slate-100 shrink-0">
          <Image
            src={imageUrl}
            alt={`SEO Link building Case Study: ${title}`}
            fill
            sizes="(max-w-7xl) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-between py-2 flex-1">
          <div className="space-y-4">
            <Badge variant="primary">{tag}</Badge>
            <h3 className="text-2xl lg:text-[28px] font-bold text-navy leading-tight">{title}</h3>
            <p className="text-[17px] text-slate-600 leading-relaxed">{description}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Metrics */}
            <div className="flex gap-8">
              {metrics.map((metric, idx) => {
                const [val, label] = metric.split('|')
                return (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">{val.trim()}</span>
                    <span className="text-[12px] uppercase font-semibold tracking-wider text-slate-400 mt-1">{label.trim()}</span>
                  </div>
                )
              })}
            </div>
            
            <Link
              href={`/case-studies?study=${slug}`}
              className="text-[15px] font-bold text-primary hover:underline inline-flex items-center gap-1.5 shrink-0 self-start md:self-auto"
            >
              Read Full Case Study
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="flex flex-col h-full">
      <div className="relative h-[200px] w-full bg-slate-100">
        <Image
          src={imageUrl}
          alt={`SEO Client Success Story: ${title}`}
          fill
          sizes="(max-w-7xl) 33vw, 50vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          <Badge variant="teal">{tag}</Badge>
          <h3 className="text-lg font-bold text-navy leading-snug hover:text-primary transition-colors">
            <Link href={`/case-studies?study=${slug}`}>{title}</Link>
          </h3>
          <p className="text-[14px] text-slate-500 leading-relaxed">{description}</p>
        </div>

        <div className="mt-6 pt-5 border-t border-border/60">
          <Link
            href={`/case-studies?study=${slug}`}
            className="text-[14px] font-semibold text-primary hover:underline inline-flex items-center gap-1"
          >
            Read Story
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  )
}
