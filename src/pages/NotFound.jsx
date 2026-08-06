import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO path="/404" title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="section bg-white min-h-[60vh] flex items-center">
        <div className="container-page text-center">
          <p className="font-serif text-7xl text-regal-blue-100">404</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">We couldn't find that page.</h1>
          <p className="mt-3 text-charcoal-light">It may have moved, or the address may be incorrect.</p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
