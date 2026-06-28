import { Button } from "@/components/ui/button"
import { Bike, Store } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl border bg-card p-8 sm:p-12 lg:p-16">
        <div className="pointer-events-none absolute inset-0 spotlight opacity-60" />
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          aria-hidden
        />

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to be part of it?
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              Whether you want to ride, run a restaurant, or just order dinner —
              there&lsquo;s a place for you on Chop Chop.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button size="lg" asChild className="gap-2">
              <Link href="/sign-up">
                <Bike className="h-4 w-4" />
                Become a courier
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <Link href="/sign-up">
                <Store className="h-4 w-4" />
                Partner your restaurant
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
