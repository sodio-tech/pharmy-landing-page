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
  openGraph: {
    title: "Pharmy Privacy Policy – How We Protect Your Data",
    description: "Read Pharmy's privacy policy to understand how we collect, use, and safeguard your personal and business information securely.",
    url: "https://www.pharmy.one/privacy",
    siteName: "Pharmy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pharmy Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmy Privacy Policy – How We Protect Your Data",
    description: "Read Pharmy's privacy policy to understand how we collect, use, and safeguard your personal and business information securely.",
    images: ["/logo.png"],
  },
}

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <InformationCollect />
      <InformationUse />
      <DataSharing />
      <DataSecurity />
      <UserRights />
      <PrivacyContact />
      <PrivacyCta />
    </>
  )
}
