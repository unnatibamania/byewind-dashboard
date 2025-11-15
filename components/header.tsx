'use client';

import {
  BellIcon,
  SidebarIcon,
  StarIcon,
  ClockCounterClockwiseIcon,
} from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Input } from '@/components/ui/input';

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-7 py-5 border-b border-border">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" title="Toggle left sidebar">
          <SidebarIcon size={20} weight="duotone" />
        </Button>
        <Button variant="ghost" size="icon" title="Favorite">
          <StarIcon size={20} weight="duotone" />
        </Button>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboards</BreadcrumbLink>
              <BreadcrumbSeparator className="mx-1">/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Default</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-5">
        <Input placeholder="Search" className="bg-primary/5 border-none" />
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" title="Refresh">
            <ClockCounterClockwiseIcon size={20} weight="duotone" />
          </Button>
          <Button variant="ghost" size="icon" title="Notifications">
            <BellIcon size={40} weight="duotone" />
          </Button>
          <Button variant="ghost" size="icon" title="Toggle right sidebar">
            <SidebarIcon size={20} weight="duotone" />
          </Button>
        </div>
      </div>
    </header>
  );
};
