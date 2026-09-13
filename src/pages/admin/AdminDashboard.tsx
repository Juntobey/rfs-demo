import Icon from '../../components/Icon'
import StatusPill from '../../components/dash/StatusPill'

const stats = [
  { label: 'Active clients', value: '342', delta: '+8 this month', icon: 'users' as const, tone: 'navy' as const },
  { label: 'Pending approvals', value: '5', delta: 'Needs attention', icon: 'inbox' as const, tone: 'wine' as const },
  { label: 'Open claims', value: '17', delta: '3 awaiting insurer', icon: 'car' as const, tone: 'gold' as const },
  { label: 'Reminders due', value: '28', delta: 'Next 7 days', icon: 'bell' as const, tone: 'navy' as const },
]

const approvals = [
  { client: 'Nomsa Dlamini', type: 'New client application', when: '2h ago', tone: 'wine' as const },
  { client: 'Pieter van der Merwe', type: 'Bank detail change', when: '4h ago', tone: 'amber' as const },
  { client: 'Ayesha Patel', type: 'Motor claim submission', when: 'Yesterday', tone: 'navy' as const },
  { client: 'John Mokoena', type: 'Address change', when: 'Yesterday', tone: 'neutral' as const },
  { client: 'Lerato Khumalo', type: 'Policy document request', when: '2 days ago', tone: 'neutral' as const },
]

const clients = [
  { name: 'Thandi Mokoena', adviser: 'D. Prinsloo', worth: 'R 4.29m', policies: 4, status: 'Active', tone: 'green' as const },
  { name: 'Sipho Ndlovu', adviser: 'D. Prinsloo', worth: 'R 1.87m', policies: 3, status: 'Active', tone: 'green' as const },
  { name: 'Nomsa Dlamini', adviser: 'Unassigned', worth: '—', policies: 0, status: 'Pending', tone: 'amber' as const },
  { name: 'Karen Botha', adviser: 'M. Naidoo', worth: 'R 8.10m', policies: 6, status: 'Active', tone: 'green' as const },
  { name: 'Ayesha Patel', adviser: 'M. Naidoo', worth: 'R 3.02m', policies: 5, status: 'Review', tone: 'navy' as const },
]

const claimStages = [
  { label: 'Submitted', count: 4 },
  { label: 'Royal review', count: 5 },
  { label: 'With insurer', count: 3 },
  { label: 'In repair', count: 3 },
  { label: 'Closing', count: 2 },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold text-ink">
            Royal Square operations
          </h1>
          <p className="mt-1 text-sm text-navy-800/70">
            Approvals, clients and claims at a glance — everything waiting on a human decision.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-wine-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-wine-800">
          <Icon name="plus" className="h-4 w-4" /> New client invitation
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card p-6">
            <div className="flex items-center justify-between">
              <span
                className={`grid h-11 w-11 place-items-center rounded-2xl ${
                  s.tone === 'wine'
                    ? 'bg-wine-50 text-wine-700'
                    : s.tone === 'gold'
                      ? 'bg-gold-50 text-gold-700'
                      : 'bg-navy-50 text-navy-700'
                }`}
              >
                <Icon name={s.icon} />
              </span>
            </div>
            <p className="mt-5 text-3xl font-semibold text-ink">{s.value}</p>
            <p className="text-xs font-medium uppercase tracking-wider text-navy-500">
              {s.label}
            </p>
            <p className="mt-1 text-xs text-navy-400">{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Approval queue */}
        <div className="card p-6 lg:col-span-1">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-ink">
              Approval queue
            </h2>
            <StatusPill tone="red">{approvals.length} waiting</StatusPill>
          </div>
          <div className="space-y-3">
            {approvals.map((a) => (
              <div
                key={a.client + a.type}
                className="rounded-2xl border border-cream-200 p-3.5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-ink">{a.client}</p>
                  <span className="text-xs text-navy-400">{a.when}</span>
                </div>
                <p className="mt-0.5 text-xs text-navy-600">{a.type}</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 rounded-lg bg-wine-700 py-1.5 text-xs font-semibold text-white hover:bg-wine-800">
                    Review
                  </button>
                  <button className="rounded-lg border border-cream-300 px-3 py-1.5 text-xs font-medium text-navy-700 hover:bg-cream-50">
                    Later
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients table */}
        <div className="card p-6 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-ink">Clients</h2>
            <button className="text-sm font-medium text-wine-700 hover:underline">
              View all
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-cream-200">
            <table className="w-full text-sm">
              <thead className="bg-cream-100 text-left text-xs uppercase tracking-wider text-navy-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Client</th>
                  <th className="px-4 py-3 font-semibold">Adviser</th>
                  <th className="px-4 py-3 font-semibold">Net worth</th>
                  <th className="px-4 py-3 font-semibold">Policies</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200">
                {clients.map((c) => (
                  <tr key={c.name} className="hover:bg-cream-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-700 text-[11px] font-semibold text-white">
                          {c.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
                        </span>
                        <span className="font-semibold text-ink">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-navy-700">{c.adviser}</td>
                    <td className="px-4 py-3 font-medium text-navy-800">{c.worth}</td>
                    <td className="px-4 py-3 text-navy-700">{c.policies}</td>
                    <td className="px-4 py-3">
                      <StatusPill tone={c.tone}>{c.status}</StatusPill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Claims pipeline */}
      <div className="card p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">
            Claims pipeline
          </h2>
          <button className="text-sm font-medium text-wine-700 hover:underline">
            Open claims board
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {claimStages.map((s, i) => (
            <div
              key={s.label}
              className="rounded-2xl border border-cream-200 bg-cream-50 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-ink">{s.count}</span>
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full text-xs font-semibold ${
                    i === 1 ? 'bg-wine-700 text-white' : 'bg-cream-200 text-navy-700'
                  }`}
                >
                  {i + 1}
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-navy-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
