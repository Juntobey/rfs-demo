import Button from '../../components/Button'
import Icon from '../../components/Icon'

const values = [
  {
    title: 'Independent advice',
    body: 'We sell products from South Africa’s biggest providers, but the advice is our own. We are not tied to any of them.',
  },
  {
    title: 'Compliance first',
    body: 'Every adviser is formally qualified and every client interaction is recorded to POPIA, FAIS and FICA standards.',
  },
  {
    title: 'People over paperwork',
    body: 'Technology exists so we can spend our time with the people we advise, not buried in forms.',
  },
]

const stats = [
  ['12+', 'Product providers'],
  ['5 yrs', 'Minimum record retention'],
  ['6', 'Lines of cover'],
  ['1', 'Place for everything'],
]

export default function About() {
  return (
    <>
      <section className="container-rs py-20">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-ink">
              Wealth creation &amp; preservation, done properly.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-800/80">
              Royal Square Financial (Pty) Ltd is an independent, full-service
              brokerage and Financial Services Provider focused on financial
              planning, offering Life, Health, Funeral, Personal and Commercial
              insurance alongside goal-based investments.
            </p>
            <p className="mt-4 leading-relaxed text-navy-800/70">
              We’re the broker in the middle: we bring together clients and the
              country’s leading product houses, and we carry the compliance and
              administration so our clients don’t have to.
            </p>
            <div className="mt-8">
              <Button to="/signup" variant="primary" className="px-8">
                Become a client <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(([big, label]) => (
              <div
                key={label}
                className="card flex flex-col justify-center p-8 text-center"
              >
                <p className="font-display text-4xl font-semibold text-wine-700">
                  {big}
                </p>
                <p className="mt-1 text-sm text-navy-800/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cream-200 bg-cream-100/60">
        <div className="container-rs py-20">
          <h2 className="text-center font-display text-4xl font-semibold text-ink">
            What we stand for
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card p-8">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-wine-50 text-wine-700">
                  <Icon name="shield" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-rs py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink">
            The problem we’re solving
          </h2>
          <p className="mt-4 leading-relaxed text-navy-800/75">
            Regulation means every client interaction generates admin, identity
            checks, record-keeping, data protection, and that load grows every
            year. We built this platform so more of it passes straight through to
            the right party automatically, while a person at Royal Square approves
            every consequential step.
          </p>
        </div>
      </section>
    </>
  )
}
