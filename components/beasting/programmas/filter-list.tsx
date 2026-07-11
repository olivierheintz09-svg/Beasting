'use client'

import { useState } from 'react'
import Link from 'next/link'
import Icon from '../icon'

const ALL = [
  { id: 'bloed',      name: 'BLOEDPROEF',      durCat: 'kort',  duration: '3 — 6 UUR',   type: 'Team',       size: '8–40',             price: 'Vanaf €165 p.p.', loc: 'NL — diverse',     icon: 'flame',    intensity: 3 },
  { id: 'nacht',      name: 'NACHTRAID',        durCat: 'lang',  duration: '12 — 24 UUR', type: 'Team',       size: '12–60',            price: 'Vanaf €420 p.p.', loc: 'Veluwe / Brabant', icon: 'mountain', intensity: 5 },
  { id: 'bespoke',    name: 'BESPOKE COMPANY',  durCat: 'maat',  duration: 'OP MAAT',     type: 'Bedrijven',  size: '20–250',           price: 'Op offerte',      loc: 'Naar wens',        icon: 'compass',  intensity: 4 },
  { id: 'murph',      name: 'THE MURPH',        durCat: 'event', duration: '24 MEI 2026', type: 'Event',      size: 'Solo / 4',         price: '€89 — €169',     loc: 'Olympisch Stadion', icon: 'target',   intensity: 5, featured: true },
  { id: 'school',     name: 'CADET DAY',        durCat: 'kort',  duration: '4 UUR',       type: 'Scholen',    size: '20–80',            price: 'Vanaf €45 p.p.', loc: 'Schoolterrein',    icon: 'shield',   intensity: 3 },
  { id: 'individueel',name: 'OPEN BEAST',       durCat: 'kort',  duration: '5 UUR',       type: 'Individueel',size: 'Open inschrijving',price: '€95',            loc: 'Diverse',          icon: 'flame',    intensity: 4 },
]

const DUR_FILTERS  = [{ id: 'all', l: 'Alles' }, { id: 'kort', l: '< 6 uur' }, { id: 'lang', l: '12-24 uur' }, { id: 'maat', l: 'Op maat' }, { id: 'event', l: 'Events' }]
const TYPE_FILTERS = [{ id: 'all', l: 'Alles' }, { id: 'Bedrijven', l: 'Bedrijven' }, { id: 'Team', l: 'Team' }, { id: 'Scholen', l: 'Scholen' }, { id: 'Individueel', l: 'Individueel' }, { id: 'Event', l: 'Event' }]

function Chip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      padding: '10px 18px',
      background: active ? 'var(--brand-bone)' : 'transparent',
      color: active ? 'var(--ink-black)' : 'var(--brand-bone)',
      border: '1px solid ' + (active ? 'var(--brand-bone)' : 'rgba(243,238,229,0.32)'),
      cursor: 'pointer',
      font: '500 11px/1 var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-wider)',
      transition: 'all 220ms',
    }}>{label}</button>
  )
}

export default function ProgrammaFilterList() {
  const [durF,  setDurF]  = useState('all')
  const [typeF, setTypeF] = useState('all')

  const filtered = ALL.filter(p =>
    (durF  === 'all' || p.durCat === durF) &&
    (typeF === 'all' || p.type   === typeF)
  )

  return (
    <>
      {/* Filter row */}
      <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', marginBottom: 48, paddingBottom: 32, borderBottom: '1px solid var(--line-hairline-dark)' }}>
        <div>
          <div className="kicker" style={{ marginBottom: 12 }}>DUUR</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {DUR_FILTERS.map(f => <Chip key={f.id} active={durF === f.id} label={f.l} onClick={() => setDurF(f.id)} />)}
          </div>
        </div>
        <div>
          <div className="kicker" style={{ marginBottom: 12 }}>TYPE</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {TYPE_FILTERS.map(f => <Chip key={f.id} active={typeF === f.id} label={f.l} onClick={() => setTypeF(f.id)} />)}
          </div>
        </div>
        <div style={{ marginLeft: 'auto', alignSelf: 'flex-end' }}>
          <div className="kicker" style={{ color: 'var(--brand-bone)' }}>{filtered.length} {filtered.length === 1 ? 'PROGRAMMA' : "PROGRAMMA'S"}</div>
        </div>
      </div>

      {/* Table header */}
      <div className="prog-row" style={{ display: 'grid', gridTemplateColumns: '120px 2fr 1fr 1fr 1fr auto', gap: 24, padding: '0 16px 16px', borderBottom: '2px solid var(--brand-bone)' }}>
        <div className="kicker" />
        <div className="kicker">PROGRAMMA</div>
        <div className="kicker">GROOTTE</div>
        <div className="kicker">LOCATIE</div>
        <div className="kicker">PRIJS · INTENSITEIT</div>
        <div />
      </div>

      {/* Rows */}
      {filtered.length > 0 ? filtered.map(p => (
        <Link key={p.id} href="/contact" className="prog-row-link" style={{
          display: 'grid', gridTemplateColumns: '120px 2fr 1fr 1fr 1fr auto',
          gap: 24, alignItems: 'center', padding: '32px 0',
          borderBottom: '1px solid var(--line-hairline)',
          color: 'var(--brand-bone)', textDecoration: 'none',
          transition: 'background 220ms',
        }}>
          <div style={{ paddingLeft: 16 }}>
            <Icon name={p.icon} size={48} color={p.featured ? 'var(--brand-bone)' : 'var(--brand-bone-dim)'} stroke={1} />
          </div>
          <div>
            <div className="roman" style={{ font: '700 11px/1 var(--font-titling)', color: 'var(--brand-bone-dim)', letterSpacing: 'var(--track-widest)', marginBottom: 8 }}>
              {p.duration} · {p.type.toUpperCase()}
            </div>
            <div style={{ font: '900 clamp(32px, 4vw, 48px)/1 var(--font-display)', color: 'var(--brand-bone)', marginBottom: 8, letterSpacing: '-0.01em' }}>{p.name}</div>
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 6 }}>GROEPSGROOTTE</div>
            <div style={{ font: 'var(--type-body)', color: 'var(--brand-bone)' }}>{p.size}</div>
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 6 }}>LOCATIE</div>
            <div style={{ font: 'var(--type-body)', color: 'var(--brand-bone)' }}>{p.loc}</div>
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 6 }}>VANAF</div>
            <div style={{ font: '700 18px/1 var(--font-sans)', color: 'var(--brand-bone)' }}>{p.price}</div>
            <div style={{ marginTop: 8, display: 'flex', gap: 3 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} style={{ width: 16, height: 4, background: i < p.intensity ? 'var(--brand-bone)' : 'rgba(243,238,229,0.18)' }} />
              ))}
            </div>
          </div>
          <div style={{ paddingRight: 16 }}>
            <Icon name="arrow-right" size={20} color="var(--brand-bone)" />
          </div>
        </Link>
      )) : (
        <div style={{ padding: 64, textAlign: 'center', color: 'var(--brand-bone-dim)' }}>
          Geen programma&apos;s gevonden met deze filters.
        </div>
      )}

      <style>{`
        .prog-row-link:hover { background: rgba(58,10,12,0.5); }
        @media (max-width: 880px) {
          .prog-row, .prog-row-link { grid-template-columns: 1fr !important; gap: 12px !important; }
          .prog-row > div:first-child, .prog-row-link > div:first-child { display: none; }
        }
      `}</style>
    </>
  )
}
