// import { X, Check, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react"

// const challenges = [
//   {
//     icon: "📦",
//     iconBg: "bg-[#fee2e2]",
//     iconColor: "text-[#dc2626]",
//     title: "Manual Stock Updates",
//     description: "Time-consuming inventory tracking leads to stockouts, overstocking, and lost revenue opportunities.",
//     stat: "40% revenue lost due to stockouts",
//     statColor: "text-[#dc2626]",
//     statIcon: TrendingUp,
//   },
//   {
//     icon: "📄",
//     iconBg: "bg-[#fee2e2]",
//     iconColor: "text-[#dc2626]",
//     title: "Misplaced Prescriptions",
//     description: "Paper-based systems result in lost prescriptions, delayed services, and frustrated customers.",
//     stat: "15 minutes average search time",
//     statColor: "text-[#dc2626]",
//     statIcon: Clock,
//   },
//   {
//     icon: "💳",
//     iconBg: "bg-[#fee2e2]",
//     iconColor: "text-[#dc2626]",
//     title: "Billing Complexity",
//     description: "Multiple payment modes, tax calculations, and compliance requirements create operational nightmares.",
//     stat: "30% billing errors manually",
//     statColor: "text-[#dc2626]",
//     statIcon: DollarSign,
//   },
// ]

// const solutions = [
//   {
//     icon: "🤖",
//     iconBg: "bg-[#0f766e]/10",
//     iconColor: "text-[#0f766e]",
//     title: "AI-Powered Automation",
//     description:
//       "Intelligent inventory management with predictive analytics, automated reordering, and real-time monitoring.",
//     stat: "99% accuracy in stock predictions",
//     statColor: "text-[#0f766e]",
//     statIcon: TrendingUp,
//   },
//   {
//     icon: "📱",
//     iconBg: "bg-[#0f766e]/10",
//     iconColor: "text-[#0f766e]",
//     title: "Digital Prescription Management",
//     description:
//       "Advanced OCR scanning, secure digital storage, and instant prescription validation for seamless operations.",
//     stat: "3 seconds prescription processing",
//     statColor: "text-[#0f766e]",
//     statIcon: Clock,
//   },
//   {
//     icon: "💰",
//     iconBg: "bg-[#0f766e]/10",
//     iconColor: "text-[#0f766e]",
//     title: "Integrated Billing System",
//     description:
//       "Seamless POS integration with automatic tax calculations, compliance management, and multi-payment support.",
//     stat: "100% GST compliance guaranteed",
//     statColor: "text-[#0f766e]",
//     statIcon: DollarSign,
//   },
// ]

// const stats = [
//   {
//     value: "85%",
//     label: "Reduction in Manual Errors",
//   },
//   {
//     value: "60%",
//     label: "Faster Prescription Processing",
//   },
//   {
//     value: "40%",
//     label: "Increase in Daily Revenue",
//   },
// ]

// export function ComparisonSection() {
//   return (
//     <section className="bg-[#f8fefd] py-20 md:py-28">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 text-balance">
//             From Chaos to <span className="text-[#0f766e]">Control</span>
//           </h2>
//           <p className="text-lg md:text-xl text-[#4b5563] max-w-3xl mx-auto leading-relaxed">
//             Transform your pharmacy operations from manual headaches to automated excellence with Pharmy's intelligent
//             solutions.
//           </p>
//         </div>

//         {/* Comparison Grid */}
//         <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 mb-16 items-center">
//           {/* Challenges Column */}
//           <div>
//             <div className="flex items-center gap-3 mb-8">
//               <div className="w-8 h-8 rounded-full bg-[#fee2e2] flex items-center justify-center">
//                 <X className="w-5 h-5 text-[#dc2626]" />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-[#111827]">Current Challenges</h3>
//             </div>
//             <div className="space-y-6">
//               {challenges.map((challenge, index) => (
//                 <div
//                   key={index}
//                   className="bg-[#fef2f2] rounded-2xl p-6 border-2 border-[#fee2e2] hover:border-[#fca5a5] transition-all"
//                 >
//                   <div className="flex items-start gap-4 mb-4">
//                     <div
//                       className={`${challenge.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl`}
//                     >
//                       {challenge.icon}
//                     </div>
//                     <div className="grow">
//                       <h4 className="text-xl font-bold text-[#111827] mb-2">{challenge.title}</h4>
//                       <p className="text-[#4b5563] leading-relaxed">{challenge.description}</p>
//                     </div>
//                   </div>
//                   <div className={`flex items-center gap-2 ${challenge.statColor} text-sm font-semibold`}>
//                     <challenge.statIcon className="w-4 h-4" />
//                     {challenge.stat}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Arrow in Middle */}
//           <div className="hidden lg:flex justify-center items-center">
//             <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-2xl">
//               <ArrowRight className="w-10 h-10 text-[#0f766e]" />
//             </div>
//           </div>

//           {/* Solutions Column */}
//           <div>
//             <div className="flex items-center gap-3 mb-8">
//               <div className="w-8 h-8 rounded-full bg-[#0f766e]/10 flex items-center justify-center">
//                 <Check className="w-5 h-5 text-[#0f766e]" />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-[#111827]">Pharmy Solutions</h3>
//             </div>
//             <div className="space-y-6">
//               {solutions.map((solution, index) => (
//                 <div
//                   key={index}
//                   className="bg-[#f0fdfa] rounded-2xl p-6 border-2 border-[#5eead4]/30 hover:border-[#2dd4bf] transition-all"
//                 >
//                   <div className="flex items-start gap-4 mb-4">
//                     <div
//                       className={`${solution.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl`}
//                     >
//                       {solution.icon}
//                     </div>
//                     <div className="grow">
//                       <h4 className="text-xl font-bold text-[#111827] mb-2">{solution.title}</h4>
//                       <p className="text-[#4b5563] leading-relaxed">{solution.description}</p>
//                     </div>
//                   </div>
//                   <div className={`flex items-center gap-2 ${solution.statColor} text-sm font-semibold`}>
//                     <solution.statIcon className="w-4 h-4" />
//                     {solution.stat}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Arrow */}
//         <div className="lg:hidden flex justify-center -my-4 mb-8">
//           <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-2xl rotate-90">
//             <ArrowRight className="w-6 h-6 text-[#0f766e]" />
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="relative mt-12">
//           <div className="absolute inset-0 border-4 border-dashed border-[#0f766e]/20 rounded-full"></div>
//           <div className="relative bg-white rounded-3xl p-12 md:p-16">
//             <div className="grid md:grid-cols-3 gap-8 md:gap-12">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0f766e] mb-3">{stat.value}</div>
//                   <div className="text-[#4b5563] font-medium text-base md:text-lg">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { X, Check, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react"

const challenges = [
  {
    icon: "📦",
    iconBg: "bg-[#fee2e2]",
    iconColor: "text-[#dc2626]",
    title: "Manual Stock Updates",
    description: "Time-consuming inventory tracking leads to stockouts, overstocking, and lost revenue opportunities.",
    stat: "40% revenue lost due to stockouts",
    statColor: "text-[#dc2626]",
    statIcon: TrendingUp,
  },
  {
    icon: "📄",
    iconBg: "bg-[#fee2e2]",
    iconColor: "text-[#dc2626]",
    title: "Misplaced Prescriptions",
    description: "Paper-based systems result in lost prescriptions, delayed services, and frustrated customers.",
    stat: "15 minutes average search time",
    statColor: "text-[#dc2626]",
    statIcon: Clock,
  },
  {
    icon: "💳",
    iconBg: "bg-[#fee2e2]",
    iconColor: "text-[#dc2626]",
    title: "Billing Complexity",
    description: "Multiple payment modes, tax calculations, and compliance requirements create operational nightmares.",
    stat: "30% billing errors manually",
    statColor: "text-[#dc2626]",
    statIcon: DollarSign,
  },
]

const solutions = [
  {
    icon: "🤖",
    iconBg: "bg-[#ccf0ed]",
    iconColor: "text-[#0f766e]",
    title: "AI-Powered Automation",
    description:
      "Intelligent inventory management with predictive analytics, automated reordering, and real-time monitoring.",
    stat: "99% accuracy in stock predictions",
    statColor: "text-[#0f766e]",
    statIcon: TrendingUp,
  },
  {
    icon: "📱",
    iconBg: "bg-[#ccf0ed]",
    iconColor: "text-[#0f766e]",
    title: "Digital Prescription Management",
    description:
      "Advanced OCR scanning, secure digital storage, and instant prescription validation for seamless operations.",
    stat: "3 seconds prescription processing",
    statColor: "text-[#0f766e]",
    statIcon: Clock,
  },
  {
    icon: "💰",
    iconBg: "bg-[#ccf0ed]",
    iconColor: "text-[#0f766e]",
    title: "Integrated Billing System",
    description:
      "Seamless POS integration with automatic tax calculations, compliance management, and multi-payment support.",
    stat: "100% GST compliance guaranteed",
    statColor: "text-[#0f766e]",
    statIcon: DollarSign,
  },
]

const stats = [
  {
    value: "85%",
    label: "Reduction in Manual Errors",
  },
  {
    value: "60%",
    label: "Faster Prescription Processing",
  },
  {
    value: "40%",
    label: "Increase in Daily Revenue",
  },
]

export function ComparisonSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 text-balance">
            From Chaos to <span className="text-[#0f766e]">Control</span>
          </h2>
          <p className="text-lg md:text-xl text-[#4b5563] max-w-3xl mx-auto leading-relaxed">
            Transform your pharmacy operations from manual headaches to automated excellence with Pharmy's intelligent
            solutions.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Challenges */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#fee2e2] flex items-center justify-center">
                <X className="w-5 h-5 text-[#dc2626]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#111827]">Current Challenges</h3>
            </div>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#fee2e2] hover:border-[#fca5a5] transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`${challenge.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl`}
                    >
                      {challenge.icon}
                    </div>
                    <div className="grow">
                      <h4 className="text-xl font-bold text-[#111827] mb-2">{challenge.title}</h4>
                      <p className="text-[#4b5563] leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 ${challenge.statColor} text-sm font-semibold`}>
                    <challenge.statIcon className="w-4 h-4" />
                    {challenge.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#ccf0ed] flex items-center justify-center">
                <Check className="w-5 h-5 text-[#0f766e]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#111827]">Pharmy Solutions</h3>
            </div>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#ccf0ed] hover:border-[#0f766e]/40 transition-colors relative group"
                >
                  {index === 1 && (
                    <div className="absolute -left-13 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shadow-2xl">
                        <ArrowRight className="w-7 h-7 text-[#0f766e]" />
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`${solution.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl`}
                    >
                      {solution.icon}
                    </div>
                    <div className="grow">
                      <h4 className="text-xl font-bold text-[#111827] mb-2">{solution.title}</h4>
                      <p className="text-[#4b5563] leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 ${solution.statColor} text-sm font-semibold`}>
                    <solution.statIcon className="w-4 h-4" />
                    {solution.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-12">
          <div className="absolute inset-0 border-[#0f766e]/20 rounded-full"></div>
          <div className="relative rounded-[38px] shadow-2xl p-12 md:p-16">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0f766e] mb-3">{stat.value}</div>
                  <div className="text-[#4b5563] font-medium text-base md:text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
