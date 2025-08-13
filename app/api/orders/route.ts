import { NextRequest, NextResponse } from "next/server"
import { products } from "@/lib/products"

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body || !Array.isArray(body.items) || !body.customer?.name || !body.customer?.phone) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }

  const items = body.items as Array<{ id: string; qty: number }>
  const resolved = items
    .map((i) => {
      const p = products.find((p) => p.id === i.id)
      if (!p) return null
      const qty = Math.max(1, Number(i.qty || 1))
      return { product: p, qty }
    })
    .filter(Boolean) as { product: typeof products[number]; qty: number }[]

  if (resolved.length === 0) {
    return NextResponse.json({ error: "No items" }, { status: 400 })
  }

  const totalCents = resolved.reduce((sum, r) => sum + r.product.priceCents * r.qty, 0)

  // For free stack: "store" in memory log (ephemeral in serverless dev) and return
  console.log("New order", {
    customer: body.customer,
    items: resolved.map((r) => ({ id: r.product.id, qty: r.qty })),
    totalCents,
  })

  return NextResponse.json({ ok: true, totalCents })
}
