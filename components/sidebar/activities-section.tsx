/* eslint-disable @next/next/no-img-element */
'use client';

interface Activity {
  id: string;
  description: string;
  datetime: string;
  avatar: string;
}

const activities: Activity[] = [
  {
    id: '1',
    description: 'You have a bug that needs...',
    datetime: 'Just now',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=bug1&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    id: '2',
    description: 'Released a new version',
    datetime: '59 minutes ago',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=release&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    id: '3',
    description: 'Submitted a bug',
    datetime: '12 hours ago',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=bug2&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    id: '4',
    description: 'Modified A data in Page X',
    datetime: 'Today, 11:59 AM',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=modify&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    id: '5',
    description: 'Deleted a page in Project X',
    datetime: 'Feb 2, 2023',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=delete&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
];

export const ActivitiesSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold px-1 py-2">Activities</h3>
      <div className="flex flex-col gap-2">
        {activities.map((activity, idx) => (
          <div key={activity.id} className="flex gap-2 relative p-1">
            <div className="flex flex-col items-center">
              <img
                src={activity.avatar}
                className="size-6 rounded-full"
                alt={activity.description}
              />
              {idx < activities.length - 1 && (
                <div className="w-px flex-1 bg-primary/10 translate-y-2" />
              )}
            </div>

            <div className="flex flex-col min-w-0">
              <p className="text-sm truncate">{activity.description}</p>
              <span className="text-xs text-primary/40">
                {activity.datetime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
