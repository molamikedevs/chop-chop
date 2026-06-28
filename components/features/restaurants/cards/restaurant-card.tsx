import { cn } from "@/lib/utils"
import type { Restaurant } from "@/types/database"
import { MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant
}) {
  return (
    <Link
      href={`/restaurants/${restaurant.id}`}
      className="group block card-hover overflow-hidden rounded-2xl border bg-card"
    >
      {/* Image with status pill */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Status pill — top-left of image */}
        <span
          className={cn(
            "absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm",
            restaurant.is_open
              ? "bg-success-muted/90 text-success"
              : "bg-background/90 text-muted-foreground"
          )}
        >
          <span
            className={cn(
              "status-dot",
              restaurant.is_open
                ? "status-dot-pulse bg-success"
                : "bg-muted-foreground"
            )}
          />
          {restaurant.is_open ? "Open" : "Closed"}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 font-heading text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
            {restaurant.name}
          </h3>

          {/* Rating */}
          <div className="flex shrink-0 items-center gap-1 rounded-md bg-success-muted px-1.5 py-0.5 text-xs font-semibold text-success">
            <Star className="h-3 w-3 fill-current" />
            <span className="tabular">{restaurant.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Location */}
        <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="line-clamp-1">{restaurant.location}</span>
        </p>
      </div>
    </Link>
  )
}
