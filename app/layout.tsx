import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Invitation au mariage de Christopher Edison et Devother Fidelis",
  description:
    "Invitation au mariage de Christopher Edison et Devother Fidelis. Rejoignez-nous pour célébrer ce moment spécial à Dar es Salaam !",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} font-roboto`}>{children}</body>
    </html>
  )
}
