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
import { useSidebar } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/theme-toggle';

export const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex justify-between items-center p-5 md:px-7 md:py-5 border-b border-border">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          title="Toggle left sidebar"
          onClick={() => toggleSidebar('left')}
        >
          <SidebarIcon size={20} weight="duotone" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          title="Favorite"
          className="hidden md:flex"
        >
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
        <Input
          placeholder="Search"
          className="bg-primary/5 border-none hidden md:block"
        />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            title="Refresh"
            className="hidden md:flex"
          >
            <ClockCounterClockwiseIcon size={20} weight="duotone" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="Notifications"
            className="hidden md:flex"
          >
            <BellIcon size={40} weight="duotone" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="Toggle right sidebar"
            onClick={() => toggleSidebar('right')}
          >
            <SidebarIcon size={20} weight="duotone" />
          </Button>
        </div>
      </div>
    </header>
  );
};
