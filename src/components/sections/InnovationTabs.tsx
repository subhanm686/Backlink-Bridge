"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'


export default function InnovationTabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      label: "Manual Outreach Only",
      image: "/manual-outreach-meeting.jpg",
      h3: "No bots. No tools. Real human relationships.",
      body: "Every publisher relationship in our network was built through real email outreach by our team. We do not use automated link building tools, mass submission platforms, or any software that leaves footprints."
    },
    {
      label: "Publisher Vetting Process",
     image: "/step-2-vetting.jpg",
      h3: "Every site checked before a single link is placed.",
      body: "Our vetting team reviews every potential publisher for real organic traffic (verified via third-party tools), Domain Rating, Moz Spam Score, page indexation, editorial standards, and niche relevance. If it does not pass, we do not use it."
    },
    {
      label: "Content Quality Standard",
      image: "/content-writing-desk.jpg",
      h3: "Every article written to rank and to read.",
      body: "All guest post content is 800–1,200 words, 100% human-written, structured for E-E-A-T compliance, and reviewed by an editor before submission. You approve every piece before it goes live."
    },
    {
      label: "Full Reporting Transparency",
      image: "/step-4-results.jpg",
      h3: "Live reporting on every link we place.",
      body: "You receive a live report (Google Sheet or client portal) showing every placed link, the publisher domain, DR, DA, traffic estimate, anchor text used, and live URL. Updated within 24 hours of every placement."
    },
    {
      label: "Penalty-Safe Guarantee",
      image: "/trust-penalty-safe.jpg",
      h3: "White-hat only. Always Google-compliant.",
      body: "We maintain natural anchor text ratios, varied link velocity, diverse publisher footprints, and zero tolerance for PBNs. Our link building is designed to pass any Google manual review — now and in future algorithm updates."
    }
  ]

  return (
    <section className="bg-surface py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy leading-tight">
            How Backlink Bridge Stays Ahead.
          </h2>
          <p className="mt-4 text-[17px] md:text-[18px] text-slate-500 font-medium">
            Our process is built on principles that protect your site and produce results that last.
          </p>
        </div>

        {/* Horizontal Navigation List */}
        <div className="flex border-b border-border overflow-x-auto no-scrollbar scroll-smooth gap-4 mb-12 justify-start lg:justify-center">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`pb-4 px-2 text-[14px] font-semibold border-b-2 whitespace-nowrap transition-all ${
                activeTab === idx
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-500 hover:text-navy hover:border-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel */}
        <div className="bg-white border border-border rounded-xl p-8 lg:p-12 shadow-sm min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Left Column (Image) */}
              <div className="relative h-[250px] lg:h-[320px] w-full rounded-lg overflow-hidden bg-slate-100">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].h3}
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right Column (Text Content) */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy font-display leading-tight">
                  {tabs[activeTab].h3}
                </h3>
                <p className="text-[16px] text-slate-500 font-medium leading-relaxed">
                  {tabs[activeTab].body}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
