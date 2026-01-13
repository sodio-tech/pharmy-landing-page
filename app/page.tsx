import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { LandingHero } from "@/components/landing/main/landing-hero"
import { FeaturesSection } from "@/components/landing/main/features-grid"
import { ComparisonSection } from "@/components/landing/main/challenge-solution"
import { AIFeatures } from "@/components/landing/main/ai-features"
import { Testimonials } from "@/components/landing/main/testimonials"
import { PricingSection } from "@/components/landing/main/pricing-section"
import { FAQSection } from "@/components/landing/main/faq-section"
import { FinalCTA } from "@/components/landing/main/final-cta"
import type { Metadata } from "next"
import LandingBox from "@/components/landing/main/landing-box"
import FixedHeader from "@/components/landing/FixedHeader"

export const metadata: Metadata = {
  title: "Pharmy – Pharmacy Management Software for Billing & Inventory",
  description: "Pharmy helps pharmacies manage billing, inventory, staff, and reports. Start your free 3-day trial and simplify daily pharmacy operations.",
  openGraph: {
    title: "Pharmy – Pharmacy Management Software for Billing & Inventory",
    description: "Pharmy helps pharmacies manage billing, inventory, staff, and reports. Start your free 3-day trial and simplify daily pharmacy operations.",
    url: "https://www.pharmy.one",
    siteName: "Pharmy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pharmy – Pharmacy Management Software for Billing & Inventory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmy – Pharmacy Management Software for Billing & Inventory",
    description: "Pharmy helps pharmacies manage billing, inventory, staff, and reports. Start your free 3-day trial and simplify daily pharmacy operations.",
    images: ["/logo.png"],
  },
}

export default function HomePage() {
  return (
    <>
      <FixedHeader />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <LandingHero />
          <LandingBox />
          <FeaturesSection />
          <ComparisonSection />
          <AIFeatures />
          <Testimonials />
          <PricingSection />
          <FAQSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>

  )
}
