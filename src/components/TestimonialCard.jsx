import { Quote } from 'lucide-react'

export default function TestimonialCard({ quote, author, role }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-xl bg-white p-8 shadow-card border border-black/5">
      <Quote className="h-8 w-8 text-sky mb-4" />
      <blockquote className="flex-1 text-charcoal text-[1.05rem] leading-relaxed">"{quote}"</blockquote>
      <figcaption className="mt-6 pt-4 border-t border-regal-blue-50">
        <p className="font-sans font-bold text-regal-blue">{author}</p>
        <p className="font-sans text-sm text-charcoal-light">{role}</p>
      </figcaption>
    </figure>
  )
}
