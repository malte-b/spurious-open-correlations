import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-berlin",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <title>Wer wird Millionär? - Berlin Edition</title>
        <meta name="description" content="Ein Quiz über Berlin-Statistiken im Stil von Wer wird Millionär?" />
      </head>
      <body className={cn("min-h-screen bg-berlin-white text-berlin-black", inter.variable)}>{children}</body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
