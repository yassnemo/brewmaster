import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-xl p-6 text-center space-y-4">
      <h1 className="text-2xl font-bold text-amber-900">Order received!</h1>
      <p className="text-amber-700">We’ll start preparing your items. You’ll pay at pickup.</p>
      <Link href="/">
        <Button className="bg-amber-600 hover:bg-amber-700 text-white">Back to Home</Button>
      </Link>
    </div>
  )
}
