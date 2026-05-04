'use client'

import { useReveal } from '@/lib/use-reveal'
import { useLocale } from '@/lib/locale-context'

const REVIEWS = [
  {
    id: 'anna',
    quote:
      "We've stayed at a lot of places in the Arlberg. Alpzeit is the one we keep coming back to — quiet, well-kept, and genuinely close to everything without feeling like you're in the middle of it.",
    name: 'Anna K.',
    origin: 'Munich',
    stay: 'Lodge · February 2025',
  },
  {
    id: 'thomas',
    quote:
      "The Eyrie is smaller than it looks in photos, but it has exactly what you need. Good light in the morning, a proper kitchen, and skis-off-at-the-door convenience.",
    name: 'Thomas & Elise',
    origin: 'Zürich',
    stay: 'Eyrie · January 2025',
  },
  {
    id: 'marie',
    quote:
      "We came in summer for hiking, not skiing. Schnann is genuinely beautiful without the winter crowds. We'll be back in December.",
    name: 'Marie-Claire B.',
    origin: 'Paris',
    stay: 'Hearth · July 2024',
  },
]

export function ReviewsSection() {
  const { ref: headerRef, style: headerStyle } = useReveal(0.2)
  const { ref: gridRef, style: gridStyle } = useReveal(0.1)
  const { t } = useLocale()

  return (
    <section className="px-6 md:px-20 py-20 md:py-[100px]" style={{ background: '#FAF8F5' }}>
      <div className="max-w-[1280px] mx-auto">

        <div ref={headerRef} style={headerStyle} className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span style={{ display: 'block', width: 48, height: 1, background: '#836953', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              color: 'rgba(0,0,0,0.50)',
              letterSpacing: '0.04em',
            }}>
              {t('reviews.eyebrow')}
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: '#1a1a1a',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            {t('reviews.heading')}
          </h2>
        </div>

        <div ref={gridRef} style={gridStyle} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {REVIEWS.map((review) => (
            <div key={review.id}>
              <blockquote style={{ margin: 0, padding: 0 }}>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.0625rem, 1.5vw, 1.1875rem)',
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: '#1a1a1a',
                  margin: '0 0 24px',
                  fontStyle: 'italic',
                }}>
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#1a1a1a',
                    margin: '0 0 2px',
                    letterSpacing: '0.01em',
                  }}>
                    {review.name}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 12,
                    fontWeight: 400,
                    color: 'rgba(0,0,0,0.45)',
                    margin: 0,
                    letterSpacing: '0.01em',
                  }}>
                    {review.origin} · {review.stay}
                  </p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
