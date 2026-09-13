import Button from '../../components/Button'
import Icon from '../../components/Icon'

export default function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-rs relative grid gap-14 py-20 lg:grid-cols-2 lg:py-28">
          <div className="flex flex-col justify-center">
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              Your wealth,<br />
              <span className="text-wine-700">clearly in view.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-800/80">
              Royal Square Financial brings your policies, investments, goals and
              paperwork into one secure place, so you spend less time on forms and
              more time on what they’re for.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button to="/signup" variant="primary" className="px-8">
                Open your account <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
              <Button to="/home" variant="outline" className="px-8">
                Explore the platform
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-navy-700/70">
              <Trust label="POPIA compliant" />
              <Trust label="FAIS authorised" />
              <Trust label="Bank grade security" />
            </div>
          </div>

          <HeroPreview />
        </div>
      </section>

      {/* Provider strip */}
      <section className="border-y border-cream-200 bg-cream-100/60">
        <div className="container-rs py-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy-500">
            We work with South Africa’s leading providers
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {['Sanlam', 'Old Mutual', 'Liberty', 'Momentum', 'Discovery', 'Allan Gray', 'Santam'].map(
              (p) => (
                <span
                  key={p}
                  className="font-display text-xl font-semibold text-navy-800/40"
                >
                  {p}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Value pillars */}
      <section className="container-rs py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold text-ink">
            One relationship. Everything in order.
          </h2>
          <p className="mt-4 text-navy-800/70">
            Capture information once, keep a compliant record, and let the right
            party act, with a human at Royal Square approving every step.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Pillar
            icon="wallet"
            title="Real-time net worth"
            body="Assets, liabilities, income and policies from every provider, in a single dashboard you can trust."
          />
          <Pillar
            icon="target"
            title="Goals that stay on track"
            body="Individual or shared goals with clear visual progress, guided by your adviser."
          />
          <Pillar
            icon="bell"
            title="Nothing slips through"
            body="Automated reminders for renewals, reviews, documents and licences, for you, us, or both."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="container-rs pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:px-16">
          <h2 className="relative font-display text-4xl font-semibold text-white sm:text-5xl">
            Let’s get your financial life organised.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-cream-200/80">
            Join Royal Square and see everything in one place, reviewed and
            managed by advisers who work for you, not the product houses.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/signup" variant="gold" className="px-8">
              Get started
            </Button>
            <Button to="/signin" variant="light" className="px-8">
              I already have an account
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function Trust({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <Icon name="check" className="h-4 w-4 text-wine-600" />
      {label}
    </span>
  )
}

function Pillar({
  icon,
  title,
  body,
}: {
  icon: 'wallet' | 'target' | 'bell'
  title: string
  body: string
}) {
  return (
    <div className="card p-8 transition-shadow hover:shadow-lift">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-wine-50 text-wine-700">
        <Icon name={icon} />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{body}</p>
    </div>
  )
}

function HeroPreview() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-lift">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-navy-500">
              Total net worth
            </p>
            <p className="mt-1 font-display text-3xl font-semibold text-ink">
              R 4 285 600
            </p>
          </div>
          <span className="rounded-full bg-wine-50 px-3 py-1 text-xs font-semibold text-wine-700">
            +6.4% YTD
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <MiniStat label="Assets" value="R 5.1m" tone="navy" />
          <MiniStat label="Liabilities" value="R 0.82m" tone="wine" />
        </div>

        <div className="mt-4 rounded-2xl bg-cream-100 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-ink">Retirement goal</span>
            <span className="text-navy-600">68%</span>
          </div>
          <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-cream-300">
            <div className="h-full w-[68%] rounded-full bg-gold-400" />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-cream-200 p-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-50 text-navy-700">
            <Icon name="bell" className="h-4 w-4" />
          </span>
          <div className="text-sm">
            <p className="font-medium text-ink">Valuation certificate due</p>
            <p className="text-navy-500">in 30 days · Santam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function MiniStat({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone: 'navy' | 'wine'
}) {
  const bg = tone === 'navy' ? 'bg-navy-50' : 'bg-wine-50'
  const fg = tone === 'navy' ? 'text-navy-700' : 'text-wine-700'
  return (
    <div className={`rounded-2xl ${bg} p-4`}>
      <p className="text-xs font-medium text-navy-500">{label}</p>
      <p className={`mt-1 text-lg font-semibold ${fg}`}>{value}</p>
    </div>
  )
}
