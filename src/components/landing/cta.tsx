
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-muted/50">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">
          Ready to Take Control of Your Income?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Join thousands of young Nigerians already achieving Zero Broke Days with MonieFlow. Your next gig is just a click away.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="text-lg h-12 px-8">
            <Link href="/signup">
              Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
