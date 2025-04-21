import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/app/components/mobile-menu"

export default function MusicPage({ params }: { params: { slug: string } }) {
  // Find the release by slug
  const release = releases.find((r) => r.slug === params.slug) || releases[0]

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
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <Link href="/#releases" className="inline-flex items-center text-sm font-medium mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to releases
          </Link>

          <div className="grid md:grid-cols-[300px_1fr] gap-8 mb-12">
            <div className="aspect-square w-full max-w-[300px] mx-auto md:mx-0">
              <img
                src={release.cover || "/placeholder.svg"}
                alt={release.title}
                className="w-full h-full object-cover shadow-lg"
                width={300}
                height={300}
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{release.title}</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-1">
                {release.artist.includes("feat.") ? (
                  <>
                    <Link href={`/artists/${getArtistIdByName("Daniel Rizzo")}`} className="hover:underline">
                      Daniel Rizzo
                    </Link>
                    {release.artist.replace("Daniel Rizzo", "")}
                  </>
                ) : (
                  <Link href={`/artists/${getArtistIdByName(release.artist)}`} className="hover:underline">
                    {release.artist}
                  </Link>
                )}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                {release.type} • {release.date}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {release.links &&
                  Object.entries(release.links).map(([platform, url]) => (
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

              <p className="text-zinc-600 dark:text-zinc-300 mb-4">{release.description}</p>
              {release.isrc && (
                <div className="flex flex-col gap-1 mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                  {release.isrc && <p>ISRC: {release.isrc}</p>}
                  {release.upc && <p>UPC: {release.upc}</p>}
                </div>
              )}
            </div>
          </div>

          {release.tracks && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Tracklist</h2>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                {release.tracks?.map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border-b border-border last:border-0 hover:bg-accent/50"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-muted-foreground w-6">{index + 1}</span>
                      <div>
                        <h3 className="font-medium">{track.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {release.isUpcoming && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Tracklist (Available April 23, 2025)</h2>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                {release.tracks?.map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border-b border-border last:border-0 hover:bg-accent/50"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-muted-foreground w-6">{index + 1}</span>
                      <div>
                        <h3 className="font-medium blur-sm">{track.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center mt-4 text-sm text-muted-foreground">
                Pre-save now and be the first to listen on release day.
              </p>
            </div>
          )}

          <div className="text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              <span className="text-base mr-1">©</span> 2024 NTRL Records. All rights reserved.
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-4">
              For licensing inquiries, please contact{" "}
              <a href="mailto:ntrlrecordslabel@gmail.com" className="underline">
                ntrlrecordslabel@gmail.com
              </a>
            </p>
            <div className="flex justify-center gap-4">
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
        </div>
      </main>
    </div>
  )
}

// Helper function to format platform names
function formatPlatformName(platform: string): string {
  if (platform === "appleMusic") return "Apple Music"
  if (platform === "soundcloud") return "SoundCloud"
  return platform.charAt(0).toUpperCase() + platform.slice(1)
}

// Helper function to get artist ID by name
function getArtistIdByName(name: string): string {
  const artist = artists.find((a) => a.name === name || name.startsWith(a.name))
  return artist ? artist.id : "1" // Default to ID 1 if not found
}

// Updated data for Daniel Rizzo's releases
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
    tracks: [{ title: "Glass Prisons" }],
    links: {
      spotify: "https://open.spotify.com/album/2mRlnXbejW97Jt9wjwfFUm",
      tidal: "https://tidal.com/browse/album/428684121",
    },
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
    tracks: [{ title: "Cinderella" }],
    links: {
      spotify: "https://open.spotify.com/album/3UTnoE8OxAMLwzK4gFX5S5",
      tidal: "https://tidal.com/browse/album/427517057",
    },
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
    tracks: [{ title: "Dripping in the sauce" }],
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
    tracks: [{ title: "Heartbeat of Change" }],
    links: {
      spotify: "https://open.spotify.com/album/5LXZXm9pPlT3qYH7VHJedK",
      appleMusic: "https://music.apple.com/album/heartbeat-of-change-single/1776829552",
      tidal: "https://tidal.com/browse/album/391297803",
    },
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
    tracks: [{ title: "Original Storm" }],
    links: {
      spotify: "https://open.spotify.com/album/0ZljJkrpTP5YIViA3EeNgD",
      appleMusic: "https://music.apple.com/album/original-storm-single/1770411259",
      tidal: "https://tidal.com/browse/album/384497072",
    },
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
    tracks: [
      { title: "Lies Unravel" },
      { title: "All Love" },
      { title: "Under Pressure" },
      { title: "Jet Set Dreams" },
      { title: "All Mine" },
      { title: "In My Veins" },
      { title: "Six Days, Six Nights" },
      { title: "Love or Lust?" },
    ],
    links: {
      spotify: "https://open.spotify.com/album/70FenBdZxAQTWvbdyziiWl",
      appleMusic: "https://music.apple.com/album/echos-in-the-ether/1771130571",
      tidal: "https://tidal.com/browse/album/384921393?u",
      soundcloud: "https://soundcloud.com/daniel-rizzo-music/sets/echos-in-the-ether-1",
    },
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
      "Graduation Heart marks Daniel Rizzo's debut album, a deeply personal exploration of endings and new beginnings. The album weaves together electronic elements with emotional narratives, creating a soundtrack for life's transitions.",
    slug: "graduation-heart",
    upc: "5063531059096",
    tracks: [
      { title: "Rise Again" },
      { title: "Homecoming Heart" },
      { title: "Break the Chains" },
      { title: "Rough Start, Rise High" },
      { title: "Gold Chains and Empty Souls" },
      { title: "Echos" },
      { title: "Black Clouds" },
      { title: "Grace and Mercy" },
    ],
    links: {
      spotify: "https://open.spotify.com/album/1RwO4LGNmvsyBAx2EXnBLP",
      appleMusic: "https://music.apple.com/album/graduation-heart/1769919508",
      tidal: "https://tidal.com/browse/album/383919559",
      soundcloud: "https://soundcloud.com/daniel-rizzo-music/sets/graduation-heart-1",
    },
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
    tracks: [
      { title: "Survivors Heart" },
      { title: "New Dawn, New Life" },
      { title: "Money Grows On Trees" },
      { title: "Shit Kinda Hits Hard" },
      { title: "Priceless Journey" },
    ],
    links: {
      spotify: "https://open.spotify.com/album/27zaKlYxpugwBcRbXcnV6G",
      appleMusic: "https://music.apple.com/album/survivors-heart-ep/1768989950",
      tidal: "https://tidal.com/browse/album/382949615",
      soundcloud: "https://soundcloud.com/daniel-rizzo-music/sets/survivors-heart",
    },
  },
]

// Artist data for linking
const artists = [
  {
    id: "1",
    name: "Daniel Rizzo",
    genre: "Experimental Hip-Hop",
    image:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/8178d792-db24-4af8-fd13-e41802b08f00/w=640,h=640,f=auto,fit=cover",
  },
]
