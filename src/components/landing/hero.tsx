
'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 bg-background text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/40 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter mb-6 leading-tight">
            Fair, Fast Income for Africa&apos;s Youth Economy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            MonieFlow uses AI to connect you with fair-paying gigs, micro-jobs, and upskilling opportunities, ensuring you earn what you deserve, instantly.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Button asChild size="lg" className="text-lg h-12 px-8">
              <Link href="/signup">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg h-12 px-8">
              <Link href="#">
                <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 md:mt-20">
            <div className="relative max-w-5xl mx-auto p-2 bg-background rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                    src="https://picsum.photos/seed/dashboard-shot/1200/700"
                    width={1200}
                    height={700}
                    alt="MonieFlow Dashboard"
                    className="rounded-lg"
                    data-ai-hint="app dashboard"
                    priority
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/20"></div>
            </div>
        </div>
      </div>
    </section>
  );
}
