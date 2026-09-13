import { Link } from 'react-router-dom'

export default function Logo({
  to = '/',
  variant = 'dark',
}: {
  to?: string
  variant?: 'dark' | 'light'
}) {
  const text = variant === 'light' ? 'text-white' : 'text-wine-700'
  const sub = variant === 'light' ? 'text-cream-200' : 'text-navy-700'
  return (
    <Link to={to} className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-wine-700 shadow-sm">
        <svg viewBox="0 0 32 32" className="h-5 w-5">
          <path
            d="M16 5l3.4 6.9L27 13l-5.3 5.1L23 26l-7-3.6L9 26l1.3-7.9L5 13l7.6-1.1z"
            fill="#e9c46a"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-semibold ${text}`}>
          Royal&nbsp;Square
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.22em] ${sub}`}>
          Financial
        </span>
      </span>
    </Link>
  )
}
