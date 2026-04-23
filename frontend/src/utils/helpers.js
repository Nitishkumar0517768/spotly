export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
};

export const truncateString = (str, num) => {
  if (str.length <= num) return str;
  return str.slice(0, num) + '...';
};
