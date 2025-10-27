import Link from 'next/link';

import { cn } from '@pbn/ui';
import { buttonVariants } from '@pbn/ui/button';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl border bg-card md:min-h-[50vh] lg:rounded-3xl">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-border [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-primary/10">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-2xl px-6 py-32 sm:py-48 md:max-w-5xl md:px-8 lg:py-56">
        <div className="text-center">
          <h1 className="text-foreground sm:text-balance">
            <span className="block text-5xl font-semibold lg:text-6xl">
              How banking leaders turn AI awareness into measurable profit
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-balance lg:text-xl">
            We enable systematic capability building from literacy to transformation. Each stage
            delivering exponential returns. Each investment pays for the next.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#intro"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'primary' }),
                'text-white dark:text-background',
              )}
            >
              Read how
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
