import type { NextConfig } from 'next';
import { createJiti } from 'jiti';

const config: NextConfig = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ['@pbn/ui'],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default async function nextConfig(): Promise<NextConfig> {
  await createJiti(import.meta.url).import('./src/env');

  return config;
}
