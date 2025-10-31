import { FinancialSummary } from '@/components/dashboard/financial-summary';
import { IncomeChart } from '@/components/dashboard/income-chart';
import { SavingsGoal } from '@/components/dashboard/savings-goal';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { user, financialData } from '@/lib/data';
import { BarChart, Bot, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  const brokeRiskDays = 3;
  const brokeRiskLevel = brokeRiskDays < 7 ? "High" : brokeRiskDays < 14 ? "Medium" : "Low";
  const brokeRiskColor = brokeRiskLevel === "High" ? "text-destructive" : brokeRiskLevel === "Medium" ? "text-yellow-500" : "text-green-500";


  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-headline font-bold">
            Welcome back, {user.name.split(' ')[0]}!
          </h1>
          <p className="text-muted-foreground">
            Today is a new day to earn. Let's get it.
          </p>
        </div>
         <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground max-w-xs">
              <span className="font-semibold text-foreground">AI Sidekick:</span> You have 3 new gigs that match your skills. Let's make N5,000 today.
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
      
      <Card>
        <CardHeader>
            <CardTitle className="font-headline">AI Personal Economy</CardTitle>
            <CardDescription>
                Your transport cost is eating 35% of this week’s earnings. Consider gigs closer to campus.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <IncomeChart />
                </div>
                <div>
                    <SavingsGoal />
                </div>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle className="font-headline">AI-Curated Gigs</CardTitle>
            <CardDescription>
                Always have something to do. These micro-jobs are provided by MonieFlow partners.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-4 rounded-lg border bg-card hover:bg-muted/50">
                <div>
                    <h3 className="font-semibold">Data Labeling Task</h3>
                    <p className="text-sm text-muted-foreground">Label 50 images for an AI model.</p>
                </div>
                <div className="text-right">
                    <p className="font-semibold text-primary">₦1,500</p>
                    <p className="text-xs text-muted-foreground">Approx. 30 mins</p>
                </div>
            </div>
             <div className="flex justify-between items-center p-4 rounded-lg border bg-card hover:bg-muted/50">
                <div>
                    <h3 className="font-semibold">Product Review</h3>
                    <p className="text-sm text-muted-foreground">Write a short review for a new app.</p>
                </div>
                 <div className="text-right">
                    <p className="font-semibold text-primary">₦500</p>
                    <p className="text-xs text-muted-foreground">Approx. 10 mins</p>
                </div>
            </div>
            <Button variant="outline" className="w-full">
                <Link href="/gigs">View All Available Gigs</Link>
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
