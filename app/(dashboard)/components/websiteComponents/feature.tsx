import { Zap, Rocket, Lock, BarChart, CreditCard, Users } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-400" />,
    title: "Lightning Fast",
    description: "Built on Next.js for optimal performance and SEO."
  },
  {
    icon: <Rocket className="h-6 w-6 text-blue-400" />,
    title: "Quick Setup",
    description: "Get your SaaS up and running in minutes, not weeks."
  },
  {
    icon: <Lock className="h-6 w-6 text-green-400" />,
    title: "Secure by Default",
    description: "Integrated authentication and best security practices."
  },
  {
    icon: <BarChart className="h-6 w-6 text-purple-400" />,
    title: "Analytics Built-in",
    description: "Track user behavior and make data-driven decisions."
  },
  {
    icon: <CreditCard className="h-6 w-6 text-red-400" />,
    title: "Payments Ready",
    description: "Stripe integration for hassle-free payments and subscriptions."
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-400" />,
    title: "Multi-tenant",
    description: "Built to handle multiple users and organizations."
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Everything you need to launch your SaaS</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            SaaS Starter comes packed with all the features you need to build, launch, and grow your SaaS business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-zinc-700 rounded-full p-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}