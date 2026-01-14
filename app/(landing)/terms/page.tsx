import { TermsHero } from "@/components/landing/terms/terms-hero"
import { TermsIntroduction } from "@/components/landing/terms/terms-introduction"
import { TermsEligibility } from "@/components/landing/terms/terms-eligibility"
import { TermsServices } from "@/components/landing/terms/terms-services"
import { TermsResponsibilities } from "@/components/landing/terms/terms-responsibilities"
import { TermsPayment } from "@/components/landing/terms/terms-payment"
import { TermsDataPrivacy } from "@/components/landing/terms/terms-data-privacy"
import { TermsIntellectualProperty } from "@/components/landing/terms/terms-intellectual-property"
import { TermsThirdParty } from "@/components/landing/terms/terms-third-party"
import { TermsLiability } from "@/components/landing/terms/terms-liability"
import { TermsAvailability } from "@/components/landing/terms/terms-availability"
import { TermsTermination } from "@/components/landing/terms/terms-termination"
import { TermsGoverningLaw } from "@/components/landing/terms/terms-governing-law"
import { TermsChanges } from "@/components/landing/terms/terms-changes"
import { TermsContact } from "@/components/landing/terms/terms-contact"
import { TermsCta } from "@/components/landing/terms/terms-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pharmy Terms & Conditions – Usage & Service Guidelines",
  description: "Review Pharmy's terms and conditions for platform use, subscription rules, user responsibilities, and service policies.",
  openGraph: {
    title: "Pharmy Terms & Conditions – Usage & Service Guidelines",
    description: "Review Pharmy's terms and conditions for platform use, subscription rules, user responsibilities, and service policies.",
    url: "https://www.pharmy.one/terms",
    siteName: "Pharmy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pharmy Terms & Conditions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmy Terms & Conditions – Usage & Service Guidelines",
    description: "Review Pharmy's terms and conditions for platform use, subscription rules, user responsibilities, and service policies.",
    images: ["/logo.png"],
  },
}

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <TermsIntroduction />
        <TermsEligibility />
        <TermsServices />
        <TermsResponsibilities />
        <TermsPayment />
        <TermsDataPrivacy />
        <TermsIntellectualProperty />
        <TermsThirdParty />
        <TermsLiability />
        <TermsAvailability />
        <TermsTermination />
        <TermsGoverningLaw />
        <TermsChanges />
        <TermsContact />
      </div>
      <TermsCta />
    </>
  )
}
