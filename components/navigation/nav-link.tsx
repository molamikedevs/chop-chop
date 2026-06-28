import { cn } from "@/lib/utils"
import type { NavItem } from "@/types/global"
import Link from "next/link"

export default function NavLink({
  item,
  pathname,
}: {
  item: NavItem
  pathname: string
}) {
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
