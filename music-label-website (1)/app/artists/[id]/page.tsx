import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/app/components/mobile-menu"

export default function ArtistPage({ params }: { params: { id: string } }) {
  // Find the artist by ID
  const artist = artists.find((a) => a.id === params.id) || artists[0]

  // Get releases by this artist and sort by date (newest first)
  const artistReleases = releases
    .filter((release) => release.artist === artist.name || release.artist.startsWith(`${artist.name} feat.`))
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="font-bold tracking-tighter mr-8 ml-4">
              NTRL
            </Link>
          </div>
          <nav className="hidden md:flex gap-8 justify-center">
            <Link href="/#artists" className="text-sm font-medium hover:underline underline-offset-4">
              Artist
            </Link>
            <Link href="/#releases" className="text-sm font-medium hover:underline underline-offset-4">
              Releases
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex-1 flex justify-end items-center gap-4">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <Link href="/#artists" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={artist.image || "/placeholder.svg"}
                alt={artist.name}
                className="object-cover w-full h-full"
                width={600}
                height={600}
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{artist.name}</h1>
                <p className="text-gray-500 dark:text-gray-400">{artist.genre}</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">{artist.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {artist.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {artist.social &&
                  Object.entries(artist.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 bg-background border border-input rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <span className="text-sm font-medium capitalize">{formatPlatformName(platform)}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
              </div>
            </div>
          </div>

          <Separator className="my-12" />

          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter">Releases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {artistReleases.map((release) => (
                <Link key={release.id} href={`/music/${release.slug}`} className="group flex flex-col gap-2">
                  <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                    <img
                      src={release.cover || "/placeholder.svg"}
                      alt={release.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      width={300}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-medium">{release.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{release.type}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{release.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="text-base mr-1">©</span> 2024 NTRL Records. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/ntrl.records"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://x.com/NTRLRecord"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter / X</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Helper function to format platform names
function formatPlatformName(platform: string): string {
  if (platform === "appleMusic") return "Apple Music"
  if (platform === "tiktok") return "TikTok"
  return platform.charAt(0).toUpperCase() + platform.slice(1)
}

// Updated data for Daniel Rizzo
const artists = [
  {
    id: "danielrizzo",
    name: "Daniel Rizzo",
    genre: "Experimental Hip-Hop",
    image:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/8178d792-db24-4af8-fd13-e41802b08f00/w=640,h=640,f=auto,fit=cover",
    bio: "Daniel Rizzo is an innovative electronic artist who blends experimental sounds with emotional depth. His work explores the intersection of digital and analog, creating immersive sonic landscapes that challenge conventional music structures.",
    tags: ["Experimental", "Hip-Hop", "Ambient", "Avant-garde"],
    social: {
      spotify: "https://open.spotify.com/artist/4bTW4FMMmM05RBiTXwPgrx",
      appleMusic: "https://music.apple.com/artist/daniel-rizzo/521563078",
      soundcloud: "https://soundcloud.com/daniel-rizzo-music",
      tidal: "https://tidal.com/artist/11831858",
      instagram: "https://www.instagram.com/danielrizzo0",
      tiktok: "https://www.tiktok.com/@danielrizzomusic",
    },
  },
]

const releases = [
  {
    id: "1",
    title: "Glass Prisons",
    artist: "Daniel Rizzo",
    type: "Single",
    date: "April 7, 2025",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/0d59fe3d-d6ee-468e-af7e-d3005cc33000/w=640,h=640,f=auto,fit=cover",
    slug: "glass-prisons",
    isrc: "AEA2L2137545",
    upc: "5063600952556",
  },
  {
    id: "2",
    title: "Cinderella",
    artist: "Daniel Rizzo",
    type: "Single",
    date: "April 1, 2025",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/833ae9bd-e80c-484d-2fe1-c5dac4157500/w=640,h=640,f=auto,fit=cover",
    slug: "cinderella",
    isrc: "AEA2L2134744",
    upc: "5063600939823",
  },
  {
    id: "3",
    title: "Dripping in the sauce",
    artist: "Daniel Rizzo feat. Peanicumsuction Production",
    type: "Single",
    date: "June 6, 2024",
    cover: "https://dashboard.dittomusic.com/releases/display_artwork_vue/4165660/medium",
    slug: "dripping-in-the-sauce",
    isrc: "GX3HH2473370",
    upc: "5063655322731",
  },
  {
    id: "4",
    title: "Heartbeat of Change",
    artist: "Daniel Rizzo",
    type: "Single",
    date: "September 29, 2024",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/e5dfd206-4709-45c9-d634-7d56ae8c1d00/w=640,h=640,f=auto,fit=cover",
    slug: "heartbeat-of-change",
    isrc: "AEA0Q2415612",
    upc: "5063600448936",
  },
  {
    id: "5",
    title: "Original Storm",
    artist: "Daniel Rizzo",
    type: "Single",
    date: "August 28, 2024",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/1dda0691-ee35-4197-54ec-ca979c2cc400/w=640,h=640,f=auto,fit=cover",
    slug: "original-storm",
    isrc: "AEA2L2469030",
    upc: "5063531042272",
  },
  {
    id: "6",
    title: "Echos in the Ether",
    artist: "Daniel Rizzo",
    type: "Album",
    date: "August 28, 2024",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/0a8ea776-d32f-4d3a-7d6c-72a5eb9a7c00/w=640,h=640,f=auto,fit=cover",
    slug: "echos-in-the-ether",
    upc: "5063531018901",
  },
  {
    id: "7",
    title: "Graduation Heart",
    artist: "Daniel Rizzo",
    type: "Album",
    date: "August 25, 2024",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/f86b5e23-8f04-44f9-39a9-4a258b6db200/w=640,h=640,f=auto,fit=cover",
    slug: "graduation-heart",
    upc: "5063531059096",
  },
  {
    id: "8",
    title: "Survivors Heart",
    artist: "Daniel Rizzo",
    type: "EP",
    date: "August 18, 2024",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/a29d8265-f193-481c-a840-2850453a0f00/w=640,h=640,f=auto,fit=cover",
    slug: "survivors-heart",
    upc: "5063531096749",
  },
  {
    id: "9",
    title: "The Decency Of Love Is Holding You Back To Be Loyal.",
    artist: "Daniel Rizzo",
    type: "Album",
    date: "April 23, 2025",
    cover: "https://i.imgur.com/PeiqMF3.jpeg",
    slug: "the-decency-of-love-is-holding-you-back-to-be-loyal.",
    isUpcoming: true,
  },
]
