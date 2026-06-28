"use client"

import Logo from "@/components/layout/logo"
import NavLinks from "@/components/navigation/nav-links"
import ThemeSwitch from "@/components/theme/theme-switch"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { protectedNavItems, publicNavItems } from "@/constant"
import { ClerkLoaded, ClerkLoading, Show, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import SearchInput from "../search/search-input"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 …">
      <nav className="mx-auto flex h-16 max-w-screen-2xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Search — desktop, takes the middle */}
        <div className="hidden flex-1 justify-center md:flex">
          <SearchInput className="max-w-md" />
        </div>

        {/* Nav links — desktop, after search */}
        <NavLinks
          publicItems={publicNavItems}
          protectedItems={protectedNavItems}
          className="hidden lg:flex"
        />
        <div className="mx-1 hidden h-6 w-px bg-border sm:block" />
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <ThemeSwitch />

          <ClerkLoading>
            <Skeleton className="h-9 w-9 rounded-full" />
          </ClerkLoading>
          <ClerkLoaded>
            <Show
              when="signed-in"
              fallback={
                <>
                  <div className="hidden items-center gap-2 sm:flex">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/sign-in">Sign in</Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="/sign-up">Sign up</Link>
                    </Button>
                  </div>
                  {/* Sign-in CTA visible on mobile too, since bottom nav doesn't have one */}
                  <Button size="sm" asChild className="sm:hidden">
                    <Link href="/sign-in">Sign in</Link>
                  </Button>
                </>
              }
            >
              <div className="hidden md:block">
                <UserButton
                  appearance={{ elements: { avatarBox: "h-9 w-9" } }}
                />
              </div>
            </Show>
          </ClerkLoaded>
        </div>
      </nav>
    </header>
  )
}
