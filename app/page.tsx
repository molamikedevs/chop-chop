import ThemeSwitch from "@/components/theme/theme-switch"
import { Show, UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <header className="flex h-16 items-center justify-end gap-4 p-4">
      <Show when="signed-in">
        <UserButton />
      </Show>
      <ThemeSwitch />
    </header>
  )
}
