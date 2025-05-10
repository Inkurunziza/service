import type React from "react"
import LayoutWrapper from "@/components/layout-wrapper"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutWrapper currentSection="home">{children}</LayoutWrapper>
}
