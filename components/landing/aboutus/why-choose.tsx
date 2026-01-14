import { Cpu, Grid3x3, Shield, TrendingUp } from "lucide-react"

export function WhyChoose() {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Leverage cutting-edge OCR, forecasting, and fraud detection to stay ahead.",
    },
    {
      icon: Grid3x3,
      title: "Scalable",
      description: "Built to grow with you, from a single store to a nationwide franchise network.",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "End-to-end encryption, regular backups, and strict compliance standards.",
    },
    {
      icon: TrendingUp,
      title: "Insightful",
      description: "Turn raw data into actionable strategies with deep analytical reports.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-[#0f766e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Pharmacies Choose Us</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            We don't just provide software; we provide a partner for your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-[#27847d] rounded-xl p-6 transition-colors">
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
