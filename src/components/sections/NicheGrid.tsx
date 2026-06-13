"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import NicheCard from '../ui/NicheCard'
import { NICHES } from '@/lib/constants'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
}

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

export default function NicheGrid() {
  // Show a curated selection of 10 niches on the homepage for visual rhythm & speed
  const featuredNiches = NICHES.slice(0, 10)

  return (
    <section className="bg-white py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="teal">Our Coverage</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mt-4">
            We build links in 25+ industries worldwide.
          </h2>
          <p className="mt-4 text-[17px] text-slate-500 font-medium">
            No matter your niche, we have established publisher relationships ready to place your links.
          </p>
        </div>

        {/* Niche Cards Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {featuredNiches.map((niche) => (
            <motion.div key={niche.id} variants={fadeUpVariant}>
              <NicheCard
                name={niche.name}
                slug={niche.slug}
               image={niche.image}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Button href="/niches" variant="primary" className="flex items-center gap-2 mx-auto">
            View All Niches
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>

      </div>
    </section>
  )
}
