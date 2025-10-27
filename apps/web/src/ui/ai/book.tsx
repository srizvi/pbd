'use client';

import Cal from '@calcom/embed-react';
import { useTheme } from 'next-themes';

export function Book() {
  const { theme } = useTheme();
  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Start with a Conversation
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-muted-foreground sm:text-balance sm:text-xl/8">
            Schedule time with a principal. We&apos;ll discuss your board&apos;s expectations, your
            current AI initiatives, and whether we can deliver the returns you need.
          </p>
        </div>
        <div className="container flex flex-col justify-start md:justify-center md:pt-0">
          <div className="h-[calc(100vh-6rem)] overflow-y-auto px-4 py-16 md:h-[600px] md:overflow-y-visible md:px-0">
            <Cal
              calLink="pale-blue-nukta/30min"
              config={{
                theme: theme as 'light' | 'dark',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
