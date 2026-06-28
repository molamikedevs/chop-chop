import { Button } from "@/components/ui/button"
import type { Restaurant } from "@/types/database"
import { Calendar, Clock, MapPin, Navigation, Phone } from "lucide-react"

export default function RestaurantLocation({
  restaurant,
}: {
  restaurant: Restaurant
}) {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    restaurant.address
  )}`
  // For the embed — same place, but as an embed iframe URL
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    restaurant.address
  )}&output=embed`

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      {/* Heading */}
      <div className="mb-8 lg:mb-10">
        <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
          Find us
        </span>
        <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Visit <span className="text-primary">{restaurant.name}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px] lg:gap-8">
        {/* Map */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border bg-muted lg:aspect-auto lg:h-[440px]">
          <iframe
            src={embedUrl}
            className="h-full w-full dark:brightness-90 dark:contrast-95 dark:hue-rotate-180 dark:invert"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${restaurant.name}`}
            allowFullScreen
          />
        </div>

        {/* Details card */}
        <aside className="flex flex-col gap-5 rounded-2xl border bg-card p-6 shadow-card">
          <div>
            <h3 className="font-heading text-lg font-semibold tracking-tight">
              Plan your visit
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              We&apos;re easy to find. Tap directions to navigate from your
              location.
            </p>
          </div>

          <InfoRow icon={MapPin} label="Address" value={restaurant.address} />

          <InfoRow
            icon={Phone}
            label="Reservations"
            value={
              <a
                href={`tel:${restaurant.phone}`}
                className="tabular text-foreground hover:text-primary"
              >
                {restaurant.phone}
              </a>
            }
          />

          <InfoRow
            icon={Clock}
            label="Open today"
            value={
              <span>
                <span className="tabular">{restaurant.open_time}</span>
                {" – "}
                <span className="tabular">{restaurant.close_time}</span>
              </span>
            }
          />

          <InfoRow icon={Calendar} label="Hours" value="Monday – Sunday" />

          {/* CTA */}
          <Button asChild className="mt-2 gap-2" size="lg">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-4 w-4" />
              Get directions
            </a>
          </Button>
        </aside>
      </div>
    </section>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-muted text-primary">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium">{value}</p>
      </div>
    </div>
  )
}
