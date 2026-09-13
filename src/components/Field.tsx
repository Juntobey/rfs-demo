type Props = {
  label: string
  type?: string
  placeholder?: string
  name?: string
  autoComplete?: string
}

export default function Field({
  label,
  type = 'text',
  placeholder,
  name,
  autoComplete,
}: Props) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-800">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-navy-400 focus:border-wine-400 focus:bg-white focus:ring-2 focus:ring-wine-100"
      />
    </label>
  )
}
