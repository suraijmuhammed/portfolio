import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammed Suraij Pc | Full Stack Developer",
  description: "Portfolio of Muhammed Suraij Pc - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Muhammed Suraij Pc", "Full Stack Developer", "React Developer", "Portfolio", "Web Developer"],
  openGraph: {
    title: "Muhammed Suraij Pc | Full Stack Developer",
    description: "Portfolio showcasing software development skills and projects",
    images: ["/og-image.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
