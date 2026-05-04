import Icon from './icon'

interface PlaceholderProps {
  label: string
  ratio?: string
  tone?: 'dark' | 'red' | 'bone'
  icon?: string
  style?: React.CSSProperties
}

export default function Placeholder({ label, ratio = '4/3', tone = 'dark', icon, style }: PlaceholderProps) {
  const cls =
    tone === 'red'  ? 'img-placeholder on-red'  :
    tone === 'bone' ? 'img-placeholder on-bone' :
    'img-placeholder'

  return (
    <div className={cls} style={{ aspectRatio: ratio, width: '100%', ...style }}>
      {icon && (
        <div className="ph-icon">
          <Icon name={icon} size={120} stroke={1} />
        </div>
      )}
      <div className="ph-label">{label}</div>
    </div>
  )
}
