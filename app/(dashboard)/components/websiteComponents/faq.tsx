import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What's included in SaaS Starter?",
      answer: "SaaS Starter includes everything you need to build a modern SaaS application: Next.js 13 App Router setup, authentication with NextAuth.js, database integration (MongoDB/Supabase), Stripe payment processing, email integration with Mailgun, and all the boring stuff like SEO, API endpoints, and customer support tools."
    },
    {
      question: "Do I need to know Next.js to use this?",
      answer: "While having experience with Next.js is helpful, our comprehensive documentation and clear code structure make it accessible even if you're new to Next.js. Basic React knowledge is recommended."
    },
    {
      question: "Is this a one-time payment?",
      answer: "Yes, SaaS Starter is available for a one-time payment. You'll get access to all future updates and new features we add to the boilerplate."
    },
    {
      question: "Can I use this for client projects?",
      answer: "You can use SaaS Starter for as many personal or client projects as you want. Each purchase comes with an unlimited license."
    },
    {
      question: "What if I need help?",
      answer: "We offer comprehensive documentation and community support through Discord. For the Pro plan, you get priority email support and direct access to the development team."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with SaaS Starter, just let us know and we'll refund your purchase."
    },
    {
      question: "Can I customize the design?",
      answer: "Yes! The entire UI is built with Tailwind CSS and shadcn/ui components, making it easy to customize the design to match your brand. All components are fully customizable."
    },
    {
      question: "Is it production-ready?",
      answer: "Yes, SaaS Starter is built with production best practices and has been tested in real-world applications. It includes error handling, security measures, and performance optimizations."
    }
  ]
  
  export default function FAQ() {
    return (
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Everything you need to know about SaaS Starter. Can't find the answer you're looking for? Reach out to our team.
            </p>
          </div>
  
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-zinc-800 rounded-lg px-4 bg-zinc-900"
                >
                  <AccordionTrigger className="text-white hover:text-white text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
  
          <div className="mt-16 text-center">
            <p className="text-zinc-400">
              Still have questions?{" "}
              <a href="#" className="text-yellow-400 hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }