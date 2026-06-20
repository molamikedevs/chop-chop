import React from "react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-10">
      {/* Warm gradient wash — top spotlight tint */}
      <div className="pointer-events-none absolute inset-0 spotlight" />

      {/* Subtle dotted texture */}
      <div className="pointer-events-none absolute inset-0 pattern-dots opacity-50" />

      {/* Soft glow blob behind the card — adds depth, theme-aware */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      {/* Content sits above the layers */}
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </main>
  )
}
