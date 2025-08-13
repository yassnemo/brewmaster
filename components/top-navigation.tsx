"use client"

import { Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCart } from "@/components/cart-provider"
import { useSidebar } from "@/components/ui/sidebar"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function TopNavigation() {
  const { items } = useCart()
  const count = items.reduce((n, i) => n + i.qty, 0)
  const { open, openMobile, isMobile } = useSidebar()
  const isSidebarVisible = isMobile ? openMobile : open
  return (
    <header className="w-full border-b border-amber-200/50 bg-white/80 backdrop-blur-md shadow-sm flex-shrink-0">
      <div className="flex h-14 md:h-16 items-center justify-between px-3 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <SidebarTrigger className="hover:bg-amber-100 hover:text-amber-900 transition-colors" />
          {!isSidebarVisible && (
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-amber-600 text-white shadow-md">
                <Coffee className="h-3 w-3 md:h-4 md:w-4" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-amber-900">Brew & Bean</h1>
                <p className="text-xs text-amber-700 -mt-1 hidden sm:block">Artisan Coffee Experience</p>
              </div>
            </div>
          )}
        </div>

        <nav className="hidden lg:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          <Link
            href="/menu"
            className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors duration-200 hover:underline underline-offset-4"
            aria-label="View our menu"
          >
            Menu
          </Link>
          <a
            href="#about"
            className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors duration-200 hover:underline underline-offset-4"
            aria-label="Learn about us"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors duration-200 hover:underline underline-offset-4"
            aria-label="Contact information"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/menu">
            <Button
              size="sm"
              variant="outline"
              className="border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white"
            >
              Menu
            </Button>
          </Link>
          <Link href="/cart" aria-label="Open cart">
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white relative">
              Cart
              {count > 0 && (
                <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-semibold text-amber-700">
                  {count}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
