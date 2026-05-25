"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../ui/Badge'
import StepCard from '../ui/StepCard'

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

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Share Your Goals",
      body: "Tell us your niche, target DR, preferred anchor texts, and monthly link budget. Our onboarding form takes under five minutes to complete.",
      photo: "person laptop form website professional"
    },
    {
      number: "02",
      title: "We Source and Vet Publishers",
      body: "Our team manually identifies real, traffic-verified websites that match your niche and authority targets. Every site passes our 12-point quality checklist.",
      photo: "research team reviewing data spreadsheet"
    },
    {
      number: "03",
      title: "Content Creation and Outreach",
      body: "We write editorial-grade content and pitch it to publishers. You receive a draft for approval before any article is submitted to a publisher.",
      photo: "writer working desk coffee writing professional"
    },
    {
      number: "04",
      title: "Links Go Live. Rankings Improve.",
      body: "Your links are placed, indexed, and logged in your live report. Watch your DR, DA, and keyword rankings improve over the following 60 to 90 days.",
      photo: "analytics dashboard monitor growth results"
    }
  ]

  return (
    <section className="bg-surface py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary">The Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mt-4">
            From order to live link in days, not months.
          </h2>
        </div>

        {/* 4-Step Cards Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={fadeUpVariant}>
              <StepCard
                number={step.number}
                title={step.title}
                body={step.body}
                unsplashQuery={step.photo}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
