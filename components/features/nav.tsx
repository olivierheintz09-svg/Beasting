'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useBooking } from './booking-provider'
import { useLocale } from '@/lib/locale-context'
import type { Locale } from '@/lib/i18n'

type NavProps = {
  lang?: Locale
}

const linkClass =
  'type-micro text-white no-underline hover:no-underline transition-opacity duration-[180ms] cursor-pointer bg-transparent border-none p-0'

export default function Nav({ lang: langProp }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { open: openBooking } = useBooking()
  const { lang: ctxLang, t } = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const lang = langProp ?? ctxLang

  const NAV_LINKS = [
    { href: `/${lang}/#apartments`, label: t('nav.apartments') },
    { href: `/${lang}/#location`, label: t('nav.schnann') },
    { href: `/${lang}/#arlberg`, label: t('nav.arlberg') },
    { href: `/${lang}/#journal`, label: t('nav.journal') },
  ]

  const switchLang = (target: string) => {
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; SameSite=Lax`
    const parts = pathname.split('/')
    parts[1] = target
    router.push(parts.join('/'))
  }

  return (
    <nav
      className="sticky top-0 z-50 flex items-center px-[22px] h-12"
      style={{
        background: 'rgba(131,105,83,0.80)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      }}
    >
      <a href={`/${lang}`} className="type-wordmark text-[20px] shrink-0 mr-7">
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

      <div className="hidden md:flex items-center gap-4 ml-auto">
        <button
          onClick={() => switchLang(lang === 'de' ? 'en' : 'de')}
          className={`${linkClass} text-xs uppercase tracking-wider`}
          style={{ opacity: 0.70, letterSpacing: '0.12em', fontSize: 11 }}
        >
          {t('langToggle.' + (lang === 'de' ? 'en' : 'de'))}
        </button>
        <button
          onClick={openBooking}
          className={linkClass}
          style={{ opacity: 0.88 }}
        >
          {t('nav.checkAvailability')}
        </button>
      </div>

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
              style={{ borderColor: 'rgba(255,255,255,0.08)', opacity: 0.88 }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); openBooking() }}
            className="type-body-bold text-white text-left bg-transparent border-none p-0 py-3 cursor-pointer mt-1"
            style={{ opacity: 0.88 }}
          >
            {t('nav.checkAvailability')}
          </button>
          <button
            onClick={() => { setMenuOpen(false); switchLang(lang === 'de' ? 'en' : 'de') }}
            className="type-micro text-white text-left bg-transparent border-none p-0 py-2 cursor-pointer"
            style={{ opacity: 0.60, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            {t('langToggle.' + (lang === 'de' ? 'en' : 'de'))}
          </button>
        </div>
      )}
    </nav>
  )
}
