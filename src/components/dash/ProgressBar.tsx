export default function ProgressBar({
  value,
  tone = 'gold',
}: {
  value: number
  tone?: 'gold' | 'navy' | 'wine'
}) {
  const bar =
    tone === 'navy' ? 'bg-navy-600' : tone === 'wine' ? 'bg-wine-600' : 'bg-gold-400'
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-cream-200">
      <div
        className={`h-full rounded-full ${bar}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
