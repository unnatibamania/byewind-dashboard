'use client';

import { useState } from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { orders as initialOrders, Order } from './data';
import { getColumns } from '../../components/orders-list/order-columns';
import { OrderToolbar } from '../../components/orders-list/order-toolbar';
import { OrderTable } from '../../components/orders-list/order-table';
import { OrderPagination } from '../../components/orders-list/order-pagination';

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleDeleteOrder = (id: string) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  const handleStatusFilter = (value: string) => {
    setStatusFilter(value);
    if (value === 'all') {
      table.getColumn('status')?.setFilterValue(undefined);
    } else {
      table.getColumn('status')?.setFilterValue(value);
    }
  };

  const handleSort = (column: string) => {
    const col = table.getColumn(column);
    if (col) {
      col.toggleSorting(col.getIsSorted() === 'asc');
    }
  };

  const columns = getColumns({ onDelete: handleDeleteOrder });

  const table = useReactTable({
    data: orders,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-sm font-semibold px-2 py-1">Order List</h1>
      <div className="flex flex-col gap-3">
        <OrderToolbar
          table={table}
          statusFilter={statusFilter}
          onStatusFilterChange={handleStatusFilter}
          onSort={handleSort}
          orders={orders}
          setOrders={setOrders}
        />
        <OrderTable table={table} />
        <OrderPagination table={table} />
      </div>
    </div>
  );
}
