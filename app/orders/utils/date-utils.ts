import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const formatDate = (date: Date) => {
  const dateObj = dayjs(date);
  const diffDays = dayjs().diff(dateObj, 'day');

  // Show relative format for dates less than a day old
  if (diffDays < 1) {
    return dateObj.fromNow();
  }

  // Show absolute format for older dates or future dates
  return dateObj.format('MMM D, YYYY');
};
