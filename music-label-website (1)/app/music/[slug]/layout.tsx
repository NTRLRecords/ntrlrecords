import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  params: { slug: string }
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the release by slug
  const release = releases.find((r) => r.slug === params.slug)

  if (!release) {
    return {
      title: "Release Not Found | NTRL Records",
      icons: {
        icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      },
    }
  }

  return {
    title: `${release.title} by ${release.artist} | NTRL Records`,
    description: release.description,
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
    openGraph: {
      title: `${release.title} by ${release.artist}`,
      description: release.description,
      images: [release.cover],
    },
  }
}

// Remove the <html> and <head> tags from this layout since they're already defined in the root layout
// Keep only the ThemeProvider and its children

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

// Release data for metadata generation
const releases = [
  {
    id: "1",
    title: "Glass Prisons",
    artist: "Daniel Rizzo",
    date: "April 7, 2025",
    type: "Single",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/0d59fe3d-d6ee-468e-af7e-d3005cc33000/w=640,h=640,f=auto,fit=cover",
    description:
      "Glass Prisons explores themes of confinement and transparency through minimalist electronic compositions. This single showcases Daniel Rizzo's ability to create emotional depth with sparse, carefully crafted sounds.",
    slug: "glass-prisons",
    isrc: "AEA2L2137545",
    upc: "5063600952556",
  },
  {
    id: "2",
    title: "Cinderella",
    artist: "Daniel Rizzo",
    date: "April 1, 2025",
    type: "Single",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/833ae9bd-e80c-484d-2fe1-c5dac4157500/w=640,h=640,f=auto,fit=cover",
    description:
      "Cinderella reimagines the classic fairy tale through sound, creating a narrative that balances between darkness and light. This single demonstrates Rizzo's talent for storytelling through experimental electronic music.",
    slug: "cinderella",
    isrc: "AEA2L2134744",
    upc: "5063600939823",
  },
  {
    id: "3",
    title: "Dripping in the sauce",
    artist: "Daniel Rizzo feat. Peanicumsuction Production",
    date: "June 6, 2024",
    type: "Single",
    cover: "https://dashboard.dittomusic.com/releases/display_artwork_vue/4165660/medium",
    description:
      "A collaborative effort with Peanicumsuction Production, this single brings together two distinct styles to create something uniquely captivating. The track blends Rizzo's experimental approach with Peanicumsuction's production expertise.",
    slug: "dripping-in-the-sauce",
    isrc: "GX3HH2473370",
    upc: "5063655322731",
  },
  {
    id: "4",
    title: "Heartbeat of Change",
    artist: "Daniel Rizzo",
    date: "September 29, 2024",
    type: "Single",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/e5dfd206-4709-45c9-d634-7d56ae8c1d00/w=640,h=640,f=auto,fit=cover",
    description:
      "Heartbeat of Change is a rhythmic exploration of transformation and evolution. This single captures the pulse of personal growth through dynamic electronic compositions.",
    slug: "heartbeat-of-change",
    isrc: "AEA0Q2415612",
    upc: "5063600448936",
  },
  {
    id: "5",
    title: "Original Storm",
    artist: "Daniel Rizzo",
    date: "August 28, 2024",
    type: "Single",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/1dda0691-ee35-4197-54ec-ca979c2cc400/w=640,h=640,f=auto,fit=cover",
    description:
      "Original Storm captures the raw power and unpredictability of nature's forces. This single creates an immersive sonic landscape that evokes the intensity and beauty of a storm.",
    slug: "original-storm",
    isrc: "AEA2L2469030",
    upc: "5063531042272",
  },
  {
    id: "6",
    title: "Echos in the Ether",
    artist: "Daniel Rizzo",
    date: "August 28, 2024",
    type: "Album",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/0a8ea776-d32f-4d3a-7d6c-72a5eb9a7c00/w=640,h=640,f=auto,fit=cover",
    description:
      "Echos in the Ether is Daniel Rizzo's exploration of space and resonance. This album creates immersive soundscapes that seem to exist between dimensions, capturing fleeting moments and transforming them into timeless compositions.",
    slug: "echos-in-the-ether",
    upc: "5063531018901",
  },
  {
    id: "7",
    title: "Graduation Heart",
    artist: "Daniel Rizzo",
    date: "August 25, 2024",
    type: "Album",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/f86b5e23-8f04-44f9-39a9-4a258b6db200/w=640,h=640,f=auto,fit=cover",
    description:
      "Graduation Heartbreak marks Daniel Rizzo's debut album, a deeply personal exploration of endings and new beginnings. The album weaves together electronic elements with emotional narratives, creating a soundtrack for life's transitions.",
    slug: "graduation-heart",
    upc: "5063531059096",
  },
  {
    id: "8",
    title: "Survivors Heart",
    artist: "Daniel Rizzo",
    date: "August 18, 2024",
    type: "EP",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/a29d8265-f193-481c-a840-2850453a0f00/w=640,h=640,f=auto,fit=cover",
    description:
      "Survivors Heart is an intimate EP that explores resilience and healing through experimental electronic compositions. This collection showcases Daniel Rizzo's ability to convey deep emotion through innovative sound design.",
    slug: "survivors-heart",
    upc: "5063531096749",
  },
]
