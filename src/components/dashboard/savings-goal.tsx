'use client';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { financialData } from '@/lib/data';
import { Lock, Plus, PiggyBank } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SavingsGoal() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Ensure goal is not zero to avoid division by zero
    if (financialData.savingsGoal > 0) {
        const calculatedProgress =
        (financialData.savings / financialData.savingsGoal) * 100;
        setProgress(calculatedProgress);
    }
  }, []);

  const formatCurrency = (amount: number) => `₦${amount.toLocaleString()}`;

  return (
    <div className="flex flex-col h-full">
        <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-md">
                    <PiggyBank className="h-6 w-6 text-primary" />
                </div>
                <div className="font-mono text-xl font-semibold">
                    {formatCurrency(financialData.savings)}
                </div>
            </div>
            
            <Progress value={progress} className="h-2" />
            
            <div className="flex justify-between text-xs text-muted-foreground font-mono">
                <span>Current Savings</span>
                <span>Goal: {formatCurrency(financialData.savingsGoal)}</span>
            </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <Button className="w-full">
                <Lock className="mr-2 h-4 w-4" />
                Auto-Save
            </Button>
            <Button variant="secondary" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Funds
            </Button>
        </div>
    </div>
  );
}
