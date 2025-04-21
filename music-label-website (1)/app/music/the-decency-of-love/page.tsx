import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/app/components/mobile-menu"
import { EmailNotificationForm } from "@/app/components/email-notification-form"

export default function UpcomingReleasePage() {
  const release = {
    id: "9",
    title: "The Decency Of Love Is Holding You Back To Be Loyal.",
    artist: "Daniel Rizzo",
    date: "April 23, 2025",
    type: "Album",
    cover: "https://i.imgur.com/PeiqMF3.jpeg",
    description:
      "Daniel Rizzo's highly anticipated new album explores the complex relationship between love, loyalty, and personal freedom. This album represents a bold new direction in Rizzo's artistic journey.",
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
  }

  // Calculate days until release
  const releaseDate = new Date("April 23, 2025")
  const today = new Date()
  const diffTime = Math.abs(releaseDate.getTime() - today.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

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
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-sm font-medium">
                <span>Coming in {diffDays} days</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2">{release.title}</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-1">{release.artist}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                {release.type} • {release.date}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <Button className="flex items-center justify-center gap-2">
                  Pre-save
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <EmailNotificationForm />
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 mb-4">{release.description}</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Tracklist (Available {release.date})</h2>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {release.tracks?.map((track, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 border-b border-border last:border-0 hover:bg-accent/50"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-muted-foreground w-6">{index + 1}</span>
                    <div>
                      <h3 className="font-medium blur-sm select-none" aria-label="Hidden track title">
                        {createPlaceholder(track.title)}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-4 text-sm text-muted-foreground">
              Pre-save now and be the first to listen on release day.
            </p>
          </div>

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
