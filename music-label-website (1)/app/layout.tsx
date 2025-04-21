import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NTRL Records | Music Label",
  description:
    "NTRL Records - Pure Creation. An independent music label focused on organic, raw, and minimal artistry.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "NTRL Records | Music Label",
    description:
      "NTRL Records - Pure Creation. An independent music label focused on organic, raw, and minimal artistry.",
    url: "https://ntrlrecords.com",
    siteName: "NTRL Records",
    images: [
      {
        url: "https://i.imgur.com/Zbd6OcZ.png",
        width: 1200,
        height: 630,
        alt: "NTRL Records",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
