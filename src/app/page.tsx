import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="container mx-auto flex items-center justify-between p-4 sm:p-6">
        <Logo />
        <Button asChild variant="ghost">
          <Link href="/dashboard">
            Log In <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </header>
      <main className="flex-1 flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left px-4">
          <div className="space-y-6">
            <Badge variant="outline" className="text-sm bg-primary/10 text-primary border-primary/20 py-1 px-3">
              Hackathon Edition: Fair, Fast Income for Youth
            </Badge>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
              The end of broke days is here.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0">
              MonieFlow uses AI and random fairness to make same-day income accessible to every student, regardless of experience.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Button asChild size="lg" className="text-lg h-12 px-8">
                <Link href="/dashboard">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border-4 border-primary/20">
            <Image 
              src="https://picsum.photos/seed/hero-image/1280/720"
              alt="A young person working on a laptop"
              fill
              className="object-cover"
              data-ai-hint="student working"
              priority
            />
          </div>
        </div>
      </main>
      <footer className="container mx-auto p-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} MonieFlow. No Bias. No Broke Days.</p>
      </footer>
    </div>
  );
}
