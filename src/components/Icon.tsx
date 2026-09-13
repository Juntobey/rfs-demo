// Minimal inline icon set (stroke-based) so there are zero icon-lib dependencies.
type Props = { name: IconName; className?: string }
export type IconName =
  | 'dashboard'
  | 'wallet'
  | 'target'
  | 'bell'
  | 'shield'
  | 'file'
  | 'users'
  | 'inbox'
  | 'chart'
  | 'settings'
  | 'logout'
  | 'search'
  | 'plus'
  | 'arrow-right'
  | 'check'
  | 'clock'
  | 'car'
  | 'menu'
  | 'chevron-right'

const paths: Record<IconName, string> = {
  dashboard: 'M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 13h8v8H3z',
  wallet: 'M3 7h15a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 0V6a2 2 0 012-2h11M17 13h.01',
  target: 'M12 12m-9 0a9 9 0 1018 0a9 9 0 10-18 0 M12 12m-5 0a5 5 0 1010 0a5 5 0 10-10 0 M12 12m-1 0a1 1 0 102 0a1 1 0 10-2 0',
  bell: 'M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a2 2 0 003.4 0',
  shield: 'M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z',
  file: 'M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5',
  users: 'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M22 21v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0116 11',
  inbox: 'M22 12h-6l-2 3h-4l-2-3H2M5 5h14l3 7v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z',
  chart: 'M3 3v18h18M8 14v4M13 9v9M18 5v13',
  settings: 'M12 15a3 3 0 100-6 3 3 0 000 6M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-2.7 1.1V21a2 2 0 11-4 0v-.1A1.6 1.6 0 007 19.4a1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00-1.1-2.7H1a2 2 0 110-4h.1A1.6 1.6 0 002.6 7a1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H7a1.6 1.6 0 001-1.5V1a2 2 0 114 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V7a1.6 1.6 0 001.5 1H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z',
  logout: 'M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9',
  search: 'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3',
  plus: 'M12 5v14M5 12h14',
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  check: 'M20 6L9 17l-5-5',
  clock: 'M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2',
  car: 'M5 17a2 2 0 104 0 2 2 0 00-4 0M15 17a2 2 0 104 0 2 2 0 00-4 0M3 17V11l2-5h11l3 5v6M3 11h16',
  menu: 'M3 6h18M3 12h18M3 18h18',
  'chevron-right': 'M9 6l6 6-6 6',
}

export default function Icon({ name, className = 'h-5 w-5' }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  )
}
