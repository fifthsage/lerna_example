module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.((js|ts))$',
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '(/__tests__/.*|(\\.|/)(test|spec))\\.d.ts$',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/../setupTests.js'],
  cacheDirectory: './.jest/cache',
};
