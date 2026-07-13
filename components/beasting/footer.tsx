import Image from 'next/image'
import Icon from './icon'

const EVENTBRITE = 'https://www.eventbrite.nl/o/beasting-82957786833'
const INSTAGRAM = 'https://www.instagram.com/beasting.nl/'

const QUICK_LINKS = [
  { icon: 'phone',     label: '+31 (0)6 21 999 148', href: 'tel:+31621999148',        external: false },
  { icon: 'mail',      label: 'info@beasting.nl',     href: 'mailto:info@beasting.nl', external: false },
  { icon: 'instagram', label: '@beasting.nl',         href: INSTAGRAM,                 external: true },
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
          gridTemplateColumns: '1.5fr 1fr auto',
          gap: 48,
          marginBottom: 48,
          borderTop: '1px solid var(--line-hairline)',
          paddingTop: 48,
          alignItems: 'flex-start',
        }}>
          {/* Left — logo + tagline */}
          <div>
            <Image src="/beasting-logo-white.png" alt="Beasting" width={140} height={36} style={{ height: 36, width: 'auto', marginBottom: 20 }} />
            <p style={{ font: 'var(--type-body-sm)', color: 'var(--brand-bone-dim)', maxWidth: 280, margin: 0 }}>
              Out of your comfort zone. Amsterdam, NL.
            </p>
          </div>

          {/* Center — contact quick-links */}
          <div>
            <div style={{
              font: '500 11px/1 var(--font-sans)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--track-widest)',
              color: 'var(--brand-bone)',
              marginBottom: 18,
            }}>CONTACT</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {QUICK_LINKS.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: 'var(--type-body-sm)', color: 'var(--brand-bone-dim)', textDecoration: 'none' }}
                  >
                    <Icon name={l.icon} size={16} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — CTA */}
          <div>
            <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer" className="btn-stencil btn-stencil--red" style={{ padding: '14px 24px' }}>
              Boek op Eventbrite <Icon name="arrow-right" size={14} />
            </a>
          </div>
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
            {[
              ['Algemene voorwaarden', '/algemene-voorwaarden'],
              ['Privacy', '#'],
              ['Cookies', '#'],
            ].map(([t, href]) => (
              <a key={t} href={href} style={{ font: 'var(--type-caption)', color: 'var(--ink-ash)', textTransform: 'uppercase', letterSpacing: 'var(--track-widest)' }}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
