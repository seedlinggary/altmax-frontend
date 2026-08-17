import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import FAQSchema from '../components/FAQSchema.jsx'
import Accordion from '../components/Accordion.jsx'
import { faqCategories } from '../data/faq.js'

export default function FAQ() {
  return (
    <>
      <SEO
        path="/faq"
        title="Frequently Asked Questions"
        description="Answers to common questions about condo & co-op management, board support, NYC local law compliance, financial reporting, and getting started with Altmax Property Management."
      />
      <FAQSchema categories={faqCategories} />

      <section className="bg-regal-blue-950 text-white section !pb-14">
        <div className="container-page">
          <p className="eyebrow text-sky-light">FAQ</p>
          <h1 className="mt-3 text-4xl sm:text-5xl text-white max-w-3xl">
            Answers for boards, owners, and shareholders.
          </h1>
          <p className="mt-5 text-lg text-sky-light/90 max-w-2xl leading-relaxed">
            The most common questions we hear from condo and co-op boards — if yours isn't here, just ask.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page max-w-4xl">
          {faqCategories.map((cat) => (
            <div key={cat.category} className="mb-14 last:mb-0">
              <h2 className="text-2xl sm:text-3xl mb-6">{cat.category}</h2>
              <Accordion items={cat.items} />
            </div>
          ))}

          <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-6 flex items-start gap-4">
            <Phone className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-sans font-bold text-red-800">Building emergency?</h3>
              <p className="text-sm text-red-700 mt-1">
                For floods, gas leaks, or no heat/hot water, call our 24/7 emergency hotline at{' '}
                <a href="tel:7185361200" className="font-semibold underline">718.536.1200</a>. For any
                life-threatening emergency, always call 911 first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-regal-blue">
        <div className="container-page py-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl text-white">Still have questions?</h2>
            <p className="mt-2 text-sky-light/90">Reach out and we'll walk you through exactly how we'd manage your building.</p>
          </div>
          <Link to="/contact" className="btn-accent">
            Request a Proposal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
