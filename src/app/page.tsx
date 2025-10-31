
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Cta } from '@/components/landing/cta';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LandingHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Cta />
      </main>
      <LandingFooter />
    </div>
  );
}
