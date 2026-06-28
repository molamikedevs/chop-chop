import { Bike, CheckCircle2, Store, Utensils } from "lucide-react"

export default function ThreeWayWin() {
  const audiences = [
    {
      icon: Utensils,
      tag: "For customers",
      title: "Order in a few taps",
      copy: "Browse local restaurants, pick what you crave, and have it delivered to your door — no waiting in lines, no traffic, no fuss.",
      bullets: [
        "Wide restaurant selection",
        "Live order tracking",
        "Secure payments",
      ],
    },
    {
      icon: Bike,
      tag: "For couriers",
      title: "Earn on your schedule",
      copy: "Be your own boss. Sign up, choose when you want to ride, and start earning. We're building real jobs for youth across Freetown.",
      bullets: ["Flexible hours", "Weekly payouts", "No experience required"],
      featured: true,
    },
    {
      icon: Store,
      tag: "For restaurants",
      title: "Reach more diners",
      copy: "Partner with us to bring your kitchen to thousands of new customers. We handle the delivery — you focus on the cooking.",
      bullets: ["More orders", "Zero delivery overhead", "Built-in marketing"],
    },
  ]

  return (
    <section className="bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Built for everyone
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            A win for every side of the table
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            We don&lsquo;t just move food — we move opportunity. Here&lsquo;s
            how Chop Chop works for the people who matter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {audiences.map((aud) => {
            const Icon = aud.icon
            return (
              <article
                key={aud.tag}
                className={`group relative flex flex-col rounded-3xl border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-md ${
                  aud.featured ? "border-primary/30 ring-1 ring-primary/20" : ""
                }`}
              >
                {aud.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary-foreground uppercase">
                    Our mission
                  </span>
                )}

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-muted text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mt-5 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                  {aud.tag}
                </p>
                <h3 className="mt-1.5 font-heading text-xl font-bold tracking-tight">
                  {aud.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {aud.copy}
                </p>

                <ul className="mt-5 space-y-2 border-t border-border/60 pt-5">
                  {aud.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
