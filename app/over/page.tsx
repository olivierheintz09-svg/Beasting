import Link from 'next/link'
import Icon from '@/components/beasting/icon'
import Placeholder from '@/components/beasting/placeholder'
import CtaBand from '@/components/beasting/cta-band'

const TEAM = [
  { name: 'BAS OFFENBERG',  role: 'FOUNDER & HEAD INSTRUCTOR', unit: 'Sportinstructeur · Korps Mariniers (RES)',
    bio: 'Bas startte Beasting na 9 jaar bij het Korps Mariniers en een carrière als sportinstructeur. Zijn obsessie: het moment waarop een team zijn eigen plafond ontdekt — en er doorheen breekt.' },
  { name: 'INSTRUCTEUR 02', role: 'SENIOR INSTRUCTOR',          unit: 'Korps Mariniers · 13 jaar actieve dienst',
    bio: 'Drie deployments. Uitstekend in het lezen van groepsdynamiek onder vermoeidheid.' },
  { name: 'INSTRUCTEUR 03', role: 'INSTRUCTOR',                 unit: 'Korps Commandotroepen · veteraan',
    bio: "Specialist in lange-duur uithoudingsprogramma's en survival-componenten." },
  { name: 'INSTRUCTEUR 04', role: 'MEDIC & SAFETY OFFICER',     unit: 'Defensie Geneeskundige Dienst',
    bio: 'Aanwezig op iedere Beasting van meer dan 6 uur. Voert medische check-ins uit, bewaakt limieten.' },
  { name: 'INSTRUCTEUR 05', role: 'INSTRUCTOR',                 unit: 'Korps Mariniers · sniper instructeur',
    bio: 'Brengt rust en precisie. Verantwoordelijk voor scenario-design.' },
  { name: 'INSTRUCTEUR 06', role: 'OPS & LOGISTICS',            unit: 'Luchtmobiele Brigade',
    bio: 'Coördineert locaties, vergunningen, vervoer en cateringtimings.' },
]

const PILLARS = [
  { t: 'STRENG',       d: 'Wij maken het niet makkelijker dan het is. Eerlijke obstakels, eerlijke taal, eerlijke feedback.' },
  { t: 'VEILIG',       d: 'Streng is niet hetzelfde als roekeloos. Medische standby, briefings, materiaalcheck — altijd.' },
  { t: 'INHOUDELIJK',  d: 'Wij zijn geen bootcamp-influencers. Wat we doen is doordacht en militair-geverifieerd.' },
]

const TIMELINE = [
  { y: '2024 Q2', t: 'OPRICHTING',      d: 'Bas verlaat actieve dienst. Beasting wordt geregistreerd in Amsterdam.' },
  { y: '2024 Q4', t: 'EERSTE BEASTING', d: '12 deelnemers, 6 uur, Amsterdamse Bos. Iedereen kwam terug.' },
  { y: '2025',    t: 'CORPORATE TRACK', d: "Eerste B2B-programma's met NOCCO, ZEUZ, FITAID." },
  { y: '2026',    t: 'THE MURPH',       d: 'Eigen open evenement op het Olympisch Stadion, 24 mei.' },
]

export default function OverPage() {
  return (
    <div className="page-enter">

      {/* Hero */}
      <section className="bg-oxblood" style={{ padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div className="wrap hero-bottom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div className="kicker" style={{ marginBottom: 24 }}>OVER BEASTING · EST. 2024</div>
            <h1 style={{ font: '900 clamp(64px, 10vw, 168px)/0.85 var(--font-display)', color: 'var(--brand-bone)', margin: 0, letterSpacing: '-0.02em' }}>
              WIE WIJ ZIJN.
            </h1>
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', marginTop: 32 }}>
              Beasting is opgericht in 2024 door Bas Offenberg, sportinstructeur en oud-marinier. Wij combineren de tucht van Defensie met de pedagogiek van topsport, en vertalen het naar programma&apos;s voor bedrijven, scholen en teams die echt iets willen leren over zichzelf.
            </p>
          </div>
          <Placeholder label={"PORTRAIT — BAS OFFENBERG\n'founder, on field'"} ratio="4/5" tone="dark" icon="users" />
        </div>
        <style>{`@media (max-width: 880px) { .hero-bottom { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Mission */}
      <section className="bg-oxblood" style={{ padding: '120px 0', boxShadow: 'inset 0 0 200px rgba(10,7,7,0.55)', borderTop: '4px solid var(--ink-black)' }}>
        <div className="wrap-tight">
          <div className="kicker" style={{ marginBottom: 24 }}>MISSIE</div>
          <div style={{ font: '700 clamp(28px, 4vw, 56px)/1.2 var(--font-titling)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--brand-bone)' }}>
            Wij geloven dat mensen niet groeien op kantoor. Mensen groeien op het moment dat ze iets doen waarvan ze dachten dat ze het niet konden — naast iemand die ze net leerden vertrouwen. Daar bouwen wij dagen omheen.
          </div>
          <div className="prog-grid" style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {PILLARS.map(c => (
              <div key={c.t} style={{ borderTop: '2px solid var(--brand-bone)', paddingTop: 20 }}>
                <div style={{ font: '900 32px/1 var(--font-display)', color: 'var(--brand-bone)', letterSpacing: '-0.01em', marginBottom: 12 }}>{c.t}</div>
                <p style={{ color: 'var(--brand-bone-dim)', font: 'var(--type-body)', margin: 0 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 880px) { .prog-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Team grid */}
      <section style={{ background: 'var(--ink-black)', padding: '120px 0' }}>
        <div className="wrap">
          <div style={{ borderBottom: '1px solid var(--line-hairline-dark)', paddingBottom: 32, marginBottom: 56 }}>
            <div className="kicker" style={{ marginBottom: 16 }}>HET TEAM · 12 INSTRUCTEURS</div>
            <h2 className="display-condensed" style={{ margin: 0 }}>OUDE STRIJDERS,<br />NIEUWE OBSTAKELS</h2>
          </div>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TEAM.map(p => (
              <div key={p.name} style={{ background: 'rgba(58,10,12,0.4)', border: '1px solid var(--line-hairline)' }}>
                <Placeholder label={"PORTRAIT — " + p.name} ratio="3/4" tone="red" icon="shield" />
                <div style={{ padding: 24, borderTop: '1px solid var(--line-hairline)' }}>
                  <div className="roman" style={{ font: '700 11px/1 var(--font-titling)', color: 'var(--brand-bone-dim)', letterSpacing: 'var(--track-widest)', marginBottom: 8 }}>
                    {p.role}
                  </div>
                  <div style={{ font: '900 28px/1 var(--font-display)', color: 'var(--brand-bone)', marginBottom: 8, letterSpacing: '-0.01em' }}>
                    {p.name}
                  </div>
                  <div style={{ font: 'var(--type-body-sm)', color: 'var(--brand-bone-dim)', marginBottom: 12 }}>{p.unit}</div>
                  <p style={{ color: 'var(--brand-bone-dim)', font: 'var(--type-body-sm)', margin: 0 }}>{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) { .team-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 560px) { .team-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Timeline */}
      <section className="bg-bone" style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div className="kicker" style={{ color: '#6a5a52', marginBottom: 16 }}>TIJDLIJN · 2024 → 2026</div>
          <h2 className="display-condensed" style={{ color: 'var(--ink-black)', margin: '0 0 56px' }}>
            HOE WE HIER KWAMEN.
          </h2>
          <div className="tl-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {TIMELINE.map((s, i) => (
              <div key={s.y} style={{
                padding: '32px 24px',
                borderTop: '4px solid var(--brand-red)',
                borderRight: i < 3 ? '1px solid rgba(10,7,7,0.18)' : 'none',
              }}>
                <div className="roman" style={{ font: '700 13px/1 var(--font-titling)', color: 'var(--brand-red)', letterSpacing: 'var(--track-widest)', marginBottom: 16 }}>
                  {s.y}
                </div>
                <div style={{ font: '900 28px/1 var(--font-display)', color: 'var(--ink-black)', marginBottom: 12, letterSpacing: '-0.01em' }}>{s.t}</div>
                <p style={{ color: '#3a2a26', font: 'var(--type-body-sm)', margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) { .tl-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 560px) { .tl-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CtaBand />
    </div>
  )
}
