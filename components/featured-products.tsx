import { Star, Coffee, Cookie, Sandwich } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const featuredItems = [
  {
    id: 1,
    name: "Signature Espresso Blend",
    description: "Rich, full-bodied espresso with notes of chocolate and caramel",
    price: "$4.50",
    rating: 4.9,
    image: "/espresso-cup-beans.png",
    icon: Coffee,
    category: "Coffee",
  },
  {
    id: 2,
    name: "Artisan Croissant",
    description: "Buttery, flaky pastry baked fresh daily with premium French butter",
    price: "$3.25",
    rating: 4.7,
    image: "/golden-croissant.png",
    icon: Cookie,
    category: "Pastry",
  },
  {
    id: 3,
    name: "Gourmet Breakfast Sandwich",
    description: "Farm-fresh eggs, artisan cheese, and premium bacon on sourdough",
    price: "$8.95",
    rating: 4.8,
    image: "/placeholder-wl4pl.png",
    icon: Sandwich,
    category: "Food",
  },
]

export function FeaturedProducts() {
  return (
    <section id="menu" className="py-12 md:py-16 bg-white" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h2 id="featured-heading" className="text-2xl md:text-3xl font-bold text-amber-900 lg:text-4xl">
            Featured Favorites
          </h2>
          <p className="text-base md:text-lg text-amber-700 max-w-2xl mx-auto">
            Discover our most beloved creations, crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.name} - ${item.description}`}
                  width={300}
                  height={300}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-white/90 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 flex items-center gap-1">
                  <item.icon className="h-3 w-3 text-amber-600" />
                  <span className="text-xs font-medium text-amber-800">{item.category}</span>
                </div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-amber-600 text-white rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  <span className="text-xs font-medium">{item.rating}</span>
                </div>
              </div>

              <CardContent className="p-4 md:p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-amber-900 group-hover:text-amber-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl md:text-2xl font-bold text-amber-600">{item.price}</span>
                  <Button
                    size="sm"
                    className="bg-amber-600 hover:bg-amber-700 text-white transition-all duration-200 hover:shadow-md"
                    aria-label={`Add ${item.name} to order`}
                  >
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 bg-transparent"
            aria-label="View complete menu"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
