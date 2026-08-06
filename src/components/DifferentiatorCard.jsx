import DynamicIcon from './DynamicIcon.jsx'

export default function DifferentiatorCard({ icon, title, description, variant = 'light' }) {
  const isDark = variant === 'dark'

  return (
    <div className="flex gap-4">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
          isDark ? 'bg-sky/15 text-sky' : 'bg-sky/20 text-regal-blue'
        }`}
      >
        <DynamicIcon name={icon} className="h-5 w-5" />
      </div>
      <div>
        <h3 className={`font-sans font-bold mb-1 ${isDark ? 'text-white' : 'text-charcoal'}`}>{title}</h3>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-sky-light/80' : 'text-charcoal-light'}`}>
          {description}
        </p>
      </div>
    </div>
  )
}
