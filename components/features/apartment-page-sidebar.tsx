'use client'

import { useState } from 'react'
import { useBooking } from './booking-provider'
import { useLocale } from '@/lib/locale-context'

import type { Apartment } from '@/types'

const inputRowStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,0.03)',
  border: '1px solid rgba(0,0,0,0.08)',
  borderRadius: 10,
  padding: '10px 14px',
  cursor: 'pointer',
  textAlign: 'left',
  width: '100%',
  transition: 'background 0.15s ease',
}

export function ApartmentPageSidebar({ apartment }: { apartment: Apartment }) {
  const { open: openBooking } = useBooking()
  const [guests, setGuests] = useState(2)
  const { lang, t } = useLocale()

  const guestLabel = guests === 1 ? t('sidebar.guestSingular') : t('sidebar.guestPlural')

  return (
    <>
      {/* ── Desktop sticky panel ── */}
      <div
        className="hidden md:block"
        style={{
          width: 300,
          flexShrink: 0,
          position: 'sticky',
          top: 72,
          alignSelf: 'flex-start',
          background: '#fff',
          borderRadius: 20,
          border: '1px solid rgba(0,0,0,0.08)',
          padding: '28px 24px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
        }}
      >
        {/* Label + price */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 500,
          color: 'rgba(0,0,0,0.42)',
          margin: '0 0 6px',
          textTransform: 'uppercase',
          letterSpacing: '0.10em',
        }}>
          {apartment.name}
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 24 }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
          }}>
            {lang === 'de' ? 'Preis auf Anfrage' : 'Price on request'}
          </span>
        </div>

        {/* Arrive / Depart */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
          <button onClick={openBooking} style={inputRowStyle}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 500, color: 'rgba(0,0,0,0.42)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
              {t('sidebar.arriveLabel')}
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(0,0,0,0.50)' }}>
              {t('sidebar.selectDate')}
            </div>
          </button>
          <button onClick={openBooking} style={inputRowStyle}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 500, color: 'rgba(0,0,0,0.42)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
              {t('sidebar.departLabel')}
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(0,0,0,0.50)' }}>
              {t('sidebar.selectDate')}
            </div>
          </button>
        </div>

        {/* Guests */}
        <div style={{
          ...inputRowStyle,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
          cursor: 'default',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 500, color: 'rgba(0,0,0,0.42)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
              {t('sidebar.guestsLabel')}
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#1a1a1a' }}>
              {guests} {guestLabel}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {[{ label: '−', action: () => setGuests(Math.max(1, guests - 1)) }, { label: '+', action: () => setGuests(Math.min(apartment.sleeps, guests + 1)) }].map(({ label, action }) => (
              <button
                key={label}
                onClick={action}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1px solid rgba(0,0,0,0.15)',
                  background: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 16,
                  fontWeight: 300,
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={openBooking}
          style={{
            display: 'block',
            width: '100%',
            padding: '14px',
            borderRadius: 12,
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9375rem',
            fontWeight: 500,
            color: '#fff',
            background: '#836953',
            border: 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            cursor: 'pointer',
            marginBottom: 10,
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#6a4a3a')}
          onMouseLeave={e => (e.currentTarget.style.background = '#836953')}
        >
          {t('sidebar.checkAvailability')}
        </button>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          color: 'rgba(0,0,0,0.40)',
          textAlign: 'center',
          margin: 0,
        }}>
          {t('sidebar.confirm')}
        </p>
      </div>

      {/* ── Mobile fixed bottom bar ── */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '12px 20px',
          paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, color: 'rgba(0,0,0,0.48)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {apartment.name}
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: '#1a1a1a', margin: 0 }}>
            {lang === 'de' ? 'Preis auf Anfrage' : 'Price on request'}
          </p>
        </div>
        <button
          onClick={openBooking}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: 12,
            padding: '12px 22px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9375rem',
            fontWeight: 500,
            color: '#fff',
            background: '#836953',
            border: 'none',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          {t('sidebar.checkAvailability')}
        </button>
      </div>
    </>
  )
}
