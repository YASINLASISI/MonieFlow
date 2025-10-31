import { GigCard } from '@/components/gigs/gig-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { gigs } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function GigsPage() {
  const recommendedGigs = gigs.filter((gig) => gig.category === 'Recommended');
  const skillLessGigs = gigs.filter((gig) => gig.category === 'Skill-less');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-3xl font-headline font-bold tracking-tight">Find Your Next Gig</h1>
          <p className="text-muted-foreground mt-1">
            Browse opportunities curated just for you by our FairMatch AI.
          </p>
        </div>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for gigs (e.g. 'logo design')" className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="recommended">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="skill-less">Skill-less</TabsTrigger>
          <TabsTrigger value="all">All Gigs</TabsTrigger>
        </TabsList>
        <TabsContent value="recommended" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {recommendedGigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="skill-less" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {skillLessGigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {gigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
