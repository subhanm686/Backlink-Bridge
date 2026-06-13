"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from '../ui/Card'
import Badge from '../ui/Badge'


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

export default function ProblemSection() {
  const problems = [
    {
      photo: "/dr-stuck-analytics.jpg",
      title: "Your DR Is Stuck.",
      body: "Generic link farms and PBN networks are poisoning your domain authority instead of building it. Google can spot them — and so can we."
    },
    {
     photo: "/spam-score-laptop.jpg",
      title: "Spam Score Climbing.",
      body: "Low-quality backlinks trigger algorithmic penalties and destroy years of hard-won rankings overnight. You need a cleanup, not more of the same."
    },
    {
      photo: "/traffic-stalled-dashboard.jpg",
      title: "Organic Traffic Stalled.",
      body: "Without niche-relevant, high-authority backlinks, your content never reaches page one — regardless of how well it is written or optimized."
    }
  ]

  return (
    <section className="bg-white py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="teal">The Problem</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mt-4 leading-tight">
            Why most link building fails — and how we&apos;re different.
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
          {problems.map((prob, idx) => (
            <motion.div key={idx} variants={fadeUpVariant}>
              <Card className="flex flex-col h-full bg-white" hoverEffect={true}>
                <div className="relative h-[240px] w-full bg-slate-100">
                  <Image
                    src={prob.photo}
                    alt={prob.title}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[22px] font-bold text-navy mb-3 leading-snug">
                      {prob.title}
                    </h3>
                    <p className="text-[15px] text-slate-500 leading-relaxed">
                      {prob.body}
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
