import { Order } from '../../app/orders/data';

interface StatusBadgeProps {
  status: Order['status'];
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const colors = {
    'In Progress': {
      bg: 'bg-secondary-indigo',
      text: 'text-[#8A8CD9]',
    },
    Complete: {
      bg: 'bg-secondary-green',
      text: 'text-[#4AA785]',
    },
    Pending: {
      bg: 'bg-secondary-blue',
      text: 'text-[#3B82F6]',
    },
    Approved: {
      bg: 'bg-secondary-yellow',
      text: 'text-[#FFC555]',
    },
    Rejected: {
      bg: 'bg-primary/40',
      text: 'text-primary/40',
    },
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${colors[status].bg}`} />
      <span className={`${colors[status].text}`}>{status}</span>
    </div>
  );
};
