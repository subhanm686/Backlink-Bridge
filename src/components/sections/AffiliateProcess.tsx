'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { getUnsplashUrl } from '@/lib/utils'
import { affiliateSteps } from '@/data/affiliates'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function AffiliateProcess() {
  return (
    <section className="bg-surface py-24 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mt-4">
            Three steps to start earning
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 font-medium leading-relaxed">
            No inventory, no fulfillment — just share your link and earn when clients sign up.
          </p>
        </div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {affiliateSteps.map((step) => (
            <motion.div key={step.number} variants={fadeUpVariant}>
              <Card className="flex flex-col h-full bg-white border border-border" hoverEffect={true}>
                <div className="p-6 pb-2">
                  <span className="text-4xl font-extrabold text-primary opacity-90">{step.number}</span>
                </div>
                <div className="relative h-[160px] w-full bg-slate-100">
                  <Image
                    src={getUnsplashUrl(step.photo, 400, 160)}
                    alt={`Step ${step.number}: ${step.title}`}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[19px] font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed flex-1">{step.body}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
