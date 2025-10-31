
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Zap, TrendingUp, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI FairMatch™ Engine",
    description: "Our AI doesn't just find you a gig; it finds you the right, fair-paying gig based on your skills and location, cutting out the guesswork."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Instant Payments",
    description: "Complete a gig, get paid instantly. No more waiting for 'month-end'. Your cash flows directly to your MonieFlow wallet."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Micro-Upskilling",
    description: "Level up with AI-powered, 2-minute lessons. Gain new skills that increase your earning potential on the platform."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Trust & Safety Layer",
    description: "With verified clients and funds held in escrow, we ensure you work in a safe and secure environment. Zero risks, all reward."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Why MonieFlow is Different</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're not just another gig platform. We're an economic empowerment engine built for you.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center bg-background shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-xl mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
