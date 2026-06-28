"use client"

import { cn } from "@/lib/utils"
import type { NavLinksProps } from "@/types/global"
import { Show } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import NavLink from "./nav-link"

export default function NavLinks({
  publicItems,
  protectedItems,
  className,
}: NavLinksProps) {
  const pathname = usePathname()

  return (
    <ul className={cn("items-center gap-1 text-sm font-medium", className)}>
      {publicItems.map((item) => (
        <NavLink key={item.href} item={item} pathname={pathname} />
      ))}

      <Show when="signed-in">
        {protectedItems.map((item) => (
          <NavLink key={item.href} item={item} pathname={pathname} />
        ))}
      </Show>
    </ul>
  )
}
