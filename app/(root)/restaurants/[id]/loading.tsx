import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="pb-8">
      <Skeleton className="h-56 w-full rounded-none sm:h-72 lg:h-80" />
      <div className="mx-auto -mt-16 max-w-screen-2xl px-4 sm:px-6 lg:-mt-20 lg:px-8">
        <div className="rounded-2xl border bg-card p-5 sm:p-6">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="mt-2 h-4 w-1/2" />
          <Skeleton className="mt-1 h-3 w-2/3" />
          <div className="mt-5 grid grid-cols-3 gap-6 border-t border-border/60 pt-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-1.5">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-3 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            <div>
              <Skeleton className="h-6 w-40" />
              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-32 rounded-xl" />
                ))}
              </div>
            </div>
          </div>
          <Skeleton className="h-72 rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
