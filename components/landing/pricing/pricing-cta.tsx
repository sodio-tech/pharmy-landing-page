import { CheckCircle } from "lucide-react"
import { GetStartedFreeButton } from "../get-started-free-button"
import { BookDemoButton } from "../book-demo-button"

export function PricingCta() {
  return (
    <section className="py-20 px-4 bg-linear-to-br from-[#f9fafb] to-[#f3f4f6]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#e0f2f1] text-[#0f766e] px-4 py-2 rounded-full mb-6">
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Get Started Today</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
          Ready to Simplify Your Pharmacy Management?
        </h2>
        <p className="text-lg text-[#4b5563] mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 2,000+ pharmacies already using Pharmy to streamline operations, reduce errors, and boost profitability.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <GetStartedFreeButton className="bg-[#0f766e] text-[#ffffff] hover:bg-[#0d5f5a] font-semibold p-7 rounded-full text-base shadow-lg hover:shadow-xl transition-all" />
          <BookDemoButton className="bg-[#ffffff] text-[#0f766e] border-2 border-[#e5e7eb] font-semibold p-7 rounded-full text-base shadow-sm hover:shadow-md transition-all" />
        </div>

        <div className="flex items-center justify-center gap-2 text-[#6b7280]">
          <CheckCircle className="w-5 h-5 text-[#0f766e]" />
          <p className="text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
