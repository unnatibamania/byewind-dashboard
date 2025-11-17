/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import {
  BookOpenIcon,
  ChartPieSliceIcon,
  FolderIcon,
  ShoppingBagOpenIcon,
  Icon,
  IdentificationCardIcon,
  IdentificationBadgeIcon,
  UsersThreeIcon,
  NotebookIcon,
  ChatsCircleIcon,
  CaretDownIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";

type NavItem = {
  label: string;
  icon: Icon;
  isActive?: boolean;
  hideCaret?: boolean;
  children?: {
    label: string;
    isActive?: boolean;
  }[];
};

const dashboardItems: NavItem[] = [
  {
    label: "Default",
    icon: ChartPieSliceIcon,
    isActive: true,
    hideCaret: true,
  },
  { label: "eCommerce", icon: ShoppingBagOpenIcon },
  { label: "Projects", icon: FolderIcon },
  { label: "Online Courses", icon: BookOpenIcon },
];

const pageItems: NavItem[] = [
  {
    label: "User Profile",
    icon: IdentificationBadgeIcon,
    children: [
      { label: "Overview" },
      { label: "Projects" },
      { label: "Campaigns" },
      { label: "Documents" },
      { label: "Followers" },
    ],
  },
  { label: "Account", icon: IdentificationCardIcon },
  { label: "Corporate", icon: UsersThreeIcon },
  { label: "Blog", icon: NotebookIcon },
  { label: "Social", icon: ChatsCircleIcon },
];

const NavSection = ({ title, items }: { title: string; items: NavItem[] }) => {
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="px-3 py-1 font-normal text-sm">
        {title}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isSubmenuOpen = openSubmenus.has(item.label);
          const hasChildren = !!item.children;

          return (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                isActive={item.isActive}
                onClick={() => hasChildren && toggleSubmenu(item.label)}
              >
                {hasChildren ? (
                  isSubmenuOpen ? (
                    <CaretDownIcon
                      className={cn(
                        "text-primary/20",
                        item.hideCaret && "opacity-0"
                      )}
                    />
                  ) : (
                    <CaretRightIcon
                      className={cn(
                        "text-primary/20",
                        item.hideCaret && "opacity-0"
                      )}
                    />
                  )
                ) : (
                  <CaretRightIcon
                    className={cn(
                      "text-primary/20",
                      item.hideCaret && "opacity-0"
                    )}
                  />
                )}
                <item.icon weight="duotone" />
                <span>{item.label}</span>
              </SidebarMenuButton>
              {hasChildren && isSubmenuOpen && item.children ? (
                <SidebarMenuSub>
                  {item.children.map((child) => (
                    <SidebarMenuSubItem key={child.label}>
                      <SidebarMenuSubButton isActive={child.isActive}>
                        <span>{child.label}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              ) : null}
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export const LeftSidebar = () => {
  return (
    <Sidebar side="left" className="px-3 py-5">
      <SidebarHeader className="flex flex-row items-center gap-2 px-2 mb-4">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg?seed=UnnatiBamania&backgroundColor=b6e3f4"
          alt="logo"
          width={24}
          height={24}
          className="rounded-full"
        />
        <h4 className="text-sm">ByeWind</h4>
      </SidebarHeader>
      <SidebarContent className="gap-6 px-2">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="font-normal text-primary/40"
            >
              Favorites
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="font-normal text-primary/20"
            >
              Recents
            </Button>
          </div>
          <Item label="Overview" />
          <Item label="Projects" />
        </div>
        <NavSection title="Dashboards" items={dashboardItems} />
        <NavSection title="Pages" items={pageItems} />
      </SidebarContent>
    </Sidebar>
  );
};

const Item = ({ label }: { label: string }) => {
  return (
    <div className="px-2 py-1 flex items-center gap-1">
      <div className="size-4 flex items-center justify-center">
        <div className="bg-primary/20 rounded-full size-1.5"></div>
      </div>
      <p>{label}</p>
    </div>
  );
};
