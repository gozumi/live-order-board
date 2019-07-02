module.exports = {
  coverageDirectory: '<rootDir>/reports/tests/coverage',
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: ['2304', '2582']
      }
    }
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '\\.spec\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  "testPathIgnorePatterns": ['/node_modules/']
}