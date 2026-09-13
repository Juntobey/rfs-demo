import { Link, useNavigate } from 'react-router-dom'
import AuthShell from '../../components/AuthShell'
import Field from '../../components/Field'
import Button from '../../components/Button'

export default function SignIn() {
  const navigate = useNavigate()

  return (
    <AuthShell
      headline="Welcome back to Royal Square."
      sub="Sign in to view your dashboard, goals and reminders — all in one secure place."
    >
      <h1 className="font-display text-3xl font-semibold text-ink">Sign in</h1>
      <p className="mt-2 text-sm text-navy-800/70">
        Enter your details to access your account.
      </p>

      <form
        className="mt-8 space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/app')
        }}
      >
        <Field
          label="Email"
          type="email"
          name="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <Field
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-navy-800/80">
            <input type="checkbox" className="h-4 w-4 rounded border-cream-300 text-wine-700" />
            Remember me
          </label>
          <a href="#" className="font-medium text-wine-700 hover:underline">
            Forgot password?
          </a>
        </div>

        <Button type="submit" variant="primary" full className="mt-2">
          Sign in
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs text-navy-400">
        <span className="h-px flex-1 bg-cream-300" />
        or continue with
        <span className="h-px flex-1 bg-cream-300" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <SocialButton label="Google" />
        <SocialButton label="Apple" />
      </div>

      <p className="mt-8 text-center text-sm text-navy-800/70">
        New to Royal Square?{' '}
        <Link to="/signup" className="font-semibold text-wine-700 hover:underline">
          Create an account
        </Link>
      </p>

      <p className="mt-4 text-center text-xs text-navy-400">
        Are you a Royal Square staff member?{' '}
        <Link to="/admin" className="font-medium text-navy-700 hover:underline">
          Staff sign in
        </Link>
      </p>
    </AuthShell>
  )
}

function SocialButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-xl border border-cream-300 bg-white py-2.5 text-sm font-medium text-navy-800 transition-colors hover:bg-cream-50"
    >
      {label}
    </button>
  )
}
