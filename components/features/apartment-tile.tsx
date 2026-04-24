'use client'

import Image from 'next/image'
import { useBooking } from './booking-provider'
import { LinkPill } from '@/components/ui/link-pill'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { ScrollReveal } from './scroll-reveal'
import type { Apartment } from '@/types'

const APARTMENT_IMAGES: Record<string, string> = {
  lodge: '/lodge-interior.jpg',
}

type Props = {
  apartment: Apartment
}

export function ApartmentTile({ apartment }: Props) {
  const { open: openBooking } = useBooking()
  const { id, name, sleeps, rooms, area, pricePerNight, size, dark, description } = apartment

  const imageSrc = APARTMENT_IMAGES[id]
  const bg = dark ? '#6a4a3a' : '#f5f5f7'
  const text = dark ? '#fff' : '#1d1d1f'
  const muted = dark ? 'rgba(255,255,255,0.72)' : 'rgba(0,0,0,0.80)'
  const pillVariant = dark ? 'outline-dark' : 'outline-light'
  const isLarge = size === 'large'

  return (
    <section
      id={`apartment-${id}`}
      className="px-[22px] py-[88px]"
      style={{ background: bg, color: text }}
    >
      <div
        className={[
          'max-w-[980px] mx-auto',
          isLarge
            ? 'flex flex-col gap-14'
            : 'grid grid-cols-1 md:grid-cols-2 gap-10 items-center',
        ].join(' ')}
      >
        <ScrollReveal className={isLarge ? 'text-center flex flex-col items-center' : ''}>
          <p
            className="type-caption-bold m-0 uppercase"
            style={{ color: muted, letterSpacing: '0.4px' }}
          >
            Apartment
          </p>
          <h2 className="type-section mt-[6px] mb-[10px]" style={{ color: text }}>
            {name}
          </h2>
          <p
            className="type-sub mb-6 m-0"
            style={{ color: muted, maxWidth: 540 }}
          >
            {description}
          </p>
          <p
            className="mb-1 mt-0"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: dark ? 'rgba(255,255,255,0.90)' : '#836953',
              margin: '0 0 4px',
            }}
          >
            From €{pricePerNight}
            <span style={{ fontSize: '0.875rem', fontWeight: 400, opacity: 0.75 }}> / night</span>
          </p>
          <p className="type-caption mb-5 m-0" style={{ color: muted }}>
            Sleeps {sleeps} · {rooms} bedroom{rooms > 1 ? 's' : ''} · {area} m²
          </p>
          <div
            className={`flex gap-3 flex-wrap ${isLarge ? 'justify-center' : ''}`}
          >
            <LinkPill variant={pillVariant} href={`/apartments/the-${id}`}>
              Learn more
            </LinkPill>
            <LinkPill
              variant="fill-blue"
              onClick={(e) => {
                e.preventDefault()
                openBooking()
              }}
            >
              Check availability
            </LinkPill>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {imageSrc ? (
            <div
              className="relative overflow-hidden rounded-[8px]"
              style={{ aspectRatio: isLarge ? '16/9' : '4/3' }}
            >
              <Image
                src={imageSrc}
                alt={`${name} interior`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 490px"
              />
            </div>
          ) : (
            <ImagePlaceholder
              label={isLarge ? `${name} — living room panorama` : `${name} interior`}
              aspectRatio={isLarge ? '16/9' : '4/3'}
              dark={dark}
            />
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
