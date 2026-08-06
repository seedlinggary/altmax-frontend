import ProposalForm from './ProposalForm.jsx'

export default function ProposalBox({ className = '' }) {
  return (
    <div className={`rounded-2xl bg-white shadow-soft border border-regal-blue-100/60 overflow-hidden ${className}`}>
      <div className="bg-regal-blue px-6 py-5">
        <p className="eyebrow text-sky-light">Free, No-Obligation</p>
        <h3 className="font-serif text-2xl text-white mt-1">Request a Proposal</h3>
        <p className="text-sm text-sky-light/90 mt-1">
          Tell us about your building — we'll reach out within 24 hours.
        </p>
      </div>
      <div className="p-6">
        <ProposalForm compact />
      </div>
    </div>
  )
}
