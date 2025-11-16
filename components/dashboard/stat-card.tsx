import NumberFlow from '@number-flow/react';

import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: number;
  delta: number;
  background: 'primary-blue' | 'primary-purple' | 'primary-light';
  format: 'number' | 'currency' | 'percentage';
}

export const StatCard = ({
  title,
  value,
  delta,
  background,
  format,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        'p-6 rounded-2xl flex flex-col gap-2',
        background === 'primary-blue' && 'bg-primary-blue',
        background === 'primary-purple' && 'bg-primary-purple',
        background === 'primary-light' && 'bg-primary-light',
        background === 'primary-light' ? 'text-primary' : 'text-black'
      )}
    >
      <h4 className="text-sm font-semibold">{title}</h4>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">
          <NumberFlow
            value={value}
            prefix={format === 'currency' ? '$' : ''}
            suffix={format === 'percentage' ? '%' : ''}
          />
        </p>
        <p className="text-sm text-muted-foreground">{delta}</p>
      </div>
    </div>
  );
};
