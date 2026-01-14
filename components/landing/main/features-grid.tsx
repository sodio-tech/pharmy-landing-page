"use client"

import { motion } from "framer-motion"
import { Package, FileText, Pill, BarChart3, Shield, Building2, Check, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Package,
    title: "Smart Inventory Management",
    description: "Real-time stock tracking, automated reordering, and expiry management. Never run out of stock again.",
    items: ["Batch & lot tracking", "Low-stock alerts", "Barcode scanning"],
    color: "bg-[#0f766e]",
    bgColor: "bg-white",
    large: false,
    badges: [],
  },
  {
    icon: FileText,
    title: "Effortless Billing & Invoicing",
    description: "POS integration, multiple payment modes, and GST compliance. Generate invoices in seconds.",
    items: ["POS integration", "Multiple payment modes"],
    color: "bg-[#0f766e]",
    bgColor: "bg-white",
    large: false,
    badges: [
      { text: "GST Ready", color: "bg-[#eff6ff] text-[#2563eb]" },
      { text: "Multi-Pay", color: "bg-[#eff6ff] text-[#2563eb]" },
    ],
  },
  {
    icon: Pill,
    title: "AI-Powered Prescription Handling",
    description: "Upload image or PDF. Our OCR technology digitizes prescriptions instantly and validates them.",
    items: ["OCR scanning", "Instant validation", "Digital storage"],
    color: "bg-[#0f766e]",
    bgColor: "bg-white",
    large: true,
    badges: [],
  },
  {
    icon: BarChart3,
    title: "Advanced Reports & Analytics",
    description: "Comprehensive insights on sales, inventory, and business performance. Make data-driven decisions.",
    items: ["Sales reports", "Profit analysis", "Performance tracking"],
    color: "bg-[#0f766e]",
    bgColor: "bg-white",
    large: false,
    badges: [],
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "End-to-end encryption, regulatory compliance, and secure storage. Your pharmacy data is protected.",
    items: ["Data encryption", "Regulatory compliance", "Audit trail"],
    color: "bg-[#0f766e]",
    bgColor: "bg-white",
    large: false,
    badges: [],
  },
  {
    icon: Building2,
    title: "Multi-Branch Support",
    description: "Centralized management for multiple locations. Monitor all branches from a single dashboard.",
    items: ["Centralized dashboard", "Stock transfers", "Branch-level reports"],
    color: "bg-[#0f766e]",
    bgColor: "bg-white",
    large: false,
    badges: [],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export function FeaturesSection() {
  return (
    <section
      className="relative py-20 md:py-28 bg-gray-50 overflow-hidden"
      // style={{
      //   background: "linear-gradient(to bottom, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)",
      // }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#bfdbfe]/40 text-[#2563eb] px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-[#2563eb] rounded-full"></span>
            CORE FEATURES
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 text-balance">
            Built for <span className="text-[#0f766e]">Efficiency</span>, Designed for{" "}
            <span className="text-[#0f766e]">Care</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4b5563] max-w-3xl mx-auto leading-relaxed">
            Everything you need to run a modern pharmacy, from inventory to compliance, wrapped in a beautiful
            interface.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => {
            const isLarge = feature.large
            const textColor = "text-[#111827]"
            const descColor = "text-[#4b5563]"
            const itemColor = "text-[#4b5563]"
            const checkBg = "bg-[#0f766e]/10"
            const checkColor = "text-[#0f766e]"

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`${feature.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isLarge ? "md:row-span-2 lg:row-span-1" : ""
                } flex flex-col`}
              >
                {/* Icon */}
                <div
                  className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-bold ${textColor} mb-3`}>{feature.title}</h3>

                {/* Description */}
                <p className={`${descColor} leading-relaxed mb-6 grow`}>{feature.description}</p>

                {/* Items */}
                <div className="space-y-3 mb-6">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`${checkBg} w-5 h-5 rounded-full flex items-center justify-center shrink-0`}>
                        <Check className={`w-3 h-3 ${checkColor}`} />
                      </div>
                      <span className={`text-sm ${itemColor}`}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                {feature.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.badges.map((badge, idx) => (
                      <Badge key={idx} className={`${badge.color} text-xs px-3 py-1 rounded-full font-medium`}>
                        {badge.text}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Learn More Link */}
                <button
                  className="flex items-center gap-2 text-sm font-semibold text-[#0f766e] hover:gap-3 transition-all duration-200 group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">⭐</span>
            <span className="text-[#111827] font-medium">Trusted by 2,000+ pharmacies worldwide</span>
            <span className="text-2xl">⭐</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
