'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useReveal } from '@/lib/use-reveal'
import { apartments } from '@/lib/mock-data'
import { useLocale } from '@/lib/locale-context'
import type { Apartment } from '@/types'

const HOUSE_IMAGES: Record<string, string> = {
  lodge: '/lodge-interior.jpg',
  hearth: '/schnann-sommer.webp',
  eyrie: '/verwallsee.jpg',
}

type CardProps = {
  apartment: Apartment
  hovered: string | null
  setHovered: (id: string | null) => void
  tall?: boolean
}

function HouseCard({ apartment, hovered, setHovered, tall = false }: CardProps) {
  const { id, name, sleeps, rooms, area, pricePerNight } = apartment
  const imageSrc = HOUSE_IMAGES[id]
  const isHovered = hovered === id
  const { lang, t } = useLocale()

  const sleepsLabel = t('houses.sleeps', { n: sleeps })
  const bedroomsLabel = rooms === 1
    ? t('houses.bedroom', { n: rooms })
    : t('houses.bedrooms', { n: rooms })

  return (
    <Link
      href={`/${lang}/apartments/the-${id}`}
      aria-label={t('houses.viewAlt', { name })}
      className="apt-card-link block"
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Image */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 16,
        aspectRatio: tall ? '4/5' : '16/9',
        boxShadow: isHovered
          ? '0 20px 60px rgba(0,0,0,0.14)'
          : '0 4px 20px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.6s ease-out',
      }}>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`${name} — Alpzeit Apartments, Schnann`}
            fill
            className="object-cover"
            sizes={tall ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
            style={{
              transform: isHovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 0.6s ease-out',
            }}
          />
        )}

        {/* Price pill */}
        <div style={{
          position: 'absolute',
          bottom: 12,
          right: 12,
          background: 'rgba(0,0,0,0.72)',
          borderRadius: 20,
          padding: '6px 14px',
        }}>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 500,
            color: '#fff',
            letterSpacing: '0.02em',
          }}>
            {t('houses.fromPrice', { price: pricePerNight })}
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div style={{ padding: '14px 2px 0' }}>
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.0625rem',
            fontWeight: 500,
            color: '#1a1a1a',
          }}>
            {name}
          </span>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: 'rgba(0,0,0,0.52)',
            flexWrap: 'wrap',
          }}>
            <span>{area} m²</span>
            <span style={{ color: 'rgba(0,0,0,0.18)' }}>·</span>
            <span>{bedroomsLabel}</span>
            <span style={{ color: 'rgba(0,0,0,0.18)' }}>·</span>
            <span>{sleepsLabel}</span>
          </div>
        </div>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 400,
          color: 'rgba(0,0,0,0.50)',
          margin: '5px 0 0',
        }}>
          {t('houses.fromPrice', { price: pricePerNight })}
          {' · '}
          {t('houses.inclNote')}
        </p>
      </div>
    </Link>
  )
}

export function HousesSection() {
  const [hovered, setHovered] = useState<string | null>(null)
  const { ref, style } = useReveal(0.15)
  const { t } = useLocale()

  const lodge = apartments.find((a) => a.id === 'lodge')!
  const others = apartments.filter((a) => a.id !== 'lodge')

  return (
    <section id="apartments" className="px-6 md:px-20 py-20 md:py-[120px]" style={{ background: '#FAF8F5' }}>
      <div ref={ref} style={style} className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.30em',
            color: 'rgba(0,0,0,0.38)',
            margin: '0 0 16px',
          }}>
            {t('houses.label')}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: '#1a1a1a',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            {t('houses.heading')}
          </h2>
        </div>

        {/* Grid: Lodge left (tall) + Hearth/Eyrie stacked right */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <HouseCard apartment={lodge} hovered={hovered} setHovered={setHovered} tall />
          </div>
          <div className="md:w-1/2 flex flex-col gap-6">
            {others.map((apt) => (
              <HouseCard key={apt.id} apartment={apt} hovered={hovered} setHovered={setHovered} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
