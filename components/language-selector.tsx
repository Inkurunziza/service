"use client"

import { useState } from "react"
import { useLanguage, type Language } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "fr", name: t("french") + " (Canada)", flag: "🇨🇦" },
    { code: "en", name: t("english") + " (Canada)", flag: "🇨🇦" },
    { code: "sw", name: t("swahili"), flag: "🇹🇿" },
    { code: "rn", name: t("kirundi"), flag: "🇧🇮" },
  ]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline-block">{languages.find((l) => l.code === language)?.flag}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code)
              setOpen(false)
            }}
            className="flex items-center justify-between"
          >
            <span>
              {lang.flag} {lang.name}
            </span>
            {language === lang.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
