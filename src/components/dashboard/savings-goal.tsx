'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { financialData } from '@/lib/data';
import { useEffect, useState } from 'react';

export function SavingsGoal() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatedProgress =
      (financialData.savings / financialData.savingsGoal) * 100;
    setProgress(calculatedProgress);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Savings Goal</CardTitle>
        <CardDescription>
          You are on your way to reaching your savings target. Keep it up!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between font-mono text-lg">
          <span>${financialData.savings.toLocaleString()}</span>
          <span className="text-muted-foreground">
            / ${financialData.savingsGoal.toLocaleString()}
          </span>
        </div>
        <Progress value={progress} />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Auto-Save Settings</Button>
      </CardFooter>
    </Card>
  );
}
