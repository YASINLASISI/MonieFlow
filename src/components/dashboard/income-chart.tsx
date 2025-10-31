'use client';

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
      <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
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
            content={<ChartTooltipContent formatter={(value, name) => {
              const currency = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(Number(value));
              return (
                <div className="flex flex-col">
                  <span className='font-semibold'>{name}</span>
                  <span>{currency}</span>
                </div>
              )
            }} />}
          />
          <Bar dataKey="income" fill="var(--color-income)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
  );
}
