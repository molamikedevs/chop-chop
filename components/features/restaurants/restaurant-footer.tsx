import type { Restaurant } from "@/types/database"
import { Clock, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"

export default function RestaurantFooter({
  restaurant,
}: {
  restaurant: Restaurant
}) {
  return (
    <footer className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 spotlight opacity-30" />

      <div className="relative mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl font-bold tracking-tight">
              {restaurant.name}
            </h3>
            <p className="mt-3 text-sm text-foreground">
              {restaurant.cuisine.join(" · ")} · {restaurant.location}
            </p>
            <div className="mt-5 flex gap-2">
              <SocialLink icon={<BsInstagram className="h-4 w-4" />} />
              <SocialLink icon={<BsFacebook className="h-4 w-4" />} />
              <SocialLink icon={<BsTwitter className="h-4 w-4" />} />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                <span>{restaurant.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-foreground" />

                <a
                  href={`tel:${restaurant.phone}`}
                  className="tabular hover:text-primary"
                >
                  {restaurant.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Opening hours
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-foreground" />
                  Mon – Sun
                </span>
                <span className="tabular text-background/90">
                  {restaurant.open_time} – {restaurant.close_time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-xs text-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <Link
              href="/"
              className="font-semibold text-foreground hover:text-primary"
            >
              Chop Chop
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      {icon}
    </a>
  )
}
