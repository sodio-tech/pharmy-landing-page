import { ShoppingCart, Heart, Building2, Hand, Pill } from "lucide-react"

export default function PharmacyTrustSection() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-500 font-medium tracking-wider mb-10">
          TRUSTED BY 2,000+ PHARMACIES
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          {/* MedKart */}
          <div className="flex items-center gap-3 bg-gray-50 px-6 py-3.5 rounded-xl shadow-sm">
            <div className="w-11 h-11 bg-teal-300 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-teal-800" strokeWidth={2} />
            </div>
            <div>
              <p className="text-gray-900 text-base font-semibold">MedKart</p>
              <p className="text-gray-500 text-xs">Pharmacy</p>
            </div>
          </div>

          {/* Arogya */}
          <div className="flex items-center gap-3 bg-gray-50 px-6 py-3.5 rounded-xl shadow-sm">
            <div className="w-11 h-11 bg-green-400 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-green-800" strokeWidth={2} fill="currentColor" />
            </div>
            <div>
              <p className="text-gray-900 text-base font-semibold">Arogya</p>
              <p className="text-gray-500 text-xs">Meds</p>
            </div>
          </div>

          {/* Swasth */}
          <div className="flex items-center gap-3 bg-gray-50 px-6 py-3.5 rounded-xl shadow-sm">
            <div className="w-11 h-11 bg-indigo-500 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-gray-900 text-base font-semibold">Swasth</p>
              <p className="text-gray-500 text-xs">Pharmacy</p>
            </div>
          </div>

          {/* CarePlus */}
          <div className="flex items-center gap-3 bg-gray-50 px-6 py-3.5 rounded-xl shadow-sm">
            <div className="w-11 h-11 bg-purple-500 rounded-xl flex items-center justify-center">
              <Hand className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-gray-900 text-base font-semibold">CarePlus</p>
              <p className="text-gray-500 text-xs">Meds</p>
            </div>
          </div>

          {/* Jeevan */}
          <div className="flex items-center gap-3 bg-gray-50 px-6 py-3.5 rounded-xl shadow-sm">
            <div className="w-11 h-11 bg-red-500 rounded-xl flex items-center justify-center">
              <Pill className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-gray-900 text-base font-semibold">Jeevan</p>
              <p className="text-gray-500 text-xs">Pharma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
