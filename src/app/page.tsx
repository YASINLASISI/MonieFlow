import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Badge } from '@/components/ui/badge';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="p-4 sm:p-6">
        <Logo />
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-3xl text-center">
           <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Hackathon Edition: Fair, Fast Income for Youth
           </Badge>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold text-primary tracking-tighter">
            Zero Broke Days.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            ZBD uses AI and random fairness to make same-day income accessible to every student, regardless of experience.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="/dashboard">
                Get Started <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="p-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} ZBD. No Bias. No Broke Days.</p>
      </footer>
    </div>
  );
}
