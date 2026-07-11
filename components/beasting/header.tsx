'use client'

import { useState, useEffect } from 'react'
import Icon from './icon'

const NAV = [
  { id: 'over',      label: 'Over ons',  href: '#over' },
  { id: 'bedrijven', label: 'Bedrijven', href: '#bedrijven' },
  { id: 'contact',   label: 'Contact',   href: '#contact' },
]

const EVENTBRITE = 'https://www.eventbrite.nl/o/beasting-82957786833'
const INSTAGRAM = 'https://www.instagram.com/beasting.nl/'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(10,7,7,0.95)' : 'rgba(10,7,7,0.55)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: '1px solid var(--line-hairline-dark)',
        transition: 'background 220ms var(--ease-out)',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '16px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div
              role="img"
              aria-label="Beasting"
              style={{
                width: 125,
                height: 56,
                backgroundColor: 'var(--brand-red)',
                WebkitMaskImage: 'url(/beasting-logo-white.png)',
                maskImage: 'url(/beasting-logo-white.png)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                flexShrink: 0,
              }}
            />
          </a>

          <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="nav-desktop">
            {NAV.map(it => (
              <a key={it.id} href={it.href} style={{
                font: '500 12px/1 var(--font-sans)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--track-widest)',
                color: 'var(--brand-bone-dim)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                paddingBottom: 6,
                borderBottom: '1.5px solid transparent',
                transition: 'color 220ms, border-color 220ms',
              }}>
                {it.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Beasting op Instagram"
              className="nav-instagram"
              style={{
                color: 'var(--brand-bone-dim)',
                display: 'inline-flex',
                alignItems: 'center',
                padding: 8,
                transition: 'color 220ms',
              }}
            >
              <Icon name="instagram" size={20} />
            </a>
            <a
              href={EVENTBRITE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-stencil btn-stencil--red nav-cta"
              style={{ padding: '10px 20px', fontSize: 11 }}
            >
              Boek een event <Icon name="arrow-right" size={14} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="nav-mobile-trigger"
              style={{
                display: 'none',
                background: 'transparent',
                border: '1px solid var(--brand-bone)',
                color: 'var(--brand-bone)',
                width: 40, height: 40,
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name="menu" size={18} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(10,7,7,0.97)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            padding: 48,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 48 }}>
            <button
              style={{ background: 'transparent', border: 'none', color: 'var(--brand-bone)', cursor: 'pointer' }}
              aria-label="Sluit menu"
            >
              <Icon name="x" size={24} />
            </button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {NAV.map(it => (
              <a key={it.id} href={it.href} onClick={() => setOpen(false)} style={{
                font: '900 36px/1 var(--font-display)',
                textTransform: 'uppercase',
                color: 'var(--brand-bone)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}>{it.label}</a>
            ))}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                font: '900 36px/1 var(--font-display)',
                textTransform: 'uppercase',
                color: 'var(--brand-bone)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              <Icon name="instagram" size={30} /> Instagram
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-desktop  { display: none !important; }
          .nav-cta      { display: none !important; }
          .nav-instagram { display: none !important; }
          .nav-mobile-trigger { display: inline-flex !important; }
        }
      `}</style>
    </>
  )
}
