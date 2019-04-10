module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/enzymeSetup.ts'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
