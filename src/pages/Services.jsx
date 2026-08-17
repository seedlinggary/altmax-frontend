import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import DynamicIcon from '../components/DynamicIcon.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <>
      <SEO
        path="/services"
        title="Services"
        description="Condo & co-op management, building operations, board support, financial management, technology, local law compliance, tax abatement, and capital project services across NYC."
      />

      <section className="bg-regal-blue-950 text-white section !pb-14">
        <div className="container-page">
          <p className="eyebrow text-sky-light">Our Services</p>
          <h1 className="mt-3 text-4xl sm:text-5xl text-white max-w-3xl">
            Everything your building needs, in one place.
          </h1>
          <p className="mt-5 text-lg text-sky-light/90 max-w-2xl leading-relaxed">
            Full-service management for condominiums and cooperatives — from daily operations and financial
            reporting to compliance and long-term capital planning.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page space-y-8">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 rounded-2xl border border-regal-blue-50 bg-ivory p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8"
            >
              <div className="flex lg:flex-col items-center lg:items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-regal-blue text-white shrink-0">
                  <DynamicIcon name={service.icon} className="h-7 w-7" />
                </div>
                <span className="font-serif text-3xl text-regal-blue-100 lg:mt-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl">{service.title}</h2>
                <p className="mt-3 text-charcoal-light leading-relaxed max-w-3xl">{service.description}</p>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-sky-dark shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-regal-blue">
        <div className="container-page py-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl text-white">Not sure which services your building needs?</h2>
            <p className="mt-2 text-sky-light/90">Tell us about your building — we'll recommend a plan tailored to it.</p>
          </div>
          <Link to="/contact" className="btn-accent">
            Request a Proposal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
