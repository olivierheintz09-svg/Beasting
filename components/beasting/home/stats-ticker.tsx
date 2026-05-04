'use client'

import { useRef, useState, useEffect } from 'react'

const STATS = [
  { value: '2+',  label: 'JAAR ERVARING' },
  { value: '10+', label: 'SUCCESVOLLE BEASTINGS' },
  { value: '12',  label: 'EX-MARINIERS IN HET TEAM' },
]

export default function StatsTicker() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setVisible(true) }),
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-oxblood" style={{
      padding: '80px 0',
      boxShadow: 'inset 0 0 180px rgba(10,7,7,0.6)',
      borderTop: '4px solid var(--ink-black)',
      borderBottom: '4px solid var(--ink-black)',
    }}>
      <div className="wrap">
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              borderLeft: i === 0 ? 'none' : '1px solid rgba(243,238,229,0.22)',
              paddingLeft: i === 0 ? 0 : 32,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 600ms ease ${i * 120}ms, transform 600ms ease ${i * 120}ms`,
            }}>
              <div style={{
                font: '700 clamp(72px, 10vw, 144px)/0.9 var(--font-sans)',
                color: 'var(--brand-bone)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                textShadow: '0 2px 0 rgba(10,7,7,0.5)',
              }}>{s.value}</div>
              <div style={{
                marginTop: 12,
                font: '500 11px/1.3 var(--font-sans)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--track-widest)',
                color: 'var(--brand-bone)',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .stats-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </section>
  )
}
