import Link from 'next/link'
import Icon from '@/components/beasting/icon'
import Placeholder from '@/components/beasting/placeholder'
import CtaBand from '@/components/beasting/cta-band'

const STEPS = [
  {
    n: '01', t: 'KENNISMAKING',
    d: 'Vrijblijvend gesprek (telefoon of bij ons in Amsterdam). Wij luisteren naar uw context — team, doel, fitnessniveau, bezwaren. 45 minuten.',
  },
  {
    n: '02', t: 'BRIEFING',
    d: 'Wij komen met een schriftelijk voorstel: programma, locatie, planning, prijs. U bepaalt of het past. Géén hoge druk verkooptactieken.',
  },
  {
    n: '03', t: 'VOORBEREIDING',
    d: 'Logistiek, medische check-in, dieetwensen, vertrouwelijkheid. Een buddy-list, een groepsapp, en een briefing-document voor uw deelnemers.',
  },
  {
    n: '04', t: 'DAG-1',
    d: 'U komt aan met uw team. Wij nemen het over. Aan het eind levert u een team af dat iets weet over zichzelf wat ze gisteren niet wisten.',
  },
]

const GOALS = [
  { t: 'LEIDERSCHAP ONDER DRUK',   d: 'Wie staat op als de plannen sneuvelen? We bouwen scenarios in waarin uw aanvoerder niet automatisch de aanvoerder blijft.' },
  { t: 'ONBOARDING NIEUWE LICHTING', d: "Een nieuwe groep collega's in één etmaal samengeklit. Werkt veel sneller dan zes maanden vrijdagmiddagborrels." },
  { t: 'TRANSITIE & VERANDERING',  d: 'Reorganisatie, fusie, nieuwe strategie? Een gedeeld zwaar moment maakt mensen onevenredig wendbaar.' },
  { t: 'SALES- OF OPS-MOMENTUM',   d: 'Vóór een groot kwartaal of na een tegenvaller. Uw team verlaat het terrein scherper dan ze er kwamen.' },
  { t: 'FITNESS & GEZONDHEID',      d: 'Een serieuze fysieke uitdaging zonder de generieke "wellness retreat" toon. Zweet, geen smoothies.' },
  { t: 'KLANT- OF PARTNER-EVENT',  d: 'Wij hosten ook gemengde groepen. Uw klanten zien een kant van uw team die ze nooit op kantoor zouden zien.' },
]

const CASES = [
  { c: 'NOCCO BENELUX', sz: '32 PERSONEN · 18 UUR', loc: 'Veluwe', q: '"Sales-team kwam terug als één team. Zes maanden later zien we het in de cijfers."' },
  { c: 'ZEUZ',          sz: '24 PERSONEN · 6 UUR',  loc: 'Amsterdamse Bos', q: '"Het meest oprechte teamprogramma waar we ooit aan deelnamen."' },
  { c: 'FITAID EU',     sz: '48 PERSONEN · 24 UUR', loc: 'Brabant', q: '"Streng, eerlijk, en altijd veilig. Precies wat we zochten."' },
]

export default function BedrijvenPage() {
  return (
    <div className="page-enter">

      {/* Hero */}
      <section className="bg-oxblood" style={{ padding: '120px 0 80px', borderBottom: '4px solid var(--ink-black)' }}>
        <div className="wrap">
          <div className="kicker" style={{ marginBottom: 24 }}>BEDRIJVEN · TEAMBUILDING</div>
          <h1 style={{
            font: '900 clamp(72px, 11vw, 168px)/0.88 var(--font-display)',
            color: 'var(--brand-bone)', margin: 0, letterSpacing: '-0.01em', maxWidth: '14ch',
          }}>UW TEAM, ECHT GETOETST.</h1>
          <div className="hero-bottom" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, marginTop: 56, alignItems: 'flex-start' }}>
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', marginBottom: 0 }}>
              Een offsite die geen offsite is. Geen escape-room, geen kookworkshop, geen breakout-sessies. Een dag (of nacht) waarin uw team leert wat samenwerken onder druk werkelijk betekent — onder leiding van ervaren militairen.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link href="/contact" className="btn-stencil btn-stencil--solid" style={{ padding: '18px 32px' }}>
                Plan een intake <Icon name="arrow-right" size={14} />
              </Link>
              <Link href="/programmas" className="btn-stencil" style={{ padding: '18px 32px' }}>
                Bekijk programma&apos;s
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 880px) { .hero-bottom { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Briefing canvas */}
      <section className="bg-bone" style={{ padding: '120px 0' }}>
        <div className="wrap">
          {/* Header */}
          <div style={{ borderBottom: '2px solid var(--ink-black)', paddingBottom: 32, marginBottom: 64, display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'flex-end' }}>
            <div>
              <div className="kicker" style={{ color: '#6a5a52', marginBottom: 12 }}>BRIEFING · 04 STAPPEN</div>
              <h2 className="display-condensed" style={{ color: 'var(--ink-black)', margin: 0 }}>
                INTAKE-PROCES
              </h2>
            </div>
            <div className="roman" style={{ font: '700 14px/1.4 var(--font-titling)', color: '#6a5a52', textAlign: 'right' }}>
              GEMIDDELD<br />14 WERKDAGEN<br />VAN INTAKE → DAG-1
            </div>
          </div>

          {/* 4-step grid */}
          <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{
                padding: '32px 24px',
                borderRight: i < 3 ? '1px solid rgba(10,7,7,0.18)' : 'none',
                borderTop: '1px solid rgba(10,7,7,0.18)',
                borderBottom: '1px solid rgba(10,7,7,0.18)',
              }}>
                <div className="roman" style={{ font: '700 56px/1 var(--font-titling)', color: 'var(--brand-red)', marginBottom: 16 }}>{s.n}</div>
                <div style={{ font: '700 18px/1.2 var(--font-sans)', textTransform: 'uppercase', letterSpacing: 'var(--track-wider)', color: 'var(--ink-black)', marginBottom: 16 }}>{s.t}</div>
                <p style={{ color: '#3a2a26', font: 'var(--type-body-sm)', margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>

          {/* Goal grid */}
          <div style={{ marginTop: 96 }}>
            <div className="kicker" style={{ color: '#6a5a52', marginBottom: 16 }}>VRAAG GERUST · DAT KUNT U KIEZEN</div>
            <h2 className="display-condensed" style={{ color: 'var(--ink-black)', margin: '0 0 48px' }}>
              WAT WILT U DAT UW TEAM<br />LEERT?
            </h2>
            <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {GOALS.map(c => (
                <div key={c.t} style={{ borderTop: '2px solid var(--ink-black)', paddingTop: 20 }}>
                  <div style={{ font: '700 16px/1.2 var(--font-sans)', textTransform: 'uppercase', letterSpacing: 'var(--track-wider)', color: 'var(--ink-black)', marginBottom: 12 }}>{c.t}</div>
                  <p style={{ color: '#3a2a26', font: 'var(--type-body-sm)', margin: 0 }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) { .prog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { .prog-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Cases */}
      <section className="bg-oxblood" style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div className="kicker" style={{ marginBottom: 16 }}>CASES · 2024 — 2026</div>
          <h2 className="display-condensed" style={{ margin: '0 0 56px' }}>RECENT WERK</h2>
          <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {CASES.map(c => (
              <div key={c.c} style={{ background: 'rgba(10,7,7,0.55)', border: '1px solid var(--line-hairline)' }}>
                <Placeholder label={c.c + ' — case'} ratio="4/3" tone="dark" icon="briefcase" />
                <div style={{ padding: 24 }}>
                  <div className="roman" style={{ font: '700 11px/1 var(--font-titling)', color: 'var(--brand-bone-dim)', letterSpacing: 'var(--track-widest)', marginBottom: 12 }}>
                    {c.sz} · {c.loc}
                  </div>
                  <div style={{ font: '900 24px/1 var(--font-display)', color: 'var(--brand-bone)', marginBottom: 16, letterSpacing: '-0.01em' }}>{c.c}</div>
                  <p style={{ color: 'var(--brand-bone-dim)', font: 'var(--type-body-sm)', margin: 0 }}>{c.q}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
