'use client';

import { summarizeFinancialData } from '@/ai/flows/summarize-financial-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { financialData } from '@/lib/data';
import { Sparkles, Loader2 } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';

export function FinancialSummary() {
  const [summary, setSummary] = useState('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const { summary: aiSummary } = await summarizeFinancialData({
        income: financialData.income,
        expenses: financialData.expenses,
        savings: financialData.savings,
      });
      setSummary(aiSummary);
    });
  }, []);

  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          AI Financial Insight
        </CardTitle>
        <Sparkles className="h-4 w-4 text-primary-foreground/80" />
      </CardHeader>
      <CardContent>
        {isPending ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm">Analyzing your data...</span>
          </div>
        ) : (
          <p className="text-sm">{summary}</p>
        )}
      </CardContent>
    </Card>
  );
}
