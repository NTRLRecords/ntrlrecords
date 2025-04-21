"use client"

import { useTheme } from "next-themes"

interface ThemeLogoProps {
  className?: string
  width?: number
  height?: number
}

export function ThemeLogo({ className, width = 600, height = 400 }: ThemeLogoProps) {
  const { theme } = useTheme()

  // Use different images based on the current theme
  const logoSrc = theme === "dark" ? "https://i.imgur.com/OIouet3.jpeg" : "https://i.imgur.com/yex3f9j.png"

  return (
    <img
      src={logoSrc || "/placeholder.svg"}
      alt="NTRL Records logo"
      className={className || "object-contain w-full h-full"}
      width={width}
      height={height}
    />
  )
}
