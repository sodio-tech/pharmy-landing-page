import { BarChart3, FileText, Receipt, Truck, BarChart, Building2 } from "lucide-react"

export function WhatWeDo() {
  const features = [
    {
      icon: BarChart3,
      title: "Smart Inventory",
      description: "Real-time stock tracking with low-stock alerts and automated reordering suggestions.",
      color: "teal",
    },
    {
      icon: FileText,
      title: "AI Prescription OCR",
      description: "Digitize handwritten prescriptions instantly with our advanced optical character recognition.",
      color: "blue",
    },
    {
      icon: Receipt,
      title: "Billing & Compliance",
      description: "Effortless invoicing with built-in GST/Tax compliance and multi-payment support.",
      color: "green",
    },
    {
      icon: Truck,
      title: "Supplier Management",
      description: "Manage purchase orders, track deliveries, and handle supplier payments in one place.",
      color: "orange",
    },
    {
      icon: BarChart,
      title: "AI Analytics",
      description: "Data-driven insights on sales trends, profit margins, and inventory forecasting.",
      color: "purple",
    },
    {
      icon: Building2,
      title: "Multi-Branch Support",
      description: "Scale your business easily. Manage multiple pharmacy branches from a centralized dashboard.",
      color: "red",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "teal":
        return { bg: "bg-[#f0fdfa]", icon: "text-[#0f766e]" }
      case "blue":
        return { bg: "bg-[#dbeafe]", icon: "text-[#2563eb]" }
      case "green":
        return { bg: "bg-[#dcfce7]", icon: "text-[#16a34a]" }
      case "orange":
        return { bg: "bg-[#fff7ed]", icon: "text-[#f97316]" }
      case "purple":
        return { bg: "bg-[#faf5ff]", icon: "text-[#a855f7]" }
      case "red":
        return { bg: "bg-[#fef2f2]", icon: "text-[#ef4444]" }
      default:
        return { bg: "bg-[#f9fafb]", icon: "text-[#6b7280]" }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold text-[#0f766e] bg-[#f0fdfa] px-4 py-2 rounded-full uppercase tracking-wide">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6">
            An All-In-One Platform for Modern Pharmacies
          </h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            Pharmy brings together every tool you need to run a successful pharmacy business, from the back office to
            the front counter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClasses = getColorClasses(feature.color)

            return (
              <div
                key={index}
                className="bg-[#f9fafb] rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-[#f3f4f6]"
              >
                <div className={`w-12 h-12 rounded-lg ${colorClasses.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">{feature.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
