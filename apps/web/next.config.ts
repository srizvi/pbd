import type { NextConfig } from 'next';
import { createJiti } from 'jiti';

const config: NextConfig = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ['@pbn/ui'],

  /** Next.js 16 only optimizes explicitly allowed image quality values */
  images: { qualities: [75, 100] },

  /** We already do typechecking as a separate task in CI */
  typescript: { ignoreBuildErrors: true },
};

export default async function nextConfig(): Promise<NextConfig> {
  await createJiti(import.meta.url).import('./src/env');

  return config;
}
