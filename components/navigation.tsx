"use client"
import Link from "next/link"
import { translations } from "@/lib/translations"

interface NavigationProps {
  language: string
  currentSection: string
}

export default function Navigation({ language, currentSection }: NavigationProps) {
  const t = translations[language as keyof typeof translations]

  return (
    <nav className="w-full max-w-md mx-auto mt-8 mb-10">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link
            href="/"
            className={`nav-link text-white hover:text-gold transition-colors ${
              currentSection === "home" ? "text-gold active" : ""
            }`}
          >
            {t.home}
          </Link>
        </li>
        <li>
          <Link
            href="/gifts"
            className={`nav-link text-white hover:text-gold transition-colors ${
              currentSection === "gifts" ? "text-gold active" : ""
            }`}
          >
            {t.gifts}
          </Link>
        </li>
        <li>
          <Link
            href="/guestbook"
            className={`nav-link text-white hover:text-gold transition-colors ${
              currentSection === "guestbook" ? "text-gold active" : ""
            }`}
          >
            {t.guestbook}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
