import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PricingHero } from "@/components/landing/pricing/pricing-hero"
import { PricingSection } from "@/components/landing/pricing/pricing-plans"
import { PricingComparison } from "@/components/landing/pricing/pricing-comparison"
import { PricingTestimonial } from "@/components/landing/pricing/pricing-testimonial"
import { PricingFaq } from "@/components/landing/pricing/pricing-faq"
import { PricingCta } from "@/components/landing/pricing/pricing-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pharmy Pricing – Pro Plan & Multi-Branch Add-On",
  description: "Transparent pricing for pharmacies. Free 3-day full access trial, Pro Plan at ₹3999/year for 1 branch, add branches at ₹1999/year.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main>
        <PricingHero />
        <PricingSection />
        <PricingComparison />
        <PricingTestimonial />
        <PricingFaq />
        <PricingCta />
      </main>
      <Footer />
    </div>
  )
}
