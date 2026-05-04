'use client'

import { useState, useEffect } from 'react'
import { useBooking } from './booking-provider'
import { useLocale } from '@/lib/locale-context'

export function StickyCta() {
  const [visible, setVisible] = useState(false)
  const { open: openBooking } = useBooking()
  const { t } = useLocale()

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Desktop: top-right fixed pill */}
      <div
        className="hidden md:block"
        style={{
          position: 'fixed',
          top: 20,
          right: 28,
          zIndex: 50,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
        }}
      >
        <button
          onClick={openBooking}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            borderRadius: 999,
            padding: '11px 26px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9375rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#fff',
            background: '#2D1E17',
            border: '1.5px solid rgba(255,255,255,0.12)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.22)',
            cursor: 'pointer',
            transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#3d2a20'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#2D1E17'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          {t('stickyCta.checkAvailability')}
        </button>
      </div>

      {/* Mobile: fixed bottom bar */}
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
          background: 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
        }}
      >
        <button
          onClick={openBooking}
          style={{
            display: 'block',
            width: '100%',
            padding: '15px',
            borderRadius: 14,
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.01em',
            color: '#fff',
            background: '#2D1E17',
            border: 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,0.20)',
            cursor: 'pointer',
          }}
        >
          {t('stickyCta.checkAvailability')}
        </button>
      </div>
    </>
  )
}
