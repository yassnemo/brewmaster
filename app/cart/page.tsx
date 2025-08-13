"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TopNavigation } from "@/components/top-navigation"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { products, formatPrice } from "@/lib/products"

export default function CartPage() {
  const { items, removeItem, setQty, clear } = useCart()
  const subtotal = items.reduce((sum, i) => sum + i.product.priceCents * i.qty, 0)

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-amber-50 to-orange-50">
        <AppSidebar />
        <SidebarInset className="flex-1 flex flex-col min-h-screen">
          <TopNavigation />
          <main className="flex-1 overflow-auto">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
              {/* Header */}
              <section className="relative overflow-hidden rounded-2xl border border-amber-200 bg-white/70 p-6">
                <div className="absolute inset-0 bg-[url('/coffee-beans-pattern.png')] opacity-5" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-white shadow-md">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-amber-900">Your Cart</h1>
                    <p className="text-sm text-amber-700">Review your items and proceed to checkout.</p>
                  </div>
                </div>
              </section>

              {items.length === 0 ? (
                <Card className="border-amber-200">
                  <CardContent className="p-10 text-center space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                      <ShoppingCart className="h-8 w-8" />
                    </div>
                    <h2 className="text-xl font-semibold text-amber-900">Your cart is empty</h2>
                    <p className="text-amber-700">Explore our menu and add something delicious.</p>
                    <Link href="/menu">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">Browse Menu</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-6 lg:grid-cols-3">
                  {/* Items */}
                  <div className="lg:col-span-2 space-y-4">
                    {items.map(({ product, qty }) => (
                      <Card key={product.id} className="border-amber-200 overflow-hidden">
                        <CardContent className="p-4 flex items-center gap-4">
                          <Image src={product.image} alt={product.name} width={80} height={80} className="rounded object-cover" />
                          <div className="flex-1">
                            <div className="font-semibold text-amber-900">{product.name}</div>
                            <div className="text-sm text-amber-700">{product.subcategory ?? product.category}</div>
                            <div className="text-sm text-amber-700">{formatPrice(product.priceCents)}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min={1}
                              value={qty}
                              onChange={(e) => setQty(product.id, Math.max(1, Number(e.target.value)))}
                              className="w-16 border rounded px-2 py-1"
                              aria-label={`Quantity for ${product.name}`}
                            />
                            <Button variant="ghost" onClick={() => removeItem(product.id)} aria-label={`Remove ${product.name}`}>
                              Remove
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Summary */}
                  <div>
                    <Card className="border-amber-200">
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-lg font-semibold text-amber-900">Order Summary</h3>
                        <div className="flex items-center justify-between text-amber-800">
                          <span>Subtotal</span>
                          <span className="font-medium">{formatPrice(subtotal)}</span>
                        </div>
                        <Separator />
                        <p className="text-sm text-amber-700">Taxes and any fees are handled at pickup.</p>
                        <div className="flex flex-col gap-2">
                          <Link href="/checkout">
                            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Checkout</Button>
                          </Link>
                          <Button variant="outline" onClick={clear} className="w-full">Clear Cart</Button>
                          <Link href="/menu" className="text-center text-sm text-amber-700 hover:underline">Continue shopping</Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Suggested items */}
              {items.length > 0 && (
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-amber-900">You may also like</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.slice(0, 3).map((p) => (
                      <Card key={p.id} className="border-amber-200">
                        <CardContent className="p-4 flex items-center gap-4">
                          <Image src={p.image} alt={p.name} width={64} height={64} className="rounded object-cover" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-amber-900">{p.name}</div>
                            <div className="text-sm text-amber-700">{formatPrice(p.priceCents)}</div>
                          </div>
                          <Link href="/menu">
                            <Button size="sm" variant="outline" className="border-amber-600 text-amber-700">View</Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
