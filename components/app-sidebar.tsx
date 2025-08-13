import { Coffee, MenuIcon, Info, Phone, MapPin, Clock, Star } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "Our Menu",
    url: "#menu",
    icon: MenuIcon,
    description: "Explore our coffee and food offerings",
  },
  {
    title: "About Us",
    url: "#about",
    icon: Info,
    description: "Learn about our story and values",
  },
  {
    title: "Contact",
    url: "#contact",
    icon: Phone,
    description: "Get in touch with us",
  },
  {
    title: "Location",
    url: "#location",
    icon: MapPin,
    description: "Find our coffee shop",
  },
]

const quickInfo = [
  {
    title: "Hours",
    icon: Clock,
    content: "Mon-Fri: 6AM-8PM\nSat-Sun: 7AM-9PM",
  },
  {
    title: "Rating",
    icon: Star,
    content: "4.8/5 stars\n(200+ reviews)",
  },
]

export function AppSidebar() {
  return (
    <Sidebar side="left" className="border-r border-amber-200/50" collapsible="offcanvas">
      <SidebarHeader className="border-b border-amber-200/50 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
        <div className="flex items-center gap-3 px-2 py-3 md:py-4">
          <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-amber-600 text-white shadow-md">
            <Coffee className="h-4 w-4 md:h-5 md:w-5" />
          </div>
          <div>
            <h2 className="text-base md:text-lg font-bold text-amber-900">Brew & Bean</h2>
            <p className="text-xs md:text-sm text-amber-700">Artisan Coffee Shop</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-amber-50/50 to-orange-50/50">
        <SidebarGroup>
          <SidebarGroupLabel className="text-amber-800 font-semibold text-sm">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-amber-100/70 hover:text-amber-900 transition-colors duration-200 group"
                  >
                    <a
                      href={item.url}
                      className="flex items-center gap-3 p-2 md:p-3 rounded-lg"
                      aria-label={item.description}
                    >
                      <item.icon className="h-4 w-4 text-amber-600 group-hover:text-amber-700 transition-colors" />
                      <span className="font-medium text-sm md:text-base">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-amber-800 font-semibold text-sm">Quick Info</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3 px-2">
              {quickInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-3 p-2 md:p-3 rounded-lg bg-amber-100/30">
                  <info.icon className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-amber-900 text-xs md:text-sm">{info.title}</h4>
                    <p className="text-xs text-amber-700 whitespace-pre-line mt-1">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-amber-200/50 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
        <div className="p-3 md:p-4 text-center">
          <p className="text-xs text-amber-700">© 2024 Brew & Bean Coffee Shop</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
