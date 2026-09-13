import { Link, useNavigate } from 'react-router-dom'
import AuthShell from '../../components/AuthShell'
import Field from '../../components/Field'
import Button from '../../components/Button'

export default function SignUp() {
  const navigate = useNavigate()

  return (
    <AuthShell
      headline="Open your Royal Square account."
      sub="Create an account to start capturing your information. Royal Square reviews and approves every new client before your account is fully activated."
    >
      <h1 className="font-display text-3xl font-semibold text-ink">Create account</h1>
      <p className="mt-2 text-sm text-navy-800/70">
        It takes a minute. Already registered?{' '}
        <Link to="/signin" className="font-semibold text-wine-700 hover:underline">
          Sign in
        </Link>
      </p>

      <form
        className="mt-8 space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/app')
        }}
      >
        <div className="grid grid-cols-2 gap-3">
          <Field label="First name" name="firstName" placeholder="Thandi" autoComplete="given-name" />
          <Field label="Last name" name="lastName" placeholder="Mokoena" autoComplete="family-name" />
        </div>
        <Field
          label="Email"
          type="email"
          name="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <Field
          label="Mobile number"
          type="tel"
          name="mobile"
          placeholder="+27 82 000 0000"
          autoComplete="tel"
        />
        <Field
          label="Password"
          type="password"
          name="password"
          placeholder="Create a password"
          autoComplete="new-password"
        />

        <label className="flex items-start gap-2.5 text-sm text-navy-800/80">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-cream-300 text-wine-700"
          />
          <span>
            I agree to Royal Square’s{' '}
            <a href="#" className="font-medium text-wine-700 hover:underline">
              terms
            </a>{' '}
            and consent to the processing of my information under POPIA.
          </span>
        </label>

        <Button type="submit" variant="primary" full className="mt-2">
          Create account
        </Button>
      </form>

      <div className="mt-6 rounded-xl bg-navy-50 p-4 text-xs leading-relaxed text-navy-700">
        New accounts start in a <span className="font-semibold">pending review</span>{' '}
        workspace. You can begin entering your details right away; full access is
        granted once Royal Square approves your application.
      </div>
    </AuthShell>
  )
}
