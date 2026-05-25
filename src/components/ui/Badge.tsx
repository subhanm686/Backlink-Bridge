import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'teal' | 'success' | 'warning' | 'gray'
  className?: string
}

export default function Badge({
  children,
  variant = 'primary',
  className
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase'
  
  const variants = {
    primary: 'bg-primary/10 text-primary',
    teal: 'bg-teal/10 text-teal',
    success: 'bg-emerald-500/10 text-emerald-600',
    warning: 'bg-amber-500/10 text-amber-600',
    gray: 'bg-slate-100 text-slate-600 border border-slate-200'
  }

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  )
}
