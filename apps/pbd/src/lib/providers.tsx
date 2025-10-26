'use client';

import * as React from 'react';

import { ThemeProvider } from '@pbn/ui/theme';
import { Toaster } from '@pbn/ui/toast';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
