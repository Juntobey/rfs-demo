import { Outlet, NavLink } from 'react-router-dom'
import Logo from '../components/Logo'
import Button from '../components/Button'

const links = [
  { to: '/', label: 'Welcome', end: true },
  { to: '/home', label: 'Platform' },
  { to: '/about', label: 'About' },
]

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50/85 backdrop-blur">
        <div className="container-rs flex h-20 items-center justify-between py-4">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-wine-700 text-white'
                      : 'text-navy-800 hover:bg-cream-200'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button to="/signin" variant="ghost" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button to="/signup" variant="primary">
              Get started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream-100">
      <div className="container-rs grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm text-cream-200/70">
            An independent brokerage &amp; financial services provider, wealth
            creation and preservation, done properly.
          </p>
        </div>
        <FooterCol
          title="Platform"
          items={['Client dashboard', 'Goal tracking', 'Reminders', 'Claims workflow']}
        />
        <FooterCol
          title="Company"
          items={['About us', 'Advisers', 'Compliance', 'Contact']}
        />
        <FooterCol
          title="Legal"
          items={['POPIA', 'FAIS disclosure', 'FICA', 'Privacy policy']}
        />
      </div>
      <div className="border-t border-white/10">
        <div className="container-rs flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream-200/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Royal Square Financial (Pty) Ltd. All rights reserved.</span>
          <span>An authorised Financial Services Provider.</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold text-gold-300">{title}</h4>
      <ul className="space-y-2.5 text-sm text-cream-200/75">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="transition-colors hover:text-white">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
