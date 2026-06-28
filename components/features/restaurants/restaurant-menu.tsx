import type { MenuItem } from "@/types/database"
import MenuItemCard from "./cards/menu-item-card"
import MenuCategories from "./menu-categories"
import MenuSort from "./menu-sort"

interface Props {
  allItems: MenuItem[]
  visibleItems: MenuItem[]
}

export default function RestaurantMenu({ allItems, visibleItems }: Props) {
  // Counts and tabs come from the FULL menu so pills show true totals
  // regardless of the active filter.
  const counts = allItems.reduce<Record<string, number>>((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1
    return acc
  }, {})

  const categories = [...new Set(allItems.map((item) => item.category))]

  return (
    <section className="relative bg-muted/40 py-14 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 pattern-dots opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Our offerings
          </span>
          <h2 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-primary">The </span>
            <span>menu</span>
          </h2>
        </div>

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:flex-1">
            <MenuCategories categories={categories} counts={counts} />
          </div>
          <div className="flex justify-end">
            <MenuSort />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.length === 0 ? (
            <p className="col-span-full py-8 text-center text-muted-foreground">
              No items in this category.
            </p>
          ) : (
            visibleItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
