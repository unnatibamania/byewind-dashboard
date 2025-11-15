import { ActivitiesSection } from '@/components/sidebar/activities-section';
import { ContactsSection } from '@/components/sidebar/contacts-section';
import { NotificationsSection } from '@/components/sidebar/notifications-section';
import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar';

export const RightSidebar = () => {
  return (
    <Sidebar side="right" className="p-5">
      <SidebarContent className="gap-6">
        <SidebarGroup>
          <NotificationsSection />
        </SidebarGroup>
        <SidebarGroup>
          <ActivitiesSection />
        </SidebarGroup>
        <SidebarGroup>
          <ContactsSection />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
