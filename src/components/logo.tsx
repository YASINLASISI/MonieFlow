import { cn } from "@/lib/utils"

export function Logo({ className, isIconOnly = false }: { className?: string; isIconOnly?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
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
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
      {!isIconOnly && (
        <span className="font-headline text-xl font-bold text-primary">
          MonieFlow
        </span>
      )}
    </div>
  )
}
