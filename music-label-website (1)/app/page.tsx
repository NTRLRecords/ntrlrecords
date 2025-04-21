import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/app/components/mobile-menu"
import { ThemeLogo } from "@/app/components/theme-logo"

export default function Home() {
  // Sort releases by date (newest first)
  const sortedReleases = [...releases].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  // Create placeholder text for each track (same length but with "•" characters)
  const createPlaceholder = (text: string) => {
    return "•".repeat(text.length)
  }

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
            <Link href="#artists" className="text-sm font-medium hover:underline underline-offset-4">
              Artist
            </Link>
            <Link href="#releases" className="text-sm font-medium hover:underline underline-offset-4">
              Releases
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
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
        <section className="py-24 md:py-32 lg:py-40 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">NTRL Records</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Showcasing innovative artists and groundbreaking releases since 2024.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <a href="#releases">
                    Latest Releases
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#artists">Our Artist</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 border-b bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Upcoming Release</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Available April 23, 2025
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl">
                <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-lg">
                  <img
                    src="https://i.imgur.com/PeiqMF3.jpeg"
                    alt="The Decency Of Love Is Holding You Back To Be Loyal album cover"
                    className="object-cover w-full h-full"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">The Decency Of Love Is Holding You Back To Be Loyal</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">Daniel Rizzo</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tracklist:</p>
                    <ul className="space-y-2">
                      {[
                        "Intro",
                        "Cinderella",
                        "Glass Prisons",
                        "04.04.25",
                        "Why Do Birds Suddenly Appear When I Think Of You",
                        "Decorate Our Hate",
                        "KEROSENE",
                      ].map((track, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-400 dark:text-gray-500">{index + 1}.</span>
                          <span className="text-sm font-medium blur-sm select-none" aria-label="Hidden track title">
                            {createPlaceholder(track)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                    <Button asChild>
                      <Link href="/music/the-decency-of-love">
                        Pre-save
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Link href="/music/the-decency-of-love">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="artists" className="py-12 md:py-24 lg:py-32 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Artist</h2>
                <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-lg">
                  Meet our talented musician who calls our label home.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <Link
                  href={`/artists/${artists[0].id}`}
                  className="group flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <div className="aspect-square w-full overflow-hidden bg-gray-100">
                    <img
                      src={artists[0].image || "/placeholder.svg"}
                      alt={artists[0].name}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-lg font-medium">{artists[0].name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{artists[0].genre}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="releases" className="py-12 md:py-24 lg:py-32 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Releases</h2>
                <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-lg">
                  Explore our catalog of music releases.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {sortedReleases.map((release) => (
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
                      <p className="text-sm text-gray-500 dark:text-gray-400">{release.artist}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {release.type} • {release.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 lg:py-32 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Music label: NTRL</h2>
                <p className="text-xl font-medium">"Pure Creation."</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What is NTRL?:</h3>
                    <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Organic, raw, and minimal-earth tones, soft textures, and deconstructed design.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>A fusion of nature and technology, blending analog warmth with futuristic elements.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>No excess-just essential, timeless artistry.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">What can NTRL provide?:</h3>
                    <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Artists who strip music down to its essence and build something new.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Releases feel like art installations-intentional, immersive, and culture-shifting.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>More than a label-a philosophy of pure, unfiltered expression.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                <ThemeLogo />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-lg">
                  For demos, booking, and general inquiries, reach out to us.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg" asChild>
                  <a href="mailto:ntrlrecordslabel@gmail.com">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Or email us directly at <span className="font-medium">ntrlrecordslabel@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
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

// Updated data for Daniel Rizzo
const artists = [
  {
    id: "1",
    name: "Daniel Rizzo",
    genre: "Experimental Hip-Hop",
    image:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/8178d792-db24-4af8-fd13-e41802b08f00/w=640,h=640,f=auto,fit=cover",
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
    links: {
      spotify: "https://open.spotify.com/album/2mRlnXbejW97Jt9wjwfFUm",
      tidal: "https://tidal.com/browse/album/428684121",
    },
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
    links: {
      spotify: "https://open.spotify.com/album/3UTnoE8OxAMLwzK4gFX5S5",
      tidal: "https://tidal.com/browse/album/427517057",
    },
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
    type: "Single",
    date: "August 28, 2024",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/1dda0691-ee35-4197-54ec-ca979c2cc400/w=640,h=640,f=auto,fit=cover",
    slug: "original-storm",
    isrc: "AEA2L2469030",
    upc: "5063531042272",
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
    type: "Album",
    date: "August 28, 2024",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/0a8ea776-d32f-4d3a-7d6c-72a5eb9a7c00/w=640,h=640,f=auto,fit=cover",
    slug: "echos-in-the-ether",
    upc: "5063531018901",
    links: {
      spotify: "https://open.spotify.com/album/70FenBdZxAQTWvbdyziiWl",
      appleMusic: "https://music.apple.com/album/echos-in-the-ether/1771130571",
      tidal: "https://tidal.com/browse/album/384921393?u",
      soundcloud: "https://soundcloud.com/daniel-rizzo-music/sets/echos-in-the-ether-1",
    },
  },
  {
    id: "7",
    title: "Graduation Heartbreak",
    artist: "Daniel Rizzo",
    type: "Album",
    date: "August 25, 2024",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/f86b5e23-8f04-44f9-39a9-4a258b6db200/w=640,h=640,f=auto,fit=cover",
    slug: "graduation-heartbreak",
    upc: "5063531059096",
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
    type: "EP",
    date: "August 18, 2024",
    cover:
      "https://imagedelivery.net/S_KBi515leX4rwPDIF-mpg/a29d8265-f193-481c-a840-2850453a0f00/w=640,h=640,f=auto,fit=cover",
    slug: "survivors-heart",
    upc: "5063531096749",
    links: {
      spotify: "https://open.spotify.com/album/27zaKlYxpugwBcRbXcnV6G",
      appleMusic: "https://music.apple.com/album/survivors-heart-ep/1768989950",
      tidal: "https://tidal.com/browse/album/382949615",
      soundcloud: "https://soundcloud.com/daniel-rizzo-music/sets/survivors-heart",
    },
  },
  {
    id: "9",
    title: "The Decency Of Love Is Holding You Back To Be Loyal",
    artist: "Daniel Rizzo",
    type: "Album",
    date: "April 23, 2025",
    cover: "https://i.imgur.com/PeiqMF3.jpeg",
    slug: "the-decency-of-love",
    isUpcoming: true,
    tracks: [
      { title: "Intro" },
      { title: "Cinderella" },
      { title: "Glass Prisons" },
      { title: "04.04.25" },
      { title: "Why Do Birds Suddenly Appear When I Think Of You" },
      { title: "Decorate Our Hate" },
      { title: "KEROSENE" },
    ],
  },
]
