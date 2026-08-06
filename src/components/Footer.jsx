import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-regal-blue-950 text-sky-light">
      <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
        <div>
          <Logo variant="inverse" tagline className="text-2xl mb-4" />
          <p className="text-sm text-sky-light/80 max-w-xs">
            Caring & honest, exclusive condo & co-op property management across New York City.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Request a Proposal</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services#condo-coop-management" className="hover:text-white transition-colors">Condo & Co-op Management</Link></li>
            <li><Link to="/services#financial-management" className="hover:text-white transition-colors">Financial Management</Link></li>
            <li><Link to="/services#local-law-legal-compliance" className="hover:text-white transition-colors">Local Law Compliance</Link></li>
            <li><Link to="/services#capital-projects" className="hover:text-white transition-colors">Capital Projects</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>1449 37th Street<br />Brooklyn, NY 11218</span>
            </li>
            <li>
              <a href="tel:7186874683" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" /> 718.687.4683
              </a>
            </li>
            <li>
              <a href="mailto:info@altmaxny.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" /> info@altmaxny.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-2 py-5 text-xs text-sky-light/70">
          <p>© {year} Altmax Property Management. All rights reserved.</p>
          <p>Alternative Solutions. Maximum Value.</p>
        </div>
      </div>
    </footer>
  )
}
