"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import BlogCard from '../ui/BlogCard'
import { BLOG_POSTS } from '@/lib/constants'

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

export default function BlogPreview() {
  return (
    <section className="bg-white py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="teal">From The Blog</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mt-4">
            Learn the strategy behind better rankings.
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {BLOG_POSTS.map((post) => (
            <motion.div key={post.id} variants={fadeUpVariant}>
              <BlogCard
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                tag={post.tag}
                readTime={post.readTime}
                unsplashQuery={post.unsplash}
                date={post.date}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button href="/blog" variant="secondary">
            View All Articles →
          </Button>
        </div>

      </div>
    </section>
  )
}
