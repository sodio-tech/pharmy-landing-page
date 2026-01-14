import { AboutHero } from "@/components/landing/aboutus/about-hero"
import { OurStory } from "@/components/landing/aboutus/our-story"
import { MissionVision } from "@/components/landing/aboutus/mission-vision"
import { WhatWeDo } from "@/components/landing/aboutus/what-we-do"
import { WhyChoose } from "@/components/landing/aboutus/why-choose"
import { AboutTestimonials } from "@/components/landing/aboutus/about-testimonials"
import { AboutCta } from "@/components/landing/aboutus/about-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Pharmy – Built to Simplify Pharmacy Operations",
  description: "Pharmy is designed to help pharmacies run smoother with billing, inventory, reporting, and staff management. Learn our mission and story.",
  openGraph: {
    title: "About Pharmy – Built to Simplify Pharmacy Operations",
    description: "Pharmy is designed to help pharmacies run smoother with billing, inventory, reporting, and staff management. Learn our mission and story.",
    url: "https://www.pharmy.one/about",
    siteName: "Pharmy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "About Pharmy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pharmy – Built to Simplify Pharmacy Operations",
    description: "Pharmy is designed to help pharmacies run smoother with billing, inventory, reporting, and staff management. Learn our mission and story.",
    images: ["/logo.png"],
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhatWeDo />
      <WhyChoose />
      <AboutTestimonials />
      <AboutCta />
    </>
  )
}
