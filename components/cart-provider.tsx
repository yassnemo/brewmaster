"use client"

import React from "react"
import { Product } from "@/lib/products"

type CartItem = { product: Product; qty: number }

type CartState = {
  items: CartItem[]
  addItem: (p: Product, qty?: number) => void
  removeItem: (productId: string) => void
  clear: () => void
  setQty: (productId: string, qty: number) => void
}

const CartContext = React.createContext<CartState | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>(() => {
    if (typeof window === "undefined") return []
    try {
      const raw = localStorage.getItem("cart:v1")
      return raw ? (JSON.parse(raw) as CartItem[]) : []
    } catch {
      return []
    }
  })

  React.useEffect(() => {
    try {
      localStorage.setItem("cart:v1", JSON.stringify(items))
    } catch {}
  }, [items])

  const addItem = React.useCallback((p: Product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === p.id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty }
        return copy
      }
      return [...prev, { product: p, qty }]
    })
  }, [])

  const removeItem = React.useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId))
  }, [])

  const clear = React.useCallback(() => setItems([]), [])

  const setQty = React.useCallback((productId: string, qty: number) => {
    setItems((prev) => prev.map((i) => (i.product.id === productId ? { ...i, qty } : i)))
  }, [])

  const value: CartState = { items, addItem, removeItem, clear, setQty }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = React.useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
