'use client';

import { FinancialSummary } from '@/components/dashboard/financial-summary';
import { IncomeChart } from '@/components/dashboard/income-chart';
import { SavingsGoal } from '@/components/dashboard/savings-goal';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { user, financialData, gigs } from '@/lib/data';
import { BarChart, Bot, DollarSign, TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GigCard } from '@/components/gigs/gig-card';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  const brokeRiskDays = 3;
  const brokeRiskLevel = brokeRiskDays < 7 ? "High" : brokeRiskDays < 14 ? "Medium" : "Low";
  const brokeRiskColor = brokeRiskLevel === "High" ? "text-destructive" : brokeRiskLevel === "Medium" ? "text-yellow-500" : "text-green-500";

  const aiCuratedGigs = gigs.filter(gig => gig.category === 'AI-Curated').slice(0, 2);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-headline font-bold tracking-tight">
            Welcome back, {user.name.split(' ')[0]}!
          </h1>
          <p className="text-muted-foreground mt-1">
            Today is a new day to earn. Let's get it.
          </p>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-card border">
          <Bot className="h-6 w-6 text-primary flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">AI Sidekick:</span> You have 3 new gigs that match your skills. Let's make ₦5,000 today.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <FinancialSummary />
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Broke Risk</CardTitle>
            <AlertTriangle className={`h-4 w-4 ${brokeRiskColor}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${brokeRiskColor}`}>{brokeRiskLevel}</div>
            <p className="text-xs text-muted-foreground">
              Next risk day in {brokeRiskDays} days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Gig Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{financialData.avgGigValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gigs Completed</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{financialData.gigsCompleted}</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 p-6 border-b lg:border-b-0 lg:border-r">
            <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-2xl">AI Personal Economy</CardTitle>
                <CardDescription>
                    Your transport cost is eating 35% of this week’s earnings. Consider gigs closer to campus.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <IncomeChart />
            </CardContent>
          </div>
          <div className="p-6 bg-muted/30">
            <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-2xl">Savings Goal</CardTitle>
                <CardDescription>
                    Auto-route a portion of your earnings to a locked savings wallet.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <SavingsGoal />
            </CardContent>
          </div>
        </div>
      </Card>

      <div>
        <div className="flex items-center justify-between mb-4">
            <div>
                <h2 className="text-2xl font-headline font-bold">AI-Curated Gigs</h2>
                <p className="text-muted-foreground">Always have something to do. These micro-jobs are provided by MonieFlow partners.</p>
            </div>
            <Button variant="ghost" asChild>
                <Link href="/gigs">View all <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiCuratedGigs.map((gig) => (
                <GigCard key={gig.id} gig={gig} />
            ))}
        </div>
      </div>
    </div>
  );
}
