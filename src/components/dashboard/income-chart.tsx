'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';
import { financialData } from '@/lib/data';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartConfig = {
  income: {
    label: 'Income',
    color: 'hsl(var(--chart-1))',
  },
  expenses: {
    label: 'Expenses',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function IncomeChart() {
  return (
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={financialData.incomeHistory}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis 
            tickFormatter={(value) => `₦${Number(value) / 1000}k`}
            tickLine={false}
            axisLine={false}
            width={40}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent formatter={(value) => `₦${Number(value).toLocaleString()}`} />}
          />
          <Bar dataKey="income" fill="var(--color-income)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
  );
}
