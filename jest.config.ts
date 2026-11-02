export default {
  preset: 'ts-jest',                 // lire le TypeScript
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts', '!src/index.ts'],
  coverageThreshold: {               // échoue sous 70 %
    global: { branches: 70, functions: 70, lines: 70, statements: 70 },
  },
};