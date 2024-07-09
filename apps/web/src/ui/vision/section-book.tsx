import Cal from '@calcom/embed-react';
import { useTheme } from 'next-themes';

export function SectionBook() {
  const { theme } = useTheme();
  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute left-4 right-4 top-4 flex justify-between text-lg md:left-8 md:right-8">
        <span>Book a meeting</span>
      </div>
      <div className="container flex flex-col justify-start pt-16 md:justify-center md:pt-0">
        <div className="h-[calc(100vh-6rem)] overflow-y-auto px-4 py-8 md:h-[600px] md:overflow-y-visible md:px-0 md:py-48">
          <Cal
            calLink="palebluedot/30min"
            config={{
              theme: theme as 'light' | 'dark',
            }}
          />
        </div>
      </div>
    </div>
  );
}
