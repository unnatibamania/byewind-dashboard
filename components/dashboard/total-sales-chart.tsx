'use client';

import { useMemo } from 'react';
import { Pie, PieChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { channel: 'direct', sales: 300.56, fill: 'var(--color-primary-brand)' },
  { channel: 'affiliate', sales: 135.18, fill: 'var(--color-secondary-mint)' },
  {
    channel: 'sponsored',
    sales: 154.02,
    fill: 'var(--color-secondary-indigo)',
  },
  { channel: 'email', sales: 48.96, fill: 'var(--color-secondary-blue)' },
];

const chartConfig = {
  sales: {
    label: 'Sales',
  },
  direct: {
    label: 'Direct',
  },
  affiliate: {
    label: 'Affiliate',
  },
  sponsored: {
    label: 'Sponsored',
  },
  email: {
    label: 'E-mail',
  },
} satisfies ChartConfig;

export const TotalSalesChart = () => {
  const totalSales = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0);
  }, []);

  return (
    <div className="h-full flex flex-col gap-4">
      <h3 className="text-sm font-semibold">Total Sales</h3>
      <div className="flex-1 flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-full"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value) => {
                    const percentage = ((value as number) / totalSales) * 100;
                    return `${percentage.toFixed(2)}%`;
                  }}
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="channel"
              innerRadius={30}
              strokeWidth={10}
            />
          </PieChart>
        </ChartContainer>
      </div>
      <div className="space-y-3">
        {chartData.map((item) => {
          const config = chartConfig[item.channel as keyof typeof chartConfig];
          return (
            <div
              key={item.channel}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: item.fill,
                  }}
                />
                <span className="text-xs">{config.label}</span>
              </div>
              <span className="text-xs">${item.sales.toFixed(2)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
