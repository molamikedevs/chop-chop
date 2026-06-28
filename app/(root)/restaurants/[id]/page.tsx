import RestaurantFooter from "@/components/features/restaurants/restaurant-footer"
import RestaurantHero from "@/components/features/restaurants/restaurant-hero"
import RestaurantLocation from "@/components/features/restaurants/restaurant-location"
import RestaurantMenu from "@/components/features/restaurants/restaurant-menu"
import RestaurantReviews from "@/components/features/restaurants/restaurant-reviews"
import TopDishes from "@/components/features/restaurants/top-dishes"
import { menuItems, restaurants } from "@/constant"
import type { MenuItem, Restaurant } from "@/types/database"

interface Props {
  params: Promise<{ id: string }>
  searchParams: Promise<{ filter?: string }>
}

export default async function RestaurantDetailsPage({
  params,
  searchParams,
}: Props) {
  const { id } = await params
  const { filter = "" } = await searchParams

  const restaurant = (restaurants as Restaurant[]).find((r) => r.id === id)
  if (!restaurant) return null

  const items = (menuItems as MenuItem[]).filter((m) => m.restaurant_id === id)
  const topDishes = items.filter((m) => m.popular)
  const visibleItems = filter
    ? items.filter((m) => m.category === filter)
    : items

  console.log(
    "FILTER:",
    filter,
    "VISIBLE:",
    visibleItems.map((i) => i.name)
  )
  return (
    <main>
      <RestaurantHero restaurant={restaurant} />
      {topDishes.length > 0 && <TopDishes dishes={topDishes} />}
      <RestaurantMenu allItems={items} visibleItems={visibleItems} />
      <RestaurantReviews restaurant={restaurant} />
      <RestaurantLocation restaurant={restaurant} />
      <RestaurantFooter restaurant={restaurant} />
    </main>
  )
}
