'use server';
/**
 * @fileOverview Generates a draft proposal based on gig details.
 *
 * - generateProposalFromGigDetails - A function that generates a proposal.
 * - GenerateProposalInput - The input type for the generateProposalFromGigDetails function.
 * - GenerateProposalOutput - The return type for the generateProposalFromGigDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProposalInputSchema = z.object({
  gigTitle: z.string().describe('The title of the gig.'),
  gigDescription: z.string().describe('A detailed description of the gig.'),
  userSkills: z.array(z.string()).describe('An array of skills the user possesses.'),
  userName: z.string().describe('The name of the user.'),
});
export type GenerateProposalInput = z.infer<typeof GenerateProposalInputSchema>;

const GenerateProposalOutputSchema = z.object({
  proposal: z.string().describe('The generated proposal for the gig.'),
});
export type GenerateProposalOutput = z.infer<typeof GenerateProposalOutputSchema>;

export async function generateProposalFromGigDetails(
  input: GenerateProposalInput
): Promise<GenerateProposalOutput> {
  return generateProposalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProposalPrompt',
  input: {schema: GenerateProposalInputSchema},
  output: {schema: GenerateProposalOutputSchema},
  prompt: `You are an AI assistant helping users to quickly apply for gigs. Based on the gig details and the user's skills, generate a compelling proposal. The proposal should be concise and highlight the user's relevant skills and experience.

Gig Title: {{{gigTitle}}}
Gig Description: {{{gigDescription}}}
User Name: {{{userName}}}
User Skills:
{{#each userSkills}}
- {{{this}}}
{{/each}}

Proposal:`,
});

const generateProposalFlow = ai.defineFlow(
  {
    name: 'generateProposalFlow',
    inputSchema: GenerateProposalInputSchema,
    outputSchema: GenerateProposalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
