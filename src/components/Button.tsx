import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'gold' | 'outline' | 'ghost' | 'light'
type Props = {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  full?: boolean
}

const styles: Record<Variant, string> = {
  primary: 'bg-wine-700 text-white hover:bg-wine-800',
  gold: 'bg-gold-300 text-wine-900 hover:bg-gold-400',
  outline: 'border border-wine-700/25 text-wine-800 hover:bg-wine-50',
  ghost: 'text-navy-800 hover:bg-navy-50',
  light: 'bg-white text-wine-800 hover:bg-cream-100',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  full = false,
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
    styles[variant]
  } ${full ? 'w-full' : ''} ${className}`

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls}>{children}</a>
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
