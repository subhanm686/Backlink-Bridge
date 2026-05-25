import React from 'react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  value: string
  label: string
  lightMode?: boolean
  className?: string
}

export default function StatCard({ value, label, lightMode = false, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col text-center", className)}>
      <span
        className={cn(
          "text-4xl md:text-5xl font-extrabold tracking-tight",
          lightMode ? "text-primary" : "text-white"
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "text-[13px] md:text-[14px] uppercase tracking-wider font-semibold mt-2",
          lightMode ? "text-slate-400" : "text-slate-300"
        )}
      >
        {label}
      </span>
    </div>
  )
}
