'use client'

import { useState } from 'react'
import { useReveal } from '@/lib/use-reveal'
import { useLocale } from '@/lib/locale-context'

const FAQ_COUNT = 8

export function FaqSection() {
  const [open, setOpen] = useState<number>(0)
  const { ref: headerRef, style: headerStyle } = useReveal(0.2)
  const { ref: listRef, style: listStyle } = useReveal(0.1)
  const { t } = useLocale()

  const faqItems = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    q: t(`faq.items.${i}.q`),
    a: t(`faq.items.${i}.a`),
  }))

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <section id="faq" className="px-6 md:px-20 py-20 md:py-[100px]" style={{ background: '#fff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[820px] mx-auto">

        <div ref={headerRef} style={headerStyle} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span style={{ display: 'block', width: 48, height: 1, background: '#836953', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              color: 'rgba(0,0,0,0.50)',
              letterSpacing: '0.04em',
            }}>
              {t('faq.eyebrow')}
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
            {t('faq.heading')}
          </h2>
        </div>

        <div ref={listRef} style={listStyle}>
          {faqItems.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  ...(i === faqItems.length - 1 ? { borderBottom: '1px solid rgba(0,0,0,0.08)' } : {}),
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '20px 0',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: 16,
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#1a1a1a',
                    lineHeight: 1.4,
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.25rem',
                    fontWeight: 300,
                    color: 'rgba(0,0,0,0.45)',
                    flexShrink: 0,
                    lineHeight: 1,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease-out, color 0.2s ease',
                    display: 'inline-block',
                  }}>
                    +
                  </span>
                </button>

                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 400 : 0,
                    transition: 'max-height 0.35s ease-out',
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    color: 'rgba(0,0,0,0.65)',
                    margin: '0 0 20px',
                    paddingRight: 32,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
