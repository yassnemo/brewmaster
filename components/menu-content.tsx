"use client"

import * as React from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products, formatPrice } from "@/lib/products"
import { useCart } from "@/components/cart-provider"
import { Coffee, Cookie, Sandwich } from "lucide-react"

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))] as const

const CategoryIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  Coffee,
  Pastry: Cookie,
  Food: Sandwich,
}

type Category = (typeof categories)[number]

export function MenuContent() {
  const { addItem } = useCart()
  const [cat, setCat] = React.useState<Category>("All")
  const [q, setQ] = React.useState("")
  const [maxPrice, setMaxPrice] = React.useState<number>(20)
  const [sort, setSort] = React.useState<"featured" | "price_asc" | "price_desc" | "name_asc">("featured")

  const subcategories = React.useMemo(() => {
    const set = new Set<string>()
    products.forEach((p) => {
      if (cat !== "All" && p.category !== cat) return
      if (p.subcategory) set.add(p.subcategory)
    })
    return Array.from(set)
  }, [cat])
  const [subFilter, setSubFilter] = React.useState<string>("all")

  const filtered = products.filter((p) => {
    if (cat !== "All" && p.category !== cat) return false
    if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false
    if (p.priceCents / 100 > maxPrice) return false
    if (subFilter !== "all" && p.subcategory !== subFilter) return false
    return true
  })
  .sort((a, b) => {
    switch (sort) {
      case "price_asc":
        return a.priceCents - b.priceCents
      case "price_desc":
        return b.priceCents - a.priceCents
      case "name_asc":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="space-y-8">
      {/* Header banner */}
      <section className="relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-6">
        <div className="absolute inset-0 bg-[url('/coffee-beans-pattern.png')] opacity-5" />
        <div className="relative">
          <h1 className="text-3xl font-bold text-amber-900">Our Menu</h1>
          <p className="mt-2 text-amber-700 max-w-2xl">
            Freshly brewed coffee, buttery pastries, and hearty bites. Pick your favorites and add them to your order.
          </p>
        </div>
      </section>

      {/* Search and filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 max-w-md">
          <Input
            placeholder="Search coffee, pastry, food..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="bg-white/70"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          {/* Subcategory filter (when available) */}
          <div className="min-w-40">
            <Select value={subFilter} onValueChange={setSubFilter}>
              <SelectTrigger aria-label="Filter by subcategory"><SelectValue placeholder="All subcategories" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All subcategories</SelectItem>
                {subcategories.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Sort select */}
          <div className="min-w-40">
            <Select value={sort} onValueChange={(v) => setSort(v as any)}>
              <SelectTrigger aria-label="Sort by"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="name_asc">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Max price slider */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-amber-800">Max {formatPrice(Math.round(maxPrice * 100))}</span>
            <div className="w-40">
              <Slider
                min={1}
                max={30}
                step={1}
                value={[maxPrice] as any}
                onValueChange={(v: number[] | any) => setMaxPrice(Array.isArray(v) ? v[0] : v)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <Tabs value={cat} onValueChange={(v) => setCat(v as Category)} className="w-full">
        <TabsList className="grid grid-cols-4 sm:inline-flex">
          {categories.map((c) => {
            const Icon = c === "All" ? Coffee : CategoryIcon[c as string] ?? Coffee
            return (
              <TabsTrigger key={c} value={c} className="capitalize inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-amber-600" /> {c}
              </TabsTrigger>
            )
          })}
        </TabsList>

        {categories.map((c) => (
          <TabsContent key={c} value={c} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <Card key={item.id} className="overflow-hidden border-amber-200 hover:shadow-md transition">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <CardContent className="p-4 space-y-3">
                     <div>
                      <div className="text-sm text-amber-700">{item.category}</div>
                      <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
                      <p className="text-sm text-amber-700 line-clamp-2">{item.description}</p>
                       {item.tags && item.tags.length > 0 && (
                         <div className="mt-2 flex flex-wrap gap-1">
                           {item.tags.map((t) => (
                             <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                               {t}
                             </span>
                           ))}
                         </div>
                       )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-amber-600">{formatPrice(item.priceCents)}</span>
                      <Button
                        size="sm"
                        className="bg-amber-600 hover:bg-amber-700 text-white"
                        onClick={() => addItem(item)}
                        aria-label={`Add ${item.name} to cart`}
                      >
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center text-amber-700">No items in this category yet.</div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
