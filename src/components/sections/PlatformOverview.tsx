"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

import { STATS } from '@/lib/constants'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

export default function PlatformOverview() {
  "/team-workspace.jpg"

  return (
    <section className="bg-surface py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column (Text & Stats) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="space-y-6"
          >
            <Badge variant="primary">The Backlink Bridge Method</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-navy leading-tight">
              The bridge between great content and page one rankings.
            </h2>
            <div className="text-[16px] md:text-[17px] text-slate-600 space-y-4 leading-relaxed font-medium">
              <p>
                Backlink Bridge is a done-for-you link building service that manually sources, vets, and places your content on real, high-authority websites across 25+ industries.
              </p>
              <p>
                We improve your Domain Rating (DR), Domain Authority (DA), reduce spam score, and drive measurable organic traffic — without shortcuts, private blog networks, or risk to your site.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="text-[13px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button href="/services" variant="primary" className="flex items-center gap-2">
                See Our Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </motion.div>

          {/* Right Column (Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100"
          >
            <Image
              src={imageUrl}
              alt="Editorial team collaborating on quality publisher guest posting campaign"
              fill
              sizes="(max-w-7xl) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
