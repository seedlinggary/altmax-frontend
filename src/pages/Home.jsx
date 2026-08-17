import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import ProposalBox from '../components/ProposalBox.jsx'
import GoogleRatingBadge from '../components/GoogleRatingBadge.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import DifferentiatorCard from '../components/DifferentiatorCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import { services, differentiators } from '../data/services.js'
import { testimonials } from '../data/testimonials.js'
import { newDevelopments, establishedBuildings } from '../data/properties.js'

const STATS = [
  { value: '2011', label: 'Managing NYC Properties Since' },
  { value: '5', label: 'Boroughs Served' },
  { value: '24/7', label: 'Emergency Response' },
  { value: '30–60', label: 'Day Onboarding' },
]

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        title="NYC Condo & Co-op Property Management"
        description="Caring & honest, exclusive condo & co-op property management in New York City. Financial clarity, responsive service, and technology-powered operations. Get a custom proposal in 24 hours."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-regal-blue-950 via-regal-blue to-regal-blue-800">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_20%,white,transparent_45%)]" />
        <div className="container-page relative py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <div className="animate-fade-up">
            <p className="eyebrow text-sky-light">Caring & Honest • Condos & Co-ops Only</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-white">
              NYC Property Management,{' '}
              <span className="text-sky">Managed Like You Own It.</span>
            </h1>
            <p className="mt-6 text-lg text-sky-light/90 max-w-xl leading-relaxed">
              Altmax Property Management runs the full picture for Condo and Co-op buildings across New York
              City — common charge collection, board communication, maintenance, compliance, budgeting, and
              capital planning — backed by modern technology and a team that actually answers the phone.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-accent">
                Request a Proposal <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:7185361200" className="btn-secondary bg-transparent border-white/30 text-white hover:border-white">
                Call 718.536.1200
              </a>
            </div>

            <div className="mt-8">
              <GoogleRatingBadge variant="dark" />
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-3xl text-white">{stat.value}</dd>
                  <p className="mt-1 text-xs uppercase tracking-wide text-sky-light/80">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <ProposalBox className="lg:sticky lg:top-28" />
        </div>
      </section>

      {/* Who we are */}
      <section className="section bg-white">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Exclusively Condos & Co-ops. Exclusively NYC.</h2>
            <p className="mt-5 text-charcoal-light leading-relaxed">
              We don't manage rentals, and we don't manage buildings outside New York City. That focus means
              every process we've built — from board reporting to local law tracking — is designed
              specifically for how condominiums and cooperatives operate, not adapted from a generic
              playbook.
            </p>
            <p className="mt-4 text-charcoal-light leading-relaxed">
              Since 2011 our team has managed properties ranging from 24-unit walk-ups to portfolios of
              several hundred units for real estate family offices. In 2021, we launched Altmax Property
              Management to bring that same standard of care to condo and co-op boards directly.
            </p>
            <Link to="/about" className="inline-flex items-center gap-1.5 mt-6 font-semibold text-regal-blue link-underline">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Zero-guesswork, tailored NYC management',
              'Customized plan of action per building',
              'Long-term, proven track record',
              'Financial clarity & precision',
              'Extremely responsive team',
              'Tech-powered daily operations',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 rounded-lg bg-ivory p-4 border border-regal-blue-50">
                <CheckCircle2 className="h-5 w-5 text-sky-dark shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-ivory">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">What We Do</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Full-Service Management, Built for Boards</h2>
            <p className="mt-4 text-charcoal-light leading-relaxed">
              From day-to-day operations to long-term capital planning, we cover every function a condo or
              co-op board needs — under one roof, with one point of contact.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section bg-regal-blue-950 text-white">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow text-sky-light">What Sets Us Apart</p>
            <h2 className="mt-2 text-3xl sm:text-4xl text-white">
              Alternative Solutions. Maximum Value.
            </h2>
            <p className="mt-4 text-sky-light/85 leading-relaxed">
              We manage your building the way we'd manage our own — with the care, urgency, and financial
              discipline that comes from actually being invested in the outcome.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {differentiators.map((item) => (
              <DifferentiatorCard key={item.title} {...item} variant="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Properties we manage */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">From Prewar to Brand New</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Buildings of Every Era, Managed With the Same Care</h2>
            <p className="mt-4 text-charcoal-light leading-relaxed">
              Whether it's a landmark prewar co-op or a newly built condominium, our approach adapts to the
              building — not the other way around.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-sky-dark mb-5">
              New Developments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newDevelopments.map((p) => (
                <PropertyCard key={p.name} {...p} style="new" />
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-regal-blue-800 mb-5">
              Established Buildings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {establishedBuildings.map((p) => (
                <PropertyCard key={p.name} {...p} style="classic" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-ivory">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="eyebrow">Client Testimonials</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Trusted by Boards & Owners</h2>
            </div>
            <GoogleRatingBadge />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-regal-blue">
        <div className="container-page py-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl text-white">Ready for management that actually responds?</h2>
            <p className="mt-2 text-sky-light/90">Get a custom proposal within 24 hours — no obligation.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-accent">
              Request a Proposal <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:7185361200" className="btn-secondary bg-transparent border-white/30 text-white hover:border-white">
              718.536.1200
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
