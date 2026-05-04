'use client'

import { useRef, useState, useEffect } from 'react'
import { useReveal } from '@/lib/use-reveal'
import { useLocale } from '@/lib/locale-context'

const STAT_CONFIG = [
  { id: 'galzigbahn', target: 10, duration: 1400 },
  { id: 'innsbruck', target: 1, duration: 800 },
  { id: 'snow', target: 200, duration: 2000 },
]

type StatCardProps = {
  target: number
  duration: number
  suffix: string
  label: string
  description: string
  started: boolean
}

function StatCard({ target, duration, suffix, label, description, started }: StatCardProps) {
  const [count, setCount] = useState(0)
  const isMuted = suffix === 'min' || suffix === 'hr' || suffix === 'Std.'

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    let raf: number

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [started, target, duration])

  return (
    <div style={{
      background: 'rgba(0,0,0,0.03)',
      borderRadius: 16,
      padding: '40px 32px',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 16 }}>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(3rem, 5vw, 4rem)',
          fontWeight: 600,
          lineHeight: 1,
          color: '#1a1a1a',
          letterSpacing: '-0.02em',
        }}>
          {count}
        </span>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: isMuted ? '1.1rem' : '1.75rem',
          fontWeight: isMuted ? 400 : 600,
          color: isMuted ? 'rgba(0,0,0,0.42)' : '#836953',
          lineHeight: 1,
          marginLeft: isMuted ? 8 : 3,
        }}>
          {suffix}
        </span>
      </div>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '1rem',
        fontWeight: 500,
        color: '#1a1a1a',
        margin: '0 0 10px',
      }}>
        {label}
      </p>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        lineHeight: 1.65,
        color: 'rgba(0,0,0,0.58)',
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  )
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)
  const { ref: revealRef, style: revealStyle } = useReveal(0.2)
  const { t } = useLocale()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="px-6 md:px-20 py-20 md:py-[100px]" style={{ background: '#fff' }}>
      <div ref={revealRef} style={revealStyle} className="max-w-[1280px] mx-auto">
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          color: 'rgba(0,0,0,0.42)',
          marginBottom: 40,
          marginTop: 0,
        }}>
          {t('stats.label')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAT_CONFIG.map((stat, i) => (
            <StatCard
              key={stat.id}
              target={stat.target}
              duration={stat.duration}
              suffix={t(`stats.items.${i}.suffix`)}
              label={t(`stats.items.${i}.label`)}
              description={t(`stats.items.${i}.description`)}
              started={started}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
