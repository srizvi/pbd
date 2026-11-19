import Link from 'next/link';

import { cn } from '@pbn/ui';
import { ThemeToggle } from '@pbn/ui/theme';

import { siteConfig } from '#/config/site';
import Logo from '#/ui/shared/logo';

interface NavigationItem {
  name: string;
  href: string;
  disabled?: boolean;
}

const navigation: { main: NavigationItem[] } = {
  main: [
    { name: 'Vision', href: '/vision' },
    { name: 'Contact', href: '/contact', disabled: true },
    { name: 'Privacy', href: '/privacy', disabled: true },
    { name: 'Terms', href: '/terms', disabled: true },
    { name: 'Accessibility', href: '/accessibility', disabled: true },
  ],
};

export function Footer() {
  return (
    <footer className="mt-16 w-full border-t bg-[oklch(0.13634_0.014692_308.368)]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mb-8 flex justify-center">
          <Logo className="size-8 md:size-16" />
        </div>
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 text-center sm:flex sm:justify-center sm:space-x-12"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              {item.disabled ? (
                <span
                  className={cn(
                    'cursor-not-allowed leading-6 text-[oklch(0.928131_0.0189_309.7884)] opacity-50',
                    'pointer-events-none',
                  )}
                  aria-disabled="true"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="leading-6 text-[oklch(0.928131_0.0189_309.7884)] hover:text-white/80"
                  aria-label={`Navigate to ${item.name} page in same window`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-10 flex items-center justify-center space-x-4">
          <p className="text-xs leading-5 text-[oklch(0.643058_0.05059_291.6515)]">
            © {new Date().getFullYear()} {siteConfig.company}. All Rights Reserved.
          </p>
          <ThemeToggle className="border-[oklch(0.219791_0.034809_308.0005)] bg-transparent text-white" />
        </div>
      </div>
    </footer>
  );
}
