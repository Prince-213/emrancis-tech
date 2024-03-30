import { Skeleton } from "@/components/ui/skeleton"

export function Loading() {
  return (
    <div className="flex flex-col w-full space-y-3">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-4 w-[60%]" />
      </div>
    </div>
  )
}
