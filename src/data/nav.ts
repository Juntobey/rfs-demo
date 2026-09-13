import type { IconName } from '../components/Icon'

export type NavItem = { label: string; icon: IconName; to: string; badge?: number }

export const clientNav: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', to: '/app' },
  { label: 'Net worth', icon: 'wallet', to: '/app' },
  { label: 'Goals', icon: 'target', to: '/app' },
  { label: 'Policies', icon: 'shield', to: '/app' },
  { label: 'Documents', icon: 'file', to: '/app' },
  { label: 'Claims', icon: 'car', to: '/app' },
  { label: 'Reminders', icon: 'bell', to: '/app', badge: 3 },
]

export const adminNav: NavItem[] = [
  { label: 'Overview', icon: 'dashboard', to: '/admin' },
  { label: 'Clients', icon: 'users', to: '/admin' },
  { label: 'Approvals', icon: 'inbox', to: '/admin', badge: 5 },
  { label: 'Claims', icon: 'car', to: '/admin' },
  { label: 'Reminders', icon: 'bell', to: '/admin' },
  { label: 'Reports', icon: 'chart', to: '/admin' },
  { label: 'Compliance', icon: 'shield', to: '/admin' },
]
