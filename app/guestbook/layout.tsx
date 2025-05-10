import type React from "react"
import LayoutWrapper from "@/components/layout-wrapper"

export default function GuestbookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutWrapper currentSection="guestbook">{children}</LayoutWrapper>
}
