module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'filenames',
    'implicit-dependencies',
    'no-only-tests',
  ],
  ignorePatterns: [
    'dist',
    'cypress/**/*.js',
    'cypress/**/*.ts',
    'node_modules',
    '**/*.d.ts',
    '**/specs/**/index.ts',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'no-only-tests/no-only-tests': 'error',
    'filenames/match-regex': ['error', '^[a-z0-9-.]+$', true],
    complexity: ['warn', 15],
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ['error', 'never'],
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        minimumDescriptionLength: 10,
      },
    ],
    'no-unsafe-optional-chaining': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    'import/default': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/named': 0,
  },
}
