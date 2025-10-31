'use client';

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
import { Clipboard, Loader2, Bot, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface ProposalGeneratorProps {
  gig: Gig;
}

export function ProposalGenerator({ gig }: ProposalGeneratorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [proposal, setProposal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateProposal = () => {
    setProposal('');
    setIsLoading(true);
    // Simulate AI generation with a delay
    setTimeout(() => {
      const generatedProposal = `Dear Client,

I am writing to express my strong interest in the "${gig.title}" opportunity. With my experience in [Skill 1] and [Skill 2], I am confident I can deliver excellent results.

My background in ${user.skills.slice(0,2).join(', ')} makes me a great fit for this project. I am passionate about creating high-quality work and have a proven track record of success.

I am available to start immediately and can dedicate my full attention to ensuring this project is completed to your satisfaction.

Thank you for your time and consideration.

Best regards,
${user.name}`;
      setProposal(generatedProposal);
      setIsLoading(false);
    }, 1500);
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
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="w-full">
          <Sparkles className="mr-2 h-4 w-4" />
          AI Apply
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary"/>
            AI Generated Proposal
          </DialogTitle>
          <DialogDescription>
            Your AI Sidekick has drafted a proposal for &quot;{gig.title}&quot;. You can edit it below before submitting.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isLoading ? (
            <div className="flex min-h-[200px] items-center justify-center rounded-md border border-dashed">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p>Writing your proposal...</p>
              </div>
            </div>
          ) : (
            <Textarea
              className="min-h-[240px] font-code text-sm"
              value={proposal}
              onChange={(e) => setProposal(e.target.value)}
            />
          )}
        </div>
        <DialogFooter className="sm:justify-between">
            <Button variant="ghost" onClick={handleGenerateProposal} disabled={isLoading}>
                Regenerate
            </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCopy} disabled={isLoading || !proposal}>
              <Clipboard className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button disabled={isLoading || !proposal}>Submit Application</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
