import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 sm:p-6">
        <Logo />
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-3xl text-center">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold text-primary tracking-tighter">
            Unlock Your Earning Potential.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Monieflow is your AI-powered companion for finding gigs, managing
            finances, and achieving financial freedom.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="/dashboard">
                Enter The App <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="p-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Monieflow. All rights reserved.</p>
      </footer>
    </div>
  );
}
