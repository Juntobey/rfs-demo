import Button from '../../components/Button'
import Icon from '../../components/Icon'
import type { IconName } from '../../components/Icon'

const features: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'wallet',
    title: 'Financial dashboard',
    body: 'A live view of assets, liabilities, income, expenses, policies and investments, with net worth and monthly cash flow calculated for you.',
  },
  {
    icon: 'target',
    title: 'Goal tracking',
    body: 'Advisers load individual or shared goals; you see visual progress, target dates and whether you are on track, behind or done.',
  },
  {
    icon: 'bell',
    title: 'Automated reminders',
    body: 'Renewals, reviews, valuation certificates, licence expiries, birthdays, sent to you, to us, or both, well before they’re due.',
  },
  {
    icon: 'car',
    title: 'Claims & service requests',
    body: 'Report an accident, register a claim, change your details, guided step by step and tracked from submission to closure.',
  },
  {
    icon: 'shield',
    title: 'Compliance built in',
    body: 'Consent, identity checks and record-keeping handled to POPIA, FAIS and FICA standards, with a full audit trail.',
  },
  {
    icon: 'file',
    title: 'Secure documents',
    body: 'Upload once and reuse everywhere. Private storage with short-lived, authorised downloads, never shared without cause.',
  },
]

const steps = [
  {
    n: '01',
    title: 'You capture it once',
    body: 'Enter your information or a service request. Upload supporting documents from your phone or desktop.',
  },
  {
    n: '02',
    title: 'Royal Square reviews',
    body: 'Our team checks it against your policies and compliance requirements, approving, or asking for changes.',
  },
  {
    n: '03',
    title: 'We handle the provider',
    body: 'Royal Square packages and submits to the insurer or product house, then tracks their response.',
  },
  {
    n: '04',
    title: 'You see the outcome',
    body: 'Your dashboard updates with the latest status and the next action, no more chasing by phone.',
  },
]

export default function Home() {
  return (
    <>
      <section className="container-rs py-20 text-center">
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-semibold leading-tight text-ink">
          Less paperwork. More <span className="text-wine-700">advice.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-navy-800/75">
          Everything Royal Square and its clients need to stay in sync, capture
          information once, keep a compliant record, and pass it to the next
          responsible party automatically.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/signup" variant="primary" className="px-8">
            Create an account
          </Button>
          <Button to="/about" variant="outline" className="px-8">
            About Royal Square
          </Button>
        </div>
      </section>

      {/* Feature grid */}
      <section className="container-rs pb-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card p-7 transition-shadow hover:shadow-lift">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-50 text-gold-700">
                <Icon name={f.icon} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container-rs py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold text-ink">
            How it works
          </h2>
          <p className="mt-4 text-navy-800/70">
            Automation removes the copying and chasing. A human at Royal Square
            still approves every consequential step.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="card h-full p-7">
                <span className="font-display text-3xl font-semibold text-wine-200">
                  {s.n}
                </span>
                <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                  {s.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <Icon
                  name="chevron-right"
                  className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-gold-300 lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Split highlight */}
      <section className="container-rs pb-24">
        <div className="grid items-center gap-10 rounded-3xl bg-navy-800 p-10 text-cream-100 md:grid-cols-2 md:p-14">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white">
              Built for the accident that happens on a bad signal road.
            </h2>
            <p className="mt-4 text-cream-200/80">
              Tap <span className="font-semibold text-gold-300">Report an Accident</span>{' '}
              and get an instant checklist of what to gather at the scene, photos,
              locations, witnesses, third-party details, even before you register
              the full claim.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {[
                'Scene checklist available immediately',
                'Photos, voice notes and GPS location',
                '48 hour police report reminder',
                'Save and resume, finish the claim later',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Icon name="check" className="h-4 w-4 text-gold-300" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-wine-700 text-white">
                <Icon name="car" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-white">Motor claim, Santam</p>
                <p className="text-xs text-cream-200/70">Assessment completed</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {[
                ['Submitted to Royal Square', true],
                ['Reviewed & approved', true],
                ['Sent to insurer', true],
                ['Repairs authorised', false],
              ].map(([label, done]) => (
                <div key={label as string} className="flex items-center gap-3 text-sm">
                  <span
                    className={`grid h-6 w-6 place-items-center rounded-full ${
                      done ? 'bg-gold-300 text-wine-900' : 'bg-white/10 text-cream-200/60'
                    }`}
                  >
                    {done ? <Icon name="check" className="h-3.5 w-3.5" /> : <Icon name="clock" className="h-3.5 w-3.5" />}
                  </span>
                  <span className={done ? 'text-white' : 'text-cream-200/60'}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
