import logoOnWhite from '../assets/logo/logoonwhite.png'
import logoOnBlue from '../assets/logo/logoonblue.png'

const SOURCES = {
  default: logoOnWhite,
  charcoal: logoOnWhite,
  inverse: logoOnBlue,
}

const SIZES = {
  sm: 'h-6',
  md: 'h-8 sm:h-9',
  lg: 'h-9 sm:h-11',
}

export default function Logo({ variant = 'default', size = 'md', className = '', tagline = false }) {
  const src = SOURCES[variant] || SOURCES.default
  const heightClass = SIZES[size] || SIZES.md

  return (
    <span className={`inline-flex flex-col select-none ${className}`}>
      {/* The "A" in the wordmark is a diagonal stroke, so its bounding box only
          touches the left edge at its very foot — for most of its height it sits
          visibly right of the flat-stroked tagline below it. Nudge it left to
          optically align the two lines. */}
      <img src={src} alt="Altmax Property Management" className={`w-auto -translate-x-[4%] ${heightClass}`} />
      {tagline && (
        <span
          className={`font-sans text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase mt-1.5 ${
            variant === 'inverse' ? 'text-sky-light' : 'text-charcoal-light'
          }`}
        >
          Property Management
        </span>
      )}
    </span>
  )
}
