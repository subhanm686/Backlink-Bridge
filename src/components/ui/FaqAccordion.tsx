"use client"

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FAQItem } from '@/types'

interface FaqAccordionProps {
  items: FAQItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="border border-border rounded-xl bg-white overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full px-6 py-5 text-left font-semibold text-navy hover:bg-surface transition-colors"
            >
              <span className="text-[17px] pr-4">{item.question}</span>
              <ChevronDown className={cn("w-5 h-5 text-slate-500 transition-transform shrink-0", isOpen && "rotate-180")} />
            </button>
            
            <div
              className={cn(
                "transition-all duration-300 ease-in-out",
                isOpen ? "max-h-[500px] border-t border-border" : "max-h-0 pointer-events-none"
              )}
            >
              <div className="px-6 py-5 text-slate-600 leading-relaxed text-[15px]">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
