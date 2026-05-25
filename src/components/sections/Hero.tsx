"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { getUnsplashUrl } from '@/lib/utils'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Hero() {
  const bgImage = getUnsplashUrl("modern office building skyline dusk", 1920, 1080)

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-32 overflow-hidden bg-navy">
      {/* Background Image with Navy overlay for readability and contrast */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 z-10 bg-navy/70" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeUpVariant}
            className="text-[44px] md:text-6xl font-extrabold text-white font-display leading-[1.1] tracking-tight"
          >
            Your Rankings Deserve Better Backlinks.
          </motion.h1>

          <motion.p 
            variants={fadeUpVariant}
            className="mt-6 text-[18px] md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Backlink Bridge connects your website to high-authority, niche-relevant publishers — improving your DR, DA, organic traffic, and search rankings through proven guest posting and link building strategies.
          </motion.p>

          <motion.div 
            variants={fadeUpVariant}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button href="/free-site-audit" variant="primary" size="lg" className="w-full sm:w-auto">
              Get Free Site Audit
            </Button>
            <Button href="/how-it-works" variant="outline-white" size="lg" className="w-full sm:w-auto">
              See How It Works →
            </Button>
          </motion.div>

          <motion.p 
            variants={fadeUpVariant}
            className="mt-8 text-sm font-semibold tracking-wide text-slate-300 uppercase"
          >
            Trusted by 1,200+ websites across 25+ niches worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
