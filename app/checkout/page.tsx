"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice } from "@/lib/products"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clear } = useCart()
  const subtotal = items.reduce((sum, i) => sum + i.product.priceCents * i.qty, 0)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<string | null>(null)

  async function placeOrder() {
    setStatus(null)
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer: { name, phone },
        items: items.map((i) => ({ id: i.product.id, qty: i.qty })),
      }),
    })

    if (!res.ok) {
      setStatus("Something went wrong. Please try again.")
      return
    }

    clear()
    router.push("/success")
  }

  return (
    <div className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-2xl font-bold text-amber-900">Checkout</h1>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div>
            <label className="block text-sm text-amber-800 mb-1">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-amber-800 mb-1">Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
          <div className="font-medium text-amber-900">Total: {formatPrice(subtotal)}</div>
          <p className="text-sm text-amber-700">Payment: Pay at pickup (cash or card). No online fees.</p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white" onClick={placeOrder} disabled={!name || !phone || items.length === 0}>
            Place Order
          </Button>
          {status && <p className="text-red-600 text-sm">{status}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
