import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Order } from '../../app/orders/data';

interface OrderPaginationProps {
  table: Table<Order>;
}

export const OrderPagination = ({ table }: OrderPaginationProps) => {
  return (
    <div className="flex items-center justify-end gap-2">
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <CaretLeftIcon className="h-4 w-4" />
        </Button>
        {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(
          (page) => (
            <Button
              key={page}
              variant={
                table.getState().pagination.pageIndex + 1 === page
                  ? 'secondary'
                  : 'ghost'
              }
              size="icon"
              onClick={() => table.setPageIndex(page - 1)}
            >
              {page}
            </Button>
          )
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <CaretRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
