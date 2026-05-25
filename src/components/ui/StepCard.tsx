import React from 'react'
import Image from 'next/image'
import Card from './Card'
import { getUnsplashUrl } from '@/lib/utils'

interface StepCardProps {
  number: string
  title: string
  body: string
  unsplashQuery: string
}

export default function StepCard({ number, title, body, unsplashQuery }: StepCardProps) {
  const imageUrl = getUnsplashUrl(unsplashQuery, 400, 200)

  return (
    <Card className="flex flex-col h-full bg-white border border-border" hoverEffect={true}>
      <div className="p-6 pb-2 flex items-center justify-between">
        <span className="text-4xl font-extrabold text-primary opacity-90">{number}</span>
      </div>
      <div className="relative h-[160px] w-full bg-slate-100">
        <Image
          src={imageUrl}
          alt={`Step ${number}: ${title}`}
          fill
          sizes="(max-w-7xl) 25vw, 50vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-[19px] font-bold text-navy mb-2">{title}</h3>
        <p className="text-[14px] text-slate-500 leading-relaxed flex-1">{body}</p>
      </div>
    </Card>
  )
}
