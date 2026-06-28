import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Check,
  ChevronDown,
  Flame,
  MessageSquare,
  Sparkles,
  Tag,
} from "lucide-react"

const SORT_OPTIONS = [
  { value: "popular", label: "Most popular", icon: Flame },
  { value: "discount", label: "Best discounts", icon: Tag },
  { value: "available", label: "Available now", icon: Sparkles },
  { value: "reviews", label: "Most reviewed", icon: MessageSquare },
] as const

export default function MenuSort() {
  const active = "popular"
  const activeOption = SORT_OPTIONS.find((o) => o.value === active)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-11 gap-2 rounded-full border-border px-5 text-sm font-medium"
        >
          <span className="text-muted-foreground">Sort by:</span>
          <span className="font-semibold">{activeOption?.label}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
          Sort menu by
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {SORT_OPTIONS.map((option) => {
          const Icon = option.icon
          const isActive = option.value === active
          return (
            <DropdownMenuItem key={option.value} className="gap-2 text-sm">
              <Icon className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="flex-1">{option.label}</span>
              {isActive && <Check className="h-3.5 w-3.5 text-primary" />}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
