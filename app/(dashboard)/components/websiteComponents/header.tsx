"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Star } from 'lucide-react'

export default function HeaderAndHero() {
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [terminalText, setTerminalText] = useState("")
  const fullText = "git clone saas-starter\ncd saas-starter\nnpm install\nnpm run dev"

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "l") {
        setShowLeaderboard(true)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      {/* <nav className="border-b border-zinc-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-semibold">SaaSStarter</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Pricing
            </Link>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start"> {/* Update 1: Changed items-center to items-start */}
            <div>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Ship your startup{" "}
                <span className="block">
                  in days,{" "}
                  <span className="inline-block bg-zinc-800 px-2 py-1 rounded">
                    not weeks
                  </span>
                </span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8">
                The NextJS boilerplate with all you need to build your SaaS, AI
                tool, or any other web app and make your first $ online fast.
              </p>

              <div className="space-y-6">
                <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Zap className="mr-2 h-5 w-5" />
                  Get SaaSStarter
                </Button>

                <div className="flex items-center text-sm text-green-500">
                  <span className="mr-2">$100 off</span>
                  <span className="text-zinc-500">for the first 100 customers (15 left)</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-950"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-zinc-400">
                      <span className="font-semibold text-zinc-300">5095</span> makers ship faster
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-16"> {/* Update 2: Added mt-8 lg:mt-0 and shadow-lg */}
              <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-yellow-400">
                  <code>{terminalText}</code>
                </pre>
                <div className="mt-2 animate-pulse">_</div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="text-center">
              <p className="text-sm text-zinc-500 mb-4">Featured on</p>
              <div className="flex items-center space-x-8">
                <div className="text-zinc-400">Hacker News</div>
                <div className="text-zinc-400">Product Hunt</div>
                <div className="text-zinc-400">X</div>
                <div className="text-zinc-400">reddit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showLeaderboard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
            <p>Leaderboard content goes here...</p>
            <Button onClick={() => setShowLeaderboard(false)} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}