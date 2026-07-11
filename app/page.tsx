import Link from 'next/link'
import Image from 'next/image'
import Icon from '@/components/beasting/icon'
import Placeholder from '@/components/beasting/placeholder'
import StatsTicker from '@/components/beasting/home/stats-ticker'
import TestimonialsSection from '@/components/beasting/home/testimonials-section'
import CtaBand from '@/components/beasting/cta-band'

const PROGRAMMES = [
  {
    id: '3-6',
    duration: '3 — 6 UUR',
    name: 'BLOEDPROEF',
    pitch: 'Halve dag. Volledige reset. Voor teams die willen voelen wat samenwerken onder druk betekent.',
    spec: ['8–40 personen', 'Buitenlocaties NL', 'Vanaf €165 p.p.'],
    icon: 'flame',
    featured: false,
    image: '/programma-bloed.png',
  },
  {
    id: '12-24',
    duration: '12 — 24 UUR',
    name: 'NACHTRAID',
    pitch: 'Een etmaal in de modder. Geen telefoon, geen comfort, geen uitvluchten. Voor teams die echt iets willen leren.',
    spec: ['12–60 personen', 'Veluwe / Brabant', 'Vanaf €420 p.p.'],
    icon: 'mountain',
    featured: false,
    image: '/programma-nacht.png',
  },
  {
    id: 'bespoke',
    duration: 'OP MAAT',
    name: 'BESPOKE COMPANY',
    pitch: 'Volledig op uw doelstellingen ingericht. Leiderschap, verandering, onboarding — wij vertalen het naar de buitenlucht.',
    spec: ['20–250 personen', 'Locatie naar wens', 'Op offerte'],
    icon: 'compass',
    featured: false,
    image: '/programma-bespoke.png',
  },
  {
    id: 'murph',
    duration: '24 MEI 2026',
    name: 'THE MURPH',
    pitch: 'De legendarische hero WOD. Olympisch Stadion Amsterdam. Open inschrijving — bedrijfsteams welkom.',
    spec: ['Solo of team-van-4', 'Olympisch Stadion', 'Limited tickets'],
    icon: 'target',
    featured: true,
    image: '/programma-murph.png',
  },
]

const INSTRUCTORS = [
  { name: 'BAS OFFENBERG',  role: 'FOUNDER & HEAD INSTRUCTOR', unit: 'Sportinstructeur · Korps Mariniers (RES)' },
  { name: 'INSTRUCTEUR 02', role: 'SENIOR INSTRUCTOR',          unit: 'Korps Mariniers · 13 jaar actieve dienst' },
  { name: 'INSTRUCTEUR 03', role: 'INSTRUCTOR',                 unit: 'Korps Commandotroepen · veteraan' },
  { name: 'INSTRUCTEUR 04', role: 'MEDIC & SAFETY OFFICER',     unit: 'Defensie Geneeskundige Dienst' },
]

function ProgrammeCard({ p }: { p: typeof PROGRAMMES[0] }) {
  return (
    <Link href="/programmas" style={{
      display: 'flex',
      flexDirection: 'column',
      background: p.featured ? 'var(--ink-charcoal)' : 'rgba(10,7,7,0.55)',
      border: p.featured ? '1.5px solid var(--brand-bone)' : '1px solid var(--line-hairline)',
      color: 'var(--brand-bone)',
      textDecoration: 'none',
      overflow: 'hidden',
      minHeight: 460,
    }}>
      <div style={{ padding: '24px 28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div className="roman" style={{ font: '700 13px/1 var(--font-titling)', color: p.featured ? 'var(--brand-bone)' : 'var(--brand-bone-dim)', letterSpacing: 'var(--track-widest)' }}>
          {p.duration}
        </div>
        <Icon name={p.icon} size={28} color={p.featured ? 'var(--brand-bone)' : 'var(--brand-bone-dim)'} stroke={1.5} />
      </div>
      <div style={{ padding: '16px 28px 24px' }}>
        <div style={{ font: '900 clamp(40px, 4.5vw, 64px)/0.92 var(--font-display)', color: 'var(--brand-bone)', letterSpacing: '-0.01em' }}>
          {p.name}
        </div>
      </div>
      <div style={{ padding: '0 28px', flex: 1, display: 'flex', alignItems: 'stretch' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/10',
          minHeight: 140,
          overflow: 'hidden',
          border: p.featured ? '1px solid rgba(243,238,229,0.22)' : '1px solid var(--line-hairline)',
        }}>
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <p style={{ padding: '20px 28px 16px', color: p.featured ? 'rgba(243,238,229,0.85)' : 'var(--brand-bone-dim)', font: 'var(--type-body-sm)', margin: 0 }}>
        {p.pitch}
      </p>
      <div style={{
        padding: '16px 28px 20px',
        borderTop: '1px solid ' + (p.featured ? 'rgba(243,238,229,0.22)' : 'var(--line-hairline)'),
        display: 'flex', flexDirection: 'column', gap: 6,
      }}>
        {p.spec.map((s, i) => (
          <div key={i} style={{
            font: '500 11px/1.4 var(--font-sans)', textTransform: 'uppercase', letterSpacing: 'var(--track-wider)',
            color: p.featured ? 'var(--brand-bone)' : 'var(--brand-bone-dim)',
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span>{s}</span>
            {i === 0 && <Icon name="arrow-right" size={14} />}
          </div>
        ))}
      </div>
    </Link>
  )
}

export default function HomePage() {
  return (
    <div className="page-enter">

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '92vh', overflow: 'hidden', background: 'var(--ink-black)' }}>
        <Image
          src="/hero-home.png"
          alt="Beasting team in actie tijdens een challenge"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,7,7,0.55) 0%, rgba(10,7,7,0.85) 100%), radial-gradient(ellipse at center, rgba(141,38,46,0.22) 0%, transparent 70%)',
        }} />
        <div className="wrap" style={{
          position: 'relative', zIndex: 2,
          minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '120px 48px 96px',
        }}>
          <div className="kicker" style={{ marginBottom: 24 }}>BEASTING · OUT OF YOUR COMFORT ZONE</div>
          <h1 style={{
            font: '900 clamp(80px, 14vw, 220px)/0.85 var(--font-display)',
            color: 'var(--brand-red)', margin: '0 0 24px', letterSpacing: '-0.02em', maxWidth: '14ch',
            textShadow: '0 2px 0 rgba(10,7,7,0.7), 0 6px 16px rgba(10,7,7,0.5)',
          }}>GRENZEN<br />VERLEGGEN.</h1>
          <div className="hero-bottom" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, alignItems: 'flex-end' }}>
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', maxWidth: 540, marginBottom: 0 }}>
              Wij organiseren fysieke en mentale challenges voor bedrijven, scholen en teams. 3 tot 24 uur in de buitenlucht. Geleid door ervaren sportinstructeurs en militairen van Nederlandse Defensie-eenheden.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <Link href="/contact" className="btn-stencil btn-stencil--red" style={{ padding: '18px 32px' }}>
                Plan een intake <Icon name="arrow-right" size={14} />
              </Link>
              <Link href="/programmas" className="btn-stencil" style={{ padding: '18px 32px' }}>
                Programma&apos;s
              </Link>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
          borderTop: '1px solid var(--line-hairline)',
          background: 'rgba(10,7,7,0.6)', backdropFilter: 'blur(4px)',
          padding: '14px 48px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap', alignItems: 'center', font: '500 12px/1.4 var(--font-sans)', textTransform: 'uppercase', letterSpacing: 'var(--track-widest)', color: 'var(--brand-bone-dim)' }}>
            {['EST. 2024', 'AMSTERDAM, NL', 'B2B / TEAMS / SCHOLEN', '3 — 24 UUR'].map((it, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {i > 0 && <span style={{ opacity: 0.4, margin: '0 4px' }}>•</span>}
                {it}
              </span>
            ))}
          </div>
          <div className="kicker" style={{ color: 'var(--brand-bone)' }}>↓ SCROLL</div>
        </div>
        <style>{`
          @media (max-width: 880px) { .hero-bottom { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Sponsor strip */}
      <div style={{ background: 'var(--ink-black)', borderTop: '1px solid var(--line-hairline-dark)', borderBottom: '1px solid var(--line-hairline-dark)', padding: '32px 0' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div className="kicker" style={{ flexShrink: 0 }}>VERTROUWD DOOR</div>
          <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end' }}>
            <Image src="/Ontwerp zonder titel-67.png"  alt="Nocco"  width={120} height={32} style={{ height: 32, width: 'auto', objectFit: 'contain', opacity: 0.85 }} />
            <Image src="/sponsor-zeuz.webp"   alt="Zeuz"   width={120} height={28} style={{ height: 28, width: 'auto', objectFit: 'contain', opacity: 0.85 }} />
            <Image src="/sponsor-fitaid.png"  alt="FitAid" width={120} height={28} style={{ height: 28, width: 'auto', objectFit: 'contain', filter: 'invert(1) brightness(1.4)', opacity: 0.85 }} />
            <div className="roman" style={{ font: '700 14px/1 var(--font-titling)', color: 'var(--brand-bone-dim)', letterSpacing: 'var(--track-widest)' }}>+ 22 NL BEDRIJVEN</div>
          </div>
        </div>
      </div>

      {/* Programmes */}
      <section className="bg-oxblood" style={{ padding: '128px 0' }}>
        <div className="wrap">
          <div className="section-head" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'flex-end', marginBottom: 56, borderBottom: '1px solid var(--line-hairline-dark)', paddingBottom: 32 }}>
            <div>
              <div className="kicker" style={{ marginBottom: 16 }}>PROGRAMMA&apos;S · 4 FORMATS</div>
              <h2 className="display-condensed" style={{ margin: 0 }}>KIES UW<br />WEDSTRIJD</h2>
            </div>
            <Link href="/programmas" className="btn-stencil" style={{ padding: '14px 24px' }}>
              Alle programma&apos;s <Icon name="arrow-right" size={14} />
            </Link>
          </div>
          <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {PROGRAMMES.map(p => <ProgrammeCard key={p.id} p={p} />)}
          </div>
        </div>
        <style>{`
          @media (max-width: 1100px) { .prog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px)  { .prog-grid { grid-template-columns: 1fr !important; } .section-head { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <StatsTicker />

      {/* Instructors */}
      <section className="bg-oxblood" style={{ padding: '128px 0' }}>
        <div className="wrap">
          <div className="section-head" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'flex-end', marginBottom: 56, paddingBottom: 32, borderBottom: '1px solid var(--line-hairline)' }}>
            <div>
              <div className="kicker" style={{ marginBottom: 16 }}>HET TEAM · MILITAIR-GELEID</div>
              <h2 className="display-condensed" style={{ margin: 0 }}>UW DAG STAAT<br />IN VERTROUWDE HANDEN</h2>
            </div>
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', marginBottom: 0 }}>
              Onze instructeurs zijn ervaren sportinstructeurs en militairen van Nederlandse Defensie-eenheden — Korps Mariniers, Commandotroepen, Defensie Geneeskundige Dienst. Hard waar het moet, veilig waar het hoort.
            </p>
          </div>
          <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {INSTRUCTORS.map(i => (
              <div key={i.name} style={{ background: 'rgba(58,10,12,0.45)', border: '1px solid var(--line-hairline)' }}>
                <Placeholder label={"PORTRAIT — " + i.name} ratio="3/4" tone="red" icon="shield" />
                <div style={{ padding: 24, borderTop: '1px solid var(--line-hairline)' }}>
                  <div className="roman" style={{ font: '700 11px/1 var(--font-titling)', color: 'var(--brand-bone-dim)', letterSpacing: 'var(--track-widest)', marginBottom: 8 }}>
                    {i.role}
                  </div>
                  <div style={{ font: '900 28px/1 var(--font-display)', color: 'var(--brand-bone)', marginBottom: 12, letterSpacing: '-0.01em' }}>
                    {i.name}
                  </div>
                  <div style={{ font: 'var(--type-body-sm)', color: 'var(--brand-bone-dim)' }}>{i.unit}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link href="/over" className="btn-stencil" style={{ padding: '14px 28px' }}>
              Over het team <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaBand />
    </div>
  )
}
