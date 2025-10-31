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
import { Lock } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SavingsGoal() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatedProgress =
      (financialData.savings / financialData.savingsGoal) * 100;
    setProgress(calculatedProgress);
  }, []);

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between font-mono text-lg">
          <span>₦{financialData.savings.toLocaleString()}</span>
          <span className="text-muted-foreground">
            / ₦{financialData.savingsGoal.toLocaleString()}
          </span>
        </div>
        <Progress value={progress} />
         <Button className="w-full">
            <Lock className="mr-2 h-4 w-4" />
            Auto-Route Savings
        </Button>
      </div>
    </>
  );
}
