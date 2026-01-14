import Image from "next/image"
import { Star } from "lucide-react"

export function AboutTestimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "MedMart Pharmacy Owner",
      image: "/assets/client3.png",
      quote:
        "Pharmy has transformed the way we manage stock and prescriptions across our branches. It's a lifesaver for our daily operations.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      title: "Kriya Meds Manager",
      image: "/assets/client1.png",
      quote:
        "The AI prescription scanning feature alone has saved us hours of manual work. Our accuracy has improved significantly.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      title: "Careplus Meds Director",
      image: "/assets/client2.png",
      quote:
        "From inventory management to billing, everything is seamless. Our customer satisfaction has increased remarkably.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">What Our Customers Say</h2>
          <p className="text-[#6b7280] text-lg">Trusted by pharmacy owners across the country.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] rounded-xl p-8 border border-[#e5e7eb] hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gray-200">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] text-base">{testimonial.name}</h3>
                  <p className="text-[#6b7280] text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-[#374151] leading-relaxed mb-4">"{testimonial.quote}"</p>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
