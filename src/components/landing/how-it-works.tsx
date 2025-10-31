
import Image from 'next/image';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Get Earning in 3 Simple Steps</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start your journey to financial freedom today. It's easier than you think.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full border-2 border-primary/20 mb-6">
                <span className="text-3xl font-bold font-headline">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
            <p className="text-muted-foreground">Sign up in minutes. Tell us your skills, and let our AI build your professional profile.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full border-2 border-primary/20 mb-6">
                <span className="text-3xl font-bold font-headline">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Accept AI-Matched Gigs</h3>
            <p className="text-muted-foreground">Get notified about gigs that fit you perfectly. Apply with an AI-generated proposal in one click.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full border-2 border-primary/20 mb-6">
                <span className="text-3xl font-bold font-headline">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Paid Instantly</h3>
            <p className="text-muted-foreground">Once the gig is done, your payment is released to your MonieFlow wallet. No delays.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
