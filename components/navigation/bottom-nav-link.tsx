import { type NavItem } from "@/constant"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function BottomNavLink({
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

  const Icon = item.icon

  return (
    <li className="flex-1">
      <Link
        href={item.href}
        className={cn(
          "flex h-16 flex-col items-center justify-center gap-1 rounded-lg text-[10px] font-medium transition-colors",
          isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Icon
          className={cn(
            "h-5 w-5 transition-transform",
            isActive && "scale-110"
          )}
        />
        <span>{item.label}</span>
      </Link>
    </li>
  )
}
