import { Table } from '@tanstack/react-table';
import { FunnelSimpleIcon, ArrowsDownUpIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Order } from '../../app/orders/data';
import { AddOrderDialog } from '@/components/orders-list/add-order-dialog';
import { useState } from 'react';

interface OrderToolbarProps {
  table: Table<Order>;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
  onSort: (column: string) => void;
  orders: Order[];
  setOrders: (orders: Order[]) => void;
}

export const OrderToolbar = ({
  table,
  statusFilter,
  onStatusFilterChange,
  onSort,
  orders,
  setOrders,
}: OrderToolbarProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddOrder = (data: Omit<Order, 'id' | 'date' | 'userAvatar'>) => {
    const newOrder: Order = {
      id: `CM${9800 + orders.length + 1}`,
      user: data.user,
      userAvatar: `https://api.dicebear.com/9.x/notionists/svg?seed=${data.user
        .replace(/\s+/g, '-')
        .toLowerCase()}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
      project: data.project,
      address: data.address,
      date: new Date(),
      status: data.status,
    };
    setOrders([newOrder, ...orders]);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex w-full items-center justify-between gap-8 bg-primary-light p-2 rounded-lg">
      <div className="flex items-center gap-2">
        <AddOrderDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSubmit={handleAddOrder}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="hover:bg-primary/5">
              <FunnelSimpleIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={statusFilter}
              onValueChange={onStatusFilterChange}
            >
              <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="In Progress">
                In Progress
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Complete">
                Complete
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Pending">
                Pending
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Approved">
                Approved
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Rejected">
                Rejected
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="hover:bg-primary/5">
              <ArrowsDownUpIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onSort('user')}>
              User (A-Z)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSort('date')}>
              Date (Newest first)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSort('project')}>
              Project (A-Z)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSort('status')}>
              Status
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Input
        placeholder="Search"
        value={(table.getColumn('user')?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn('user')?.setFilterValue(event.target.value)
        }
        className="bg-background/40 dark:bg-[#1C1C1C66] border border-primary/10 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 w-48"
      />
    </div>
  );
};
