'use client';

import { suggestGigsBasedOnSkills, type SuggestedGig } from '@/ai/flows/suggest-gigs-based-on-skills';
import { GigCard } from '@/components/gigs/gig-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { user } from '@/lib/data';
import { CheckCircle, Download, Trophy, Star, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState, useTransition } from 'react';

type MappedGig = {
    id: string;
    title: string;
    description: string;
    budget: number;
    skills: string[];
    isVerified: boolean;
    category: 'Recommended';
};


export default function ProfilePage() {
  const [suggestedGigs, setSuggestedGigs] = useState<MappedGig[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
        const aiGigs = await suggestGigsBasedOnSkills({ skills: user.skills });
        // For UI purposes, we'll map the AI response to our existing GigCard component structure
        const mappedGigs = aiGigs.map((g, i) => ({
            id: `suggested-${i}`,
            title: g.title,
            description: g.description,
            budget: Math.floor(Math.random() * (10000 - 2000 + 1) + 2000), // Random budget in NGN
            skills: g.requiredSkills,
            isVerified: true,
            category: 'Recommended' as const,
        }));
        setSuggestedGigs(mappedGigs);
    });
  }, []);

  const portfolioItems = [
    { id: 1, title: 'Landing Page Design', imageUrl: 'https://picsum.photos/seed/p1/600/400', imageHint: 'website design' },
    { id: 2, title: 'Mobile App Mockup', imageUrl: 'https://picsum.photos/seed/p2/600/400', imageHint: 'app interface' },
    { id: 3, title: 'Brand Logo Concept', imageUrl: 'https://picsum.photos/seed/p3/600/400', imageHint: 'logo concept' },
  ];

  const reviews = [
    { id: 1, client: 'TechNova Inc.', comment: "Great work, very fast and responsive.", rating: 5 },
    { id: 2, client: 'MarketBloom', comment: "Delivered exactly what we needed. Will hire again!", rating: 5 },
  ]

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6 flex flex-col sm:flex-row items-start gap-6">
          <Avatar className="h-24 w-24 border-2 border-primary">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-3xl">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-headline font-bold">{user.name}</h1>
                <p className="text-muted-foreground">{user.email}</p>
                {user.isVerified && (
                  <div className="mt-2 flex items-center gap-2 text-sm font-medium text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Identity & BVN Verified (MonieFlow Trust Layer)</span>
                  </div>
                )}
              </div>
               <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                AI CV Builder
              </Button>
            </div>
            <Separator className="my-4" />
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Gigs Done</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-muted-foreground">Success</p>
              </div>
               <div>
                <div className="flex items-center justify-center gap-1">
                  <p className="text-2xl font-bold">5.0</p>
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold">24hr</p>
                <p className="text-sm text-muted-foreground">Avg. Pay Time</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Portfolio</CardTitle>
              <CardDescription>
                A showcase of my best work. No vanity metrics, just results.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {portfolioItems.map(item => (
                 <div key={item.id} className="group relative overflow-hidden rounded-lg">
                    <Image src={item.imageUrl} alt={item.title} width={600} height={400} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" data-ai-hint={item.imageHint} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <p className="absolute bottom-2 left-3 font-semibold text-white">{item.title}</p>
                 </div>
              ))}
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Client Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {reviews.map(review => (
                  <div key={review.id} className="border-l-2 pl-4 border-primary">
                      <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                      </div>
                      <blockquote className="mt-1 italic text-muted-foreground">&quot;{review.comment}&quot;</blockquote>
                      <p className="mt-2 text-sm font-semibold">- {review.client}</p>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
            <Card>
                <CardHeader>
                <CardTitle className="font-headline">Your Skills</CardTitle>
                <CardDescription>
                    These skills help clients find you.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                    </Badge>
                    ))}
                </div>
                 <Button variant="outline" className="w-full mt-4">Add/Edit Skills</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Micro-Lessons</CardTitle>
                  <CardDescription>Level-up with these quick 2-min lessons.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-muted/50">
                    <span>Client Negotiation 101</span>
                    <Badge variant="default">Start</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-muted/50">
                    <span>Intro to Data Labeling</span>
                    <Badge variant="default">Start</Badge>
                  </div>
                </CardContent>
              </Card>

            <div className="space-y-4">
              <h2 className="text-xl font-headline font-bold">
                AI Suggested Gigs
              </h2>
              <div className="space-y-4">
                {isPending ? (
                    <div className="flex items-center justify-center rounded-lg border border-dashed p-8">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                ) : (
                    suggestedGigs.slice(0, 1).map((gig) => (
                        <GigCard key={gig.id} gig={gig as any} />
                    ))
                )}
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}
