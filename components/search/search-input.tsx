"use client"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Props {
  placeholder?: string
  className?: string
}

export default function SearchInput({
  placeholder = "Search restaurants, dishes…",
  className,
}: Props) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = searchQuery.trim()
    if (trimmed) router.push(`/search?query=${encodeURIComponent(trimmed)}`)
  }

  return (
    <form onSubmit={handleSubmit} className={cn("relative w-full", className)}>
      <Search
        className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />

      <Input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="h-10 appearance-none rounded-full border-border/60 bg-muted/40 pr-10 pl-10 text-sm [&::-webkit-search-cancel-button]:hidden"
        aria-label="Search"
      />

      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery("")}
          className="absolute top-1/2 right-2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </form>
  )
}
