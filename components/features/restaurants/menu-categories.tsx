"use client"

import { formUrlQuery, removeKeysFormUrlQuery } from "@/lib/url"
import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"

interface Props {
  counts?: Record<string, number>
  categories: string[]
}

export default function MenuCategories({ counts = {}, categories }: Props) {
  const searchParams = useSearchParams()
  const activeFilter = searchParams.get("filter") ?? ""
  const router = useRouter()

  function handleClick(filter: string) {
    let newUrl = ""
    const paramsToString = searchParams.toString()

    if (filter === activeFilter) {
      newUrl = removeKeysFormUrlQuery({
        params: paramsToString,
        keysToRemove: ["filter"],
      })
    } else {
      newUrl = formUrlQuery({
        params: paramsToString,
        key: "filter",
        value: filter,
      })
    }

    if (newUrl) router.push(newUrl, { scroll: false })
  }

  return (
    <div className="-mx-4 scrollbar-hidden flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      {categories.map((category) => {
        const isActive = activeFilter === category
        const count = counts[category]

        return (
          <button
            key={category}
            type="button"
            onClick={() => handleClick(category)}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card text-foreground hover:bg-accent"
            )}
          >
            {category}
            {count !== undefined && (
              <sup
                className={cn(
                  "text-[10px] leading-none font-bold",
                  isActive
                    ? "text-primary-foreground/85"
                    : "text-muted-foreground"
                )}
              >
                {count}
              </sup>
            )}
          </button>
        )
      })}
    </div>
  )
}
