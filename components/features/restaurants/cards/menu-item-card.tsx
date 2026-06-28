import { Button } from "@/components/ui/button"
import { cn, formatPrice } from "@/lib/utils"
import type { MenuItem } from "@/types/database"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const hasDiscount =
    item.discount_price !== null && item.discount_price < item.price
  const displayPrice = hasDiscount ? item.discount_price! : item.price

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-card p-4 transition-all",
        item.is_sold_out ? "opacity-60" : "hover:-translate-y-1 hover:shadow-md"
      )}
    >
      {/* Food image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {item.is_sold_out && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/85 backdrop-blur-sm">
            <span className="rounded-full bg-background px-3 py-1 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
              Sold out
            </span>
          </div>
        )}
      </div>

      {/* Name + price */}
      <div className="mt-4 flex items-start justify-between gap-2">
        <h3 className="line-clamp-1 font-heading text-base font-bold tracking-tight">
          {item.name}
        </h3>
        <div className="flex shrink-0 items-baseline gap-1.5">
          <span className="price text-base">{formatPrice(displayPrice)}</span>
          {hasDiscount && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(item.price)}
            </span>
          )}
        </div>
      </div>

      {/* Ingredient pills */}
      {item.ingredients && item.ingredients.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.ingredients.slice(0, 3).map((ingredient) => (
            <span
              key={ingredient}
              className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 text-[11px] text-foreground/80"
            >
              {ingredient}
            </span>
          ))}
          {item.ingredients.length > 3 && (
            <span className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 text-[11px] text-muted-foreground">
              +{item.ingredients.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Add to cart — appears on hover, no logic */}
      {!item.is_sold_out && (
        <Button
          size="icon"
          className="absolute top-4 right-4 h-9 w-9 rounded-full opacity-0 shadow-md transition-opacity group-hover:opacity-100"
          aria-label={`Add ${item.name} to cart`}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      )}
    </article>
  )
}
