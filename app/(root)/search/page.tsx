import RestaurantCard from "@/components/features/restaurants/cards/restaurant-card"
import { Button } from "@/components/ui/button"
import { restaurants } from "@/constant/index"
import { SearchX } from "lucide-react"
import Link from "next/link"

interface Props {
  searchParams: Promise<{ query?: string }>
}

export default async function Search({ searchParams }: Props) {
  const { query = "" } = await searchParams

  const results = restaurants.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Page header */}
      <header className="mb-8 lg:mb-10">
        <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
          Search results
        </span>
        <h1 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          {query ? (
            <>
              Results for{" "}
              <span className="text-primary">&quot;{query}&quot;</span>
            </>
          ) : (
            "Search restaurants"
          )}
        </h1>
        {query && (
          <p className="mt-1.5 text-sm text-muted-foreground">
            <span className="tabular">{results.length}</span>{" "}
            {results.length === 1 ? "restaurant" : "restaurants"} found
          </p>
        )}
      </header>

      {/* Results */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {results.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      ) : (
        <SearchEmptyState query={query} />
      )}
    </div>
  )
}

function SearchEmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed pattern-dots py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
        <SearchX className="h-8 w-8 text-muted-foreground" />
      </div>
      <h2 className="mt-5 font-heading text-lg font-semibold">
        No restaurants found
      </h2>
      <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
        {query ? (
          <>
            We couldn&apos;t find anything matching{" "}
            <span className="font-semibold text-foreground">
              &quot;{query}&quot;
            </span>
            . Try a different name or browse all restaurants.
          </>
        ) : (
          "Type something in the search bar to find restaurants near you."
        )}
      </p>
      <Button asChild className="mt-6" size="lg">
        <Link href="/restaurants">Browse all restaurants</Link>
      </Button>
    </div>
  )
}
