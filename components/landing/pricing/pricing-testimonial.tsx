import Image from "next/image"
import { Quote } from "lucide-react"
import pharmacist from "../../../public/assets/client3.png"

export function PricingTestimonial() {
  return (
    <section className="py-16 px-4 bg-[#ffffff]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-linear-to-br from-[#0f766e] to-[#14b8a6] rounded-2xl p-12 shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#ffffff]/20 flex items-center justify-center backdrop-blur-sm">
              <Quote className="w-8 h-8 text-[#ffffff]" />
            </div>
          </div>

          <blockquote className="text-center mb-8">
            <p className="text-xl md:text-2xl text-[#ffffff] leading-relaxed mb-6 font-medium">
              "Pharmy made managing stock across 3 branches effortless. The AI features are a game-changer. We reduced
              stockouts by 40% and our billing is now seamless."
            </p>
          </blockquote>

          <div className="flex items-center justify-center gap-4">
          <Image
              src={pharmacist}
              alt="Sarah Johnson"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div className="text-left">
              <div className="font-semibold text-[#ffffff]">Rajesh Kumar</div>
              <div className="text-sm text-[#ffffff]/80">Owner, CarePlus Pharmacy Chain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
