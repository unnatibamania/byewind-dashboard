import { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { CalendarBlankIcon, DotsThreeCircleIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Order } from '../../app/orders/data';
import { StatusBadge } from './status-badge';
import { formatDate } from '../../app/orders/utils/date-utils';

interface GetColumnsProps {
  onDelete: (id: string) => void;
}

const ActionsMenu = ({
  order,
  onDelete,
}: {
  order: Order;
  onDelete: (id: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`}
    >
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsThreeCircleIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(order.id)}
          >
            Copy order ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive"
            onClick={() => onDelete(order.id)}
          >
            Delete order
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const getColumns = ({
  onDelete,
}: GetColumnsProps): ColumnDef<Order>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <div
        className={`transition-opacity ${
          row.getIsSelected()
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'Order ID',
    cell: ({ row }) => <div className="font-medium">#{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'user',
    header: 'User',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={row.original.userAvatar}
          alt={row.getValue('user')}
          className="w-8 h-8 rounded-full"
        />
        <span>{row.getValue('user')}</span>
      </div>
    ),
  },
  {
    accessorKey: 'project',
    header: 'Project',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <CalendarBlankIcon className="h-4 w-4" />
        <span>{formatDate(row.getValue('date'))}</span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <StatusBadge status={row.getValue('status')} />,
    filterFn: (row, id, value) => {
      if (value === 'all') return true;
      return row.getValue(id) === value;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return <ActionsMenu order={row.original} onDelete={onDelete} />;
    },
  },
];
