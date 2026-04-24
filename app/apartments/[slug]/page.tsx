import { notFound } from 'next/navigation'
import Image from 'next/image'
import Nav from '@/components/features/nav'
import { SiteFooter } from '@/components/features/site-footer'
import { ApartmentPageSidebar } from '@/components/features/apartment-page-sidebar'
import { apartments } from '@/lib/mock-data'

// ── Slug → apartment ID ────────────────────────────────────────────────────

const SLUG_TO_ID: Record<string, string> = {
  'the-lodge': 'lodge',
  'the-hearth': 'hearth',
  'the-eyrie': 'eyrie',
}

// ── Per-apartment static content ───────────────────────────────────────────

const HERO_IMAGE: Record<string, string> = {
  lodge: '/lodge-interior.jpg',
  hearth: '/schnann-sommer.webp',
  eyrie: '/verwallsee.jpg',
}

const LONG_DESCRIPTION: Record<string, string[]> = {
  lodge: [
    'Spread across two floors, The Lodge is the largest of the three apartments. The kitchen opens onto a long wooden dining table that comfortably seats twelve, with two separate sitting rooms for quiet evenings and louder ones.',
    'Five bedrooms share three bathrooms. A wood-burning stove in the main living room, large south-facing windows onto the mountains, and a private entrance from the side of the house.',
    '[Placeholder — additional notes to be filled in by the owner.]',
  ],
  hearth: [
    'The Hearth is a two-floor apartment of wood and stone. An open kitchen with a central island, three bedrooms, and a south-facing balcony that gets the afternoon sun.',
    'Designed for a family or two couples. The living room has a wood-burning stove and direct access to the terrace, with views across the valley.',
    '[Placeholder — additional notes to be filled in by the owner.]',
  ],
  eyrie: [
    'The Eyrie sits at the top of the building — a top-floor studio with a skylight over the bed. In clear weather, the Arlberg peaks line up through it.',
    'A quiet space for one or two people. Small but thoughtfully arranged, with a fully equipped kitchenette, a fold-out desk, and more light than the floor plan suggests.',
    '[Placeholder — additional notes to be filled in by the owner.]',
  ],
}

const GALLERY_IMAGES: Record<string, Array<string | null>> = {
  lodge: ['/lodge-interior.jpg', '/haus-alpzeit-exterior.jpg', null, null, null, null],
  hearth: ['/schnann-sommer.webp', '/haus-alpzeit-exterior.jpg', null, null, null, null],
  eyrie: ['/verwallsee.jpg', '/haus-alpzeit-exterior.jpg', null, null, null, null],
}

const AMENITIES = [
  'Fully equipped kitchen',
  'Wood-burning stove',
  'Wi-Fi throughout',
  'Washer and dryer',
  'South-facing balcony',
  'Ski storage with boot warmers',
  'Private parking (2 spots)',
  'Bed linen and towels included',
]

// ── Static params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(SLUG_TO_ID).map((slug) => ({ slug }))
}

// ── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata(props: PageProps<'/apartments/[slug]'>) {
  const { slug } = await props.params
  const id = SLUG_TO_ID[slug]
  const apartment = apartments.find((a) => a.id === id)
  if (!apartment) return {}
  return {
    title: `${apartment.name} — Haus Alpzeit, Schnann`,
    description: apartment.description,
  }
}

// ── Spec icons ─────────────────────────────────────────────────────────────

function AreaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  )
}

function BedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 9V19M22 9V19M2 15h20M2 9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5" />
      <path d="M6 9v2M10 9v2" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85" />
    </svg>
  )
}

function PriceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9.5a4 4 0 1 0 0 5M12 7v1M12 16v1" />
    </svg>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default async function ApartmentPage(props: PageProps<'/apartments/[slug]'>) {
  const { slug } = await props.params
  const id = SLUG_TO_ID[slug]
  if (!id) notFound()

  const apartment = apartments.find((a) => a.id === id)
  if (!apartment) notFound()

  const heroImage = HERO_IMAGE[id]
  const longDesc = LONG_DESCRIPTION[id] ?? []
  const galleryImages = GALLERY_IMAGES[id] ?? []

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <div style={{ position: 'relative', height: '60vh', minHeight: 400, overflow: 'hidden' }}>
        <Image
          src={heroImage}
          alt={`${apartment.name} — Alpzeit Apartments, Schnann`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.22)', pointerEvents: 'none' }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            margin: '0 0 14px',
          }}>
            Apartment
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            textShadow: '0 2px 32px rgba(0,0,0,0.20)',
            margin: '0 0 16px',
          }}>
            {apartment.name}
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.88)',
            maxWidth: 560,
            lineHeight: 1.5,
            margin: 0,
            textShadow: '0 1px 12px rgba(0,0,0,0.15)',
          }}>
            {apartment.description}
          </p>
        </div>
      </div>

      {/* ── Key specs row ── */}
      <div style={{ background: '#FAF8F5', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-20 py-8"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '28px 48px' }}
        >
          {[
            { icon: <AreaIcon />, text: `${apartment.area} m²` },
            { icon: <BedIcon />, text: `${apartment.rooms} bedroom${apartment.rooms !== 1 ? 's' : ''}` },
            { icon: <PeopleIcon />, text: `Sleeps ${apartment.sleeps}` },
            { icon: <PriceIcon />, text: `From €${apartment.pricePerNight} / night` },
          ].map(({ icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: 'rgba(0,0,0,0.45)', display: 'flex' }}>{icon}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(0,0,0,0.62)', fontWeight: 400 }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main content + sidebar ── */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 py-16 md:py-20">
        <div className="md:flex md:items-start" style={{ gap: 64 }}>

          {/* Left column */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* About section — two columns */}
            <section style={{ paddingBottom: 64, borderBottom: '1px solid rgba(0,0,0,0.07)', marginBottom: 64 }}>
              <div className="md:flex" style={{ gap: 48 }}>
                <div className="md:block" style={{ flexShrink: 0, width: 180, marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 0 }}>
                    <span style={{ display: 'block', width: 6, height: 6, borderRadius: '50%', background: '#836953', flexShrink: 0 }} />
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 11,
                      fontWeight: 500,
                      color: 'rgba(0,0,0,0.42)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                    }}>
                      About this apartment
                    </span>
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  {longDesc.map((para, i) => (
                    <p key={i} style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      lineHeight: 1.70,
                      color: 'rgba(0,0,0,0.72)',
                      margin: i < longDesc.length - 1 ? '0 0 18px' : 0,
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            {/* Gallery */}
            <section style={{ paddingBottom: 64, borderBottom: '1px solid rgba(0,0,0,0.07)', marginBottom: 64 }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 500,
                color: 'rgba(0,0,0,0.42)',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                margin: '0 0 24px',
              }}>
                ● Photos
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 16,
                }}
                className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              >
                {galleryImages.map((src, i) => (
                  <div
                    key={i}
                    style={{
                      aspectRatio: '4/3',
                      borderRadius: 12,
                      overflow: 'hidden',
                      background: src ? 'transparent' : '#ede9e3',
                      position: 'relative',
                    }}
                  >
                    {src ? (
                      <Image
                        src={src}
                        alt={`${apartment.name} — photo ${i + 1}`}
                        fill
                        className="object-cover gallery-photo"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 11,
                          color: 'rgba(0,0,0,0.28)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}>
                          Photo {i + 1}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Amenities */}
            <section style={{ paddingBottom: 64, borderBottom: '1px solid rgba(0,0,0,0.07)', marginBottom: 64 }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 500,
                color: 'rgba(0,0,0,0.42)',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                margin: '0 0 24px',
              }}>
                ● What's inside
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px 32px',
              }}>
                {AMENITIES.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{
                      display: 'block',
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: '#836953',
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9375rem',
                      color: 'rgba(0,0,0,0.70)',
                      lineHeight: 1.4,
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Back link */}
            <a href="/#apartments" className="apt-back-link">
              ← Back to all apartments
            </a>

          </div>

          {/* Sidebar */}
          <ApartmentPageSidebar apartment={apartment} />

        </div>
      </div>

      <SiteFooter />
    </>
  )
}
