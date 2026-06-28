import { cn } from "@/lib/utils"
import type { Restaurant } from "@/types/database"
import { MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"

export default function RestaurantHero({
  restaurant,
}: {
  restaurant: Restaurant
}) {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={restaurant.image}
        alt={restaurant.name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient overlay — darkens the image so text is legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-screen-2xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        {/* Status + rating row */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm",
              restaurant.is_open
                ? "bg-success/20 text-success"
                : "bg-white/10 text-white/70"
            )}
          >
            <span
              className={cn(
                "status-dot",
                restaurant.is_open
                  ? "status-dot-pulse bg-success"
                  : "bg-white/40"
              )}
            />
            {restaurant.is_open ? "Open now" : "Closed"}
          </span>

          <span className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            <Star className="h-3 w-3 fill-current text-warning" />
            <span className="tabular">{restaurant.rating.toFixed(1)}</span>
            <span className="text-white/60">({restaurant.total_reviews})</span>
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {restaurant.cuisine.join(" · ")}
          </span>
        </div>

        {/* Restaurant name */}
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {restaurant.name}
        </h1>

        {/* Description */}
        {restaurant.description && (
          <p className="mt-3 max-w-2xl text-base text-white/80 sm:text-lg">
            {restaurant.description}
          </p>
        )}

        {/* Quick info row */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/90">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {restaurant.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            <span className="tabular">{restaurant.phone}</span>
          </span>
        </div>
      </div>
    </section>
  )
}
