import CallToAction from "@/components/features/about/call-to-action"
import Hero from "@/components/features/about/hero"
import HowItWorks from "@/components/features/about/how-it-works"
import ThreeWayWin from "@/components/features/about/three-way-win"

export default function AboutUs() {
  return (
    <main>
      <Hero />
      <ThreeWayWin />
      <HowItWorks />
      <CallToAction />
    </main>
  )
}
