import { cn } from "@/lib/utils"
import type { Restaurant } from "@/types/database"
import { Quote, Star } from "lucide-react"

const REVIEWS = [
  {
    id: "1",
    rating: 5,
    quote:
      "Absolutely incredible. The jollof rice was the best I've had in years — perfectly spiced and the chicken fell right off the bone.",
    name: "Adama Bangura",
    location: "Freetown",
    date: "2 weeks ago",
    avatarColor: "bg-primary",
  },
  {
    id: "2",
    rating: 5,
    quote:
      "Fast delivery, food still hot when it arrived. The portions are generous and the staff actually called to confirm my order. Will order again.",
    name: "Mohamed Sesay",
    location: "Aberdeen",
    date: "1 month ago",
    avatarColor: "bg-info",
  },
  {
    id: "3",
    rating: 4,
    quote:
      "Lovely atmosphere when we visited in person. The seafood platter was the highlight — fresh and beautifully presented.",
    name: "Fatima Conteh",
    location: "Lumley",
    date: "3 weeks ago",
    avatarColor: "bg-success",
  },
  {
    id: "4",
    rating: 5,
    quote:
      "My family's go-to for special occasions. Consistent quality, great service, and the cassava leaf is something I dream about.",
    name: "Ibrahim Kamara",
    location: "Hill Station",
    date: "1 week ago",
    avatarColor: "bg-warning",
  },
]

export default function RestaurantReviews({
  restaurant,
}: {
  restaurant: Restaurant
}) {
  return (
    <section className="bg-muted/40 py-14 lg:py-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Heading + overall rating */}
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Reviews
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What guests are <span className="text-primary">saying</span>
            </h2>
          </div>

          {/* Overall rating badge */}
          <div className="flex items-center gap-4 rounded-2xl border bg-card px-5 py-4 shadow-card">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-success-muted text-success">
              <Star className="h-7 w-7 fill-current" />
            </div>
            <div>
              <p className="font-heading tabular text-3xl leading-none font-bold">
                {restaurant.rating.toFixed(1)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Based on{" "}
                <span className="tabular font-semibold text-foreground">
                  {restaurant.total_reviews}
                </span>{" "}
                reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  const initial = review.name.charAt(0).toUpperCase()

  return (
    <article className="group relative flex flex-col rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md">
      {/* Decorative quote mark */}
      <Quote
        className="absolute top-4 right-4 h-8 w-8 text-primary/10 transition-colors group-hover:text-primary/20"
        aria-hidden
      />

      {/* Star rating */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-3.5 w-3.5",
              i < review.rating
                ? "fill-warning text-warning"
                : "fill-muted text-muted"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
        &ldquo;{review.quote}&rdquo;
      </p>

      {/* Reviewer */}
      <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white",
            review.avatarColor
          )}
        >
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="line-clamp-1 text-sm font-semibold">{review.name}</p>
          <p className="text-[11px] text-muted-foreground">
            {review.location} · {review.date}
          </p>
        </div>
      </div>
    </article>
  )
}
