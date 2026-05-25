"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { getUnsplashUrl } from '@/lib/utils'

export default function ServicesTab() {
  const [activeTab, setActiveTab] = useState(0)

  const tabsData = [
    {
      label: "Guest Posting",
      photo: "writer desk laptop coffee notebook professional",
      h3: "Place your articles on real DR 30–80+ websites.",
      body: "We write editorial-quality articles and place them on genuine, traffic-verified websites in your exact niche. Every link is permanent, dofollow, and placed on a real editorial site — never a PBN or link farm.",
      bullets: [
        "800–1200 word articles, human-written, E-E-A-T compliant",
        "Publishers manually vetted for DR, DA, real traffic, and spam score",
        "You approve all content before submission",
        "Permanent placements with live link reporting"
      ],
      ctaText: "Learn About Guest Posting →",
      ctaHref: "/guest-posting"
    },
    {
      label: "GBOB Management",
      photo: "outreach email marketing team office",
      h3: "Your entire guest posting operation, fully managed.",
      body: "GBOB (Guest Blogging Outreach Business) is our flagship managed service. We handle every step — publisher sourcing, editor relationship building, pitch emails, content creation, and placement — so you can focus on your business.",
      bullets: [
        "End-to-end outreach management",
        "Dedicated account manager",
        "Monthly placement reports with full metrics",
        "Scalable from 5 to 500+ links per month"
      ],
      ctaText: "Learn About GBOB →",
      ctaHref: "/gbob-management"
    },
    {
      label: "Niche Edits",
      photo: "editing article website content laptop",
      h3: "Links inside already-indexed, ranking articles.",
      body: "Niche edits place your link into existing high-authority content that is already indexed and ranking on Google. Faster authority transfer, immediate indexing, and natural placement in editorial context.",
      bullets: [
        "Links inserted into articles with real organic traffic",
        "No new content required",
        "Contextually relevant anchor text",
        "Faster results than traditional guest posting"
      ],
      ctaText: "Learn About Niche Edits →",
      ctaHref: "/niche-edits"
    },
    {
      label: "DR / DA Improvement",
      photo: "domain authority analytics growth chart",
      h3: "Structured 90-day campaigns to move your DR.",
      body: "We design tiered link building campaigns with a single goal: moving your Domain Rating from where it is to where you need it. Transparent milestones, real publisher diversity, and proven velocity.",
      bullets: [
        "Starting DR audit and gap analysis",
        "Tiered link building for natural growth patterns",
        "Diverse publisher mix across domains, TLDs, and regions",
        "Monthly DR/DA progress reporting"
      ],
      ctaText: "Get a DR Improvement Campaign →",
      ctaHref: "/dr-da-improvement"
    },
    {
      label: "Spam Score Cleanup",
      photo: "toxic links penalty google disavow",
      h3: "Remove toxic backlinks before they remove your rankings.",
      body: "We audit your entire backlink profile, identify toxic and spammy links dragging your Moz Spam Score up, build your disavow file, submit it to Google, and replace bad links with clean, high-authority placements.",
      bullets: [
        "Full backlink profile audit with toxic link identification",
        "Google disavow file built and submitted",
        "Replacement links in your niche",
        "Spam score monitored monthly post-cleanup"
      ],
      ctaText: "Start Spam Cleanup →",
      ctaHref: "/spam-cleanup"
    },
    {
      label: "Organic Traffic Growth",
      photo: "organic search traffic growth analytics",
      h3: "Links that bring rankings and real visitors.",
      body: "We target keyword-rich anchor text and place articles on sites with real organic readership. The result is not just better DR — it is actual referral traffic from readers who care about your niche.",
      bullets: [
        "Keyword-targeted anchor text strategy",
        "Publisher selection based on niche traffic overlap",
        "Referral traffic tracking included",
        "Compound growth effect over 60–90 days"
      ],
      ctaText: "Grow Organic Traffic →",
      ctaHref: "/link-building-campaigns"
    }
  ]

  return (
    <section className="bg-white py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mt-4">
            Everything you need to dominate search rankings.
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Vertical Tab List (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-[100px] flex flex-col gap-2 bg-slate-50 border border-border p-3.5 rounded-xl">
            {tabsData.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left text-[15px] font-semibold px-4 py-3.5 rounded-lg transition-all ${
                  activeTab === idx
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-200/50 hover:text-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Content Panel */}
          <div className="lg:col-span-8 border border-border rounded-xl p-8 bg-white shadow-sm min-h-[500px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Tab Image */}
                  <div className="relative h-[280px] w-full rounded-lg overflow-hidden bg-slate-100 mb-6">
                    <Image
                      src={getUnsplashUrl(tabsData[activeTab].photo, 800, 280)}
                      alt={tabsData[activeTab].h3}
                      fill
                      sizes="(max-w-7xl) 50vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {tabsData[activeTab].h3}
                  </h3>
                  
                  <p className="text-[16px] text-slate-500 leading-relaxed font-medium mb-6">
                    {tabsData[activeTab].body}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-border/80">
                    {tabsData[activeTab].bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-[14px] text-slate-700 font-semibold leading-snug">
                        <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 flex justify-start">
                  <Button href={tabsData[activeTab].ctaHref} variant="primary" className="flex items-center gap-2">
                    {tabsData[activeTab].ctaText}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
