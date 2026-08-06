const VARIANTS = {
  default: 'text-regal-blue',
  inverse: 'text-white',
  charcoal: 'text-charcoal',
}

export default function Logo({ variant = 'default', className = '', tagline = false }) {
  const textColor = VARIANTS[variant] || VARIANTS.default

  return (
    <span className={`inline-flex flex-col select-none ${className}`}>
      <span className={`font-wordmark font-light tracking-[0.14em] ${textColor}`}>
        ALTMA
        <span className="text-sky-dark">X</span>
      </span>
      {tagline && (
        <span
          className={`font-sans text-[0.55em] font-medium tracking-[0.2em] uppercase mt-0.5 ${
            variant === 'inverse' ? 'text-sky-light' : 'text-charcoal-light'
          }`}
        >
          Property Management
        </span>
      )}
    </span>
  )
}
