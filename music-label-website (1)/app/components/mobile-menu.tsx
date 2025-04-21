"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={handleToggle}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-12">
        <nav className="flex flex-col gap-6 text-lg">
          <Link href="/#artists" className="font-medium hover:underline underline-offset-4" onClick={handleLinkClick}>
            Artist
          </Link>
          <Link href="/#releases" className="font-medium hover:underline underline-offset-4" onClick={handleLinkClick}>
            Releases
          </Link>
          <Link href="/#about" className="font-medium hover:underline underline-offset-4" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/#contact" className="font-medium hover:underline underline-offset-4" onClick={handleLinkClick}>
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
