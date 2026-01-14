import { Target, Globe } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Our Mission */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-[#f0fdfa] flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#0f766e]" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Mission</h3>
            <p className="text-[#6b7280] leading-relaxed text-base">
              To simplify pharmacy management through innovation, automation, and reliable technology. We strive to
              remove the operational friction so you can grow your business.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-[#2563eb]" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Vision</h3>
            <p className="text-[#6b7280] leading-relaxed text-base">
              A world where every pharmacy — big or small — can run efficiently and provide better care to patients,
              powered by intelligent, seamless software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
