import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PricingHero } from "@/components/landing/pricing/pricing-hero"
import { PricingSection } from "@/components/landing/pricing/pricing-plans"
import { PricingComparison } from "@/components/landing/pricing/pricing-comparison"
import { PricingTestimonial } from "@/components/landing/pricing/pricing-testimonial"
import { PricingFaq } from "@/components/landing/pricing/pricing-faq"
import { PricingCta } from "@/components/landing/pricing/pricing-cta"
import type { Metadata } from "next"
import FixedHeader from "@/components/landing/FixedHeader"

export const metadata: Metadata = {
  title: "Pharmy Pricing – Pro Plan & Multi-Branch Add-On",
  description: "Transparent pricing for pharmacies. Free 3-day full access trial, Pro Plan at ₹3999/year for 1 branch, add branches at ₹1999/year.",
  openGraph: {
    title: "Pharmy Pricing – Pro Plan & Multi-Branch Add-On",
    description: "Transparent pricing for pharmacies. Free 3-day full access trial, Pro Plan at ₹3999/year for 1 branch, add branches at ₹1999/year.",
    url: "https://www.pharmy.one/pricing",
    siteName: "Pharmy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pharmy Pricing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmy Pricing – Pro Plan & Multi-Branch Add-On",
    description: "Transparent pricing for pharmacies. Free 3-day full access trial, Pro Plan at ₹3999/year for 1 branch, add branches at ₹1999/year.",
    images: ["/logo.png"],
  },
}

export default function PricingPage() {
  return (
    <>
    <FixedHeader />
    <div className="min-h-screen bg-[#ffffff]">
      <main>
        <PricingHero />
        <PricingSection />
        <PricingComparison />
        <PricingFaq />
        <PricingTestimonial />
        <PricingCta />
      </main>
      <Footer />
    </div>
    </>
  )
}
