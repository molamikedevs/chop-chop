"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useTheme } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()

  return (
    <ClerkProvider
      appearance={{
        theme: resolvedTheme === "dark" ? dark : undefined,
        variables: {
          colorPrimary: "oklch(0.7 0.18 45)",
          borderRadius: "0.75rem",
        },
      }}
    >
      {children}
    </ClerkProvider>
  )
}
