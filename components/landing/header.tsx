"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { BookDemoButton } from "./book-demo-button"

export function Header() {
  const pathname = usePathname()

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
            <Link href="https://app.pharmy.one/login" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors">
              Login
            </Link>
            <BookDemoButton variant="default" className="bg-[#0F766E] text-white hover:bg-[#3d7a70] rounded-full px-6 border-0" />
          </div>
        </div>
      </div>
    </header>
  )
}
