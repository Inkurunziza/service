"use client"

export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="text-blue-900">
        <defs>
          <pattern
            id="pattern-services"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(10)"
          >
            {/* Document (services administratifs) */}
            <path d="M20 20h15v20h-15z" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
            <path d="M23 25h9M23 30h9M23 35h9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />

            {/* Avion (services de voyage) */}
            <path
              d="M70 30l-10 5v-3l6-2-6-2v-3l10 5z"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.3"
              strokeWidth="1"
            />

            {/* Globe (services internationaux) */}
            <circle cx="50" cy="70" r="10" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
            <path
              d="M50 60c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 2c1 0 1.9.1 2.8.3"
              stroke="currentColor"
              strokeOpacity="0.3"
              strokeWidth="1"
              fill="none"
            />
            <path d="M45 70h10M50 65v10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-services)" />
      </svg>
    </div>
  )
}
