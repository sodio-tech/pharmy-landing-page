"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Check, Users, Package, FileText, ShoppingCart, TrendingUp, Shield, Pill, Building2 } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "User & Access Management",
    description:
      "Secure, role-based access control designed specifically for pharmacy operations with admin and pharmacist roles.",
    color: "bg-purple-500",
    items: [
      "Admin & Pharmacist role management",
      "Secure OAuth2 / JWT authentication",
      "Granular permission controls",
      "Complete profile management",
    ],
  },
  {
    icon: Package,
    title: "Smart Inventory Management",
    description:
      "Complete inventory control with real-time tracking, automated alerts, and intelligent reordering suggestions.",
    color: "bg-[#0f766e]",
    items: [
      "Add, update, delete medicines & products",
      "Batch & lot tracking with expiry dates",
      "Real-time stock monitoring",
      "Low-stock alerts & smart reordering",
      "Barcode/QR code scanning",
    ],
  },
  {
    icon: FileText,
    title: "AI-Powered Prescription Handling",
    description:
      "Revolutionary OCR technology that digitizes prescriptions instantly with validation workflows and secure storage.",
    color: "bg-[#0f766e]",
    items: [
      "Upload prescriptions (image/PDF)",
      "AI-powered OCR digitization",
      "Validation workflow before dispensing",
      "Link prescriptions to orders",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Sales & Billing Excellence",
    description:
      "Complete point-of-sale solution with multi-payment support, GST compliance, and automated invoice generation.",
    color: "bg-blue-500",
    items: [
      "Integrated POS system",
      "Invoice generation (print/email/SMS)",
      "Multi-payment modes support",
      "GST/tax compliance automation",
      "Discounts & loyalty programs",
    ],
  },
  {
    icon: TrendingUp,
    title: "Advanced Reports & Analytics",
    description:
      "Comprehensive business intelligence with detailed reports, profit analysis, and performance tracking.",
    color: "bg-purple-500",
    items: [
      "Sales reports (daily/weekly/monthly/yearly)",
      "Profit & loss analysis",
      "Inventory valuation reports",
      "Supplier performance insights",
    ],
  },
  {
    icon: Package,
    title: "Supplier & Purchase Management",
    description:
      "Streamlined supplier relationships with automated purchase orders, delivery tracking, and payment management.",
    color: "bg-green-500",
    items: [
      "Comprehensive supplier database",
      "Automated purchase order generation",
      "Delivery & invoice tracking",
      "Supplier payment management",
    ],
  },
]

const additionalFeatures = [
  {
    icon: Shield,
    title: "Regulatory & Compliance",
    description: "Stay regulatory compliant with automated drug license validation and audit trails.",
    color: "bg-red-500",
    items: ["Drug license validation", "GST/tax compliance reports", "Controlled substance tracking"],
  },
  {
    icon: Pill,
    title: "Medicine Information System",
    description: "Integrated drug database with interaction alerts and alternative brand suggestions.",
    color: "bg-orange-500",
    items: ["Central medicine database", "Drug interaction alerts", "Alternative brand suggestions"],
  },
  {
    icon: Building2,
    title: "Multi-Branch Support",
    description: "Centralized management for multiple locations with consolidated reporting.",
    color: "bg-blue-600",
    items: ["Centralized dashboard", "Stock transfers between branches", "Branch-level reporting"],
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

export function UserAccessFeature() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-white to-[#f3f4f6]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Comprehensive Feature Set</h2>
          <p className="text-lg text-[#4b5563]">
            Every tool you need to manage your pharmacy efficiently, securely, and profitably.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="h-full"
              >
                <Card
                  className={`p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow h-full`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`${feature.color} rounded-lg p-3 shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 text-[#111827]`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm text-[#4b5563]`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 shrink-0 mt-0.5 text-[#0f766e]`}
                        />
                        <span className={`text-sm text-[#374151]`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Three Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {additionalFeatures.map((feature) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="h-full"
              >
                <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className={`${feature.color} rounded-lg p-3 w-fit mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#4b5563] mb-4">{feature.description}</p>

                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0f766e] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#374151]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
