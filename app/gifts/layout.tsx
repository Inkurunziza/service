import type React from "react"
import LayoutWrapper from "@/components/layout-wrapper"

export default function GiftsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutWrapper currentSection="gifts">{children}</LayoutWrapper>
}
