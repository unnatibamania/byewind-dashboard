export type Order = {
  id: string;
  user: string;
  userAvatar: string;
  project: string;
  address: string;
  date: Date;
  status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
};

export const orders: Order[] = [
  {
    id: 'CM9801',
    user: 'Demi Wilkinson',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=demi-wilkinson&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Landing Page',
    address: 'Broadway Manhattan',
    date: new Date('2025-11-16T11:58:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9802',
    user: 'Andi Lane',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=andi-lane&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Customer Portal',
    address: 'Meadow Lane Oakland',
    date: new Date('2025-11-16T10:15:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9803',
    user: 'Harper Collins',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=harper-collins&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'App Landing Page',
    address: 'Ocean Drive Miami',
    date: new Date('2025-11-16T10:38:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9804',
    user: 'Alicia Davis',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=alicia-davis&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Blog Platform',
    address: 'Ocean Drive Miami',
    date: new Date('2025-11-16T10:17:00.000Z'),
    status: 'Rejected',
  },
  {
    id: 'CM9805',
    user: 'Phoenix Baker',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=phoenix-baker&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Admin Dashboard',
    address: 'King Street Charleston',
    date: new Date('2025-11-16T09:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9806',
    user: 'Koray Okumus',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=koray-okumus&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Inventory Management',
    address: 'Canal Street New Orleans',
    date: new Date('2025-11-15T14:00:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9807',
    user: 'Erin Lane',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=erin-lane&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Database Migration',
    address: 'Market Street Philadelphia',
    date: new Date('2025-11-15T15:00:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9808',
    user: 'Maxwell Harrison',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=maxwell-harrison&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Social Media App',
    address: 'Market Street Philadelphia',
    date: new Date('2025-11-16T10:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9809',
    user: 'Koray Okumus',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=koray-okumus&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'E-commerce Website',
    address: 'Broadway Manhattan',
    date: new Date('2025-11-16T07:00:00.000Z'),
    status: 'Pending',
  },
  {
    id: 'CM9810',
    user: 'Bella Thompson',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=bella-thompson&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Booking System',
    address: 'Canal Street New Orleans',
    date: new Date('2025-11-16T09:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9811',
    user: 'Dakota Reed',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=dakota-reed&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Booking System',
    address: 'Park Avenue New York',
    date: new Date('2025-11-15T16:00:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9812',
    user: 'Harper Collins',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=harper-collins&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'CRM Admin pages',
    address: 'Bay Street San Diego',
    date: new Date('2025-11-16T08:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9813',
    user: 'Kate Morrison',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=kate-morrison&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Analytics Dashboard',
    address: 'Congress Avenue Austin',
    date: new Date('2025-11-15T13:00:00.000Z'),
    status: 'Rejected',
  },
  {
    id: 'CM9814',
    user: 'Kate Morrison',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=kate-morrison&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Customer Portal',
    address: 'Washburn Baton Rouge',
    date: new Date('2025-11-16T11:00:00.000Z'),
    status: 'Rejected',
  },
  {
    id: 'CM9815',
    user: 'Erin Lane',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=erin-lane&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'E-commerce Website',
    address: 'Washburn Baton Rouge',
    date: new Date('2025-11-15T16:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9816',
    user: 'Marcus Bergson',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=marcus-bergson&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Database Migration',
    address: 'Hill Avenue Portland',
    date: new Date('2025-11-11T12:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9817',
    user: 'Kate Morrison',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=kate-morrison&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Database Migration',
    address: 'Nest Lane Olivette',
    date: new Date('2025-11-11T12:00:00.000Z'),
    status: 'Pending',
  },
  {
    id: 'CM9818',
    user: 'Orlando Diggs',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=orlando-diggs&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Marketing Campaign',
    address: 'Park Avenue New York',
    date: new Date('2025-11-13T12:00:00.000Z'),
    status: 'Rejected',
  },
  {
    id: 'CM9819',
    user: 'Lana Steiner',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=lana-steiner&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Customer Portal',
    address: 'Ocean Drive Miami',
    date: new Date('2025-11-15T12:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9820',
    user: 'Harper Collins',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=harper-collins&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'App Landing Page',
    address: 'Canal Street New Orleans',
    date: new Date('2025-11-10T12:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9821',
    user: 'Demi Wilkinson',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=demi-wilkinson&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Database Migration',
    address: 'Ocean Drive Miami',
    date: new Date('2025-11-10T12:00:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9822',
    user: 'Marcus Bergson',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=marcus-bergson&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Landing Page',
    address: 'Broadway Manhattan',
    date: new Date('2025-11-11T12:00:00.000Z'),
    status: 'Pending',
  },
  {
    id: 'CM9823',
    user: 'Kate Morrison',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=kate-morrison&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Email Template',
    address: 'Sunset Boulevard Los Angeles',
    date: new Date('2025-11-11T12:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9824',
    user: 'Demi Wilkinson',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=demi-wilkinson&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Analytics Dashboard',
    address: 'Congress Avenue Austin',
    date: new Date('2025-11-14T12:00:00.000Z'),
    status: 'Pending',
  },
  {
    id: 'CM9825',
    user: 'Andi Lane',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=andi-lane&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Database Migration',
    address: 'State Street Chicago',
    date: new Date('2025-11-15T12:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9826',
    user: 'Koray Okumus',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=koray-okumus&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Analytics Dashboard',
    address: 'Main Street Seattle',
    date: new Date('2025-11-14T12:00:00.000Z'),
    status: 'Pending',
  },
  {
    id: 'CM9827',
    user: 'Phoenix Baker',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=phoenix-baker&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Database Migration',
    address: 'Meadow Lane Oakland',
    date: new Date('2025-11-10T12:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9828',
    user: 'Candice Wu',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=candice-wu&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Payment Gateway',
    address: 'Main Street Seattle',
    date: new Date('2025-11-11T12:00:00.000Z'),
    status: 'Rejected',
  },
  {
    id: 'CM9829',
    user: 'Demi Wilkinson',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=demi-wilkinson&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Marketing Campaign',
    address: 'Larry San Francisco',
    date: new Date('2025-11-12T12:00:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9830',
    user: 'Drew Cano',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=drew-cano&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Security Audit',
    address: 'Canal Street New Orleans',
    date: new Date('2025-11-13T12:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9831',
    user: 'Phoenix Baker',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=phoenix-baker&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Database Migration',
    address: 'Church Street Nashville',
    date: new Date('2025-10-29T12:00:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9832',
    user: 'Alicia Davis',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=alicia-davis&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Payment Gateway',
    address: 'Park Avenue New York',
    date: new Date('2025-10-21T12:00:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9833',
    user: 'Skylar Martinez',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=skylar-martinez&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'API Integration',
    address: 'Ocean Drive Miami',
    date: new Date('2025-11-01T12:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9834',
    user: 'Luna Rodriguez',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=luna-rodriguez&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Client Project',
    address: 'Church Street Nashville',
    date: new Date('2025-10-28T12:00:00.000Z'),
    status: 'Pending',
  },
  {
    id: 'CM9835',
    user: 'Dakota Reed',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=dakota-reed&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Email Template',
    address: 'Park Avenue New York',
    date: new Date('2025-11-08T12:00:00.000Z'),
    status: 'Pending',
  },
  {
    id: 'CM9836',
    user: 'Cameron White',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=cameron-white&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Customer Portal',
    address: 'Pearl Street Boulder',
    date: new Date('2025-10-26T12:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9837',
    user: 'Koray Okumus',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=koray-okumus&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Mobile App UI',
    address: 'Canal Street New Orleans',
    date: new Date('2025-10-18T12:00:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9838',
    user: 'Drew Cano',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=drew-cano&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Booking System',
    address: 'Meadow Lane Oakland',
    date: new Date('2025-11-02T12:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9839',
    user: 'Kate Morrison',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=kate-morrison&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Payment Gateway',
    address: 'Main Street Seattle',
    date: new Date('2025-11-03T12:00:00.000Z'),
    status: 'Pending',
  },
  {
    id: 'CM9840',
    user: 'Alicia Davis',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=alicia-davis&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Payment Gateway',
    address: 'Washburn Baton Rouge',
    date: new Date('2025-10-21T12:00:00.000Z'),
    status: 'Rejected',
  },
  {
    id: 'CM9841',
    user: 'Dakota Reed',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=dakota-reed&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'App Landing Page',
    address: 'State Street Chicago',
    date: new Date('2025-10-24T12:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9842',
    user: 'Candice Wu',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=candice-wu&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Blog Platform',
    address: 'Pearl Street Boulder',
    date: new Date('2025-10-30T12:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9843',
    user: 'Bella Thompson',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=bella-thompson&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Marketing Campaign',
    address: 'Congress Avenue Austin',
    date: new Date('2025-11-04T12:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9844',
    user: 'Harper Collins',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=harper-collins&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Booking System',
    address: 'Washburn Baton Rouge',
    date: new Date('2025-11-02T12:00:00.000Z'),
    status: 'Rejected',
  },
  {
    id: 'CM9845',
    user: 'Koray Okumus',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=koray-okumus&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Social Media App',
    address: 'State Street Chicago',
    date: new Date('2025-11-05T12:00:00.000Z'),
    status: 'Rejected',
  },
  {
    id: 'CM9846',
    user: 'Kate Morrison',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=kate-morrison&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Portfolio Website',
    address: 'Washburn Baton Rouge',
    date: new Date('2025-08-18T12:00:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9847',
    user: 'Natali Craig',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=natali-craig&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Database Migration',
    address: 'Church Street Nashville',
    date: new Date('2025-08-10T12:00:00.000Z'),
    status: 'In Progress',
  },
  {
    id: 'CM9848',
    user: 'Candice Wu',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=candice-wu&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Email Template',
    address: 'Nest Lane Olivette',
    date: new Date('2025-04-14T12:00:00.000Z'),
    status: 'Rejected',
  },
  {
    id: 'CM9849',
    user: 'Candice Wu',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=candice-wu&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Client Project',
    address: 'Church Street Nashville',
    date: new Date('2025-01-01T12:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9850',
    user: 'Luna Rodriguez',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=luna-rodriguez&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Admin Dashboard',
    address: 'Main Street Seattle',
    date: new Date('2025-04-29T12:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9851',
    user: 'Andi Lane',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=andi-lane&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Blog Platform',
    address: 'Congress Avenue Austin',
    date: new Date('2025-02-21T12:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9852',
    user: 'Drew Cano',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=drew-cano&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'E-commerce Website',
    address: 'Market Street Philadelphia',
    date: new Date('2025-06-29T12:00:00.000Z'),
    status: 'Complete',
  },
  {
    id: 'CM9853',
    user: 'Phoenix Baker',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=phoenix-baker&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Payment Gateway',
    address: 'Sunset Boulevard Los Angeles',
    date: new Date('2025-07-13T12:00:00.000Z'),
    status: 'Pending',
  },
  {
    id: 'CM9854',
    user: 'Marcus Bergson',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=marcus-bergson&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'Social Media App',
    address: 'Meadow Lane Oakland',
    date: new Date('2025-02-25T12:00:00.000Z'),
    status: 'Approved',
  },
  {
    id: 'CM9855',
    user: 'Kate Morrison',
    userAvatar:
      'https://api.dicebear.com/9.x/notionists/svg?seed=kate-morrison&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    project: 'API Integration',
    address: 'Market Street Philadelphia',
    date: new Date('2025-03-13T12:00:00.000Z'),
    status: 'Rejected',
  },
];
