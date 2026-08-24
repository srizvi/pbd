import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    languageOptions: {
      globals: {
        React: 'writable',
      },
    },
  },
];
