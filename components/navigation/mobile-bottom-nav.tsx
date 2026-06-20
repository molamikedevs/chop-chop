"use client"

import { protectedNavItems, publicNavItems } from "@/constant"
import { cn } from "@/lib/utils"
import { Show, UserButton } from "@clerk/nextjs"
import { User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import BottomNavLink from "./bottom-nav-link"

// Pull only items marked for the mobile bar, in display order
const bottomBarItems = [...publicNavItems, ...protectedNavItems].filter(
  (item) => item.mobileBar
)

export default function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 md:hidden"
      aria-label="Primary"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around px-2">
        {bottomBarItems.map((item) => (
          <BottomNavLink key={item.href} item={item} pathname={pathname} />
        ))}

        {/* Account slot — UserButton handles signed-in, sign-in link otherwise */}
        <li className="flex flex-1 items-center justify-center">
          <Show
            when="signed-in"
            fallback={
              <Link
                href="/sign-in"
                className={cn(
                  "flex h-16 w-full flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors",
                  pathname === "/sign-in"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <User className="h-5 w-5" />
                <span>Account</span>
              </Link>
            }
          >
            <div className="flex h-16 flex-col items-center justify-center gap-1 text-[10px] font-medium text-muted-foreground">
              <UserButton appearance={{ elements: { avatarBox: "h-6 w-6" } }} />
              <span>Account</span>
            </div>
          </Show>
        </li>
      </ul>
    </nav>
  )
}
