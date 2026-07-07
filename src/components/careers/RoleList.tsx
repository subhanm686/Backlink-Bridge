"use client"

import React, { useState } from 'react'
import { ChevronDown, MapPin, Briefcase, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import type { Role } from '@/data/careers'

interface RoleListProps {
  roles: Role[]
  careersEmail: string
}

export default function RoleList({ roles, careersEmail }: RoleListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (roles.length === 0) {
    return (
      <div className="text-center py-16 px-6 rounded-2xl border border-border bg-surface max-w-2xl mx-auto">
        <p className="text-xl font-bold text-navy mb-3">No open roles right now</p>
        <p className="text-slate-500 font-medium mb-6 leading-relaxed">
          We are not actively hiring for specific positions, but we are always interested in meeting talented people who share our values.
        </p>
        <Button
          href={`mailto:${careersEmail}?subject=General%20Application%20-%20Backlink%20Bridge`}
          variant="primary"
        >
          Send us your resume anyway
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {roles.map((role, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={`${role.title}-${index}`}
            className="border border-border rounded-2xl bg-white overflow-hidden transition-all duration-200 shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex justify-between items-start w-full px-6 py-5 text-left hover:bg-surface transition-colors gap-4"
            >
              <div className="space-y-3 min-w-0">
                <h3 className="text-lg font-bold text-navy">{role.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 font-medium">
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-primary shrink-0" />
                    {role.department}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-primary shrink-0" />
                    {role.type}
                  </span>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-slate-500 transition-transform shrink-0 mt-1',
                  isOpen && 'rotate-180'
                )}
              />
            </button>

            <div
              className={cn(
                'transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-96 border-t border-border' : 'max-h-0 pointer-events-none overflow-hidden'
              )}
            >
              <div className="px-6 py-5 space-y-5">
                <p className="text-slate-600 leading-relaxed text-[15px] font-medium">
                  {role.description}
                </p>
                <Button href={role.applyLink} variant="primary" size="sm">
                  Apply for this role
                </Button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
