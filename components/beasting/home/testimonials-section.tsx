'use client'

import { useState } from 'react'
import Image from 'next/image'
import Icon from '../icon'

const TESTIMONIALS = [
  {
    quote: 'Onze sales-leads kwamen terug als één team. Zes maanden later zien we het nog steeds in de cijfers.',
    name: 'Hoofd People & Culture',
    company: 'NOCCO BENELUX',
    logo: '/Ontwerp zonder titel-67.png',
    logoExt: 'png',
  },
  {
    quote: 'Geen powerpoint, geen workshop. Gewoon doen. Dit is het meest oprechte teamprogramma waar we ooit aan deelnamen.',
    name: 'Commercieel Directeur',
    company: 'ZEUZ',
    logo: '/sponsor-zeuz.webp',
    logoExt: 'webp',
  },
  {
    quote: 'De militaire achtergrond van de instructeurs maakt het verschil. Streng, eerlijk, en altijd veilig.',
    name: 'CEO',
    company: 'FITAID EU',
    logo: '/sponsor-fitaid.png',
    logoExt: 'png',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const t = TESTIMONIALS[active]

  return (
    <section className="bg-bone" style={{ padding: '128px 0' }}>
      <div className="wrap">
        <div style={{ marginBottom: 64 }}>
          <div className="kicker" style={{ marginBottom: 16 }}>BRIEFING · WAT KLANTEN ZEGGEN</div>
          <h2 className="display-condensed" style={{
            color: 'var(--ink-black)',
            margin: 0,
            maxWidth: '14ch',
          }}>STILTE NA AFLOOP. OPRECHTE STILTE.</h2>
        </div>

        <div className="testimonial-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'flex-start',
          borderTop: '2px solid var(--ink-black)',
          paddingTop: 48,
        }}>
          <div>
            <Icon name="quote" size={48} color="var(--brand-red)" stroke={2} style={{ marginBottom: 24 }} />
            <blockquote style={{
              font: '500 clamp(24px, 2.6vw, 36px)/1.3 var(--font-sans)',
              color: 'var(--ink-black)',
              margin: 0,
              maxWidth: 720,
            }}>
              "{t.quote}"
            </blockquote>
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(10,7,7,0.18)' }}>
              <div style={{ font: '700 14px/1.2 var(--font-sans)', textTransform: 'uppercase', letterSpacing: 'var(--track-wider)', color: 'var(--ink-black)' }}>
                {t.name}
              </div>
              <div style={{ font: 'var(--type-body-sm)', color: '#6a5a52', marginTop: 4 }}>{t.company}</div>
            </div>
          </div>

          <div>
            <div style={{
              border: '1px solid rgba(10,7,7,0.18)',
              padding: '64px 32px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              minHeight: 200,
              background: '#fff',
              marginBottom: 16,
            }}>
              <Image
                src={t.logo}
                alt={t.company}
                width={320}
                height={80}
                style={{ height: 80, maxWidth: 320, objectFit: 'contain' }}
              />
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {TESTIMONIALS.map((tt, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    flex: 1,
                    padding: '20px 16px',
                    background: i === active ? 'var(--ink-black)' : 'transparent',
                    color: i === active ? 'var(--brand-bone)' : 'var(--ink-black)',
                    border: '1px solid var(--ink-black)',
                    cursor: 'pointer',
                    font: '500 11px/1 var(--font-sans)',
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--track-wider)',
                    transition: 'all 220ms',
                  }}
                >
                  {tt.company.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .testimonial-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
