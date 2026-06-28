import { Button } from "@/components/ui/button"
import { UtensilsCrossed } from "lucide-react"
import Link from "next/link"

export default function RestaurantNotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted pattern-dots">
        <UtensilsCrossed className="h-9 w-9 text-muted-foreground" />
      </div>
      <h1 className="mt-5 font-heading text-2xl font-bold">
        Restaurant not found
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        The restaurant you&lsquo;re looking for doesn&lsquo;t exist or may have
        been removed.
      </p>
      <Button asChild className="mt-6">
        <Link href="/restaurants">Browse all restaurants</Link>
      </Button>
    </div>
  )
}
