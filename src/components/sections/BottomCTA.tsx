"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

export default function BottomCTA() {
  return (
    <section className="bg-navy py-24 text-center border-t border-navy-light/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/80 opacity-70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white leading-tight">
            Ready to build links that actually move the needle?
          </h2>
          
          <p className="text-[17px] md:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium font-sans">
            Join 1,200+ websites growing their DR, DA, and organic traffic with Backlink Bridge. Get your free site audit delivered in 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button href="/free-site-audit" variant="primary" size="lg">
              Get Free Site Audit
            </Button>
            <Button href="/contact" variant="outline-white" size="lg">
              Book a Strategy Call
            </Button>
          </div>

          <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider pt-2">
            No commitment required. Free audit delivered within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
