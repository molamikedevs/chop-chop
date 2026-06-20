import { Home, Info, ListOrdered, ShoppingBag, Store } from "lucide-react"

export interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  mobileBar?: boolean // show in the bottom mobile nav
}

export const publicNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home, mobileBar: true },
  { label: "Restaurants", href: "/restaurants", icon: Store, mobileBar: true },
  { label: "About Us", href: "/about-us", icon: Info },
]

export const protectedNavItems: NavItem[] = [
  { label: "Orders", href: "/orders", icon: ListOrdered },
  { label: "Cart", href: "/cart", icon: ShoppingBag, mobileBar: true },
]
