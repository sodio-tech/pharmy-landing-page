import { GetStartedFreeButton } from "../get-started-free-button"
import { BookDemoButton } from "../book-demo-button"

export function PricingHero() {
  return (
  <section className="relative min-h-[600px] flex items-center justify-center bg-linear-to-b from-[#4db8af] to-[#0d9488] px-4 py-20 overflow-hidden">
       <div className="container mx-auto max-w-5xl text-center relative pt-20 pb-10 z-10">
        <div className="inline-flex items-center gap-2 bg-[#0f766e]/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
          <span className="bg-[#f59e0b] text-white text-xs font-semibold px-2.5 py-1 rounded-full">Best Value</span>
          <span className="text-white/90 text-sm font-medium">Transparent Pricing 💰</span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Simple, Transparent <span className="text-[#ffffff]/85">Pricing for Every Pharmacy</span> 
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto text-pretty">
          Choose a plan that fits your needs. Whether you run a single store or manage multiple branches, Pharmy scales
          with you.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <GetStartedFreeButton
            className="bg-white text-[#0f766e] hover:bg-[#f0fdfa] font-semibold px-8 py-6 text-base rounded-full"
          />
          <BookDemoButton
            variant="outline"
            className="border-2 border-white text-white font-semibold px-8 py-6 text-base rounded-full bg-transparent hover:bg-transparent/90 hover:text-white/85"
          />
        </div>
      </div>
    </section>
  )
}