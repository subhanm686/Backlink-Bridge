"use client"

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import BottomCTA from '@/components/sections/BottomCTA'
import { NICHES } from '@/lib/constants'


// Helper to map niches to categories
function getNicheCategory(slug: string): string {
  const healthSlugs = ["health-wellness", "food-nutrition", "mental-health", "pets-animals", "healthcare-medical"]
  const financeSlugs = ["finance-investing", "legal-law", "insurance"]
  const techSlugs = ["technology-saas", "digital-marketing-seo", "cybersecurity", "crypto-blockchain", "gaming-esports"]
  const businessSlugs = ["real-estate", "ecommerce-retail", "business", "hr-recruitment"]
  const lifestyleSlugs = ["travel-tourism", "education", "beauty-skincare", "fashion-lifestyle", "sports-fitness", "parenting-family", "entertainment"]
  const industrialSlugs = ["automotive", "home-improvement", "environment", "architecture"]

  if (healthSlugs.includes(slug)) return "Health"
  if (financeSlugs.includes(slug)) return "Finance"
  if (techSlugs.includes(slug)) return "Tech"
  if (businessSlugs.includes(slug)) return "Business"
  if (lifestyleSlugs.includes(slug)) return "Lifestyle"
  if (industrialSlugs.includes(slug)) return "Industrial"
  return "Other"
}

function NichesContent() {
  const searchParams = useSearchParams()
  const filterParam = searchParams.get('filter')
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Sync category if filter query parameter is present in URL
  useEffect(() => {
    if (filterParam) {
      const category = getNicheCategory(filterParam)
      setSelectedCategory(category)
    } else {
      setSelectedCategory("All")
    }
  }, [filterParam])

  const categories = ["All", "Health", "Finance", "Tech", "Lifestyle", "Business", "Industrial"]

  const filteredNiches = NICHES.filter((niche) => {
    if (selectedCategory === "All") return true
    return getNicheCategory(niche.slug) === selectedCategory
  })

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy py-20 border-b border-navy-light/35 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/90 opacity-80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">Niche Coverage</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight max-w-3xl mx-auto">
            Guest Posting Across 25+ Industries.
          </h1>
          <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium font-sans">
            We maintain established, active publisher relationships in every vertical below, securing spam-safe placements that drive authority.
          </p>
        </div>
      </section>

      {/* Filter Bar & Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap border-b border-border pb-6 gap-2.5 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all border ${
                selectedCategory === category
                  ? "bg-primary border-primary text-white shadow-sm"
                  : "bg-white border-border text-slate-500 hover:text-navy hover:border-slate-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Niche Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredNiches.map((niche) => (
            <Card key={niche.id} className="flex flex-col h-full bg-white">
              <div className="relative h-[180px] w-full bg-slate-100">
                <Image
                  src={niche.image}
                  alt={`Blogger outreach publisher sites for ${niche.name}`}
                  fill
                  sizes="(max-w-7xl) 25vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-bold text-navy mb-1.5">{niche.name}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                    Secured high-authority backlinks on manually-vetted {niche.name.toLowerCase()} blogs.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-border/80">
                  <Button href="/contact" variant="primary" className="w-full text-center py-2 text-[13px]">
                    Get Links in This Niche →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredNiches.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg font-medium">No niches found matching this filter.</p>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <BottomCTA />
    </main>
  )
}

export default function NichesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-slate-400 font-semibold">Loading niches...</div>
      </div>
    }>
      <NichesContent />
    </Suspense>
  )
}
