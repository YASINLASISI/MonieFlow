import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M4 4v16h16" />
          <path d="m4 20 7-7" />
          <path d="m11 13 4-4" />
          <path d="m15 9 6 6" />
        </svg>
      </div>
      <span className="font-headline text-xl font-bold text-primary">
        Monieflow
      </span>
    </div>
  )
}
