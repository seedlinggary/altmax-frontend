import DynamicIcon from './DynamicIcon.jsx'

export default function ServiceCard({ icon, title, short, id, expanded = false, children }) {
  return (
    <div id={id} className="scroll-mt-28 rounded-xl bg-white p-8 shadow-card border border-black/5 h-full">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-regal-blue-50 text-regal-blue mb-5">
        <DynamicIcon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="font-serif text-xl text-regal-blue mb-2">{title}</h3>
      <p className="text-charcoal-light text-[0.95rem] leading-relaxed">{short}</p>
      {expanded && children}
    </div>
  )
}
