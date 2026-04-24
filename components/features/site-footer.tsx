'use client'

import { useState } from 'react'
import { useBooking } from './booking-provider'

const FOOTER_COLS = [
  {
    heading: 'Apartments',
    links: [
      { label: 'The Lodge', href: '/apartments/lodge' },
      { label: 'The Hearth', href: '/apartments/hearth' },
      { label: 'The Eyrie', href: '/apartments/eyrie' },
    ],
  },
  {
    heading: 'Location',
    links: [
      { label: 'Schnann', href: '#location' },
      { label: 'Arlberg', href: '#arlberg' },
      { label: 'Innsbruck arrival', href: '#location' },
    ],
  },
  {
    heading: 'Stay',
    links: [
      { label: 'House rules', href: '#faq' },
      { label: 'Arrival & keys', href: '#faq' },
      { label: 'Seasonality', href: '#journal' },
    ],
  },
  {
    heading: 'Alpzeit',
    links: [
      { label: 'Journal', href: '#journal' },
      { label: 'Contact', href: 'mailto:hello@alpzeit.at' },
      { label: 'Privacy policy', href: '/privacy' },
    ],
  },
]

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { open: openBooking } = useBooking()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <footer className="text-white" style={{ background: '#2D1E17' }}>

      {/* ── Top band: direct booking CTA ── */}
      <div
        className="px-6 md:px-20 py-14 md:py-16"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.45)',
              margin: '0 0 10px',
            }}>
              Book direct
            </p>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 600,
              color: '#fff',
              margin: 0,
              letterSpacing: '-0.02em',
            }}>
              The best rate is always here.
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.55)',
              margin: '10px 0 0',
            }}>
              Book directly with us — no agency, no commission, no markup.
            </p>
          </div>
          <button
            onClick={openBooking}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              borderRadius: 999,
              padding: '14px 32px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: '#2D1E17',
              background: '#d9cfc2',
              border: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.20)',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#c8bdb0'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#d9cfc2'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Check availability
          </button>
        </div>
      </div>

      {/* ── Newsletter band ── */}
      <div
        className="px-6 md:px-20 py-12"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div style={{ maxWidth: 360 }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#fff',
              margin: '0 0 6px',
              letterSpacing: '-0.01em',
            }}>
              Seasonal updates and quiet weeks
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: 'rgba(255,255,255,0.45)',
              margin: 0,
            }}>
              Occasional letters. No marketing.
            </p>
          </div>

          {submitted ? (
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              color: 'rgba(255,255,255,0.60)',
              margin: 0,
            }}>
              Thank you — we'll be in touch.
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{ display: 'flex', alignItems: 'flex-end', gap: 0 }}
            >
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    color: '#fff',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.35)',
                    padding: '8px 0',
                    width: 220,
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.75)')}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.35)')}
                />
              </div>
              <button
                type="submit"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  color: '#2D1E17',
                  background: '#d9cfc2',
                  border: 'none',
                  borderRadius: 6,
                  padding: '8px 18px',
                  marginLeft: 16,
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#c8bdb0')}
                onMouseLeave={e => (e.currentTarget.style.background = '#d9cfc2')}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Link columns ── */}
      <div className="px-6 md:px-20 pt-12 pb-10">
        <div className="max-w-[1280px] mx-auto">

          <div className="flex items-baseline gap-[10px] mb-10">
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                fontSize: 36,
                color: '#d9cfc2',
                letterSpacing: '-0.01em',
                lineHeight: 1,
              }}
            >
              Alpzeit
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
              }}
            >
              Apartments
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#fff',
                  marginBottom: 10,
                }}>
                  {col.heading}
                </div>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block no-underline hover:no-underline"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.55)',
                      padding: '5px 0',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Trust elements + copyright */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px 20px',
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.02em',
            }}>
              <span>Registered vacation rental · Vorarlberg, Austria</span>
              <span>·</span>
              <a href="#faq" className="no-underline" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Cancellation policy
              </a>
              <span>·</span>
              <a href="/privacy" className="no-underline" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Privacy & GDPR
              </a>
            </div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 10,
              color: 'rgba(255,255,255,0.28)',
              margin: 0,
              letterSpacing: '0.02em',
            }}>
              © 2026 HAUS ALPZEIT · SCHNANN 41, 6574 PETTNEU AM ARLBERG, AUSTRIA ·{' '}
              <a
                href="mailto:hello@alpzeit.at"
                className="no-underline"
                style={{ color: 'rgba(255,255,255,0.28)' }}
              >
                HELLO@ALPZEIT.AT
              </a>
            </p>
          </div>

        </div>
      </div>

    </footer>
  )
}
