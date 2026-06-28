import RestaurantCard from "@/components/features/restaurants/cards/restaurant-card"
import { restaurants } from "@/constant"

export default function Restaurants() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Page header */}
      <header className="mb-8 lg:mb-10">
        <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Restaurants in Freetown
        </h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Discover great food from <span className="tabular">all</span> local
          restaurants — order in a few taps.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}
