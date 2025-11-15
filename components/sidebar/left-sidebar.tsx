import { Sidebar, SidebarHeader } from '@/components/ui/sidebar';

export const LeftSidebar = () => {
  return (
    <Sidebar side="left" className="px-4 py-5">
      <SidebarHeader className="flex flex-row items-center gap-2">
        <img
          src="https://github.com/unnatibamania.png"
          alt="logo"
          width={24}
          height={24}
          className="rounded-full"
        />
        <h4 className="text-sm">ByeWind</h4>
      </SidebarHeader>
    </Sidebar>
  );
};
