export type Product = {
  id: string
  name: string
  description: string
  priceCents: number
  image: string
  category: string
  subcategory?: string
  tags?: string[]
}

export const products: Product[] = [
  {
    id: "espresso-blend",
    name: "Signature Espresso Blend",
    description: "Rich, full-bodied espresso with notes of chocolate and caramel",
    priceCents: 450,
    image: "/espresso-cup-beans.png",
  category: "Coffee",
  subcategory: "Espresso",
  tags: ["espresso", "blend", "classic"],
  },
  {
    id: "artisan-croissant",
    name: "Artisan Croissant",
    description: "Buttery, flaky pastry baked fresh daily with premium French butter",
    priceCents: 325,
    image: "/golden-croissant.png",
  category: "Pastry",
  subcategory: "Viennoiserie",
  tags: ["buttery", "flaky", "bakery"],
  },
  {
    id: "breakfast-sandwich",
    name: "Gourmet Breakfast Sandwich",
    description: "Farm-fresh eggs, artisan cheese, and premium bacon on sourdough",
    priceCents: 895,
    image: "/placeholder-wl4pl.png",
  category: "Food",
  subcategory: "Breakfast",
  tags: ["eggs", "bacon", "hearty"],
  },
]

export const formatPrice = (cents: number) => `$${(cents / 100).toFixed(2)}`
