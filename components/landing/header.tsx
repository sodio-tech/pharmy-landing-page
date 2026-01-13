"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { BookDemoButton } from "./book-demo-button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky w-full top-0 z-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between bg-white rounded-full px-6 py-3 shadow-lg max-w-5xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f766e]">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
            </div>
            <span className="text-xl font-bold text-[#111827]">Pharmy</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors",
                    isActive ? "text-[#111827] font-medium" : "text-[#6b7280] hover:text-[#111827]",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://app.pharmy.one/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block text-sm text-[#6b7280] hover:text-[#111827] transition-colors"
            >
              Login
            </Link>
            <BookDemoButton
              variant="default"
              className="hidden md:inline-flex bg-[#0F766E] text-white hover:bg-[#3d7a70] rounded-full px-6 border-0"
            />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Menu className="h-6 w-6 text-[#111827]" />
                </button>
              </SheetTrigger>


              <SheetContent side="left" className="w-full sm:w-[400px] p-0">
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
                <div className="flex flex-col h-full bg-linear-to-b from-white to-gray-50">
                  {/* Header */}
                  <div className="px-6 py-8 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#0f766e] to-[#14b8a6] shadow-lg">
                        <Image src="/logo.png" alt="logo" width={48} height={48} />
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-[#111827] block">Pharmy</span>
                        <span className="text-xs text-[#6b7280]">Pharmacy Management Software</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 px-6 py-8 space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-4 text-lg font-medium transition-all duration-200 py-4 px-5 rounded-2xl group relative overflow-hidden",
                            isActive
                              ? "text-white bg-linear-to-r from-[#0f766e] to-[#14b8a6] shadow-lg shadow-teal-500/20"
                              : "text-[#374151] hover:text-[#0f766e] hover:bg-white hover:shadow-md",
                          )}
                          style={{
                            animationDelay: `${index * 50}ms`,
                          }}
                        >
                          <span className={cn(
                            "w-2 h-2 rounded-full transition-all duration-200",
                            isActive ? "bg-white" : "bg-[#0f766e] opacity-0 group-hover:opacity-100"
                          )} />
                          <span className="flex-1">{item.label}</span>

                        </Link>
                      )
                    })}
                  </nav>

                  {/* Footer Actions */}
                  <div className="px-6 py-6 space-y-3 border-t border-gray-100 bg-white">
                    <Link
                      href="https://app.pharmy.one/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full text-base font-medium text-[#0f766e] hover:text-[#0d5f57] transition-colors py-3 px-6 rounded-xl border-2 border-[#0f766e] hover:bg-[#0f766e]/5"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>Login to Dashboard</span>
                      <span className="text-lg">→</span>
                    </Link>
                    <BookDemoButton
                      variant="default"
                      className="bg-linear-to-r from-[#0f766e] to-[#14b8a6] text-white hover:from-[#0d5f57] hover:to-[#0f766e] rounded-xl px-6 py-3 border-0 w-full font-semibold shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-200"
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
