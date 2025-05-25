import { env } from '#/env';

export const isDevelopment = env.NODE_ENV === 'development';

export const siteUrl = env.NEXT_PUBLIC_WEBSITE_URL;

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;

export function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const year = date.getUTCFullYear();
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();

  return `${month} ${day}, ${year}`;
}

export function randomElement(array: string[]): string {
  return array[Math.floor(Math.random() * array.length)] ?? '';
}
