'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from './icon'

const NAV = [
  { id: 'home',       label: 'Home',         href: '/' },
  { id: 'bedrijven',  label: 'Bedrijven',    href: '/bedrijven' },
  { id: 'programmas', label: "Programma's",  href: '/programmas' },
  { id: 'over',       label: 'Over ons',     href: '/over' },
  { id: 'contact',    label: 'Contact',      href: '/contact' },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

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
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
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
          </Link>

          <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="nav-desktop">
            {NAV.map(it => {
              const active = it.href === '/' ? pathname === '/' : pathname.startsWith(it.href)
              return (
                <Link key={it.id} href={it.href} style={{
                  font: '500 12px/1 var(--font-sans)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--track-widest)',
                  color: active ? 'var(--brand-bone)' : 'var(--brand-bone-dim)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  paddingBottom: 6,
                  borderBottom: active ? '1.5px solid var(--brand-bone)' : '1.5px solid transparent',
                  transition: 'color 220ms, border-color 220ms',
                }}>
                  {active && <span className="diamond" />}
                  {it.label}
                </Link>
              )
            })}
          </nav>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Link href="/contact" className="btn-stencil btn-stencil--red nav-cta" style={{ padding: '10px 20px', fontSize: 11 }}>
              Plan een intake <Icon name="arrow-right" size={14} />
            </Link>
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
              <Link key={it.id} href={it.href} style={{
                font: '900 36px/1 var(--font-display)',
                textTransform: 'uppercase',
                color: 'var(--brand-bone)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}>{it.label}</Link>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-desktop  { display: none !important; }
          .nav-cta      { display: none !important; }
          .nav-mobile-trigger { display: inline-flex !important; }
        }
      `}</style>
    </>
  )
}
