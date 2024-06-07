import type { Config } from 'jest';

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // Map CSS modules to 'identity-obj-proxy' for mocking CSS imports in tests
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.ts',
  },
  moduleDirectories: ['./node_modules', 'src'],

  // Setting up testing framework after environment setup
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // Use jsdom as the testing environment
  testEnvironment: 'jsdom',

  // Use ts-jest preset to enable TypeScript support
  preset: 'ts-jest',

  // Ensure ts-node is used to execute TypeScript files
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.scss$': 'jest-css-modules-transform',
  },
};

export default config;
