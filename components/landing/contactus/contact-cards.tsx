import { Card } from "@/components/ui/card"
import { Briefcase, Wrench, MessageCircle, Check, Mail } from "lucide-react"

const contactOptions = [
  {
    icon: Briefcase,
    iconBg: "bg-[#dbeafe]",
    iconColor: "text-[#2563eb]",
    title: "Sales Inquiries",
    description:
      "Interested in Pharmy? Our sales team can help you find the right plan and answer all your product questions.",
    features: ["Product demonstrations", "Pricing & plans", "Custom solutions"],
    email: "sales@pharmy.com",
    featured: false,
  },
  {
    icon: Wrench,
    iconBg: "bg-[#0f766e]/20",
    iconColor: "text-[#0f766e]",
    title: "Technical Support",
    description:
      "Need help with setup, features, or troubleshooting? Our expert support team is available 24/7 to assist you.",
    features: ["Setup assistance", "Feature guidance", "Troubleshooting"],
    email: "support@pharmy.com",
    featured: false,
  },
  {
    icon: MessageCircle,
    iconBg: "bg-[#ede9fe]",
    iconColor: "text-[#7c3aed]",
    title: "General Questions",
    description:
      "Have a general question, feedback, or suggestion? We'd love to hear from you and improve our service.",
    features: ["General inquiries", "Feedback & suggestions", "Partnership opportunities"],
    email: "hello@pharmy.com",
    featured: false,
  },
]

export function ContactCards() {
  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f2937] mb-4 text-balance">
            Choose How You'd Like to <span className="text-[#0f766e]">Connect</span>
          </h2>
          <p className="text-base md:text-lg text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
            Whether you need sales information, technical support, or have general questions, we have dedicated teams
            ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {contactOptions.map((option) => (
            <Card
              key={option.title}
              className={`p-8 transition-all duration-300 ${
                option.featured
                  ? "bg-linear-to-br from-[#0f766e] to-[#0d6860] border-none text-white shadow-2xl md:scale-110 hover:shadow-[0_20px_60px_rgba(15,118,110,0.4)] md:-translate-y-2"
                  : "bg-white border border-gray-200 hover:border-[#0f766e]/30 hover:shadow-xl shadow-lg hover:-translate-y-1"
              } rounded-2xl`}
            >
              {/* Icon */}
              <div className="flex mb-1">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${option.iconBg} ${
                    option.featured ? "shadow-lg" : ""
                  }`}
                >
                  <option.icon className={`h-8 w-8 ${option.featured ? "text-white" : option.iconColor}`} />
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-bold mb-2 text-left ${option.featured ? "text-white" : "text-[#111827]"}`}
              >
                {option.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-2 text-left ${
                  option.featured ? "text-white/95" : "text-[#6b7280]"
                }`}
              >
                {option.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-4">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full shrink-0 mt-0.5 ${
                        option.featured ? "bg-white/20" : "bg-[#0f766e]/10"
                      }`}
                    >
                      <Check
                        className={`h-3.5 w-3.5 ${option.featured ? "text-white" : "text-[#0f766e]"}`}
                        strokeWidth={3}
                      />
                    </div>
                    <span className={`text-sm ${option.featured ? "text-white/95" : "text-[#4b5563]"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Email Link */}
              <a
                href={`mailto:${option.email}`}
                className={`flex items-center justify-center gap-2 text-sm font-semibold transition-all group ${
                  option.featured ? "text-white hover:text-white/90" : "text-[#0f766e] hover:text-[#0d6860] hover:gap-3"
                }`}
              >
                <Mail className="h-4 w-4" />
                <span className="underline underline-offset-4 decoration-2">{option.email}</span>
              </a>
            </Card>
          ))}
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
