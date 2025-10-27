import { fileURLToPath } from 'url';
import { createJiti } from 'jiti';

await createJiti(fileURLToPath(import.meta.url)).import('./src/env');

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ['@pbn/ui'],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
