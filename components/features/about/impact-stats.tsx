import { Heart, Store, TrendingUp, Users } from "lucide-react"

export default function ImpactStats() {
  const stats = [
    {
      icon: Users,
      value: "200+",
      label: "Youth earning",
      sub: "And growing each week",
    },
    {
      icon: Store,
      value: "50+",
      label: "Partner restaurants",
      sub: "Across Freetown",
    },
    {
      icon: TrendingUp,
      value: "10,000+",
      label: "Orders delivered",
      sub: "Since launch",
    },
    {
      icon: Heart,
      value: "4.7",
      label: "Customer rating",
      sub: "Out of 5 stars",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-foreground py-16 text-background lg:py-24">
      <div className="pointer-events-none absolute inset-0 spotlight opacity-30" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Our impact
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Numbers we&lsquo;re proud of
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  <span className="tabular">{stat.value}</span>
                </p>
                <p className="mt-1 text-sm font-semibold">{stat.label}</p>
                <p className="mt-0.5 text-xs text-background/60">{stat.sub}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
