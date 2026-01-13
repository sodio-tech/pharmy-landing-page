import { Footer } from "@/components/landing/footer"
import { FeaturesHero } from "@/components/landing/features/features-hero"
import { FeaturesIntro } from "@/components/landing/features/features-intro"
import { UserAccessFeature } from "@/components/landing/features/user-access-feature"
import { InventoryFeature } from "@/components/landing/features/inventory-feature"
import { PrescriptionFeature } from "@/components/landing/features/prescription-feature"
import { SalesBillingFeature } from "@/components/landing/features/sales-billing-feature"
import { AiIntelligence } from "@/components/landing/features/ai-intelligence"
import { CompleteFeatureSuite } from "@/components/landing/features/complete-feature-suite"
import { WhyChoosePharmy } from "@/components/landing/features/why-choose-pharmy"
import { FeaturesCta } from "@/components/landing/features/features-cta"
import type { Metadata } from "next"
import FixedHeader from "@/components/landing/FixedHeader"

export const metadata: Metadata = {
  title: "Pharmy Features – Billing, Inventory, Reports & Staff Control",
  description: "Explore Pharmy features: billing, inventory control, sales reports, staff roles, and multi-branch management. Built for modern pharmacies.",
  openGraph: {
    title: "Pharmy Features – Billing, Inventory, Reports & Staff Control",
    description: "Explore Pharmy features: billing, inventory control, sales reports, staff roles, and multi-branch management. Built for modern pharmacies.",
    url: "https://www.pharmy.one/features",
    siteName: "Pharmy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pharmy Features",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmy Features – Billing, Inventory, Reports & Staff Control",
    description: "Explore Pharmy features: billing, inventory control, sales reports, staff roles, and multi-branch management. Built for modern pharmacies.",
    images: ["/logo.png"],
  },
}

export default function FeaturesPage() {
    return (
      <>  
      <FixedHeader />
        <div className="min-h-screen bg-[#ffffff]">
            <main>
                <FeaturesHero />
                <FeaturesIntro />
                <UserAccessFeature />
                <InventoryFeature />
                <PrescriptionFeature />
                <SalesBillingFeature />
                <AiIntelligence />
                <CompleteFeatureSuite />
                <WhyChoosePharmy />
                <FeaturesCta />
            </main>
            <Footer />
        </div>
        </>
    )
}
