import { useId, useState, type FormEvent } from 'react'
import { ArrowRight, Check, LoaderCircle } from 'lucide-react'

type LeadIntent = 'launch-interest' | 'newsletter'
type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

const endpoint = import.meta.env.VITE_LEAD_CAPTURE_ENDPOINT || '/api/leads'

export function LeadForm({
  intent,
  source,
  compact = false,
}: {
  intent: LeadIntent
  source: string
  compact?: boolean
}) {
  const emailId = useId()
  const statusId = useId()
  const [state, setState] = useState<SubmissionState>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get('email') ?? '').trim()
    const website = String(formData.get('website') ?? '')

    if (website) return

    setState('submitting')
    setMessage('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          intent,
          source,
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setState('success')
      setMessage(
        intent === 'newsletter'
          ? 'You’re on the list. The next update will land in your inbox.'
          : 'Interest registered. We’ll let you know when Sumryx launches.',
      )
      form.reset()
    } catch {
      setState('error')
      setMessage('We couldn’t register that just now. Please try again shortly.')
    }
  }

  if (state === 'success') {
    return (
      <div
        className={`flex items-center gap-3 rounded-xl border border-teal-400/25 bg-teal-400/[0.08] text-left ${
          compact ? 'px-3.5 py-3' : 'mx-auto max-w-xl px-5 py-4'
        }`}
        role="status"
      >
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-400 text-[#05201c]">
          <Check className="h-4 w-4" />
        </span>
        <p className={`${compact ? 'text-[11px]' : 'text-sm'} leading-5 text-white/70`}>{message}</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? 'w-full' : 'mx-auto w-full max-w-xl'}
      aria-describedby={message ? statusId : undefined}
    >
      <label htmlFor={emailId} className="sr-only">
        Email address
      </label>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px]"
        aria-hidden="true"
      />
      <div className={`email-form flex gap-2 rounded-xl border border-white/12 bg-black/15 p-1.5 shadow-xl ${
        compact ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'
      }`}>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="Work email address"
          disabled={state === 'submitting'}
          className="h-11 min-w-0 flex-1 rounded-lg bg-transparent px-3.5 text-sm text-white outline-none placeholder:text-white/30 focus-visible:ring-2 focus-visible:ring-teal-400/50 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#14B8A6] px-5 text-sm font-semibold text-[#031412] transition-colors hover:bg-[#2dd4bf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 disabled:cursor-wait disabled:opacity-70"
        >
          {state === 'submitting' ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Registering
            </>
          ) : (
            <>
              {intent === 'newsletter' ? 'Subscribe' : 'Register interest'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
      {message && (
        <p
          id={statusId}
          className="mt-2 text-left text-[11px] text-rose-300"
          role="alert"
        >
          {message}
        </p>
      )}
    </form>
  )
}
