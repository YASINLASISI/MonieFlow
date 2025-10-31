'use client';

import { generateProposalFromGigDetails } from '@/ai/flows/generate-proposal-from-gig-details';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Gig, user } from '@/lib/data';
import { Clipboard, Loader2, Zap } from 'lucide-react';
import { useState, useTransition } from 'react';

interface ProposalGeneratorProps {
  gig: Gig;
}

export function ProposalGenerator({ gig }: ProposalGeneratorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [proposal, setProposal] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGenerateProposal = () => {
    startTransition(async () => {
      const result = await generateProposalFromGigDetails({
        gigTitle: gig.title,
        gigDescription: gig.description,
        userName: user.name,
        userSkills: user.skills,
      });
      setProposal(result.proposal);
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(proposal);
    toast({
      title: 'Copied to clipboard!',
      description: 'The proposal has been copied to your clipboard.',
    });
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (open) {
          handleGenerateProposal();
        } else {
          setProposal('');
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="w-full">
          <Zap className="mr-2 h-4 w-4" />
          AI Apply
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline">
            AI Generated Proposal
          </DialogTitle>
          <DialogDescription>
            Here is a draft proposal for &quot;{gig.title}&quot;. You can edit it below
            before submitting.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isPending ? (
            <div className="flex min-h-[200px] items-center justify-center rounded-md border border-dashed">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p>Generating your proposal...</p>
              </div>
            </div>
          ) : (
            <Textarea
              className="min-h-[200px] font-code text-sm"
              value={proposal}
              onChange={(e) => setProposal(e.target.value)}
            />
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleCopy} disabled={isPending}>
            <Clipboard className="mr-2 h-4 w-4" />
            Copy
          </Button>
          <Button disabled={isPending}>Submit Application</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
