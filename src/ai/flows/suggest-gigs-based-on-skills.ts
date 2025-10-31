'use server';

/**
 * @fileOverview This file defines a Genkit flow that suggests relevant gigs based on a user's listed skills.
 *
 * - suggestGigsBasedOnSkills - A function that takes a user's skills as input and returns a list of suggested gigs.
 * - SuggestGigsBasedOnSkillsInput - The input type for the suggestGigsBasedOnSkills function.
 * - SuggestedGig - The type representing a single suggested gig, including its title, description, and required skills.
 * - SuggestGigsBasedOnSkillsOutput - The output type for the suggestGigsBasedOnSkills function, which is an array of SuggestedGig objects.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestGigsBasedOnSkillsInputSchema = z.object({
  skills: z
    .array(z.string())
    .describe('An array of skills the user possesses.'),
});
export type SuggestGigsBasedOnSkillsInput = z.infer<
  typeof SuggestGigsBasedOnSkillsInputSchema
>;

const SuggestedGigSchema = z.object({
  title: z.string().describe('The title of the gig.'),
  description: z.string().describe('A brief description of the gig.'),
  requiredSkills: z
    .array(z.string())
    .describe('The skills required to perform the gig.'),
});
export type SuggestedGig = z.infer<typeof SuggestedGigSchema>;

const SuggestGigsBasedOnSkillsOutputSchema = z.array(
  SuggestedGigSchema
);
export type SuggestGigsBasedOnSkillsOutput = z.infer<
  typeof SuggestGigsBasedOnSkillsOutputSchema
>;

export async function suggestGigsBasedOnSkills(
  input: SuggestGigsBasedOnSkillsInput
): Promise<SuggestGigsBasedOnSkillsOutput> {
  return suggestGigsBasedOnSkillsFlow(input);
}

const suggestGigsPrompt = ai.definePrompt({
  name: 'suggestGigsPrompt',
  input: {schema: SuggestGigsBasedOnSkillsInputSchema},
  output: {schema: SuggestGigsBasedOnSkillsOutputSchema},
  prompt: `You are an AI assistant designed to suggest relevant gigs to users based on their skills.

  Given the following list of skills, suggest a list of gigs that the user would be well-suited for. Each gig should include a title, a brief description, and a list of required skills.

  Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Please provide the gigs in JSON format.
  `,
});

const suggestGigsBasedOnSkillsFlow = ai.defineFlow(
  {
    name: 'suggestGigsBasedOnSkillsFlow',
    inputSchema: SuggestGigsBasedOnSkillsInputSchema,
    outputSchema: SuggestGigsBasedOnSkillsOutputSchema,
  },
  async input => {
    const {output} = await suggestGigsPrompt(input);
    return output!;
  }
);
