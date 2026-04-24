'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useBooking } from './booking-provider'

gsap.registerPlugin(useGSAP)

const NAV_LINKS = [
  { href: '#apartments', label: 'Apartments' },
  { href: '#location', label: 'Schnann' },
  { href: '#arlberg', label: 'Arlberg' },
  { href: '#journal', label: 'Journal' },
]

// ── Icons ──────────────────────────────────────────────────────────────────

function HamburgerIcon() {
  return (
    <svg width="15" height="10" viewBox="0 0 15 10" fill="currentColor" aria-hidden="true">
      <rect y="0" width="15" height="1.5" rx="0.75" />
      <rect y="4.25" width="15" height="1.5" rx="0.75" />
      <rect y="8.5" width="15" height="1.5" rx="0.75" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
      <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="5" height="9" viewBox="0 0 5 9" fill="none" aria-hidden="true">
      <path d="M1 1L4 4.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81 19.79 19.79 0 0 1 2 1.18 2 2 0 0 1 4 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

// ── Circular badge ─────────────────────────────────────────────────────────

function CircularBadge() {
  return (
    <svg width="118" height="118" viewBox="0 0 118 118" aria-hidden="true">
      <defs>
        <path id="badgePath" d="M59,59 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1-86,0" />
      </defs>
      <circle cx="59" cy="59" r="43" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="0.75" />
      <text fill="white" fontSize="8.0" letterSpacing="2.6" fontFamily="var(--font-sans)">
        <textPath href="#badgePath">HAUS ALPZEIT · SCHNANN · ARLBERG · </textPath>
      </text>
      <text x="59" y="66" textAnchor="middle" fill="white" fontSize="30" fontFamily="var(--font-serif)" fontWeight="600">
        A
      </text>
    </svg>
  )
}

// ── Glass bar styles ───────────────────────────────────────────────────────

const glassAt = (scrolled: boolean) => ({
  background: scrolled ? 'rgba(120,95,75,0.28)' : 'rgba(120,95,75,0.18)',
  backdropFilter: scrolled ? 'blur(14px) saturate(180%)' : 'blur(8px) saturate(180%)',
  WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(180%)' : 'blur(8px) saturate(180%)',
  borderTop:    scrolled ? '1.5px solid rgba(255,255,255,0.35)' : '1.5px solid rgba(255,255,255,0.18)',
  borderLeft:   scrolled ? '1.5px solid rgba(255,255,255,0.28)' : '1.5px solid rgba(255,255,255,0.12)',
  borderRight:  scrolled ? '1.5px solid rgba(255,255,255,0.28)' : '1.5px solid rgba(255,255,255,0.12)',
  borderBottom: scrolled ? '1.5px solid rgba(255,255,255,0.25)' : '1.5px solid rgba(255,255,255,0.10)',
  boxShadow: scrolled
    ? [
        'inset 0 1.5px 1px 0 rgba(255,240,220,0.35)',
        'inset 0 -1px 1px 0 rgba(255,255,255,0.11)',
        'inset 1px 0 1px 0 rgba(255,255,255,0.14)',
        'inset -1px 0 1px 0 rgba(255,255,255,0.14)',
        '0 8px 32px rgba(0,0,0,0.12)',
        '0 2px 8px rgba(0,0,0,0.06)',
      ].join(', ')
    : [
        'inset 0 1.5px 1px 0 rgba(255,240,220,0.22)',
        'inset 0 -1px 1px 0 rgba(255,255,255,0.06)',
        'inset 1px 0 1px 0 rgba(255,255,255,0.08)',
        'inset -1px 0 1px 0 rgba(255,255,255,0.08)',
      ].join(', '),
  transition: 'background 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
})

// ── Component ──────────────────────────────────────────────────────────────

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { open: openBooking } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useGSAP(() => {
    const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (noMotion) {
      gsap.set('.hero-badge', { opacity: 0.72 })
      return
    }

    gsap.timeline()
      .fromTo('.hero-nav-inner',  { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' })
      .fromTo('.hero-headline',   { opacity: 0, y: 26 },  { opacity: 1, y: 0, duration: 0.70, ease: 'power2.out' }, '-=0.28')
      .fromTo('.hero-badge',      { opacity: 0 },          { opacity: 0.72,    duration: 0.60, ease: 'power2.out' }, '-=0.30')
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 560 }}
    >
      {/* Background image */}
      <Image
        src="/71136261-mooi-alpine-chalet-met-verbijsterend-berg-backdrop-in-sereen-dorp-instelling-foto.jpg"
        alt="Haus Alpzeit, Schnann, Austria"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.30)' }} />

      {/* White fade — bottom 50%, sits above image+overlay, below text */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '50%',
          background: 'linear-gradient(to top, #f5f5f7 0%, #f5f5f7 5%, transparent 100%)',
          zIndex: 5,
        }}
      />

      {/* ── NAV OVERLAY ───────────────────────────────────────────────────── */}
      <nav ref={navRef} className="absolute top-0 left-0 right-0 z-20" aria-label="Site navigation">

        {/* Full-width glass bar — intensity driven by scroll state */}
        <div className="hero-nav-inner flex items-center px-6 py-[18px] relative" style={glassAt(scrolled)}>

          {/* LEFT — desktop items */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="flex items-center gap-[9px] px-4 text-white type-caption hover:opacity-70 transition-opacity cursor-pointer border-none bg-transparent"
            >
              <HamburgerIcon /> Menu
            </button>
            <span className="w-px h-5 shrink-0 mx-1" style={{ background: 'rgba(255,255,255,0.20)' }} />
            <button className="flex items-center gap-[6px] px-3 text-white type-caption hover:opacity-70 transition-opacity cursor-pointer border-none bg-transparent">
              en <ChevronDown />
            </button>
            <span className="w-px h-5 shrink-0 mx-1" style={{ background: 'rgba(255,255,255,0.20)' }} />
            <a
              href="#apartments"
              className="flex items-center gap-[6px] px-4 text-white type-caption no-underline hover:opacity-70 transition-opacity"
            >
              Apartments <ChevronRight />
            </a>
          </div>

          {/* LEFT — mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden flex flex-col gap-[5px] p-1 text-white bg-transparent border-none cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="block w-5 h-0.5 bg-white rounded" />
            <span className="block w-5 h-0.5 bg-white rounded" />
            <span className="block w-5 h-0.5 bg-white rounded" />
          </button>

          {/* CENTER — wordmark */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none select-none">
            <div className="type-wordmark text-white" style={{ fontSize: 48, lineHeight: 1, textShadow: '0 2px 20px rgba(0,0,0,0.25)' }}>
              Alpzeit
            </div>
          </div>

          {/* RIGHT — icons + Check availability */}
          <div className="flex items-center ml-auto" style={{ gap: 20 }}>
            <div className="hidden md:flex items-center" style={{ gap: 10 }}>
              <a href="tel:+43" className="icon-btn" aria-label="Call us">
                <PhoneIcon />
              </a>
              <a href="mailto:hello@alpzeit.at" className="icon-btn" aria-label="Email us">
                <MailIcon />
              </a>
              <a href="#" className="icon-btn" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
            <button
              onClick={openBooking}
              className="text-white rounded-full border-none cursor-pointer"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                background: '#2D1E17',
                border: '1.5px solid rgba(255,255,255,0.15)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                letterSpacing: '0.02em',
                padding: '10px 28px',
                transition: 'background 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#3d2a20')}
              onMouseLeave={e => (e.currentTarget.style.background = '#2D1E17')}
            >
              Check availability
            </button>
          </div>
        </div>

        {/* Dropdown — always in DOM for smooth close animation */}
        <div
          aria-hidden={!menuOpen}
          style={{
            position: 'absolute',
            top: 'calc(100% + 12px)',
            left: 24,
            width: 280,
            maxWidth: 'calc(100vw - 48px)',
            zIndex: 30,
            transformOrigin: 'top left',
            borderRadius: 20,
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(28px) saturate(180%)',
            WebkitBackdropFilter: 'blur(28px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.22)',
            boxShadow: [
              'inset 0 1.5px 1px 0 rgba(255,255,255,0.40)',
              'inset 0 -1px 1px 0 rgba(255,255,255,0.12)',
              '0 16px 48px rgba(0,0,0,0.20)',
              '0 4px 16px rgba(0,0,0,0.08)',
            ].join(', '),
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
            pointerEvents: menuOpen ? 'auto' : 'none',
            transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
          }}
        >
          <div style={{ padding: '6px 0' }}>
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={() => setHoveredItem(link.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className="no-underline"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  fontSize: 15,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: hoveredItem === link.href ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.92)',
                  background: hoveredItem === link.href ? 'rgba(255,255,255,0.08)' : 'transparent',
                  borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  transition: 'background 0.2s ease, color 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                {link.label}
                <span style={{
                  opacity: hoveredItem === link.href ? 1 : 0,
                  transform: hoveredItem === link.href ? 'translateX(0)' : 'translateX(-4px)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  color: '#836953',
                  fontSize: 13,
                }}>→</span>
              </a>
            ))}
            <div style={{ height: 1, margin: '4px 20px 0', background: 'rgba(255,255,255,0.10)' }} />
            <button
              onClick={() => { setMenuOpen(false); openBooking() }}
              onMouseEnter={() => setHoveredItem('book')}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '18px 20px 14px',
                fontSize: 15,
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                letterSpacing: '0.01em',
                color: hoveredItem === 'book' ? '#836953' : 'rgba(168,150,132,0.90)',
                background: hoveredItem === 'book' ? 'rgba(168,150,132,0.15)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.2s ease, color 0.2s ease',
              }}
            >
              Check availability
              <span style={{
                opacity: hoveredItem === 'book' ? 1 : 0,
                transform: hoveredItem === 'book' ? 'translateX(0)' : 'translateX(-4px)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                color: '#836953',
                fontSize: 13,
              }}>→</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── HEADLINE ──────────────────────────────────────────────────────── */}
      <div className="hero-headline absolute inset-0 flex items-center justify-center z-10 text-center px-6 pointer-events-none">
        <div className="flex flex-col items-center">

          {/* Tagline with flanking dividers */}
          <div className="flex items-center gap-4 mb-6">
            <span style={{ display: 'block', width: 40, height: 1, background: 'rgba(255,255,255,0.40)' }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              letterSpacing: '0.30em',
              color: 'rgba(255,255,255,0.85)',
              textTransform: 'uppercase',
              textShadow: '0 1px 12px rgba(0,0,0,0.20)',
            }}>
              Schnann · Arlberg
            </span>
            <span style={{ display: 'block', width: 40, height: 1, background: 'rgba(255,255,255,0.40)' }} />
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 1.08,
              color: '#fff',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 40px rgba(0,0,0,0.18)',
              margin: 0,
            }}
          >
            Close to the Arlberg.
            <br />
            Far from the <em style={{ color: '#836953', fontStyle: 'italic' }}>noise</em>.
          </h1>

          {/* Hero CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: '2.5rem', pointerEvents: 'auto', justifyContent: 'center' }}>
            <button
              onClick={openBooking}
              className="hero-cta-primary"
            >
              Check availability
            </button>
            <a
              href="#apartments"
              className="hero-secondary-cta"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('apartments')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Discover the apartments
              <span className="hero-arrow" style={{ display: 'inline-block' }}>↓</span>
            </a>
          </div>

        </div>
      </div>

      {/* ── CIRCULAR BADGE ────────────────────────────────────────────────── */}
      <div
        className="hero-badge absolute z-10 hidden sm:block"
        style={{ bottom: '6vh', right: '5vw', opacity: 0 }}
      >
        <CircularBadge />
      </div>
    </section>
  )
}
