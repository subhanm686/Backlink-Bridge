import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'white' | 'surface'
  hoverEffect?: boolean
}

export default function Card({
  children,
  className,
  variant = 'white',
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border shadow-sm overflow-hidden",
        variant === 'white' ? 'bg-white' : 'bg-surface',
        hoverEffect && "transition-all duration-300 hover:shadow-md hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
