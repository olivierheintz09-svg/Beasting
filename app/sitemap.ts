import { LOCALES, SITE_URL } from '@/lib/i18n'

const SLUGS = ['the-lodge', 'the-hearth', 'the-eyrie']

export default function sitemap() {
  const routes = ['', ...SLUGS.map((s) => `/apartments/${s}`)]

  return LOCALES.flatMap((lang) =>
    routes.map((route) => ({
      url: `${SITE_URL}/${lang}${route}`,
      lastModified: new Date('2026-04-26'),
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${SITE_URL}/${l}${route}`])
        ),
      },
    }))
  )
}
