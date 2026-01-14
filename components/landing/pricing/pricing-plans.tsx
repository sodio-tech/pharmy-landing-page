import { Check, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Free Plan (3 Days Trial)",
    badgeColor: "bg-[#f59e0b]",
    price: "₹0",
    period: "",
    description: "Perfect to get started",
    buttonText: "Start Free Trial",
    buttonVariant: "secondary" as const,
    buttonColor: "bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#111827]",
    cardBg: "bg-white",
    textColor: "text-[#111827]",
    features: [
      "Full Platform Access",
      "Unlimited Pharmacy Operations",
      "Multi-Branch Management",
      "Staff Role Control",
      "No-Restriction Trial",
    ],
  },
  {
    name: "Pro Plan",
    badge: "MOST POPULAR",
    badgeColor: "bg-[#f59e0b]",
    price: "₹3999",
    period: "/year",
    description: "For growing pharmacies",
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    buttonColor: "bg-white hover:bg-white/90 text-[#0f766e]",
    cardBg: "bg-[#0f766e]",
    textColor: "text-white",
    priceColor: "text-white",
    descriptionColor: "text-white/90",
    checkColor: "text-white",
    features: [
      "Unlimited Pharmacy Operations",
      "Full Inventory Control",
      "Advanced Sales & Reports",
      "Multi-Branch Management",
      "Unlimited Staff Accounts",
    ],
  },
  {
    name: "Additional Branch",
    price: "₹1999",
    period: "/year",
    description: "Expand your network",
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    buttonColor: "bg-[#0f766e] hover:bg-[#0f766e]/90 text-white",
    cardBg: "bg-white",
    textColor: "text-[#111827]",
    features: [
      "Expand your pharmacy network",
      "Add unlimited branches",
      "Centralized inventory & reports",
      "Seamless branch switching",
      "Unified staff & role management",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-[#f9fafb]">
      <div className="container mx-auto max-w-7xl">
      <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-[#111827] mb-4">Choose Your Plan</h2>
          <p className="text-lg text-[#4b5563]">Start free and upgrade as you grow</p>
          </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${plan.cardBg} ${plan.name === "Pro Plan" ? "shadow-2xl" : "shadow-lg"} transition-all`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className={`${plan.badgeColor} text-white text-sm font-bold px-6 py-2 rounded-full whitespace-nowrap`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8 mt-2">
                <h3 className={`text-2xl font-bold ${plan.textColor || "text-[#111827]"} mb-2`}>{plan.name}</h3>
                <p className={`text-base ${plan.descriptionColor || "text-[#6b7280]"} mb-6`}>{plan.description}</p>

                <div className="mb-8">
                  <span className={`text-5xl font-bold ${plan.priceColor || plan.textColor || "text-[#111827]"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`${plan.descriptionColor || "text-[#6b7280]"} text-lg ml-1`}>{plan.period}</span>
                  )}
                  <div className={`text-sm ${plan.descriptionColor || "text-[#6b7280]"} mt-1`}>Billed monthly</div>
                </div>

                <Link
                  href="https://app.pharmy.one/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full text-base font-semibold py-6 rounded-xl ${plan.buttonColor}`}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 ${plan.checkColor || "text-[#0f766e]"} shrink-0 mt-0.5`} />
                    <span className={`text-base ${plan.textColor || "text-[#4b5563]"} leading-relaxed`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4 mt-16">
          <p className="text-[#6b7280] text-base">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Shield className="h-5 w-5 text-[#0f766e]" />
            <span className="text-[#111827] font-medium">Secure payment powered by Stripe</span>
          </div>
        </div>
      </div>
    </section>
  )
}
