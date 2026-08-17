// Stylized building illustrations standing in for real photography.
// The "Illustrative" tag disappears automatically once a `photo` is passed in.

function ModernBuilding({ accent }) {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
      <rect width="320" height="240" fill="#dcebfb" />
      <rect x="0" y="170" width="320" height="70" fill="#c3d9ee" />
      <rect x="60" y="30" width="140" height="200" fill="#0d4d9e" />
      <rect x="200" y="70" width="90" height="160" fill={accent} />
      {Array.from({ length: 9 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <rect
            key={`m-${row}-${col}`}
            x={70 + col * 26}
            y={42 + row * 20}
            width="18"
            height="12"
            fill="#bfe3ff"
            opacity={(row + col) % 3 === 0 ? 0.55 : 0.9}
          />
        )),
      )}
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, col) => (
          <rect
            key={`s-${row}-${col}`}
            x={210 + col * 24}
            y={82 + row * 20}
            width="16"
            height="11"
            fill="#eaf6ff"
            opacity={(row + col) % 2 === 0 ? 0.5 : 0.85}
          />
        )),
      )}
      <rect x="60" y="30" width="140" height="6" fill="#062a5c" />
    </svg>
  )
}

function ClassicBuilding({ accent }) {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
      <rect width="320" height="240" fill="#f4ece1" />
      <rect x="0" y="185" width="320" height="55" fill="#e2d6c4" />
      <rect x="40" y="40" width="240" height="190" fill={accent} />
      <rect x="40" y="40" width="240" height="14" fill="#5b4636" />
      <rect x="40" y="216" width="240" height="14" fill="#5b4636" />
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <rect
            key={`c-${row}-${col}`}
            x={58 + col * 34}
            y={64 + row * 30}
            width="20"
            height="24"
            fill="#f7ede0"
            stroke="#5b4636"
            strokeWidth="1.5"
            opacity={0.92}
          />
        )),
      )}
      <rect x="140" y="188" width="40" height="42" fill="#3d2f24" />
    </svg>
  )
}

// No name/address is shown — these are sample photos illustrating NYC building
// styles Altmax works with, not buildings currently under Altmax management.
export default function PropertyCard({ style = 'new', variant = 1, photo }) {
  const isNew = style === 'new'
  const palettes = isNew ? ['#3a72c0', '#1c5aa8', '#4FA6E8', '#0a3f85'] : ['#8a6d52', '#9c7d5e', '#7a5f47', '#a3865f']
  const accent = palettes[(variant - 1) % palettes.length]
  const alt = isNew ? 'Sample new-construction NYC condominium' : 'Sample established NYC co-op building'

  return (
    <figure className="group overflow-hidden rounded-xl bg-white shadow-card border border-black/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        {photo ? (
          <img src={photo} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <>
            {isNew ? <ModernBuilding accent={accent} /> : <ClassicBuilding accent={accent} />}
            <span className="absolute top-2 right-2 rounded-full bg-charcoal/70 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              Illustrative
            </span>
          </>
        )}
      </div>
    </figure>
  )
}
