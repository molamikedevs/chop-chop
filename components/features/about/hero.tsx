import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 spotlight opacity-50" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-muted px-3 py-1 text-[11px] font-bold tracking-wider text-primary uppercase">
              <Sparkles className="h-3 w-3" />
              About Chop Chop
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Food delivered.{" "}
              <span className="text-primary">Income created.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Chop Chop is more than a food delivery app. We connect hungry
              customers with the restaurants they love — and we empower young
              people across Freetown to earn a living doing the deliveries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/sign-up">Become a courier</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/restaurants">Explore restaurants</Link>
              </Button>
            </div>
          </div>

          {/* Right column — collage of food imagery */}
          <div className="relative aspect-square">
            <div className="absolute top-0 left-0 h-3/5 w-3/5 overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/res-3.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute top-1/4 right-0 h-1/2 w-1/2 overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/res-2.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-1/4 h-2/5 w-2/5 overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/res-1.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 20vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
