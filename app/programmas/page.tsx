import ProgrammaFilterList from '@/components/beasting/programmas/filter-list'
import CtaBand from '@/components/beasting/cta-band'

export default function ProgrammasPage() {
  return (
    <div className="page-enter">

      {/* Hero */}
      <section className="bg-oxblood" style={{ padding: '120px 0 80px', boxShadow: 'inset 0 0 200px rgba(10,7,7,0.55)' }}>
        <div className="wrap">
          <div className="kicker" style={{ marginBottom: 24 }}>PROGRAMMA&apos;S · 2026 SEIZOEN</div>
          <h1 style={{
            font: '900 clamp(72px, 12vw, 200px)/0.85 var(--font-display)',
            color: 'var(--brand-bone)', margin: 0, letterSpacing: '-0.02em',
          }}>KIES UW<br />WEDSTRIJD.</h1>
          <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', marginTop: 32, maxWidth: 640 }}>
            Zes formats. Eén filosofie: out of your comfort zone, onder begeleiding van mensen die weten wat ze doen. Filter op duur of type, of bel ons en we ontwerpen iets nieuws.
          </p>
        </div>
      </section>

      {/* Filter + list */}
      <section className="bg-ink" style={{ padding: '64px 0 120px' }}>
        <div className="wrap">
          <ProgrammaFilterList />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
