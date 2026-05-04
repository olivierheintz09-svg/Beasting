import Icon from '@/components/beasting/icon'
import IntakeForm from '@/components/beasting/contact/intake-form'

const CONTACT_OPTIONS = [
  { icon: 'phone',   t: 'BEL DIRECT',     d: '+31 (0)20 555 0143', s: 'Ma–vr 09:00–18:00' },
  { icon: 'mail',    t: 'STUUR EEN MAIL', d: 'ops@beasting.nl',     s: 'Antwoord binnen 1 werkdag' },
  { icon: 'map-pin', t: 'KOM LANGS',      d: 'Amsterdam Noord',     s: 'Op afspraak' },
]

export default function ContactPage() {
  return (
    <div className="page-enter">

      {/* Hero */}
      <section className="bg-oxblood" style={{ padding: '96px 0 48px' }}>
        <div className="wrap">
          <div className="kicker" style={{ marginBottom: 24 }}>CONTACT · VRIJBLIJVENDE INTAKE</div>
          <h1 style={{
            font: '900 clamp(56px, 9vw, 144px)/0.88 var(--font-display)',
            color: 'var(--brand-bone)', margin: 0, letterSpacing: '-0.01em',
          }}>
            VERTEL ONS<br />OVER UW TEAM.
          </h1>
          <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', marginTop: 24, maxWidth: 640 }}>
            Vijf korte stappen. Wij bellen binnen één werkdag terug. Géén automatisch antwoord, géén marketing-mailings.
          </p>
        </div>
      </section>

      {/* Form on bone canvas */}
      <section className="bg-bone" style={{ padding: '64px 0 120px' }}>
        <div className="wrap-tight">
          <IntakeForm />

          {/* Direct contact alternatives */}
          <div className="contact-grid" style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {CONTACT_OPTIONS.map(c => (
              <div key={c.t} style={{ borderTop: '2px solid var(--ink-black)', paddingTop: 16 }}>
                <Icon name={c.icon} size={20} color="var(--ink-black)" stroke={1.5} style={{ marginBottom: 12 }} />
                <div style={{ font: '700 12px/1 var(--font-sans)', textTransform: 'uppercase', letterSpacing: 'var(--track-wider)', color: 'var(--ink-black)', marginBottom: 8 }}>{c.t}</div>
                <div style={{ font: '500 18px/1.3 var(--font-sans)', color: 'var(--ink-black)', marginBottom: 4 }}>{c.d}</div>
                <div style={{ font: 'var(--type-body-sm)', color: '#6a5a52' }}>{c.s}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 720px) { .contact-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </div>
  )
}
