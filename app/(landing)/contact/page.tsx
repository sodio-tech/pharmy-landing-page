// import { FaqCta } from '@/components/landing/contactus/faq-cta'
import { DemoCta } from '@/components/landing/contactus/demo-cta'
import { ContactCards } from '@/components/landing/contactus/contact-cards'
import React from 'react'
import { Header } from '@/components/landing/header'
import { HeroSection } from '@/components/landing/contactus/hero-section'
import { OfficeInfo } from '@/components/landing/contactus/office-info'
import { ContactForm } from '@/components/landing/contactus/contact-form'
import { SocialMedia } from '@/components/landing/contactus/social-media'
import { Footer } from '@/components/landing/footer'
import type { Metadata } from "next"
import FixedHeader from '@/components/landing/FixedHeader'

export const metadata: Metadata = {
  title: "Contact Pharmy – Get Support or Book a Demo",
  description: "Have questions? Contact Pharmy for support, onboarding help, or a demo. We're here to help you set up and run your pharmacy smoothly.",
  openGraph: {
    title: "Contact Pharmy – Get Support or Book a Demo",
    description: "Have questions? Contact Pharmy for support, onboarding help, or a demo. We're here to help you set up and run your pharmacy smoothly.",
    url: "https://www.pharmy.one/contact",
    siteName: "Pharmy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Pharmy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pharmy – Get Support or Book a Demo",
    description: "Have questions? Contact Pharmy for support, onboarding help, or a demo. We're here to help you set up and run your pharmacy smoothly.",
    images: ["/logo.png"],
  },
}

const page = () => {
  return (
    <>
      <FixedHeader />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <HeroSection />
          <ContactCards />
          <ContactForm />
          <OfficeInfo />
          <SocialMedia />
          {/* <FaqCta /> */}
          <DemoCta />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default page