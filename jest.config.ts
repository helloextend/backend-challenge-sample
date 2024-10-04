import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  clearMocks: true,
  testTimeout: 80000, // a low timeout causes flakey unit test results when all tests are being executed
  collectCoverageFrom: [
    'src/**/*',
    '!**/*.json',
    '!?(**)/?(*.|*-)types.ts',
    '!**/models/*',
    '!**/__snapshots__/*',
    '!**/scripts/*',
  ],
  coverageDirectory: './coverage',
  coverageReporters: [
    'clover',
    'json',
    'lcov',
    ['text', { skipFull: true }],
    'json-summary',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.json',
        isolatedModules: true,
      },
    ],
  },
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['dist'],
}

export default config
