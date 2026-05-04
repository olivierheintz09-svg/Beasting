import Link from 'next/link'
import Image from 'next/image'
import Icon from './icon'

const COLS = [
  {
    h: "PROGRAMMA'S",
    items: [
      ["3–6 uur", "/programmas"],
      ["12–24 uur", "/programmas"],
      ["Bespoke Company", "/programmas"],
      ["The Murph", "/programmas"],
    ],
  },
  {
    h: "BEDRIJVEN",
    items: [
      ["Teambuilding", "/bedrijven"],
      ["Intake-proces", "/bedrijven"],
      ["Cases", "/bedrijven"],
      ["Plan een gesprek", "/contact"],
    ],
  },
  {
    h: "BEASTING",
    items: [
      ["Over ons", "/over"],
      ["Het team", "/over"],
      ["Missie", "/over"],
      ["Pers", "#"],
    ],
  },
  {
    h: "CONTACT",
    items: [
      ["Stuur bericht", "/contact"],
      ["+31 (0)20 555 0143", "#"],
      ["ops@beasting.nl", "#"],
      ["Amsterdam, NL", "#"],
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer style={{ background: 'var(--brand-blood)', borderTop: '4px solid var(--ink-black)', padding: '72px 0 32px' }}>
      <div className="wrap">
        <div style={{
          font: '900 clamp(64px, 12vw, 180px)/0.85 var(--font-display)',
          textTransform: 'uppercase',
          color: 'rgba(243,238,229,0.06)',
          letterSpacing: '-0.01em',
          userSelect: 'none',
          marginBottom: 32,
          textAlign: 'center',
          textShadow: '0 6px 0 rgba(10,7,7,0.5), 0 12px 32px rgba(10,7,7,0.4)',
        }}>BEASTING</div>

        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 48,
          borderTop: '1px solid var(--line-hairline)',
          paddingTop: 48,
        }}>
          <div>
            <Image src="/beasting-logo-white.png" alt="Beasting" width={140} height={36} style={{ height: 36, width: 'auto', marginBottom: 20 }} />
            <p style={{ font: 'var(--type-body-sm)', color: 'var(--brand-bone-dim)', maxWidth: 280, marginBottom: 24 }}>
              Out of your comfort zone. Militair-geleide challenges voor teams die echt willen weten waar hun grens ligt.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {(['instagram', 'linkedin', 'facebook'] as const).map(n => (
                <Link key={n} href="#" style={{
                  width: 40, height: 40,
                  border: '1px solid var(--brand-bone-dim)',
                  color: 'var(--brand-bone-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none',
                }}>
                  <Icon name={n} size={16} />
                </Link>
              ))}
            </div>
          </div>

          {COLS.map(col => (
            <div key={col.h}>
              <div style={{
                font: '500 11px/1 var(--font-sans)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--track-widest)',
                color: 'var(--brand-bone)',
                marginBottom: 18,
              }}>{col.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} style={{ font: 'var(--type-body-sm)', color: 'var(--brand-bone-dim)', textDecoration: 'none' }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--line-hairline)',
          paddingTop: 24,
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <div style={{ font: 'var(--type-caption)', color: 'var(--ink-ash)', textTransform: 'uppercase', letterSpacing: 'var(--track-widest)' }}>
            © 2026 Beasting B.V. · KvK 88231104 · Amsterdam
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Algemene voorwaarden', 'Privacy', 'Cookies'].map(t => (
              <Link key={t} href="#" style={{ font: 'var(--type-caption)', color: 'var(--ink-ash)', textTransform: 'uppercase', letterSpacing: 'var(--track-widest)' }}>
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  )
}
