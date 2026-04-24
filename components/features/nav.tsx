'use client'

import { useState } from 'react'
import { useBooking } from './booking-provider'

const NAV_LINKS = [
  { href: '/#apartments', label: 'Apartments' },
  { href: '/#location', label: 'Schnann' },
  { href: '/#arlberg', label: 'Arlberg' },
  { href: '/#journal', label: 'Journal' },
]

const linkClass =
  'type-micro text-white no-underline hover:no-underline transition-opacity duration-[180ms] cursor-pointer bg-transparent border-none p-0'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { open: openBooking } = useBooking()

  return (
    <nav
      className="sticky top-0 z-50 flex items-center px-[22px] h-12"
      style={{
        background: 'rgba(131,105,83,0.80)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      }}
    >
      <a href="/" className="type-wordmark text-[20px] shrink-0 mr-7">
        Alpzeit
      </a>

      <div className="hidden md:flex items-center gap-6 flex-1">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={linkClass}
            style={{ opacity: 0.88 }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        onClick={openBooking}
        className={`hidden md:block ml-auto ${linkClass}`}
        style={{ opacity: 0.88 }}
      >
        Check availability
      </button>

      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="md:hidden ml-auto flex flex-col gap-[5px] w-5 bg-transparent border-none p-0 cursor-pointer"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span className="block w-full h-0.5 bg-white rounded" />
        <span className="block w-full h-0.5 bg-white rounded" />
        <span className="block w-full h-0.5 bg-white rounded" />
      </button>

      {menuOpen && (
        <div
          className="absolute top-12 left-0 right-0 flex flex-col px-[22px] py-4 gap-1 md:hidden"
          style={{ background: 'rgba(131,105,83,0.96)' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="type-body text-white py-3 border-b no-underline hover:no-underline"
              style={{
                borderColor: 'rgba(255,255,255,0.08)',
                opacity: 0.88,
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); openBooking() }}
            className="type-body-bold text-white text-left bg-transparent border-none p-0 py-3 cursor-pointer mt-1"
            style={{ opacity: 0.88 }}
          >
            Check availability
          </button>
        </div>
      )}
    </nav>
  )
}
