import { Star } from 'lucide-react'
import { googleReviews } from '../data/googleReviews.js'

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20.4H24v7.2h11.3c-1.6 4.5-5.9 7.8-11.3 7.8-6.9 0-12.5-5.6-12.5-12.5S17.1 10.4 24 10.4c3.2 0 6.1 1.2 8.3 3.2l5.1-5.1C34.2 5.4 29.4 3.4 24 3.4 12.4 3.4 3 12.8 3 24.4s9.4 21 21 21c10.9 0 20.1-8 20.1-21 0-1.3-.2-2.6-.5-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l5.9 4.3C13.8 15 18.5 12 24 12c3.2 0 6.1 1.2 8.3 3.2l5.1-5.1C34.2 6.9 29.4 4.9 24 4.9c-7.6 0-14.2 4.3-17.7 10.6z" />
      <path fill="#4CAF50" d="M24 44.9c5.3 0 10-1.8 13.7-5l-6.3-5.3c-2 1.4-4.6 2.3-7.4 2.3-5.4 0-9.9-3.4-11.6-8.2l-6.1 4.7c3.4 6.8 10.4 11.5 17.7 11.5z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20.4H24v7.2h11.3c-.8 2.2-2.2 4.1-4 5.4l6.3 5.3C40.5 36.1 44 30.6 44 24.4c0-1.3-.2-2.6-.4-3.9z" />
    </svg>
  )
}

export default function GoogleRatingBadge({ variant = 'light', className = '' }) {
  const { rating, reviewCount, placeUrl } = googleReviews
  const isDark = variant === 'dark'
  const hasRating = typeof rating === 'number' && typeof reviewCount === 'number'

  return (
    <a
      href={placeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-lg border px-4 py-2.5 transition-colors ${
        isDark
          ? 'border-white/15 bg-white/5 hover:bg-white/10'
          : 'border-regal-blue-100 bg-white hover:border-sky-dark'
      } ${className}`}
    >
      <GoogleG />
      {hasRating ? (
        <div className="flex flex-col leading-tight">
          <span className={`flex items-center gap-1 font-sans font-bold text-sm ${isDark ? 'text-white' : 'text-charcoal'}`}>
            {rating.toFixed(1)}
            <span className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5"
                  fill={i < Math.round(rating) ? '#FFC107' : 'none'}
                  stroke={i < Math.round(rating) ? '#FFC107' : '#9CA3AF'}
                />
              ))}
            </span>
          </span>
          <span className={`text-xs ${isDark ? 'text-sky-light/80' : 'text-charcoal-light'}`}>
            {reviewCount} Google reviews
          </span>
        </div>
      ) : (
        <span className={`font-sans font-semibold text-sm ${isDark ? 'text-white' : 'text-charcoal'}`}>
          Read our reviews on Google
        </span>
      )}
    </a>
  )
}
