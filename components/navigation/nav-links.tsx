"use client"

import { cn } from "@/lib/utils"
import { Show } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItem {
  label: string
  href: string
}

interface Props {
  publicItems: readonly NavItem[]
  protectedItems: readonly NavItem[]
  className?: string
}

export default function NavLinks({
  publicItems,
  protectedItems,
  className,
}: Props) {
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

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`)

  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "relative rounded-md px-3 py-2 transition-colors",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {item.label}
        {isActive && (
          <span className="absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full bg-primary" />
        )}
      </Link>
    </li>
  )
}
