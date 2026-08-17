import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import ProposalForm from '../components/ProposalForm.jsx'
import GoogleRatingBadge from '../components/GoogleRatingBadge.jsx'

export default function Contact() {
  return (
    <>
      <SEO
        path="/contact"
        title="Contact & Request a Proposal"
        description="Contact Altmax Property Management or request a custom proposal for your NYC condo or co-op. Call 718.536.1200 or email info@altmaxny.com — we respond within 24 hours."
      />

      <section className="bg-regal-blue-950 text-white section !pb-14">
        <div className="container-page">
          <p className="eyebrow text-sky-light">Get In Touch</p>
          <h1 className="mt-3 text-4xl sm:text-5xl text-white max-w-3xl">
            Tell us about your building.
          </h1>
          <p className="mt-5 text-lg text-sky-light/90 max-w-2xl leading-relaxed">
            We'll prepare a custom management proposal and reach out within 24 hours.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl mb-6">Contact Information</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-dark mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">Address</p>
                  <p className="text-charcoal-light">1449 37th Street, Brooklyn, NY 11218</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-sky-dark mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">Phone</p>
                  <a href="tel:7185361200" className="text-charcoal-light hover:text-regal-blue">718.536.1200</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-sky-dark mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">Email</p>
                  <a href="mailto:info@altmaxny.com" className="text-charcoal-light hover:text-regal-blue">info@altmaxny.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-sky-dark mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">Response Time</p>
                  <p className="text-charcoal-light">Proposals within 24 hours · 24/7 emergency line</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <GoogleRatingBadge />
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border border-regal-blue-50 aspect-[4/3]">
              <iframe
                title="Altmax Property Management location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=1449+37th+Street,+Brooklyn,+NY+11218&output=embed"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-ivory border border-regal-blue-50 p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl mb-2">Request a Proposal</h2>
            <p className="text-charcoal-light mb-6">
              Tell us about your building and we'll prepare a custom management proposal.
            </p>
            <ProposalForm />
          </div>
        </div>
      </section>
    </>
  )
}
