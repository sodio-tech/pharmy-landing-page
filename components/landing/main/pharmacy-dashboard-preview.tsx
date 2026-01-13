import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Package,
  FileText,
  ShoppingCart,
  Users,
  BarChart3,
  Shield,
  UserCog,
  ChevronDown,
  TrendingUp,
  ShoppingBag,
  AlertTriangle,
  Clock,
  Plus,
  Box,
  Receipt,
  Bot,
} from "lucide-react"

export function PharmacyDashboardPreview() {
  return (
    <div className="w-full bg-[#27988e] rounded-2xl p-3 sm:p-6 shadow-2xl">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="block lg:flex min-h-[400px] lg:min-h-[600px]">
          {/* Sidebar */}
          <div className="hidden lg:flex lg:w-[280px] bg-[#f9fafb] border-r border-[#e5e7eb] flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-[#e5e7eb]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0f766e] rounded-lg flex items-center justify-center text-white font-bold">
                  Ps
                </div>
                <div>
                  <div className="font-bold text-left text-[#111827]">Pharmy</div>
                  <div className="text-xs text-[#6b7280]">MANAGEMENT SYSTEM</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#0f766e] text-white rounded-lg font-medium">
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[#6b7280] hover:bg-[#f3f4f6] rounded-lg">
                <Package className="w-5 h-5" />
                Inventory
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[#6b7280] hover:bg-[#f3f4f6] rounded-lg">
                <FileText className="w-5 h-5" />
                Prescriptions
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[#6b7280] hover:bg-[#f3f4f6] rounded-lg">
                <ShoppingCart className="w-5 h-5" />
                Sales & POS
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[#6b7280] hover:bg-[#f3f4f6] rounded-lg">
                <Users className="w-5 h-5" />
                Suppliers
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[#6b7280] hover:bg-[#f3f4f6] rounded-lg">
                <BarChart3 className="w-5 h-5" />
                Reports
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[#6b7280] hover:bg-[#f3f4f6] rounded-lg">
                <Shield className="w-5 h-5" />
                Compliance
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[#6b7280] hover:bg-[#f3f4f6] rounded-lg">
                <UserCog className="w-5 h-5" />
                User Management
              </button>
            </nav>

            {/* AI Alert */}
            <div className="p-4">
              <div className="bg-white border-2 border-[#2563eb] rounded-lg p-4 shadow-lg relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs text-[#6b7280] mb-1">AI Alert</div>
                <div className="font-semibold text-[#111827]">Reorder Insulin</div>
              </div>
            </div>

            {/* Branch Selector */}
            <div className="p-4 border-t border-[#e5e7eb]">
              <button className="w-full flex items-center justify-between px-4 py-2 bg-white border border-[#e5e7eb] rounded-lg text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#16a34a] rounded-full"></div>
                  <span className="text-[#111827]">Main Branch - Jaipur</span>
                </div>
                <ChevronDown className="w-4 h-4 text-[#6b7280]" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#f9fafb] overflow-auto">
            <div className="p-4 sm:p-6">
             
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6 lg:mb-8">
                <div>
                  <h1 className="text-xl sm:text-2xl text-left lg:text-3xl font-bold text-[#111827] mb-2">Pharmacy Dashboard</h1>
                  <p className="text-sm sm:text-base text-[#6b7280]">Welcome back, manage your pharmacy operations</p>
                </div>

                {/* Success Notification - positioned in header on desktop */}
                <div className="flex justify-start lg:justify-end lg:shrink-0">
                  <div className="flex items-center gap-2 bg-[#dcfce7] border border-[#16a34a] px-4 py-2.5 rounded-lg shadow-sm">
                    <div className="w-6 h-6 bg-[#16a34a] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-[#15803d]">Stock Updated</div>
                      <div className="font-semibold text-[#111827] text-sm">Successfully</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3 lg:gap-3 mb-6 lg:mb-8 max-w-[900px] mx-auto">
                <div className="p-4 sm:p-4 bg-white rounded-lg border-0 shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dcfce7] rounded-lg flex items-center justify-center mb-3">
                    <span className="text-[#16a34a] font-bold text-lg">₹</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#6b7280] text-left mb-1">Total Revenue</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#111827] mb-1 text-left">₹1,24,500</div>
                  <div className="flex items-center gap-1 text-xs text-[#16a34a]">
                    <TrendingUp className="w-3 h-3 shrink-0" />
                    <span className="truncate">12.5% vs last month</span>
                  </div>
                </div>

                <div className="p-4 sm:p-4 bg-white rounded-lg border-0 shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dbeafe] rounded-lg flex items-center justify-center mb-3">
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563eb]" />
                  </div>
                  <div className="text-xs sm:text-sm text-[#6b7280] text-left mb-1">Orders</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#111827] mb-1 text-left">148</div>
                  <div className="flex items-center gap-1 text-xs text-[#16a34a]">
                    <TrendingUp className="w-3 h-3 shrink-0" />
                    <span className="truncate">5.2% vs previous month</span>
                  </div>
                </div>

                <div className="p-4 sm:p-4 bg-white rounded-lg border-0 shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffedd5] rounded-lg flex items-center justify-center mb-3">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ea580c]" />
                  </div>
                  <div className="text-xs sm:text-sm text-[#6b7280] text-left mb-1">Low Stock Items</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#111827] mb-1 text-left">2</div>
                  <div className="flex items-center gap-1 text-xs text-[#ea580c]">
                    <AlertTriangle className="w-3 h-3 shrink-0" />
                    <span className="truncate">Requires attention</span>
                  </div>
                </div>

                <div className="p-4 sm:p-4 bg-white rounded-lg border-0 shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fee2e2] rounded-lg flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#dc2626]" />
                  </div>
                  <div className="text-xs sm:text-sm text-[#6b7280] text-left mb-1">Expiring Soon</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#111827] mb-1 text-left">5 Batches</div>
                  <div className="text-xs text-[#6b7280]">Within 30 days</div>
                </div>
              </div>

              {/* Recent Prescriptions & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                <div className="lg:col-span-2 p-4 sm:p-6 bg-white rounded-lg border-0 shadow-sm">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-base sm:text-lg font-bold text-[#111827]">Recent Prescriptions</h2>
                    <Button variant="link" className="text-[#0f766e] hover:text-[#0d9488] p-0 text-sm">
                      View All
                    </Button>
                  </div>

                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <div className="inline-block min-w-full align-middle">
                      <div className="px-4 sm:px-0">
                        <div className="space-y-3 sm:space-y-4">
                          <div className="grid grid-cols-12 gap-2 sm:gap-4 text-xs font-semibold text-[#6b7280] pb-2 border-b border-[#e5e7eb] min-w-[500px] sm:min-w-0">
                            <div className="col-span-3">PATIENT ID</div>
                            <div className="col-span-3">NAME</div>
                            <div className="col-span-3">DATE</div>
                            <div className="col-span-3">STATUS</div>
                          </div>

                          <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center py-2 sm:py-3 border-b border-[#e5e7eb] min-w-[500px] sm:min-w-0">
                            <div className="col-span-3 text-xs sm:text-sm text-[#111827]">#RX-2049</div>
                            <div className="col-span-3 flex items-center gap-2">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#dbeafe] rounded-full flex items-center justify-center text-[#2563eb] font-semibold text-xs shrink-0">
                                RJ
                              </div>
                              <span className="text-xs sm:text-sm text-[#111827] truncate">Rajesh Kumar</span>
                            </div>
                            <div className="col-span-3 text-xs sm:text-sm text-[#6b7280] text-left">Oct 24, 2023</div>
                            <div className="col-span-3">
                              <Badge className="bg-[#dcfce7] text-[#15803d] hover:bg-[#dcfce7] text-xs">
                                Completed
                              </Badge>
                            </div>
                          </div>

                          <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center py-2 sm:py-3 border-b border-[#e5e7eb] min-w-[500px] sm:min-w-0">
                            <div className="col-span-3 text-xs sm:text-sm text-[#111827]">#RX-2050</div>
                            <div className="col-span-3 flex items-center gap-2">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#f3e8ff] rounded-full flex items-center justify-center text-[#9333ea] font-semibold text-xs shrink-0">
                                AS
                              </div>
                              <span className="text-xs sm:text-sm text-[#111827] truncate">Anita Singh</span>
                            </div>
                            <div className="col-span-3 text-xs sm:text-sm text-[#6b7280] text-left">Oct 24, 2023</div>
                            <div className="col-span-3">
                              <Badge className="bg-[#fef9c3] text-[#a16207] hover:bg-[#fef9c3] text-xs">
                                Processing
                              </Badge>
                            </div>
                          </div>

                          <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center py-2 sm:py-3 min-w-[500px] sm:min-w-0">
                            <div className="col-span-3 text-xs sm:text-sm text-[#111827]">#RX-2051</div>
                            <div className="col-span-3 flex items-center gap-2">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#fce7f3] rounded-full flex items-center justify-center text-[#db2777] font-semibold text-xs shrink-0">
                                MD
                              </div>
                              <span className="text-xs sm:text-sm text-[#111827] truncate">Meera Das</span>
                            </div>
                            <div className="col-span-3 text-xs sm:text-sm text-[#6b7280] text-left">Oct 23, 2023</div>
                            <div className="col-span-3">
                              <Badge className="bg-[#dcfce7] text-[#15803d] hover:bg-[#dcfce7] text-xs">
                                Completed
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-white rounded-lg border-0 shadow-sm">
                  <h2 className="text-base sm:text-lg font-bold text-[#111827] mb-4 sm:mb-6">Quick Actions</h2>
                  <div className="space-y-3">
                    <Button className="w-full bg-[#0f766e] hover:bg-[#0d9488] text-white justify-start gap-2 text-sm">
                      <Plus className="w-4 h-4 shrink-0" />
                      New Sale
                    </Button>
                    <Button className="w-full bg-[#06b6d4] hover:bg-[#0891b2] text-white justify-start gap-2 text-sm">
                      <Box className="w-4 h-4 shrink-0" />
                      Add Inventory
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 border-[#e5e7eb] bg-transparent text-sm"
                    >
                      <Receipt className="w-4 h-4 shrink-0" />
                      Create Invoice
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
