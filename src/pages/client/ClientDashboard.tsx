import Icon from '../../components/Icon'
import ProgressBar from '../../components/dash/ProgressBar'
import StatusPill from '../../components/dash/StatusPill'

const goals = [
  { name: 'Retirement fund', target: 'R 6.0m by 2045', pct: 68, tone: 'gold' as const, status: 'On track' },
  { name: 'Emergency fund', target: 'R 250k', pct: 92, tone: 'navy' as const, status: 'On track' },
  { name: 'Children’s education', target: 'R 1.2m by 2032', pct: 41, tone: 'wine' as const, status: 'Behind' },
]

const policies = [
  { provider: 'Santam', type: 'Motor & household', premium: 'R 2 450 / mo', status: 'Active', tone: 'green' as const },
  { provider: 'Discovery', type: 'Health · Classic', premium: 'R 4 980 / mo', status: 'Active', tone: 'green' as const },
  { provider: 'Sanlam', type: 'Life cover', premium: 'R 1 120 / mo', status: 'Renewal due', tone: 'amber' as const },
  { provider: 'Allan Gray', type: 'Retirement annuity', premium: 'R 3 000 / mo', status: 'Active', tone: 'green' as const },
]

const reminders = [
  { title: 'Insurance valuation certificate', due: 'in 30 days', who: 'You & adviser', icon: 'shield' as const },
  { title: 'Driving licence expiry', due: 'in 62 days', who: 'You', icon: 'file' as const },
  { title: 'Annual financial review', due: 'in 12 days', who: 'Adviser', icon: 'clock' as const },
]

const timeline = [
  { time: 'Today', title: 'Motor claim assessment completed', desc: 'Santam · claim #SC-48210', tone: 'navy' as const },
  { time: 'Yesterday', title: 'Life cover renewal reviewed by Royal Square', desc: 'Sanlam · approved', tone: 'green' as const },
  { time: '3 days ago', title: 'FICA document uploaded', desc: 'Proof of address · verified', tone: 'green' as const },
]

export default function ClientDashboard() {
  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold text-ink">
            Good morning, Thandi
          </h1>
          <p className="mt-1 text-sm text-navy-800/70">
            Here’s your financial position and what needs attention today.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-wine-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-wine-800">
          <Icon name="car" className="h-4 w-4" /> Report an accident
        </button>
      </div>

      {/* Net worth summary */}
      <div className="grid gap-4 lg:grid-cols-4">
        <div className="card p-6 lg:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-navy-500">
                Total net worth
              </p>
              <p className="mt-1 font-display text-4xl font-semibold text-ink">
                R 4 285 600
              </p>
            </div>
            <StatusPill tone="green">+6.4% YTD</StatusPill>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-navy-50 p-4">
              <p className="text-xs text-navy-500">Assets</p>
              <p className="mt-1 text-xl font-semibold text-navy-700">R 5 105 000</p>
            </div>
            <div className="rounded-2xl bg-wine-50 p-4">
              <p className="text-xs text-navy-500">Liabilities</p>
              <p className="mt-1 text-xl font-semibold text-wine-700">R 819 400</p>
            </div>
          </div>
        </div>

        <StatCard label="Monthly income" value="R 78 500" tone="navy" icon="wallet" />
        <StatCard label="Monthly surplus" value="R 21 340" tone="gold" icon="chart" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Goals */}
        <div className="card p-6 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-ink">Your goals</h2>
            <button className="text-sm font-medium text-wine-700 hover:underline">
              View all
            </button>
          </div>
          <div className="space-y-5">
            {goals.map((g) => (
              <div key={g.name}>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-ink">{g.name}</p>
                    <p className="text-xs text-navy-500">{g.target}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusPill tone={g.status === 'Behind' ? 'amber' : 'green'}>
                      {g.status}
                    </StatusPill>
                    <span className="w-10 text-right text-sm font-semibold text-navy-700">
                      {g.pct}%
                    </span>
                  </div>
                </div>
                <ProgressBar value={g.pct} tone={g.tone} />
              </div>
            ))}
          </div>
        </div>

        {/* Reminders */}
        <div className="card p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-ink">Reminders</h2>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-wine-700 text-xs font-semibold text-white">
              {reminders.length}
            </span>
          </div>
          <div className="space-y-3">
            {reminders.map((r) => (
              <div
                key={r.title}
                className="flex items-start gap-3 rounded-2xl border border-cream-200 p-3"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-50 text-gold-700">
                  <Icon name={r.icon} className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{r.title}</p>
                  <p className="text-xs text-navy-500">
                    {r.due} · {r.who}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Policies */}
        <div className="card p-6 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-ink">
              Policies &amp; investments
            </h2>
            <button className="text-sm font-medium text-wine-700 hover:underline">
              Manage
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-cream-200">
            <table className="w-full text-sm">
              <thead className="bg-cream-100 text-left text-xs uppercase tracking-wider text-navy-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Provider</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Premium</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200">
                {policies.map((p) => (
                  <tr key={p.provider + p.type} className="hover:bg-cream-50">
                    <td className="px-4 py-3 font-semibold text-ink">{p.provider}</td>
                    <td className="px-4 py-3 text-navy-700">{p.type}</td>
                    <td className="px-4 py-3 text-navy-700">{p.premium}</td>
                    <td className="px-4 py-3">
                      <StatusPill tone={p.tone}>{p.status}</StatusPill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Timeline */}
        <div className="card p-6">
          <h2 className="mb-5 font-display text-lg font-semibold text-ink">
            Recent activity
          </h2>
          <ol className="relative space-y-5 border-l border-cream-300 pl-5">
            {timeline.map((t) => (
              <li key={t.title} className="relative">
                <span
                  className={`absolute -left-[27px] top-1 h-3 w-3 rounded-full ring-4 ring-white ${
                    t.tone === 'green' ? 'bg-emerald-500' : 'bg-navy-600'
                  }`}
                />
                <p className="text-xs text-navy-400">{t.time}</p>
                <p className="text-sm font-semibold text-ink">{t.title}</p>
                <p className="text-xs text-navy-500">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  tone,
  icon,
}: {
  label: string
  value: string
  tone: 'navy' | 'gold'
  icon: 'wallet' | 'chart'
}) {
  const bg = tone === 'navy' ? 'bg-navy-50 text-navy-700' : 'bg-gold-50 text-gold-700'
  return (
    <div className="card flex flex-col justify-between p-6">
      <span className={`grid h-11 w-11 place-items-center rounded-2xl ${bg}`}>
        <Icon name={icon} />
      </span>
      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wider text-navy-500">
          {label}
        </p>
        <p className="mt-1 text-2xl font-semibold text-ink">{value}</p>
      </div>
    </div>
  )
}
