import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:brightness-95 active:scale-[0.98]',
    secondary: 'bg-white text-navy border border-navy hover:bg-navy hover:text-white hover:brightness-95 active:scale-[0.98]',
    ghost: 'bg-transparent text-primary border border-primary hover:bg-primary/5 active:scale-[0.98]',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:scale-[0.98]',
    'outline-white': 'bg-transparent text-white border border-white hover:bg-white/10 active:scale-[0.98]'
  }

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-[15px] px-6 py-3',
    lg: 'text-base px-8 py-4'
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  const isExternalLink =
    href?.startsWith('mailto:') ||
    href?.startsWith('tel:') ||
    href?.startsWith('http://') ||
    href?.startsWith('https://')

  if (href) {
    if (isExternalLink) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
