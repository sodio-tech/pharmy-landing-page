"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const features = [
  {
    name: "Number of Branches",
    free: "1",
    pro: "1 (Add more at ₹1,999/branch/year)",
  },
  {
    name: "Inventory Management",
    free: true,
    pro: true,
  },
  {
    name: "Sales & Billing (POS)",
    free: true,
    pro: true,
  },
  {
    name: "Prescription Management",
    free: true,
    pro: true,
  },
  {
    name: "Advanced Analytics",
    free: false,
    pro: true,
  },
  {
    name: "Compliance Tools",
    free: true,
    pro: true,
  },
  {
    name: "Reports (Basic)",
    free: true,
    pro: "—",
  },
  {
    name: "Reports (Advanced)",
    free: false,
    pro: true,
  },
  {
    name: "User & Staff Management",
    free: "Limited",
    pro: "Unlimited",
  },
  {
    name: "Support",
    free: "Email",
    pro: "Email + Chat",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export function PricingComparison() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-[#111827] mb-4">Compare Plans</h2>
          <p className="text-lg text-[#4b5563]">See what's included in each plan</p>
        </motion.div>
        <motion.div
          className="max-w-6xl mx-auto overflow-x-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-w-[600px]">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                  <th className="text-left py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold text-[#111827]">
                    Features
                  </th>
                  <th className="text-center py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold text-[#111827]">
                    Free
                  </th>
                  <th className="text-center py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold text-[#111827]">
                    Pro
                  </th>
                </tr>
              </thead>
              <motion.tbody
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {features.map((feature, index) => (
                  <motion.tr
                    key={index}
                    variants={rowVariants}
                    whileHover={{ scale: 1.01, backgroundColor: "#f9fafb" }}
                    className="border-b border-[#e5e7eb] last:border-0 transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6 text-sm sm:text-base text-[#374151] font-medium">
                      {feature.name}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center">{renderCell(feature.free)}</td>
                    <td className="py-4 px-4 sm:px-6 text-center">{renderCell(feature.pro)}</td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function renderCell(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-[#0f766e] mx-auto" />
    ) : (
      <X className="h-5 w-5 text-[#d1d5db] mx-auto" />
    )
  }
  return <span className="text-sm text-[#374151]">{value}</span>
}
