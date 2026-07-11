import Image from 'next/image'
import Icon from '@/components/beasting/icon'
import Faq from '@/components/beasting/faq'

const EVENTBRITE = 'https://www.eventbrite.nl/o/beasting-82957786833'
const INSTAGRAM = 'https://www.instagram.com/beasting.nl/'

const FOCUS = [
  {
    title: 'EFFECTIEF COMMUNICEREN',
    body: 'Duidelijke lijnen onder druk. Wanneer plannen sneuvelen, blijken woorden te tellen.',
  },
  {
    title: 'LEIDERSCHAP & RESPECT',
    body: 'Wie stapt naar voren als het moeilijk wordt? Wie bewaart de rust? Uw team ontdekt het zelf.',
  },
  {
    title: 'SAMEN OBSTAKELS OVERWINNEN',
    body: 'Successen behalen. Leren van fouten. Groeien als team, niet als individu.',
  },
]

const CONTACT_TILES = [
  { icon: 'phone',     kicker: 'BEL',  value: '+31 (0)6 21 999 148', href: 'tel:+31621999148',    external: false },
  { icon: 'mail',      kicker: 'MAIL', value: 'info@beasting.nl',    href: 'mailto:info@beasting.nl', external: false },
  { icon: 'instagram', kicker: 'VOLG', value: '@beasting.nl',        href: INSTAGRAM,             external: true },
]

export default function HomePage() {
  return (
    <div className="page-enter" id="top">

      {/* ── SECTION 1 — Hero ─────────────────────────────────────── */}
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
              <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer" className="btn-stencil btn-stencil--red" style={{ padding: '18px 32px' }}>
                Boek een event <Icon name="arrow-right" size={14} />
              </a>
              <a href="#over" className="btn-stencil" style={{ padding: '18px 32px' }}>
                Meer over ons
              </a>
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

      {/* ── SECTION 2 — Over Beasting ────────────────────────────── */}
      <section id="over" className="bg-oxblood" style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div className="kicker" style={{ marginBottom: 16 }}>OVER BEASTING</div>
          <h2 style={{
            font: '700 clamp(40px, 6vw, 72px)/0.95 var(--font-sans)',
            textTransform: 'uppercase', letterSpacing: '-0.01em',
            color: 'var(--brand-bone)', margin: '0 0 56px',
          }}>OUT OF YOUR COMFORT ZONE.</h2>

          <div className="over-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 64, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', margin: 0 }}>
                Beasting is een fysieke en mentale uitdaging. Je weet niet waar je aan toe bent. Grenzen worden opgezocht en vaak verlegd. Met als resultaat een verbeterde mindset en groei.
              </p>
              <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', margin: 0 }}>
                Beasting is voor individuen, sportteams, scholen en bedrijven. Voor sportieve mensen die uitgedaagd, sterker en weerbaarder willen worden. Deelnemers kunnen in het algemeen vijf kilometer ononderbroken hardlopen, hebben een zekere mate van fysieke en mentale belastbaarheid, doorzettingsvermogen en zijn teamspelers.
              </p>
              <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', margin: 0 }}>
                De programma&apos;s vinden plaats in de buitenlucht, midden in de natuur. Beastings duren minimaal 3 uur, maar kunnen uitgebreid worden tot 4, 8, 12 of 24 uur. Voorafgaand, tijdens en/of na de Beasting zijn er cateringmogelijkheden. We houden rekening met de fitheid van de deelnemers.
              </p>
            </div>

            <div style={{ border: '1px solid var(--line-hairline)', padding: 32, background: 'rgba(58,10,12,0.35)' }}>
              <div className="kicker" style={{ marginBottom: 16, color: 'var(--brand-bone)' }}>ONS TEAM</div>
              <p style={{ font: 'var(--type-body)', color: 'var(--brand-bone-dim)', margin: 0 }}>
                Ervaren sportinstructeurs en militairen die hun sporen hebben verdiend bij speciale eenheden van Defensie. Aangevuld met coaches voor gedrag, groepsdynamiek en reflecties.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) { .over-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </section>

      {/* ── SECTION 3 — Voor bedrijven ───────────────────────────── */}
      <section id="bedrijven" className="bg-ink" style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div className="kicker" style={{ marginBottom: 16 }}>ZAKELIJK · TEAMBUILDING</div>
          <h2 className="display-condensed" style={{ margin: '0 0 32px' }}>UW TEAM, ECHT GETOETST.</h2>
          <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', maxWidth: 720, marginBottom: 56 }}>
            Teambuilding, verbinding en vitaliteit worden steeds belangrijker. Voor bedrijven plannen we voorafgaand een intake. Samen bepalen we de doelstelling. Kernwaarden, missie, targets van het bedrijf nemen we mee in de basis.
          </p>

          <div className="focus-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 56 }}>
            {FOCUS.map(f => (
              <div key={f.title} style={{ background: 'transparent', border: '1px solid var(--line-hairline)', padding: 24 }}>
                <div style={{ font: '700 18px/1.15 var(--font-sans)', textTransform: 'uppercase', letterSpacing: 'var(--track-wide)', color: 'var(--brand-bone)', marginBottom: 12 }}>
                  {f.title}
                </div>
                <p style={{ font: 'var(--type-body-sm)', color: 'var(--brand-bone-dim)', margin: 0 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>

          <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer" className="btn-stencil btn-stencil--red" style={{ padding: '16px 32px' }}>
            Bekijk beschikbare events <Icon name="arrow-right" size={14} />
          </a>
        </div>
        <style>{`
          @media (max-width: 880px) { .focus-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── SECTION 4 — FAQ ──────────────────────────────────────── */}
      <section id="faq" className="bg-bone" style={{ padding: '120px 0' }}>
        <div className="wrap-tight">
          <div className="kicker" style={{ marginBottom: 16, color: '#6a5a52' }}>VEELGESTELDE VRAGEN</div>
          <h2 className="display-condensed" style={{ color: 'var(--ink-black)', margin: '0 0 48px' }}>GOED OM TE WETEN.</h2>
          <Faq />
        </div>
      </section>

      {/* ── SECTION 5 — Contact ──────────────────────────────────── */}
      <section id="contact" className="bg-oxblood" style={{ padding: '120px 0' }}>
        <div className="wrap" style={{ maxWidth: 600, textAlign: 'center' }}>
          <div className="kicker" style={{ marginBottom: 16 }}>CONTACT</div>
          <h2 className="display-condensed" style={{ margin: '0 0 24px' }}>KLAAR VOOR DE VOLGENDE STAP?</h2>
          <p style={{ font: 'var(--type-body-lg)', color: 'var(--brand-bone-dim)', margin: '0 0 48px' }}>
            Boek direct een event, of neem contact op voor een vrijblijvend gesprek over een programma op maat.
          </p>

          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
            {CONTACT_TILES.map(t => (
              <a
                key={t.kicker}
                href={t.href}
                {...(t.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  border: '1px solid var(--line-hairline)',
                  padding: '28px 16px',
                  textDecoration: 'none',
                  color: 'var(--brand-bone)',
                }}
              >
                <Icon name={t.icon} size={24} color="var(--brand-bone)" />
                <span className="kicker" style={{ color: 'var(--brand-bone)' }}>{t.kicker}</span>
                <span style={{ font: 'var(--type-body-sm)', color: 'var(--brand-bone-dim)' }}>{t.value}</span>
              </a>
            ))}
          </div>

          <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer" className="btn-stencil btn-stencil--solid" style={{ padding: '18px 36px' }}>
            Boek een event op Eventbrite <Icon name="arrow-right" size={14} />
          </a>
        </div>
        <style>{`
          @media (max-width: 600px) { .contact-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

    </div>
  )
}
