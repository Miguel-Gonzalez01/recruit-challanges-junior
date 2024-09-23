/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testMatch: ['**/tests/**/*.(test|spec).[jt]s?(x)'],
  transform: {
      '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};