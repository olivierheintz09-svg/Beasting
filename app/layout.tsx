import type { Metadata } from 'next'
import { Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { BookingProvider } from '@/components/features/booking-provider'

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Haus Alpzeit — Schnann, Austria',
  description:
    'Three apartments in Schnann, Austria. Sleeps 2, 8, or 12. One hour from Innsbruck. One minute from the bus to St. Anton.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sourceSerif4.variable}>
      <body>
        <BookingProvider>
          <main>{children}</main>
        </BookingProvider>
      </body>
    </html>
  )
}
