'use client';

import { cn } from '@/lib/utils';
import { BroadcastIcon, BugIcon, UserIcon } from '@phosphor-icons/react';

interface Notification {
  id: string;
  title: string;
  datetime: string;
  icon: React.ReactNode;
  background: 'primary-blue' | 'primary-purple';
}

const notifications: Notification[] = [
  {
    id: '1',
    title: 'You have a bug that needs to be fixed',
    datetime: 'Just now',
    icon: <BugIcon size={16} />,
    background: 'primary-blue',
  },
  {
    id: '2',
    title: 'New user registered',
    datetime: '59 minutes ago',
    icon: <UserIcon size={16} />,
    background: 'primary-purple',
  },
  {
    id: '3',
    title: 'You have a bug that needs to be fixed',
    datetime: '12 hours ago',
    icon: <BugIcon size={16} />,
    background: 'primary-blue',
  },
  {
    id: '4',
    title: 'Andi Lane subscribed to you',
    datetime: 'Today, 11:59 AM',
    icon: <BroadcastIcon size={16} />,
    background: 'primary-purple',
  },
];

export const NotificationsSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold px-1 py-2">Notifications</h3>
      <div className="flex flex-col gap-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center gap-2 truncate p-1"
          >
            <div
              className={cn(
                'size-6 rounded-sm flex items-center justify-center shrink-0 text-black',
                notification.background === 'primary-blue'
                  ? 'bg-primary-blue'
                  : 'bg-primary-purple'
              )}
            >
              {notification.icon}
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-sm truncate">{notification.title}</p>
              <span className="text-xs text-primary/40">
                {notification.datetime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
