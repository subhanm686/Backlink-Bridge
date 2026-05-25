import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  theme?: 'light' | 'dark'
  className?: string
}

export default function Logo({ theme = 'light', className }: LogoProps) {
  const isDark = theme === 'dark'
  
  // Dynamic fill/stroke colors based on the theme
  const primaryColor = isDark ? '#ffffff' : '#0f172a' // White vs Navy/Slate-900
  const blueColor = '#3b82f6' // Light blue brand color
  const dividerColor = isDark ? '#334155' : '#cbd5e1' // Dark Slate vs Slate-300
  const subtextColor = isDark ? '#94a3b8' : '#64748b' // Light slate-400 vs slate-500

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 340 100" 
      className={cn("w-auto h-10 select-none", className)}
    >
      {/* Icon Graphic */}
      <line 
        x1="10" y1="75" x2="105" y2="75" 
        stroke={primaryColor} strokeWidth="5.5" strokeLinecap="round" 
      />
      <line 
        x1="26" y1="55" x2="26" y2="75" 
        stroke={primaryColor} strokeWidth="4.5" 
      />
      <line 
        x1="89" y1="55" x2="89" y2="75" 
        stroke={primaryColor} strokeWidth="4.5" 
      />
      <circle 
        cx="26" cy="53" r="11" 
        fill={primaryColor} 
      />
      <circle 
        cx="89" cy="53" r="11" 
        fill={primaryColor} 
      />
      <path 
        d="M 26 53 A 31.5 31.5 0 0 1 89 53" 
        stroke={primaryColor} strokeWidth="5.5" fill="none" 
      />
      <circle 
        cx="57.5" cy="24" r="5.5" 
        fill={blueColor} stroke={primaryColor} strokeWidth="2.5" 
      />

      {/* Vertical separator line */}
      <line 
        x1="115" y1="12" x2="115" y2="88" 
        stroke={dividerColor} strokeWidth="1.5" 
      />

      {/* Text Branding */}
      <text 
        x="125" y="43" 
        fontFamily="Inter, system-ui, -apple-system, sans-serif" 
        fontSize="36" fontWeight="800" fill={primaryColor} letterSpacing="-1px"
      >
        backlink
      </text>
      <text 
        x="125" y="75" 
        fontFamily="Inter, system-ui, -apple-system, sans-serif" 
        fontSize="36" fontWeight="800" fill={primaryColor} letterSpacing="-1px"
      >
        bridge
      </text>
      <line 
        x1="125" y1="82" x2="232" y2="82" 
        stroke={blueColor} strokeWidth="3.5" strokeLinecap="round" 
      />
      <text 
        x="125" y="94" 
        fontFamily="Inter, system-ui, -apple-system, sans-serif" 
        fontSize="8.5" fontWeight="600" fill={subtextColor} letterSpacing="2.8px"
      >
        AUTHORITY LINK BUILDING
      </text>
    </svg>
  )
}
