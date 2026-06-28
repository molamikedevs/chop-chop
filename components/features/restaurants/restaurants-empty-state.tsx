import { UtensilsCrossed } from "lucide-react"

export default function RestaurantsEmptyState({ query }: { query?: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed pattern-dots py-20 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
        <UtensilsCrossed className="h-7 w-7 text-muted-foreground" />
      </div>
      <h3 className="mt-4 text-base font-semibold">No restaurants found</h3>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">
        {query
          ? `We couldn't find anything matching "${query}". Try a different search or filter.`
          : "Try clearing your filters or check back soon."}
      </p>
    </div>
  )
}
