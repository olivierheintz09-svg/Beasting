import Link from 'next/link'
import Icon from './icon'

export default function CtaBand() {
  return (
    <section style={{ position: 'relative', background: 'var(--ink-black)', padding: '128px 0', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        font: '900 clamp(180px, 28vw, 480px)/0.82 var(--font-display)',
        color: 'rgba(243,238,229,0.04)',
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        textShadow: '0 6px 0 rgba(10,7,7,0.5), 0 12px 32px rgba(10,7,7,0.4)',
      }}>BEASTING</div>

      <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div className="kicker" style={{ marginBottom: 24 }}>READY?</div>
        <h2 style={{
          font: '900 clamp(56px, 10vw, 144px)/0.88 var(--font-display)',
          color: 'var(--brand-bone)',
          margin: '0 0 32px',
          letterSpacing: '-0.01em',
        }}>
          UW TEAM,<br />BUITEN UW KANTOOR.
        </h2>
        <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', maxWidth: 560, margin: '0 auto 48px' }}>
          Plan een vrijblijvende intake. Wij bellen binnen één werkdag terug en luisteren eerst — daarna pas de offerte.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-stencil btn-stencil--solid" style={{ padding: '20px 40px', fontSize: 14 }}>
            Plan een intake <Icon name="arrow-right" size={16} />
          </Link>
          <Link href="/bedrijven" className="btn-stencil" style={{ padding: '20px 40px', fontSize: 14 }}>
            Voor bedrijven
          </Link>
        </div>
      </div>
    </section>
  )
}
