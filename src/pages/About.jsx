import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import DifferentiatorCard from '../components/DifferentiatorCard.jsx'
import GoogleRatingBadge from '../components/GoogleRatingBadge.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import { differentiators } from '../data/services.js'
import { newDevelopments, establishedBuildings } from '../data/properties.js'

const TIMELINE = [
  {
    year: '2011',
    title: 'Where it started',
    description:
      'Our team began managing New York City properties — starting with a 24-unit building and growing from there through hands-on, detail-driven service.',
  },
  {
    year: '2011–2021',
    title: 'A decade of range',
    description:
      'Over the following ten years, we managed everything from small walk-ups to portfolios of several hundred units on behalf of real estate family offices — learning what NYC boards actually need from a manager.',
  },
  {
    year: '2021',
    title: 'Altmax Property Management launches',
    description:
      'We launched Altmax to focus that experience exclusively on condominium and cooperative boards — bringing family-office-level financial discipline to buildings of every size.',
  },
  {
    year: 'Today',
    title: 'Exclusively condos & co-ops',
    description:
      'We manage exclusively condos and co-ops across NYC, combining hands-on service with modern, cloud-based tools that keep boards and owners informed.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        path="/about"
        title="About Us"
        description="Since 2011, Altmax Property Management has managed NYC properties from small co-ops to large condominium portfolios. In 2021 we launched Altmax to focus exclusively on condo & co-op boards."
      />

      <section className="bg-regal-blue-950 text-white section !pb-16">
        <div className="container-page">
          <p className="eyebrow text-sky-light">About Altmax</p>
          <h1 className="mt-3 text-4xl sm:text-5xl text-white max-w-3xl">
            Property management, run by people who treat your building like their own.
          </h1>
          <p className="mt-6 text-lg text-sky-light/90 max-w-2xl leading-relaxed">
            Altmax Property Management has been actively managing properties in New York City since 2011 —
            from small 24-unit buildings to portfolios of several hundred units for real estate family
            offices. In 2021, we launched Altmax to bring that experience to condominium and cooperative
            boards directly, and today we manage exclusively condos & co-ops across NYC.
          </p>
          <div className="mt-6">
            <GoogleRatingBadge variant="dark" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container-page">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-2 text-3xl sm:text-4xl mb-12">From Family-Office Roots to Focused Expertise</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((item) => (
              <div key={item.year} className="rounded-xl bg-ivory p-6 border border-regal-blue-50">
                <span className="font-serif text-2xl text-sky-dark">{item.year}</span>
                <h3 className="font-sans font-bold text-charcoal mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / how we work */}
      <section className="section bg-ivory">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Caring & Honest. Managing Exclusively Condos & Co-ops.</h2>
            <p className="mt-5 text-charcoal-light leading-relaxed">
              We built Altmax around a simple idea: a building runs better when the people managing it care
              about the outcome as much as the people who live there. That means straight answers from us
              even when they're inconvenient, a customized plan of action instead of a generic template, and
              a team that's genuinely easy to reach.
            </p>
            <p className="mt-4 text-charcoal-light leading-relaxed">
              We back that approach with modern tools — cloud-based portals, digital financial reporting,
              and proactive compliance tracking — so boards always know where their building stands.
            </p>
            <Link to="/services" className="inline-flex items-center gap-1.5 mt-6 font-semibold text-regal-blue link-underline">
              Explore our services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {differentiators.slice(0, 6).map((item) => (
              <DifferentiatorCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="section bg-white">
        <div className="container-page">
          <p className="eyebrow">Every Era of NYC Housing</p>
          <h2 className="mt-2 text-3xl sm:text-4xl mb-12">Prewar Co-ops to Brand-New Condominiums</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...newDevelopments.slice(0, 2), ...establishedBuildings.slice(0, 2)].map((p, i) => (
              <PropertyCard key={p.name} {...p} style={i < 2 ? 'new' : 'classic'} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-regal-blue">
        <div className="container-page py-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl text-white">Curious what Altmax could do for your building?</h2>
            <p className="mt-2 text-sky-light/90">Tell us about it — we'll follow up within 24 hours.</p>
          </div>
          <Link to="/contact" className="btn-accent">
            Request a Proposal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
