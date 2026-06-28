import { Bike, UserPlus, Wallet } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Create your account",
      copy: "Sign up in under two minutes. We'll verify your details and get you ready to ride.",
    },
    {
      icon: Bike,
      step: "02",
      title: "Accept orders",
      copy: "Open the app when you're available. Pick up orders nearby and deliver them safely.",
    },
    {
      icon: Wallet,
      step: "03",
      title: "Get paid weekly",
      copy: "Earn for every delivery. Payouts land in your account every week — no chasing, no waiting.",
    },
  ]

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-12 lg:mb-16">
        <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
          For couriers
        </span>
        <h2 className="mt-2 max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Start earning in <span className="text-primary">three steps</span>
        </h2>
      </div>

      {/* Steps */}
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
        {/* Connecting line — desktop only */}
        <div
          className="pointer-events-none absolute top-7 right-0 left-0 hidden h-px bg-linear-to-r from-transparent via-border to-transparent md:block"
          aria-hidden
        />

        {steps.map((step) => {
          const Icon = step.icon
          return (
            <div key={step.step} className="relative">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border bg-card text-primary shadow-card">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="font-heading tabular text-3xl font-bold text-primary">
                  {step.step}
                </span>
                <h3 className="font-heading text-lg font-bold tracking-tight">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{step.copy}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
