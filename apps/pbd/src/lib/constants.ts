import { env } from '#/env';

// eslint-disable-next-line no-restricted-properties
export const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? // eslint-disable-next-line no-restricted-properties
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : '';

export const SITE_URL =
  // eslint-disable-next-line no-restricted-properties
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? // eslint-disable-next-line no-restricted-properties
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : env.NEXT_PUBLIC_APP_URL || VERCEL_URL || 'http://localhost:3000';

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;

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
