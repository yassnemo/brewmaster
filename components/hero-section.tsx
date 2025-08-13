import { ArrowRight, Coffee, Heart, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[url('/coffee-beans-pattern.png')] opacity-5"></div>

      <div className="relative w-full mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 animate-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-600">
                <Heart className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium tracking-wide uppercase">Crafted with Love</span>
              </div>

              <h1
                id="hero-heading"
                className="text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                Where Every Cup Tells a{" "}
                <span className="text-amber-600 relative">
                  Story
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-amber-300"
                    viewBox="0 0 100 12"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M0 8c30-4 70-4 100 0v4H0z" />
                  </svg>
                </span>
              </h1>

              <p className="text-base md:text-lg text-amber-800 leading-relaxed max-w-lg">
                Experience the perfect blend of artisan craftsmanship and premium beans. From our cozy corner to your
                favorite cup, we're brewing moments that matter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Explore our coffee menu"
              >
                <Link href="/menu">
                  Explore Our Menu
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 bg-transparent"
                aria-label="Learn more about our story"
              >
                <a href="#about">Our Story</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 md:gap-8 pt-4">
              <div className="flex items-center gap-2 text-amber-700">
                <Coffee className="h-4 md:h-5 w-4 md:w-5" />
                <span className="text-sm font-medium">Premium Beans</span>
              </div>
              <div className="flex items-center gap-2 text-amber-700">
                <Leaf className="h-4 md:h-5 w-4 md:w-5" />
                <span className="text-sm font-medium">Sustainably Sourced</span>
              </div>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right duration-700 delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="/cozy-coffee-shop.png"
                alt="Cozy interior of Brew & Bean coffee shop with warm lighting, comfortable seating, and coffee brewing equipment"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]"
                priority
              />

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-2xl p-4 md:p-6 shadow-xl border border-amber-200">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-amber-100">
                    <Coffee className="h-4 w-4 md:h-6 md:w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900 text-sm md:text-base">4.8★ Rating</p>
                    <p className="text-xs md:text-sm text-amber-700">200+ Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
