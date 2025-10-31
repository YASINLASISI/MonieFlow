import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Gig } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import { ProposalGenerator } from './proposal-generator';

interface GigCardProps {
  gig: Gig;
}

export function GigCard({ gig }: GigCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="font-headline text-lg leading-tight">
            {gig.title}
          </CardTitle>
          <div className="font-mono text-lg font-semibold text-primary whitespace-nowrap">
            ₦{gig.budget.toLocaleString()}
          </div>
        </div>
        {gig.isVerified && (
          <div className="flex items-center gap-1 text-xs text-green-600 font-medium pt-1">
            <CheckCircle className="h-3 w-3" />
            <span>Verified Client (Funds in Escrow)</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{gig.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        {gig.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {gig.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        )}
        <ProposalGenerator gig={gig} />
      </CardFooter>
    </Card>
  );
}
