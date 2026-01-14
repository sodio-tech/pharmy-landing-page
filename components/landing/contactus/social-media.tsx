"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram, Facebook, HelpCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/13215828/",
    icon: Linkedin,
    color: "text-[#0077b5]",
    label: "LinkedIn",
  },
  {
    href: "https://x.com/sodiotech",
    icon: Twitter,
    color: "text-[#1da1f2]",
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/sodio.tech/",
    icon: Instagram,
    color: "text-[#e4405f]",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/sodio.tech/",
    icon: Facebook,
    color: "text-[#1877f2]",
    label: "Facebook",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export function SocialMedia() {
  return (
    <section className="py-16 md:py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Follow Us on <span className="text-[#0f766e]">Social Media</span>
            </h2>
            <p className="text-base text-[#6b7280] leading-relaxed mb-8 max-w-md">
              Stay updated with the latest Pharmy news, features, and pharmacy management tips.
            </p>

            <motion.div
              className="flex gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    aria-label={social.label}
                  >
                    <social.icon className={`h-6 w-6 ${social.color}`} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* FAQ Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d1fae5]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <HelpCircle className="h-8 w-8 text-[#0f766e]" />
              </motion.div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4 text-center text-balance">
              Looking for Quick Answers?
            </h3>
            <p className="text-base text-[#6b7280] leading-relaxed mb-6 text-center">
              Check out our comprehensive FAQ section for instant answers to common questions about Pharmy features,
              pricing, and setup.
            </p>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-[#0f766e] hover:bg-[#0d6660] text-white rounded-lg px-6 py-3 font-medium transition-colors cursor-pointer"
                >
                  <Link href="/#faq" className="inline-flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Visit FAQ Page
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
