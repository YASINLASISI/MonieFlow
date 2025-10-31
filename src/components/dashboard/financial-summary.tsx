'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FinancialSummary() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate AI analysis with a delay
    const timer = setTimeout(() => {
      setSummary(
        'Your spending on transport is higher than average this month. Consider looking for gigs closer to your location.'
      );
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
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
        {isLoading ? (
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
