export interface NavItem {
  label: string
  href: string
}

export interface NavLinksProps {
  publicItems: readonly NavItem[]
  protectedItems: readonly NavItem[]
  className?: string
}
