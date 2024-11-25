import Link from "next/link"
import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Copyright */}
          <div>
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold text-white">SaaSStarter</span>
            </div>
            <p className="mt-4 text-sm text-zinc-400">
              Ship your startup in days, not weeks
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Copyright © 2024 - All rights reserved
            </p>
            <div className="mt-4 inline-flex items-center px-3 py-2 space-x-2 text-sm border rounded-lg border-zinc-800 bg-zinc-900">
              <span className="text-zinc-400">Built with</span>
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-zinc-300">SaaSStarter</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-zinc-500 uppercase text-sm font-semibold tracking-wider mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-zinc-400 hover:text-white">Login</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">Support</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">Leaderboard</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">Documentation</Link></li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  Affiliates — Earn up to $124 per sale
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center px-4 py-2 bg-[#5865F2] text-white rounded-lg text-sm">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-zinc-500 uppercase text-sm font-semibold tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-zinc-400 hover:text-white">Terms of services</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">Privacy policy</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">Licenses</Link></li>
            </ul>
          </div>

          {/* By the maker */}
          <div>
            <h3 className="text-zinc-500 uppercase text-sm font-semibold tracking-wider mb-4">
              By the maker of SaaSStarter
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-zinc-400 hover:text-white">Newsletter for makers</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">ByeDispute</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">IndiePage</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">ZenVoice</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">GamifyList</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">WorkbookPDF</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">HabitsGarden</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">PoopUp</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">Fake It Till You Make It</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">LogoFast</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">Logo inspiration</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white">DataFast</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}