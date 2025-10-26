import baseConfig from '@pbn/eslint-config/base';
import reactConfig from '@pbn/eslint-config/react';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];
