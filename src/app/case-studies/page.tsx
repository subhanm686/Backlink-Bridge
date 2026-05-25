"use client"

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Badge from '@/components/ui/Badge'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import BottomCTA from '@/components/sections/BottomCTA'
import { CaseStudy } from '@/types'

function CaseStudiesContent() {
  const searchParams = useSearchParams()
  const studyParam = searchParams.get('study')
  const [selectedFilter, setSelectedFilter] = useState("All")

  const filters = ["All", "DR Improvement", "Spam Cleanup", "Traffic Growth", "Guest Posting"]

  const caseStudiesList: CaseStudy[] = [
    {
      id: "cs-1",
      tag: "Technology & SaaS",
      title: "SaaS startup grew from DR 12 to DR 54 in 6 months.",
      description: "We placed 48 guest posts across top SaaS and technology publications. Organic traffic grew 340 percent and the client ranked on page one for 12 target keywords within the campaign period.",
      metrics: ["DR 12 → 54 | Authority", "48 | Links Placed", "340% | Traffic Growth"],
      unsplash: "saas software team success office",
      slug: "saas-startup-growth",
      isFeatured: true
    },
    {
      id: "cs-2",
      tag: "E-Commerce & Retail",
      title: "E-commerce brand reduced spam score from 17% to 2%.",
      description: "90-day spam cleanup campaign. Full disavow file submitted. 24 clean replacement links placed in retail and finance niches.",
      metrics: ["17% → 2% | Spam Reduction", "24 | Placements", "90 Days | Timeline"],
      unsplash: "ecommerce retail shopping online store",
      slug: "ecommerce-spam-cleanup"
    },
    {
      id: "cs-3",
      tag: "Legal & Law",
      title: "Law firm moved from DA 19 to DA 45 in 4 months.",
      description: "24 niche-relevant placements on legal and business authority sites. Organic leads increased 180 percent from targeted keyword improvements.",
      metrics: ["DA 19 → 45 | Authority", "180% | Lead Increase", "4 Months | Timeline"],
      unsplash: "law legal courtroom professional lawyer",
      slug: "law-firm-domain-authority"
    },
    {
      id: "cs-4",
      tag: "Health & Wellness",
      title: "Wellness clinic grew organic monthly traffic from 500 to 12K.",
      description: "Secured permanent placements on high-authority health and wellness blogs, focusing on keywords relating to therapy and rehabilitation.",
      metrics: ["500 → 12K | Monthly Visitors", "18 | Links Placed", "6 Months | Timeline"],
      unsplash: "wellness yoga meditation healthy lifestyle",
      slug: "wellness-clinic-traffic"
    },
    {
      id: "cs-5",
      tag: "Finance & Investing",
      title: "Investments portal increased DR from 45 to 68 in 90 days.",
      description: "Designed tiered niche edits inside finance and investing resources, strengthening baseline domain rating in under three months.",
      metrics: ["DR 45 → 68 | Authority Boost", "30 | Niche Edits", "90 Days | Timeline"],
      unsplash: "finance investment stock market professional",
      slug: "finance-portal-authority"
    },
    {
      id: "cs-6",
      tag: "Real Estate",
      title: "Real estate brokerage ranked Page One for 15 target terms.",
      description: "Secured high-quality localized real estate links, driving regional search volume and moving competitiveness index ranking to page one.",
      metrics: ["15 | Keywords Page One", "16 | Placements", "5 Months | Timeline"],
      unsplash: "real estate luxury home architecture",
      slug: "real-estate-rankings"
    }
  ]

  // Map study slug to its filter category
  function getStudyFilter(slug: string): string {
    if (slug === "saas-startup-growth" || slug === "finance-portal-authority") return "DR Improvement"
    if (slug === "ecommerce-spam-cleanup") return "Spam Cleanup"
    if (slug === "wellness-clinic-traffic") return "Traffic Growth"
    if (slug === "law-firm-domain-authority" || slug === "real-estate-rankings") return "Guest Posting"
    return "All"
  }

  // Pre-filter study if URL contains '?study=...'
  useEffect(() => {
    if (studyParam) {
      const category = getStudyFilter(studyParam)
      setSelectedFilter(category)
    } else {
      setSelectedFilter("All")
    }
  }, [studyParam])

  const featuredStudy = caseStudiesList.find(cs => cs.isFeatured)
  const gridStudies = caseStudiesList.filter(cs => !cs.isFeatured)

  const filteredGridStudies = gridStudies.filter((cs) => {
    if (selectedFilter === "All") return true
    return getStudyFilter(cs.slug) === selectedFilter
  })

  const isFeaturedMatchesFilter = selectedFilter === "All" || (featuredStudy && getStudyFilter(featuredStudy.slug) === selectedFilter)

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-navy py-20 border-b border-navy-light/35 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/90 opacity-80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">Client Stories</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight max-w-3xl mx-auto">
            Results That Speak for Themselves.
          </h1>
          <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium font-sans">
            Read our documented case studies illustrating domain authority improvements, spam score audits, and organic search index growth.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap border-b border-border pb-6 gap-2.5 mb-12 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all border ${
                selectedFilter === filter
                  ? "bg-primary border-primary text-white shadow-sm"
                  : "bg-white border-border text-slate-500 hover:text-navy hover:border-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Case Study (Only show if matches current filter category) */}
        {featuredStudy && isFeaturedMatchesFilter && (
          <div className="mb-12">
            <h3 className="text-navy font-bold uppercase tracking-wider text-xs mb-4">Featured Success Story</h3>
            <CaseStudyCard
              tag={featuredStudy.tag}
              title={featuredStudy.title}
              description={featuredStudy.description}
              metrics={featuredStudy.metrics}
              unsplashQuery={featuredStudy.unsplash}
              slug={featuredStudy.slug}
              isFeatured={true}
            />
          </div>
        )}

        {/* Case Studies Grid */}
        <div>
          <h3 className="text-navy font-bold uppercase tracking-wider text-xs mb-6 border-b border-border pb-3">
            {selectedFilter === "All" ? "All Case Studies" : `${selectedFilter} Placements`}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGridStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                tag={study.tag}
                title={study.title}
                description={study.description}
                metrics={study.metrics}
                unsplashQuery={study.unsplash}
                slug={study.slug}
                isFeatured={false}
              />
            ))}
          </div>

          {filteredGridStudies.length === 0 && !isFeaturedMatchesFilter && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg font-medium">No case studies found matching this filter.</p>
            </div>
          )}
        </div>

      </section>

      {/* Bottom CTA */}
      <BottomCTA />
    </main>
  )
}

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-slate-400 font-semibold">Loading case studies...</div>
      </div>
    }>
      <CaseStudiesContent />
    </Suspense>
  )
}
