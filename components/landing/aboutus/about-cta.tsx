import { GetStartedFreeButton } from "../get-started-free-button"
import { BookDemoButton } from "../book-demo-button"

export function AboutCta() {
  return (
    <section className="py-20 px-4 bg-[#199187]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Join hundreds of pharmacies already simplifying operations with Pharmy.
        </h2>
        <p className="text-white/90 text-xl mb-8 leading-relaxed">
          Transform your pharmacy management today. Start your free trial or schedule a personalized demo with our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <GetStartedFreeButton className="bg-white text-[#0f766e] hover:bg-white/90 font-semibold px-6 py-6 text-base rounded-full" />
          <BookDemoButton className="border-2 hover:text-white/90 border-white text-white font-semibold bg-transparent hover:bg-transparent/90 px-6 py-6 text-base rounded-full" />
        </div>
        <p className="text-white/80 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  )
}
