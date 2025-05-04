"use client"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export default function InkurunzizaLogo({ width = 200, height = 200, className = "" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fond circulaire */}
      <circle cx="100" cy="100" r="90" fill="#f8fafc" stroke="#f59e0b" strokeWidth="4" />

      {/* Élément document (services administratifs) */}
      <path
        d="M70 55H50c-2.2 0-4 1.8-4 4v72c0 2.2 1.8 4 4 4h48c2.2 0 4-1.8 4-4V83L70 55z"
        fill="#3b82f6"
        opacity="0.9"
      />
      <path d="M70 55v24c0 2.2 1.8 4 4 4h24" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 100h28M60 112h28M60 124h28" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />

      {/* Élément avion amélioré (services de voyage) */}
      <g transform="translate(-10, -10) scale(1.2)">
        {/* Corps de l'avion */}
        <path d="M150 80l-40 20v-10l25-10-25-10v-10l40 20z" fill="#f59e0b" stroke="#e67e22" strokeWidth="1.5" />
        {/* Ailes de l'avion */}
        <path d="M130 70l-15 -15h-10l15 15" fill="#f59e0b" stroke="#e67e22" strokeWidth="1" />
        <path d="M130 90l-15 15h-10l15 -15" fill="#f59e0b" stroke="#e67e22" strokeWidth="1" />
        {/* Cockpit */}
        <path
          d="M150 80c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z"
          fill="#f59e0b"
          stroke="#e67e22"
          strokeWidth="1.5"
        />
        {/* Hublots */}
        <circle cx="135" cy="75" r="2" fill="#fff" />
        <circle cx="125" cy="75" r="2" fill="#fff" />
        <circle cx="115" cy="75" r="2" fill="#fff" />
      </g>

      {/* Élément globe (services internationaux) */}
      <circle cx="100" cy="120" r="30" fill="#3b82f6" opacity="0.2" />
      <path
        d="M100 90c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 5c1.9 0 3.8.2 5.6.6-1.2 1.5-2.1 3.2-2.1 5.1 0 4.4 3.6 8 8 8 1.9 0 3.6-.7 5-1.7.4 1.8.6 3.7.6 5.6 0 13.8-11.2 25-25 25s-25-11.2-25-25 11.2-25 25-25z"
        fill="#3b82f6"
      />
      <path d="M85 120c0-8.3 6.7-15 15-15" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 135c8.3 0 15-6.7 15-15" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />

      {/* Texte du logo */}
      <path d="M40 160h120" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <text
        x="100"
        y="175"
        fontFamily="'Dancing Script', cursive"
        fontSize="16"
        fontWeight="700"
        textAnchor="middle"
        fill="#0f172a"
      >
        Inkurunziza Services
      </text>
    </svg>
  )
}
