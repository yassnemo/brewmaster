import { Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function TopNavigation() {
  return (
    <header className="w-full border-b border-amber-200/50 bg-white/80 backdrop-blur-md shadow-sm flex-shrink-0">
      <div className="flex h-14 md:h-16 items-center justify-between px-3 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <SidebarTrigger className="hover:bg-amber-100 hover:text-amber-900 transition-colors" />
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-amber-600 text-white shadow-md">
              <Coffee className="h-3 w-3 md:h-4 md:w-4" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-amber-900">Brew & Bean</h1>
              <p className="text-xs text-amber-700 -mt-1 hidden sm:block">Artisan Coffee Experience</p>
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          <a
            href="#menu"
            className="text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors duration-200 hover:underline underline-offset-4"
            aria-label="View our menu"
          >
            Menu
          </a>
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

        <Button
          size="sm"
          className="bg-amber-600 hover:bg-amber-700 text-white shadow-md transition-all duration-200 hover:shadow-lg text-xs md:text-sm px-3 md:px-4"
          aria-label="Order coffee online"
        >
          Order Now
        </Button>
      </div>
    </header>
  )
}
