"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import CaseStudyCard from '../ui/CaseStudyCard'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
}

export default function CaseStudies() {
  const featured = {
    tag: "Technology & SaaS",
    title: "SaaS startup grew from DR 12 to DR 54 in 6 months.",
    description: "We placed 48 guest posts across top SaaS and technology publications. Organic traffic grew 340 percent and the client ranked on page one for 12 target keywords within the campaign period.",
    metrics: ["DR 12 → 54 | Authority", "48 | Links Placed", "340% | Traffic Growth"],
    photo: "saas software team success office",
    slug: "saas-startup-growth"
  }

  const sideCards = [
    {
      tag: "E-Commerce & Retail",
      title: "E-commerce brand reduced spam score from 17% to 2%.",
      description: "90-day spam cleanup campaign. Full disavow file submitted. 24 clean replacement links placed in retail and finance niches.",
      metrics: ["17% → 2% | Spam Reduction", "24 | Placements"],
      photo: "ecommerce retail shopping online store",
      slug: "ecommerce-spam-cleanup"
    },
    {
      tag: "Legal & Law",
      title: "Law firm moved from DA 19 to DA 45 in 4 months.",
      description: "24 niche-relevant placements on legal and business authority sites. Organic leads increased 180 percent from targeted keyword improvements.",
      metrics: ["DA 19 → 45 | Authority", "180% | Lead Increase"],
      photo: "law legal courtroom professional lawyer",
      slug: "law-firm-domain-authority"
    }
  ]

  return (
    <section className="bg-white py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="teal">Results</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mt-4">
            Real results for real websites.
          </h2>
        </div>

        {/* Featured Case Study Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-8"
        >
          <CaseStudyCard
            tag={featured.tag}
            title={featured.title}
            description={featured.description}
            metrics={featured.metrics}
            unsplashQuery={featured.photo}
            slug={featured.slug}
            isFeatured={true}
          />
        </motion.div>

        {/* Side Case Study Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sideCards.map((card, idx) => (
            <CaseStudyCard
              key={idx}
              tag={card.tag}
              title={card.title}
              description={card.description}
              metrics={card.metrics}
              unsplashQuery={card.photo}
              slug={card.slug}
              isFeatured={false}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Button href="/case-studies" variant="secondary">
            View All Case Studies →
          </Button>
        </div>

      </div>
    </section>
  )
}
