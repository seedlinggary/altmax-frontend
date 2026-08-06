import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-regal-blue-50 rounded-xl border border-regal-blue-50 bg-white overflow-hidden">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.question}>
            <button
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-ivory transition-colors"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="font-sans font-semibold text-charcoal">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-sky-dark transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-charcoal-light leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
