import { Card } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechStart",
    image: "/placeholder.svg?height=80&width=80",
    content: "SaaS Starter saved us weeks of development time. The authentication and payment integration worked flawlessly out of the box.",
    rating: 5
  },
  {
    name: "Alex Rivera",
    role: "CTO, DataFlow",
    image: "/placeholder.svg?height=80&width=80",
    content: "The best investment we made for our startup. Clean code, great documentation, and amazing support when we needed it.",
    rating: 5
  },
  {
    name: "Michael Park",
    role: "Developer",
    image: "/placeholder.svg?height=80&width=80",
    content: "I was able to launch my SaaS in just 3 days using this boilerplate. The code quality is exceptional.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    role: "Product Manager",
    image: "/placeholder.svg?height=80&width=80",
    content: "The attention to detail in this template is impressive. Everything from SEO to analytics is well thought out.",
    rating: 5
  },
  {
    name: "David Kumar",
    role: "Indie Hacker",
    image: "/placeholder.svg?height=80&width=80",
    content: "This saved me so much time. I was able to focus on my product instead of worrying about the technical setup.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Software Engineer",
    image: "/placeholder.svg?height=80&width=80",
    content: "The code structure is clean and well-organized. It's been a joy to build upon this foundation.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Loved by developers worldwide
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Join thousands of satisfied developers who have shipped their products faster with SaaS Starter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zinc-800 border-zinc-700 p-6">
              <div className="flex items-start gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-zinc-300 leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zinc-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-zinc-400">
            <span className="font-semibold text-white">4.9/5</span> from over 500+ reviews
          </div>
        </div>
      </div>
    </section>
  )
}