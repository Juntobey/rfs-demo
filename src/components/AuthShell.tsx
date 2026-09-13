import type { ReactNode } from 'react'
import Logo from './Logo'
import Icon from './Icon'

export default function AuthShell({
  children,
  headline,
  sub,
}: {
  children: ReactNode
  headline: string
  sub: string
}) {
  return (
    <div className="min-h-screen bg-cream-100 p-4 sm:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lift lg:grid-cols-2">
        {/* Brand / imagery side */}
        <div className="relative hidden flex-col justify-between bg-ink p-10 text-cream-100 lg:flex">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-wine-700/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-navy-700/50 blur-3xl" />
          <Logo variant="light" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold leading-snug text-white">
              {headline}
            </h2>
            <p className="mt-4 max-w-sm text-cream-200/75">{sub}</p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                'One secure view of your finances',
                'Goals tracked with your adviser',
                'Reminders before anything is due',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-300 text-wine-900">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <p className="relative text-xs text-cream-200/50">
            An authorised Financial Services Provider · POPIA · FAIS · FICA
          </p>
        </div>

        {/* Form side */}
        <div className="flex items-center justify-center p-8 sm:p-12">
          <div className="w-full max-w-sm">
            <div className="mb-8 lg:hidden">
              <Logo />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
