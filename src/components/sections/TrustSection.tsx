"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from '../ui/Card'


const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
}

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function TrustSection() {
  const trustSignals = [
    {
      title: "Manual Vetting, Always.",
      body: "Every publisher in our network was manually reviewed by our team. We do not use automated submission tools, no PBNs, no footprints — only real editors on real websites.",
     photo: "/trust-manual-vetting.jpg",
    },
    {
      title: "Full Transparency and Reporting.",
      body: "You receive a live reporting document showing every link placed, every publisher domain, DR, DA, anchor text, and live URL — updated within 24 hours of every placement.",
      photo: "/step-4-results.jpg",
    },
    {
      title: "No Risk. Penalty-Safe.",
      body: "Natural anchor ratios, varied link velocity, and white-hat methods that comply with Google quality guidelines — built to survive algorithm updates and manual reviews.",
      photo: "/trust-penalty-safe.jpg",
    }
  ]

  return (
    <section className="bg-surface py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy leading-tight">
            A link building service you can actually trust.
          </h2>
        </div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {trustSignals.map((signal, idx) => (
            <motion.div key={idx} variants={fadeUpVariant}>
              <Card className="flex flex-col h-full bg-white" hoverEffect={true}>
                <div className="relative h-[200px] w-full bg-slate-100">
                  <Image
                    src={signal.photo}
                    alt={signal.title}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3 leading-snug">
                      {signal.title}
                    </h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed">
                      {signal.body}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
