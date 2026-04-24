'use client'

export type PillVariant = 'outline-light' | 'outline-dark' | 'outline-white' | 'fill-blue'

type Props = {
  children: React.ReactNode
  href?: string
  variant?: PillVariant
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export function LinkPill({ children, href = '#', variant = 'outline-light', onClick }: Props) {
  return (
    <a href={href} onClick={onClick} className={`pill pill-${variant}`}>
      {children}
    </a>
  )
}
