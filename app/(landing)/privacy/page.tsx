import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import PrivacyHero from "@/components/landing/privacy/privacy-hero"
import InformationCollect from "@/components/landing/privacy/information-collect"
import InformationUse from "@/components/landing/privacy/information-use"
import DataSharing from "@/components/landing/privacy/data-sharing"
import DataSecurity from "@/components/landing/privacy/data-security"
import UserRights from "@/components/landing/privacy/user-rights"
import PrivacyContact from "@/components/landing/privacy/privacy-contact"
import { PrivacyCta } from "@/components/landing/privacy/privacy-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pharmy Privacy Policy – How We Protect Your Data",
  description: "Read Pharmy's privacy policy to understand how we collect, use, and safeguard your personal and business information securely.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PrivacyHero />
        <InformationCollect />
        <InformationUse />
        <DataSharing />
        <DataSecurity />
        <UserRights />
        <PrivacyContact />
        <PrivacyCta />
      </main>
      <Footer />
    </div>
  )
}
