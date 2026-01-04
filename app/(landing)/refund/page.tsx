import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { RefundHero } from "@/components/landing/refund/refund-hero"
import { ImportantInfo } from "@/components/landing/refund/important-info"
import { FreeTrialPolicy } from "@/components/landing/refund/free-trial-policy"
import { RefundPolicySection } from "@/components/landing/refund/refund-policy-section"
import { CancellationPolicySection } from "@/components/landing/refund/cancellation-policy-section"
import { RenewalPlanChanges } from "@/components/landing/refund/renewal-plan-changes"
import { NonRefundableItems } from "@/components/landing/refund/non-refundable-items"
import { BillingSupport } from "@/components/landing/refund/billing-support"
import { RefundCta } from "@/components/landing/refund/refund-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pharmy Refund Policy – Subscription Refund & Cancellation Rules",
  description: "Understand Pharmy's refund policy including eligibility, cancellations, subscription refunds, and how to request support for billing issues.",
  openGraph: {
    title: "Pharmy Refund Policy – Subscription Refund & Cancellation Rules",
    description: "Understand Pharmy's refund policy including eligibility, cancellations, subscription refunds, and how to request support for billing issues.",
    url: "https://www.pharmy.one/refund",
    siteName: "Pharmy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pharmy Refund Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmy Refund Policy – Subscription Refund & Cancellation Rules",
    description: "Understand Pharmy's refund policy including eligibility, cancellations, subscription refunds, and how to request support for billing issues.",
    images: ["/logo.png"],
  },
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <RefundHero />
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <ImportantInfo />
          <FreeTrialPolicy />
          <RefundPolicySection />
          <CancellationPolicySection />
          <RenewalPlanChanges />
          <NonRefundableItems />
          <BillingSupport />
        </div>
        <RefundCta />
      </main>
      <Footer />                
    </div>
  )
}
