export type Locale = 'de' | 'en'

export const LOCALES: Locale[] = ['de', 'en']
export const DEFAULT_LOCALE: Locale = 'de'
export const SITE_URL = 'https://alpzeit.at'

const dictionaries: Record<Locale, () => Promise<unknown>> = {
  de: () => import('../locales/de.json').then((m) => m.default),
  en: () => import('../locales/en.json').then((m) => m.default),
}

export async function getDictionary(lang: Locale) {
  return dictionaries[lang]() as Promise<Record<string, unknown>>
}

export function formatPrice(price: number, lang: Locale): string {
  return new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-GB', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatDate(dateStr: string, lang: Locale): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-GB').format(date)
}
