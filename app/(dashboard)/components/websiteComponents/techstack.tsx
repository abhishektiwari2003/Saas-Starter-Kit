import { Card } from "@/components/ui/card"
import { Zap, Wind, Shield, CreditCard, Database, Mail } from 'lucide-react'

export default function TechStack() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Built with the best tech stack
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Everything you need to build a modern SaaS business
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto aspect-square">
          {/* Central circle with gradient border */}
          <div className="absolute inset-0 rounded-full border border-zinc-800" />
          
          {/* Tech cards positioned around the circle */}
          {/* Next.js - Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Card className="p-4 bg-zinc-900 border-zinc-800 w-64">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-black rounded">
                  <Zap className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Next.js</h3>
                  <ul className="mt-1 text-sm text-zinc-400">
                    <li>App Router</li>
                    <li>React Server Components</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Tailwind - Top Right */}
          <div className="absolute top-[25%] right-0 translate-x-1/2">
            <Card className="p-4 bg-zinc-900 border-zinc-800 w-64">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-black rounded">
                  <Wind className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Tailwind</h3>
                  <ul className="mt-1 text-sm text-zinc-400">
                    <li>Components</li>
                    <li>Animations</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Stripe - Bottom Right */}
          <div className="absolute bottom-[25%] right-0 translate-x-1/2">
            <Card className="p-4 bg-zinc-900 border-zinc-800 w-64">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-black rounded">
                  <CreditCard className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Stripe</h3>
                  <ul className="mt-1 text-sm text-zinc-400">
                    <li>Webhook</li>
                    <li>Checkout</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* MongoDB - Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <Card className="p-4 bg-zinc-900 border-zinc-800 w-64">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-black rounded">
                  <Database className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Postgres</h3>
                  <ul className="mt-1 text-sm text-zinc-400">
                    <li>Database</li>
                    <li>Neon</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Mailgun - Bottom Left */}
          <div className="absolute bottom-[25%] left-0 -translate-x-1/2">
            <Card className="p-4 bg-zinc-900 border-zinc-800 w-64">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-black rounded">
                  <Mail className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Mailgun</h3>
                  <ul className="mt-1 text-sm text-zinc-400">
                    <li>DNS records</li>
                    <li>Avoid spam</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* NextAuth - Top Left */}
          <div className="absolute top-[25%] left-0 -translate-x-1/2">
            <Card className="p-4 bg-zinc-900 border-zinc-800 w-64">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-black rounded">
                  <Shield className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">OAuth</h3>
                  <ul className="mt-1 text-sm text-zinc-400">
                    <li>Resend and Forgot Password</li>
                    <li>Token Based Login</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <code className="text-yellow-500 bg-zinc-900/50 px-4 py-2 rounded-full font-mono text-sm">
              git clone saas-starter
            </code>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="text-zinc-400 text-sm">
            + all the boring stuff (SEO tags, API calls, customer support)
          </p>
        </div>
      </div>
    </section>
  )
}