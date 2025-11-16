'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartData = [
  { month: 'January', projections: 17000000, actuals: 3000000 },
  { month: 'February', projections: 20000000, actuals: 5000000 },
  { month: 'March', projections: 17000000, actuals: 4000000 },
  { month: 'April', projections: 21000000, actuals: 6000000 },
  { month: 'May', projections: 15000000, actuals: 3000000 },
  { month: 'June', projections: 20000000, actuals: 4000000 },
];

const chartConfig = {
  projections: {
    label: 'Projections',
    color: 'var(--color-secondary-cyan)',
  },
  actuals: {
    label: 'Actuals',
    color: 'var(--color-secondary-cyan)',
  },
} satisfies ChartConfig;

export const ProjectionChart = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-sm font-semibold mb-4">Projections vs Actuals</h3>
      <ChartContainer config={chartConfig} className="w-full h-[180px]">
        <BarChart
          data={chartData}
          accessibilityLayer
          margin={{ left: -16, top: 16 }}
          barCategoryGap="30%"
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tickFormatter={(value) => {
              if (value >= 1000000) {
                return `${value / 1000000}M`;
              }
              return value.toString();
            }}
            ticks={[0, 10000000, 20000000, 30000000]}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                hideLabel
                formatter={(value) => {
                  const numValue = Number(value);
                  return `$${(numValue / 1000000).toFixed(1)}M`;
                }}
              />
            }
          />
          <Bar
            dataKey="projections"
            stackId="a"
            fill="var(--color-projections)"
            radius={[0, 0, 4, 4]}
          />
          <Bar
            dataKey="actuals"
            stackId="a"
            fill="var(--color-actuals)"
            opacity={0.5}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
