import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { GetStartedFreeButton } from "../get-started-free-button"
import { BookDemoButton } from "../book-demo-button"

export function FeaturesHero() {
  return (
    <section className="relative py-24 bg-linear-to-br from-[#0f766e] to-[#0f766e]/80 text-white px-6">
      <div className="container pt-16 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-[#fde047]" />
          <span className="text-sm font-medium">Complete Feature Suite</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Everything You Need to Run Your Pharmacy, Simplified
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-[#f0fdfa]/90 mb-10 max-w-3xl mx-auto text-pretty">
          Pharmy brings together inventory, prescriptions, billing, suppliers, compliance, and analytics — into one
          powerful, easy-to-use platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
            <GetStartedFreeButton className="rounded-full bg-white font-semibold text-[#0F766E] hover:bg-white/90 transition-all duration-300" />
            <BookDemoButton className="rounded-full text-white font-semibold border-white/30 border-2 hover:bg-transparent/90 hover:text-white/85 hover:border-white/30 transition-all duration-300" />
          </div>
      </div>
    </section>
  )
}
