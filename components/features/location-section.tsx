'use client'

import Image from 'next/image'
import { ScrollReveal } from './scroll-reveal'
import { useLocale } from '@/lib/locale-context'

export function LocationSection() {
  const { t } = useLocale()

  const stats = [0, 1, 2].map((i) => ({
    key: t(`location.stats.${i}.key`),
    value: t(`location.stats.${i}.value`),
  }))

  return (
    <section id="location" className="bg-canvas px-[22px] py-[88px]">
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <h2 className="type-section text-center mb-[14px]">
            {t('location.heading')}
          </h2>
          <p
            className="type-sub text-center max-w-[640px] mx-auto mb-14"
            style={{ color: 'rgba(0,0,0,0.80)' }}
          >
            {t('location.sub')}
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-4">
          <div className="relative overflow-hidden rounded-[8px]" style={{ aspectRatio: '16/9' }}>
            <Image
              src="/schnann-winter.webp"
              alt="Schnann and Pettneu in winter"
              fill
              className="object-cover"
              sizes="(max-width: 980px) 100vw, 980px"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="mb-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-[8px]" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/schnann-sommer.webp"
                alt="Schnann village in summer"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 490px"
              />
            </div>
            <div className="relative overflow-hidden rounded-[8px]" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/schnann-gorge.jpg"
                alt="Mountain gorge near Schnann"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 50vw, 490px"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.key} delay={i * 0.07}>
              <div className="bg-white rounded-[8px] p-6">
                <div className="type-section m-0">{stat.key}</div>
                <p className="type-body mt-[10px] mb-0" style={{ color: 'rgba(0,0,0,0.80)' }}>
                  {stat.value}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
