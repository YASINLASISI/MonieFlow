
import { Logo } from "@/components/logo";

export function LandingFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by You. Powered by AI.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {currentYear} MonieFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
