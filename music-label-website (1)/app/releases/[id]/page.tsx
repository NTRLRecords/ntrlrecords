import Link from "next/link"
import { ArrowLeft, ExternalLink, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ReleasePage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the release data based on the ID
  // For this example, we'll use sample data
  const release = releases.find((r) => r.id === params.id) || releases[0]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold tracking-tighter">
            NTRL
          </Link>
          <nav className="hidden md:flex gap-6">
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
          <Button variant="outline" size="sm" className="hidden md:flex">
            Listen
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <Link href="/#releases" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all releases
          </Link>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={release.cover || "/placeholder.svg"}
                alt={release.title}
                className="object-cover w-full h-full"
                width={600}
                height={600}
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{release.title}</h1>
                <p className="text-gray-500">by {release.artist}</p>
                <p className="text-sm text-gray-400">
                  {release.date} • {release.type}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500">{release.description}</p>
                <div className="flex flex-wrap gap-2">
                  {release.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>
                  Listen Now
                  <Play className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Buy</Button>
              </div>
            </div>
          </div>

          <Separator className="my-12" />

          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter">Tracklist</h2>
            <div className="space-y-4">
              {release.tracks.map((track, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-md hover:bg-muted">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
                    <div>
                      <h3 className="font-medium">{track.title}</h3>
                      <p className="text-sm text-gray-500">{track.duration}</p>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">© 2023 NTRL. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
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
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
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
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Updated data for Daniel Rizzo's releases
const releases = [
  {
    id: "1",
    title: "Glass Prisons",
    artist: "Daniel Rizzo",
    date: "2023",
    type: "Single",
    cover: "/placeholder.svg?height=600&width=600",
    description:
      "Glass Prisons explores themes of confinement and transparency through minimalist electronic compositions. This single showcases Daniel Rizzo's ability to create emotional depth with sparse, carefully crafted sounds.",
    tags: ["Electronic", "Experimental", "Minimal"],
    tracks: [
      { title: "Glass Prisons", duration: "4:32" },
      { title: "Glass Prisons (Extended Mix)", duration: "7:15" },
      { title: "Glass Prisons (Instrumental)", duration: "4:30" },
    ],
  },
  {
    id: "2",
    title: "Cinderella",
    artist: "Daniel Rizzo",
    date: "2023",
    type: "Single",
    cover: "/placeholder.svg?height=600&width=600",
    description:
      "Cinderella reimagines the classic fairy tale through sound, creating a narrative that balances between darkness and light. This single demonstrates Rizzo's talent for storytelling through experimental electronic music.",
    tags: ["Electronic", "Narrative", "Experimental"],
    tracks: [
      { title: "Cinderella", duration: "5:17" },
      { title: "Midnight", duration: "3:45" },
      { title: "Glass Slipper", duration: "4:23" },
    ],
  },
  {
    id: "3",
    title: "Dripping in the sauce",
    artist: "Daniel Rizzo feat. Peanicumsuction Production",
    date: "2022",
    type: "Single",
    cover: "/placeholder.svg?height=600&width=600",
    description:
      "A collaborative effort with Peanicumsuction Production, this single brings together two distinct styles to create something uniquely captivating. The track blends Rizzo's experimental approach with Peanicumsuction's production expertise.",
    tags: ["Collaboration", "Electronic", "Experimental"],
    tracks: [
      { title: "Dripping in the sauce", duration: "4:48" },
      { title: "Dripping in the sauce (Radio Edit)", duration: "3:30" },
      { title: "Dripping in the sauce (Remix)", duration: "5:22" },
    ],
  },
  {
    id: "4",
    title: "Echos in the Ether",
    artist: "Daniel Rizzo",
    date: "2022",
    type: "Album",
    cover: "/placeholder.svg?height=600&width=600",
    description:
      "Echos in the Ether is Daniel Rizzo's exploration of space and resonance. This album creates immersive soundscapes that seem to exist between dimensions, capturing fleeting moments and transforming them into timeless compositions.",
    tags: ["Album", "Ambient", "Experimental", "Electronic"],
    tracks: [
      { title: "Void Calling", duration: "5:12" },
      { title: "Digital Whispers", duration: "4:37" },
      { title: "Ethereal Plane", duration: "6:20" },
      { title: "Resonant Frequencies", duration: "5:45" },
      { title: "Spectral Memory", duration: "7:03" },
      { title: "Quantum Echo", duration: "4:58" },
      { title: "Astral Projection", duration: "8:15" },
      { title: "Return Signal", duration: "5:30" },
    ],
  },
  {
    id: "5",
    title: "Graduation Heart",
    artist: "Daniel Rizzo",
    date: "2021",
    type: "Album",
    cover: "/placeholder.svg?height=600&width=600",
    description:
      "Graduation Heart marks Daniel Rizzo's debut album, a deeply personal exploration of endings and new beginnings. The album weaves together electronic elements with emotional narratives, creating a soundtrack for life's transitions.",
    tags: ["Album", "Electronic", "Emotional", "Debut"],
    tracks: [
      { title: "Last Day", duration: "4:15" },
      { title: "Empty Halls", duration: "3:52" },
      { title: "Promises We Made", duration: "5:07" },
      { title: "Four Years Gone", duration: "4:30" },
      { title: "Tassel Turn", duration: "3:45" },
      { title: "First Goodbye", duration: "6:20" },
      { title: "New Horizons", duration: "5:15" },
      { title: "Remember When", duration: "4:48" },
      { title: "Future Calling", duration: "7:10" },
    ],
  },
]
