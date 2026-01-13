import { Linkedin, Twitter, Instagram, Facebook, HelpCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SocialMedia() {
  return (
    <section className="py-16 md:py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Social Media Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Follow Us on <span className="text-[#0f766e]">Social Media</span>
            </h2>
            <p className="text-base text-[#6b7280] leading-relaxed mb-8 max-w-md">
              Stay updated with the latest Pharmy news, features, and pharmacy management tips.
            </p>

            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/13215828/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-[#0077b5]" />
              </Link>
              <Link
                href="https://x.com/sodiotech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 text-[#1da1f2]" />
              </Link>
              <Link
                href="https://www.instagram.com/sodio.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-[#e4405f]" />
              </Link>
              <Link
                href="https://www.facebook.com/sodio.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-[#1877f2]" />
              </Link>
            </div>
          </div>

          {/* FAQ Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d1fae5]">
                <HelpCircle className="h-8 w-8 text-[#0f766e]" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4 text-center text-balance">
              Looking for Quick Answers?
            </h3>
            <p className="text-base text-[#6b7280] leading-relaxed mb-6 text-center">
              Check out our comprehensive FAQ section for instant answers to common questions about Pharmy features,
              pricing, and setup.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-[#0f766e] hover:bg-[#0d6660] text-white rounded-lg px-6 py-3 font-medium transition-colors"
              >
                <Link href="/#faq" className="inline-flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Visit FAQ Page
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
