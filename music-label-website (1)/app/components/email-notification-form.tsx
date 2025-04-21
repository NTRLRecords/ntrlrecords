"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EmailNotificationForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    if (!email || !email.includes("@") || !email.includes(".")) {
      setIsError(true)
      return
    }

    // In a real app, you would send this to your backend
    console.log("Notification email submitted")
    setIsSubmitted(true)
    setIsError(false)

    // Close dialog after 2 seconds
    setTimeout(() => {
      setOpen(false)
      // Reset form after dialog closes
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 300)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Notify Me</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get notified on release day</DialogTitle>
          <DialogDescription>
            Enter your email to receive a notification when "The Decency Of Love Is Holding You Back To Be Loyal" is
            released on April 23, 2025.
          </DialogDescription>
        </DialogHeader>
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-4 space-y-2">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-center font-medium">Thank you! We'll notify you when the album is released.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={isError ? "border-red-500" : ""}
                />
                {isError && <p className="text-sm text-red-500">Please enter a valid email address</p>}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Subscribe</Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
