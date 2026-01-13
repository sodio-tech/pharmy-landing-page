import { BookDemoModal } from "../book-demo-modal"
import { Button } from "@/components/ui/button"
import { Calendar, Play } from "lucide-react"

export function DemoCta() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-[#0f766e] via-[#0d9488] to-[#2dd4bf]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to See Pharmy in Action?</h2>
        <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Schedule a personalized demo and discover how Pharmy can transform your pharmacy operations.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <BookDemoModal>
            <Button 
              variant="default" 
              className="bg-white text-[#0f766e] hover:bg-white/90 h-12 px-8 font-medium border-0 rounded-lg"
            >
              <Calendar className="h-5 w-5" />
              Book a Demo
            </Button>
          </BookDemoModal>
          <Button 
            className="bg-white text-[#0f766e] hover:bg-white/90 h-12 px-8 font-medium border-0 rounded-lg"
          >
            <Play className="h-5 w-5" />
            Watch Video
          </Button>
        </div>
      </div>
    </section>
  )
}
