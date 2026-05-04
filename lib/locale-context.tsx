'use client'

import { createContext, useContext } from 'react'
import type { Locale } from './i18n'

type Dict = Record<string, unknown>

type LocaleContextValue = {
  lang: Locale
  dict: Dict
  t: (key: string, vars?: Record<string, string | number>) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function deepGet(obj: unknown, parts: string[]): unknown {
  let cur = obj
  for (const part of parts) {
    if (cur !== null && typeof cur === 'object' && part in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[part]
    } else {
      return undefined
    }
  }
  return cur
}

export function LocaleProvider({
  lang,
  dict,
  children,
}: {
  lang: Locale
  dict: Dict
  children: React.ReactNode
}) {
  const t = (key: string, vars?: Record<string, string | number>): string => {
    const val = deepGet(dict, key.split('.'))
    if (typeof val !== 'string') return key
    if (!vars) return val
    return val.replace(/\{\{(\w+)\}\}/g, (_, k) => String(vars[k] ?? `{{${k}}}`))
  }

  return (
    <LocaleContext.Provider value={{ lang, dict, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
