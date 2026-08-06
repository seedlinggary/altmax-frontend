import { useState } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const BUILDING_TYPES = [
  'Condominium',
  'Cooperative (Co-op)',
  'New Development',
  'Office Condo',
  'Homeowners Association (HOA)',
  'Other',
]

const initialState = {
  name: '',
  email: '',
  phone: '',
  buildingType: '',
  buildingAddress: '',
  units: '',
  challenges: '',
  website: '', // honeypot
}

export default function ProposalForm({ compact = false }) {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again or call us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-10 px-6">
        <CheckCircle2 className="h-12 w-12 text-sky-dark" />
        <h3 className="font-serif text-2xl text-regal-blue">Request received</h3>
        <p className="text-charcoal-light max-w-sm">
          Thank you — a member of our team will reach out within 24 hours to discuss your building.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary mt-2">
          Send another request
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-md border border-regal-blue-100 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:ring-2 focus:ring-sky-dark focus:border-sky-dark transition-colors'
  const labelClass = 'block text-xs font-semibold uppercase tracking-wide text-regal-blue-800 mb-1.5'

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'space-y-5'} noValidate>
      {/* Honeypot — hidden from real users, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div className={compact ? 'space-y-3' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <div>
          <label className={labelClass} htmlFor="name">Name *</label>
          <input
            className={inputClass}
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email *</label>
          <input
            className={inputClass}
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone *</label>
          <input
            className={inputClass}
            type="tel"
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(718) 555-0100"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="buildingType">Building Type</label>
          <select
            className={inputClass}
            id="buildingType"
            name="buildingType"
            value={form.buildingType}
            onChange={handleChange}
          >
            <option value="">Select one</option>
            {BUILDING_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label className={labelClass} htmlFor="buildingAddress">Building Address *</label>
          <input
            className={inputClass}
            type="text"
            id="buildingAddress"
            name="buildingAddress"
            required
            value={form.buildingAddress}
            onChange={handleChange}
            placeholder="123 Main St, Brooklyn, NY"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="units">Number of Units</label>
          <input
            className={inputClass}
            type="number"
            min="1"
            id="units"
            name="units"
            value={form.units}
            onChange={handleChange}
            placeholder="24"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="challenges">Current Challenges (optional)</label>
        <textarea
          className={inputClass}
          id="challenges"
          name="challenges"
          rows={compact ? 3 : 4}
          value={form.challenges}
          onChange={handleChange}
          placeholder="Tell us what's not working with your current management, if anything."
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          'Request a Proposal'
        )}
      </button>
      <p className="text-xs text-charcoal-light text-center">
        We'll prepare a custom proposal and reach out within 24 hours.
      </p>
    </form>
  )
}
