'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Separator } from '@/components/ui/separator';
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ReferenceLine,
} from 'recharts';

const chartData = [
  {
    month: 'January',
    currentWeek: 8000000,
    currentWeekDashed: null,
    previousWeek: 14000000,
  },
  {
    month: 'February',
    currentWeek: 17000000,
    currentWeekDashed: null,
    previousWeek: 10000000,
  },
  {
    month: 'March',
    currentWeek: 12000000,
    currentWeekDashed: null,
    previousWeek: 8000000,
  },
  {
    month: 'April',
    currentWeek: 10000000,
    currentWeekDashed: 10000000,
    previousWeek: 15000000,
  },
  {
    month: 'May',
    currentWeek: null,
    currentWeekDashed: 15000000,
    previousWeek: 18000000,
  },
  {
    month: 'June',
    currentWeek: null,
    currentWeekDashed: 24000000,
    previousWeek: 20000000,
  },
];

const chartConfig = {
  currentWeek: {
    label: 'Current Week',
    color: 'var(--color-primary-brand)',
  },
  currentWeekDashed: {
    label: 'Current Week',
    color: 'var(--color-primary-brand)',
  },
  previousWeek: {
    label: 'Previous Week',
    color: 'var(--color-secondary-cyan)',
  },
} satisfies ChartConfig;

export const RevenueChart = () => {
  const currentWeekTotal = 24000000;
  const previousWeekTotal = 20000000;

  return (
    <div className="h-full flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-semibold">Revenue</h3>
        <Separator orientation="vertical" className="hidden xl:block" />
        <div className="flex flex-col xl:flex-row">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-brand" />
            <span className="text-muted-foreground text-sm">Current Week</span>
            <span className="font-semibold text-sm">
              ${(currentWeekTotal / 1000).toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary-cyan" />
            <span className="text-muted-foreground text-sm">Previous Week</span>
            <span className="font-semibold text-sm">
              ${(previousWeekTotal / 1000).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="w-xs md:w-full h-[240px]">
        <LineChart
          data={chartData}
          accessibilityLayer
          margin={{
            left: -16,
            top: 16,
          }}
        >
          <CartesianGrid vertical={false} horizontal={true} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={12}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={12}
            tickFormatter={(value) => {
              if (value >= 1000000) {
                return `${value / 1000000}M`;
              }
              return value.toString();
            }}
            ticks={[0, 10000000, 20000000, 30000000]}
          />
          <ReferenceLine y={0} stroke="hsl(var(--border))" />
          <ReferenceLine y={10000000} stroke="hsl(var(--border))" />
          <ReferenceLine y={20000000} stroke="hsl(var(--border))" />
          <ReferenceLine y={30000000} stroke="hsl(var(--border))" />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                formatter={(value) => {
                  const numValue = Number(value);
                  return `$${(numValue / 1000).toLocaleString()}`;
                }}
              />
            }
          />
          <Line
            dataKey="currentWeek"
            type="natural"
            stroke="var(--color-currentWeek)"
            strokeWidth={3}
            dot={false}
            connectNulls={false}
          />
          <Line
            dataKey="currentWeekDashed"
            type="natural"
            stroke="var(--color-currentWeekDashed)"
            strokeWidth={3}
            dot={false}
            strokeDasharray="8 8"
            connectNulls={false}
          />
          <Line
            dataKey="previousWeek"
            type="natural"
            stroke="var(--color-previousWeek)"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};
