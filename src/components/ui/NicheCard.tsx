import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from './Card'


interface NicheCardProps {
  name: string
  slug: string
  image: string
}

export default function NicheCard({ name, slug, image }: NicheCardProps) {
  const imageUrl = image

  return (
    <Card className="flex flex-col h-full">
      <div className="relative h-[180px] w-full bg-slate-100">
        <Image
          src={imageUrl}
          alt={`Professional backlink network coverage for ${name}`}
          fill
          sizes="(max-w-7xl) 20vw, 30vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-[17px] font-bold text-navy mb-1.5">{name}</h3>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            Premium blogger outreach and high-quality link placements in the {name.toLowerCase()} vertical.
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-border/60">
          <Link
            href={`/niches?filter=${slug}`}
            className="text-[13px] font-semibold text-primary hover:underline inline-flex items-center gap-1"
          >
            View Publishers
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  )
}
