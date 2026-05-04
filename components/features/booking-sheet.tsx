'use client'

import { useState, useEffect } from 'react'
import { apartments } from '@/lib/mock-data'
import { useLocale } from '@/lib/locale-context'
import type { Apartment } from '@/types'

type Step = 'dates' | 'results' | 'confirm'

type Props = {
  open: boolean
  onClose: () => void
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

export function BookingSheet({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>('dates')
  const [arrive, setArrive] = useState('2026-12-21')
  const [depart, setDepart] = useState('2026-12-28')
  const [guests, setGuests] = useState(4)
  const [pick, setPick] = useState<Apartment | null>(null)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [searchHovered, setSearchHovered] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const { t, lang } = useLocale()

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    if (open) {
      setStep('dates')
      setPick(null)
      setMounted(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true))
      })
    } else {
      setVisible(false)
      timer = setTimeout(() => setMounted(false), 300)
    }
    return () => clearTimeout(timer)
  }, [open])

  if (!mounted) return null

  const matches = apartments.filter((a) => a.sleeps >= guests)

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'rgba(0,0,0,0.55)',
    marginBottom: 8,
  }

  const inputStyleFor = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '14px 42px 14px 16px',
    borderRadius: 12,
    border: focusedField === field
      ? '1px solid rgba(168,150,132,0.6)'
      : '1px solid rgba(0,0,0,0.08)',
    background: 'rgba(0,0,0,0.03)',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    color: '#1a1a1a',
    outline: 'none',
    boxSizing: 'border-box',
    boxShadow: focusedField === field ? '0 0 0 3px rgba(168,150,132,0.12)' : 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  })

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        padding: 16,
        background: 'rgba(20,20,20,0.45)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease-out',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 440,
          borderRadius: 24,
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.5)',
          boxShadow: [
            'inset 0 1.5px 1px 0 rgba(255,255,255,0.80)',
            'inset 0 -1px 1px 0 rgba(255,255,255,0.20)',
            '0 24px 64px rgba(0,0,0,0.25)',
            '0 8px 24px rgba(0,0,0,0.10)',
          ].join(', '),
          transform: visible ? 'scale(1)' : 'scale(0.96)',
          transition: 'transform 0.3s ease-out',
        }}
      >
        <SheetHeader onClose={onClose} title={t('booking.title')} />

        {step === 'dates' && (
          <div style={{ padding: 32 }}>
            <label style={labelStyle}>{t('booking.arrive')}</label>
            <div style={{ position: 'relative', marginBottom: 20 }}>
              <input
                type="date"
                value={arrive}
                onChange={(e) => setArrive(e.target.value)}
                onFocus={() => setFocusedField('arrive')}
                onBlur={() => setFocusedField(null)}
                style={inputStyleFor('arrive')}
              />
              <span style={{
                position: 'absolute',
                right: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(0,0,0,0.40)',
                pointerEvents: 'none',
                display: 'flex',
              }}>
                <CalendarIcon />
              </span>
            </div>

            <label style={labelStyle}>{t('booking.depart')}</label>
            <div style={{ position: 'relative', marginBottom: 20 }}>
              <input
                type="date"
                value={depart}
                onChange={(e) => setDepart(e.target.value)}
                onFocus={() => setFocusedField('depart')}
                onBlur={() => setFocusedField(null)}
                style={inputStyleFor('depart')}
              />
              <span style={{
                position: 'absolute',
                right: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(0,0,0,0.40)',
                pointerEvents: 'none',
                display: 'flex',
              }}>
                <CalendarIcon />
              </span>
            </div>

            <label style={labelStyle}>{t('booking.guests')}</label>
            <GuestCounter guests={guests} onChange={setGuests} />

            <button
              onClick={() => setStep('results')}
              onMouseEnter={() => setSearchHovered(true)}
              onMouseLeave={() => { setSearchHovered(false); setSearchActive(false) }}
              onMouseDown={() => setSearchActive(true)}
              onMouseUp={() => setSearchActive(false)}
              style={{
                display: 'block',
                width: '100%',
                marginTop: 28,
                padding: 16,
                borderRadius: 14,
                border: 'none',
                background: searchHovered && !searchActive ? '#A89684' : '#9A8674',
                color: '#fff',
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: '0.02em',
                cursor: 'pointer',
                boxShadow: searchActive
                  ? 'inset 0 1px 0 0 rgba(255,255,255,0.2), 0 2px 6px rgba(168,150,132,0.20)'
                  : searchHovered
                    ? 'inset 0 1px 0 0 rgba(255,255,255,0.2), 0 6px 18px rgba(168,150,132,0.38)'
                    : 'inset 0 1px 0 0 rgba(255,255,255,0.2), 0 4px 12px rgba(168,150,132,0.30)',
                transform: searchHovered && !searchActive ? 'translateY(-1px)' : 'translateY(0)',
                transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
              }}
            >
              {t('booking.search')}
            </button>
          </div>
        )}

        {step === 'results' && !pick && (
          <ResultsStep
            arrive={arrive}
            depart={depart}
            guests={guests}
            matches={matches}
            onBack={() => setStep('dates')}
            onSelect={setPick}
          />
        )}

        {pick && (
          <ConfirmStep pick={pick} arrive={arrive} depart={depart} onClose={onClose} />
        )}
      </div>
    </div>
  )
}

function SheetHeader({ onClose, title }: { onClose: () => void; title: string }) {
  const [closeHovered, setCloseHovered] = useState(false)
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 32px 20px',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '1.25rem',
        fontWeight: 500,
        color: '#1a1a1a',
        letterSpacing: '-0.01em',
      }}>
        {title}
      </div>
      <button
        onClick={onClose}
        onMouseEnter={() => setCloseHovered(true)}
        onMouseLeave={() => setCloseHovered(false)}
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: closeHovered ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.04)',
          border: 'none',
          cursor: 'pointer',
          color: 'rgba(0,0,0,0.6)',
          fontSize: 18,
          lineHeight: 1,
          transition: 'background 0.2s ease',
        }}
      >
        ×
      </button>
    </div>
  )
}

function GuestCounter({ guests, onChange }: { guests: number; onChange: (n: number) => void }) {
  const [minusHovered, setMinusHovered] = useState(false)
  const [plusHovered, setPlusHovered] = useState(false)

  const btnStyle = (hovered: boolean): React.CSSProperties => ({
    width: 36,
    height: 36,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: hovered ? 'rgba(168,150,132,0.12)' : 'rgba(0,0,0,0.04)',
    border: hovered ? '1px solid rgba(168,150,132,0.40)' : '1px solid rgba(0,0,0,0.08)',
    cursor: 'pointer',
    color: hovered ? '#836953' : 'rgba(0,0,0,0.70)',
    fontSize: 18,
    lineHeight: 1,
    transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
      <button
        style={btnStyle(minusHovered)}
        onMouseEnter={() => setMinusHovered(true)}
        onMouseLeave={() => setMinusHovered(false)}
        onClick={() => onChange(Math.max(1, guests - 1))}
      >
        −
      </button>
      <div style={{
        padding: '0 24px',
        textAlign: 'center',
        fontSize: '1.25rem',
        fontWeight: 500,
        fontFamily: 'var(--font-sans)',
        color: '#1a1a1a',
      }}>
        {guests}
      </div>
      <button
        style={btnStyle(plusHovered)}
        onMouseEnter={() => setPlusHovered(true)}
        onMouseLeave={() => setPlusHovered(false)}
        onClick={() => onChange(Math.min(12, guests + 1))}
      >
        +
      </button>
    </div>
  )
}

type ResultsProps = {
  arrive: string
  depart: string
  guests: number
  matches: Apartment[]
  onBack: () => void
  onSelect: (a: Apartment) => void
}

function ResultsStep({ arrive, depart, guests, matches, onBack, onSelect }: ResultsProps) {
  const { t } = useLocale()
  const guestLabel = guests === 1 ? t('booking.guestSingular') : t('booking.guestPlural')

  return (
    <div style={{ padding: '20px 32px 32px' }}>
      <p className="type-caption" style={{ color: 'rgba(0,0,0,0.60)', marginBottom: 16, marginTop: 0 }}>
        {arrive} → {depart} · {guests} {guestLabel}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {matches.map((a) => (
          <button
            key={a.id}
            onClick={() => onSelect(a)}
            className="text-left cursor-pointer flex items-center gap-[14px]"
            style={{
              background: 'rgba(0,0,0,0.03)',
              borderRadius: 12,
              padding: '14px 16px',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ width: 64, height: 48, borderRadius: 8, background: 'rgba(0,0,0,0.08)', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div className="type-body-bold">{a.name}</div>
              <div className="type-caption" style={{ color: 'rgba(0,0,0,0.48)' }}>
                {t('booking.sleeps', { n: a.sleeps })} · {a.area} m²
              </div>
            </div>
            <div className="type-caption-bold">€{a.pricePerNight}/nt</div>
          </button>
        ))}
        {matches.length === 0 && (
          <p className="type-body" style={{ color: 'rgba(0,0,0,0.80)', margin: 0 }}>
            {t('booking.noMatch', { n: guests })}
          </p>
        )}
      </div>
      <button
        onClick={onBack}
        className="bg-transparent border-none cursor-pointer type-caption"
        style={{ color: '#836953', marginTop: 16, padding: 0 }}
      >
        {t('booking.changeDates')}
      </button>
    </div>
  )
}

function ConfirmStep({
  pick,
  arrive,
  depart,
  onClose,
}: {
  pick: Apartment
  arrive: string
  depart: string
  onClose: () => void
}) {
  const { t } = useLocale()

  return (
    <div style={{ padding: '28px 32px 32px', textAlign: 'center' }}>
      <div className="type-tile" style={{ marginTop: 8, marginBottom: 6 }}>{t('booking.held')}</div>
      <p className="type-body" style={{ color: 'rgba(0,0,0,0.80)', marginBottom: 20 }}>
        {pick.name} · {arrive} → {depart} · €{pick.pricePerNight}/night.
        <br />
        {t('booking.emailConfirm')}
      </p>
      <button onClick={onClose} className="pill pill-fill-blue border-none cursor-pointer">
        {t('booking.done')}
      </button>
    </div>
  )
}
