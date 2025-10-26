import baseConfig, { restrictEnvAccess } from '@pbn/eslint-config/base';
import nextjsConfig from '@pbn/eslint-config/nextjs';
import reactConfig from '@pbn/eslint-config/react';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['.next/**'],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
