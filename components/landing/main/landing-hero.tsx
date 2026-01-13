// import Image from "next/image"
import { GetStartedFreeButton } from "../get-started-free-button"
import { BookDemoButton } from "../book-demo-button"
import { PharmacyDashboardPreview } from "./pharmacy-dashboard-preview"

export function LandingHero() {
  return (
    <section className="bg-linear-to-b from-[#0e928c] to-[#0d9488] py-16 md:py-24">
      <div className="container mx-auto pt-16 px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-[#0f766e]/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="bg-[#f59e0b] text-white text-xs font-semibold px-2.5 py-1 rounded-full">New</span>
            <span className="text-white/90 text-sm font-medium">AI-Powered Pharmacy Management ✨</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Smarter, Simpler
            <br />
            <span className="text-[#ffffff]/80">Pharmacy Management</span>
          </h1>

          <p className="text-lg text-[#F0FDFA] mb-8 leading-relaxed max-w-2xl">
            Pharmy helps pharmacies streamline inventory, prescriptions, billing, suppliers, and compliance — all in one
            powerful app.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <GetStartedFreeButton className="rounded-full bg-white font-semibold text-[#0F766E] hover:bg-white/90 transition-all duration-300" />
            <BookDemoButton className="rounded-full text-white font-semibold border-white/30 border-2 hover:bg-transparent/90 hover:text-white/85 hover:border-white/30 transition-all duration-300" />
          </div>

          <div className="w-full lg:max-w-[1400px]">
            <PharmacyDashboardPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
