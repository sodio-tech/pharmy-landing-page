"use client"

import { motion } from "framer-motion"
import { ArrowUpCircle, Gift, Cloud, Lock, Building } from "lucide-react"

export function PricingFaq() {
  const faqs = [
    {
      icon: ArrowUpCircle,
      question: "Can I upgrade or downgrade later?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
    },
    {
      icon: Gift,
      question: "Is there a free trial?",
      answer:
        "All plans come with a 14-day free trial. No credit card required. Experience the full power of Pharmy risk-free.",
    },
    {
      icon: Cloud,
      question: "Do I need to install anything?",
      answer:
        "No installation needed! Pharmy is a cloud-based solution. Access it from any device with a web browser. We handle all updates and maintenance for you.",
    },
    {
      icon: Lock,
      question: "Is my data secure?",
      answer:
        "Yes! We use bank-level encryption (AES-256) and comply with all healthcare data regulations. Your data is backed up daily and stored securely in the cloud.",
    },
    {
      icon: Building,
      question: "What if I manage multiple branches?",
      answer:
        "Our Pro plan supports up to 5 branches, and Enterprise offers unlimited branches with centralized management. You can monitor all locations from a single dashboard.",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-[#111827] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-[#6b7280]">Everything you need to know about our pricing</p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-[#ffffff] border border-[#e5e7eb] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#e0f2f1] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#0f766e]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#111827] mb-2">{faq.question}</h3>
                    <p className="text-[#6b7280] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
