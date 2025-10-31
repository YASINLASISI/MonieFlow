'use server';
/**
 * @fileOverview Summarizes financial data (income, expenses, savings) to provide a quick financial status overview.
 *
 * - summarizeFinancialData - A function that handles the summarization of financial data.
 * - FinancialDataInput - The input type for the summarizeFinancialData function.
 * - FinancialDataOutput - The return type for the summarizeFinancialData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialDataInputSchema = z.object({
  income: z.number().describe('Total income.'),
  expenses: z.number().describe('Total expenses.'),
  savings: z.number().describe('Total savings.'),
});
export type FinancialDataInput = z.infer<typeof FinancialDataInputSchema>;

const FinancialDataOutputSchema = z.object({
  summary: z.string().describe('A summary of the financial data.'),
});
export type FinancialDataOutput = z.infer<typeof FinancialDataOutputSchema>;

export async function summarizeFinancialData(input: FinancialDataInput): Promise<FinancialDataOutput> {
  return summarizeFinancialDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeFinancialDataPrompt',
  input: {schema: FinancialDataInputSchema},
  output: {schema: FinancialDataOutputSchema},
  prompt: `Summarize the following financial data to provide a quick overview of the user's financial status.\n\nIncome: {{{income}}}\nExpenses: {{{expenses}}}\nSavings: {{{savings}}}`,
});

const summarizeFinancialDataFlow = ai.defineFlow(
  {
    name: 'summarizeFinancialDataFlow',
    inputSchema: FinancialDataInputSchema,
    outputSchema: FinancialDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
