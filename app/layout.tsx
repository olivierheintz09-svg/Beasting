import type { Metadata } from 'next'
import { Cinzel, Oswald } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/beasting/header'
import SiteFooter from '@/components/beasting/footer'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Beasting · Out of Your Comfort Zone',
  description:
    'Militair-geleide obstacle challenges voor bedrijven, scholen en teams. 3 tot 24 uur in de buitenlucht.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${cinzel.variable} ${oswald.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
