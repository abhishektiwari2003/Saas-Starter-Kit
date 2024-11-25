"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Hobby",
    price: {
      monthly: 0,
      annually: 0
    },
    description: "For side projects and small startups",
    features: [
      "Up to 1,000 users",
      "Basic analytics",
      "Community support",
      "1 team member"
    ]
  },
  {
    name: "Pro",
    price: {
      monthly: 49,
      annually: 470
    },
    description: "For growing businesses and teams",
    features: [
      "Up to 10,000 users",
      "Advanced analytics",
      "Priority support",
      "5 team members",
      "Custom integrations"
    ]
  },
  {
    name: "Enterprise",
    price: {
      monthly: 199,
      annually: 1990
    },
    description: "For large-scale applications",
    features: [
      "Unlimited users",
      "Custom analytics",
      "24/7 dedicated support",
      "Unlimited team members",
      "Custom development",
      "SLA"
    ]
  }
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
          <div className="mt-6 inline-flex items-center bg-zinc-900 rounded-full p-1">
            <button
              className={`px-4 py-2 rounded-full ${!annual ? 'bg-zinc-800 text-white' : 'text-zinc-400'}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full ${annual ? 'bg-zinc-800 text-white' : 'text-zinc-400'}`}
              onClick={() => setAnnual(true)}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`bg-zinc-900 border-zinc-800 ${index === 1 ? 'md:-mt-4 md:mb-4' : ''}`}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                <CardDescription className="text-zinc-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-4">
                  ${annual ? plan.price.annually : plan.price.monthly}
                  <span className="text-lg font-normal text-zinc-400">
                    {annual ? '/year' : '/month'}
                  </span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zinc-300">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                  {index === 2 ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Badge variant="outline" className="text-yellow-400 border-yellow-400">
            All plans include a 14-day free trial
          </Badge>
          <p className="mt-4 text-zinc-400">
            Need a custom plan? <a href="#" className="text-yellow-400 hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  )
}