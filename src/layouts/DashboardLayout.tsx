import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import type { NavItem } from '../data/nav'

type Props = {
  nav: NavItem[]
  role: string
  name: string
  subtitle: string
}

export default function DashboardLayout({ nav, role, name, subtitle }: Props) {
  const [active, setActive] = useState(nav[0].label)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-ink text-cream-100 transition-transform md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-2.5 px-6 py-6">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-wine-700">
            <svg viewBox="0 0 32 32" className="h-5 w-5">
              <path
                d="M16 5l3.4 6.9L27 13l-5.3 5.1L23 26l-7-3.6L9 26l1.3-7.9L5 13l7.6-1.1z"
                fill="#e9c46a"
              />
            </svg>
          </span>
          <div className="leading-tight">
            <p className="font-display text-base font-semibold text-white">Royal Square</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold-300">{role}</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-2">
          {nav.map((item) => {
            const isActive = active === item.label
            return (
              <button
                key={item.label}
                onClick={() => {
                  setActive(item.label)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-wine-700 text-white'
                    : 'text-cream-200/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon name={item.icon} className="h-[18px] w-[18px]" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge ? (
                  <span className="grid h-5 min-w-5 place-items-center rounded-full bg-gold-300 px-1 text-[11px] font-semibold text-wine-900">
                    {item.badge}
                  </span>
                ) : null}
              </button>
            )
          })}
        </nav>

        <div className="px-4 pb-6">
          <button
            onClick={() => navigate('/')}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-cream-200/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Icon name="logout" className="h-[18px] w-[18px]" />
            Log out
          </button>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main column */}
      <div className="md:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-cream-200 bg-cream-100/85 backdrop-blur">
          <div className="flex items-center gap-4 px-5 py-4 sm:px-8">
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-cream-300 bg-white md:hidden"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" />
            </button>

            <label className="flex flex-1 items-center gap-2.5 rounded-full border border-cream-300 bg-white px-4 py-2.5">
              <Icon name="search" className="h-[18px] w-[18px] text-navy-500" />
              <input
                placeholder="Search clients, policies, claims…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-navy-400"
              />
            </label>

            <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-cream-300 bg-white text-navy-700">
              <Icon name="bell" className="h-[18px] w-[18px]" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-wine-600" />
            </button>

            <div className="flex items-center gap-3 rounded-full border border-cream-300 bg-white py-1.5 pl-1.5 pr-4">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-700 text-xs font-semibold text-white">
                {initials}
              </span>
              <div className="hidden leading-tight sm:block">
                <p className="text-sm font-semibold text-ink">{name}</p>
                <p className="text-[11px] text-navy-500">{subtitle}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="px-5 py-6 sm:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
