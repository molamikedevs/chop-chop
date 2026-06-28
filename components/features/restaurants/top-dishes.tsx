"use client"

import { cn, formatPrice } from "@/lib/utils"
import type { MenuItem } from "@/types/database"
import { ChevronLeft, ChevronRight, Flame, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function TopDishes({ dishes }: { dishes: MenuItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isPausedRef = useRef(false)

  useEffect(() => {
    if (dishes.length <= 1) return

    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex((prev) => (prev + 1) % dishes.length)
      }
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [dishes.length])

  function goTo(index: number) {
    setActiveIndex(index)
  }

  function next() {
    setActiveIndex((prev) => (prev + 1) % dishes.length)
  }

  function prev() {
    setActiveIndex((prev) => (prev - 1 + dishes.length) % dishes.length)
  }

  if (dishes.length === 0) return null

  return (
    <section
      className="relative overflow-hidden bg-background py-10 text-foreground lg:py-12"
      onMouseEnter={() => {
        isPausedRef.current = true
      }}
      onMouseLeave={() => {
        isPausedRef.current = false
      }}
    >
      <div className="pointer-events-none absolute inset-0 spotlight opacity-40" />
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-6 flex items-end justify-between gap-4 lg:mb-8">
          <div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Top dishes
              </span>
            </div>
            <h2 className="mt-1.5 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              What guests <span className="text-primary">crave</span>
            </h2>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:bg-background/10 hover:text-background"
              aria-label="Previous dish"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:bg-background/10 hover:text-background"
              aria-label="Next dish"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Hero — compact two-column */}
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] lg:gap-10">
          {/* Image side */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-background/5">
            {dishes.map((dish, i) => (
              <div
                key={dish.id}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-out",
                  i === activeIndex
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                )}
                aria-hidden={i !== activeIndex}
              >
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="300px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}

            <div className="absolute top-3 left-3 rounded-full bg-background/10 px-2.5 py-0.5 text-[10px] font-semibold text-background backdrop-blur-md">
              <span className="tabular">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="mx-1 text-background/50">/</span>
              <span className="tabular text-background/70">
                {String(dishes.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Content side */}
          <div className="relative min-h-[200px]">
            {dishes.map((dish, i) => (
              <div
                key={dish.id}
                className={cn(
                  "transition-all duration-700 ease-out",
                  i === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none absolute inset-0 -translate-y-4 opacity-0"
                )}
                aria-hidden={i !== activeIndex}
              >
                <span className="inline-block rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-primary uppercase">
                  {dish.category}
                </span>

                <h3 className="mt-2.5 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                  {dish.name}
                </h3>

                <p className="mt-2 max-w-md text-sm text-foreground">
                  {dish.ingredients.slice(0, 4).join(" · ")}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <div>
                    <p className="text-[9px] tracking-wider text-background/50 uppercase">
                      Price
                    </p>
                    <p className="mt-0.5 price text-xl text-foreground">
                      {formatPrice(dish.price)}
                    </p>
                  </div>

                  <div className="h-8 w-px bg-background/15" />

                  <div>
                    <p className="text-[9px] tracking-wider text-background/50 uppercase">
                      Rating
                    </p>
                    <div className="mt-0.5 flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                      <span className="tabular text-base font-semibold">
                        {dish.rating.toFixed(1)}
                      </span>
                      <span className="text-xs text-background/50">
                        ({dish.reviews_count})
                      </span>
                    </div>
                  </div>

                  <div className="h-8 w-px bg-background/15" />

                  <div>
                    <p className="text-[9px] tracking-wider text-background/50 uppercase">
                      Prep
                    </p>
                    <p className="mt-0.5 text-base font-semibold">
                      <span className="tabular">{dish.prep_time_min}</span> min
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnail row */}
        <div className="-mx-4 mt-6 scrollbar-hidden flex gap-2.5 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:-mx-8 lg:mt-8 lg:px-8">
          {dishes.map((dish, i) => (
            <button
              key={dish.id}
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                "relative aspect-square w-16 shrink-0 overflow-hidden rounded-lg transition-all sm:w-20",
                i === activeIndex
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-foreground"
                  : "opacity-60 hover:opacity-100"
              )}
              aria-label={`Show ${dish.name}`}
            >
              <Image
                src={dish.image}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
              {i === activeIndex && (
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left animate-progress bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
