import { suggestGigsBasedOnSkills } from '@/ai/flows/suggest-gigs-based-on-skills';
import { GigCard } from '@/components/gigs/gig-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { gigs, user } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

export default async function ProfilePage() {
  const suggestedGigs = await suggestGigsBasedOnSkills({ skills: user.skills });

  // For UI purposes, we'll map the AI response to our existing GigCard component structure
  const mappedGigs = suggestedGigs.map((g, i) => ({
    id: `suggested-${i}`,
    title: g.title,
    description: g.description,
    budget: Math.floor(Math.random() * (1000 - 200 + 1) + 200), // Random budget
    skills: g.requiredSkills,
    isVerified: true,
    category: 'Recommended' as const,
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row">
        <Avatar className="h-24 w-24 border">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback className="text-3xl">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-3xl font-headline font-bold">{user.name}</h1>
          <p className="text-muted-foreground">{user.email}</p>
          {user.isVerified && (
            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span>Identity & BVN Verified (ZBD Trust Layer)</span>
            </div>
          )}
        </div>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Your Skills</CardTitle>
          <CardDescription>
            These skills are used to recommend gigs for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill) => (
              <Badge key={skill} variant="default" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4 pt-4">
        <h2 className="text-2xl font-headline font-bold">
          Gigs Suggested by AI
        </h2>
        <p className="text-muted-foreground">
          Based on your skills, you might be a great fit for these roles.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mappedGigs.slice(0, 3).map((gig) => (
            <GigCard key={gig.id} gig={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}
