/* eslint-disable @next/next/no-img-element */

interface Contact {
  id: string;
  name: string;
  avatar: string;
}

const contacts: Contact[] = [
  {
    id: '1',
    name: 'Natali Craig',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=Natali&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    id: '2',
    name: 'Drew Cano',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=Drew&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    id: '3',
    name: 'Orlando Diggs',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=Orlando&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    id: '4',
    name: 'Andi LAne',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=Andi&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    id: '5',
    name: 'Kate Morrison',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=Kate&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    id: '6',
    name: 'Koray Okumus',
    avatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=Koray&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
];

export const ContactsSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold px-1 py-2">Contacts</h3>
      <div className="flex flex-col gap-2">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center gap-2 p-1">
            <img
              src={contact.avatar}
              alt={contact.name}
              width={24}
              height={24}
              className="size-6 rounded-full"
            />
            <p className="text-sm truncate">{contact.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
