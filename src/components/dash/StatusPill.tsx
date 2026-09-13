type Tone = 'green' | 'amber' | 'red' | 'navy' | 'neutral'

const map: Record<Tone, string> = {
  green: 'bg-emerald-50 text-emerald-700',
  amber: 'bg-gold-50 text-gold-700',
  red: 'bg-wine-50 text-wine-700',
  navy: 'bg-navy-50 text-navy-700',
  neutral: 'bg-cream-200 text-navy-700',
}

export default function StatusPill({
  children,
  tone = 'neutral',
}: {
  children: React.ReactNode
  tone?: Tone
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${map[tone]}`}
    >
      {children}
    </span>
  )
}
