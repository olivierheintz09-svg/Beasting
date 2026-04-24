type Props = {
  label: string
  aspectRatio?: string
  height?: number
  dark?: boolean
  radius?: number
}

export function ImagePlaceholder({
  label,
  aspectRatio,
  height,
  dark = false,
  radius = 12,
}: Props) {
  return (
    <div
      style={{
        background: dark
          ? 'linear-gradient(180deg, #1a1a1c 0%, #0a0a0b 100%)'
          : '#cfcfd5',
        borderRadius: radius,
        aspectRatio: aspectRatio ?? undefined,
        height: height ?? undefined,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: dark ? 'rgba(255,255,255,0.32)' : 'rgba(0,0,0,0.32)',
        fontSize: 11,
        fontFamily: 'var(--font-sans)',
        letterSpacing: '-0.12px',
        width: '100%',
      }}
    >
      [ {label} ]
    </div>
  )
}
