import { GigCard } from '@/components/gigs/gig-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { gigs } from '@/lib/data';

export default function GigsPage() {
  const recommendedGigs = gigs.filter((gig) => gig.category === 'Recommended');
  const skillLessGigs = gigs.filter((gig) => gig.category === 'Skill-less');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-headline font-bold">Find Your Next Gig</h1>
        <p className="text-muted-foreground">
          Browse opportunities curated just for you.
        </p>
      </div>

      <Tabs defaultValue="recommended">
        <TabsList>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="skill-less">Skill-less</TabsTrigger>
          <TabsTrigger value="all">All Gigs</TabsTrigger>
        </TabsList>
        <TabsContent value="recommended" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {recommendedGigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="skill-less" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillLessGigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
