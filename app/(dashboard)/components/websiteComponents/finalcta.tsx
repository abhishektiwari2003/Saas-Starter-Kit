import { Button } from "@/components/ui/button"
import { Crown, Zap } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Crown className="w-12 h-12 text-yellow-400" />
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Boost your app, launch, earn
        </h2>
        
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
          Don&apos;t waste time on Stripe subscriptions or designing a pricing section...
        </p>

        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <Zap className="mr-2 h-5 w-5" />
          Get SaaSStarter
        </Button>
      </div>
    </section>
  )
}