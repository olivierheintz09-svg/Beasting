'use client'

import { useReveal } from '@/lib/use-reveal'
import { useLocale } from '@/lib/locale-context'

export function AboutSection() {
  const { ref, style } = useReveal(0.2)
  const { t } = useLocale()

  return (
    <section className="px-6 md:px-20 py-20 md:py-[120px]" style={{ background: '#FAF8F5' }}>
      <div ref={ref} style={style} className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[25%_1fr] gap-10 md:gap-16">

          {/* Left: label */}
          <div className="pt-1">
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(0,0,0,0.42)',
            }}>
              {t('about.label')}
            </span>
          </div>

          {/* Right: content */}
          <div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              lineHeight: 1.75,
              letterSpacing: '0.01em',
              color: '#1a1a1a',
              margin: '0 0 36px',
            }}>
              {t('about.body')}
            </p>
            <a href="#apartments" className="about-know-more">
              {t('about.link')}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
