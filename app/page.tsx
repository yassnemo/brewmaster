"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TopNavigation } from "@/components/top-navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-amber-50 to-orange-50">
        <AppSidebar />
        <SidebarInset className="flex-1 flex flex-col min-h-screen">
          <TopNavigation />
          <main className="flex-1 overflow-auto">
            <HeroSection />
            <FeaturedProducts />
            <AboutSection />
            <ContactSection />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
