import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TopNavigation } from "@/components/top-navigation"
import { MenuContent } from "@/components/menu-content"

export const metadata = { title: "Menu" }

export default function MenuPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-amber-50 to-orange-50">
        <AppSidebar />
        <SidebarInset className="flex-1 flex flex-col min-h-screen">
          <TopNavigation />
          <main className="flex-1 overflow-auto">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              <MenuContent />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
