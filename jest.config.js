module.exports = {
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1'
    },
    moduleFileExtensions: ['js', 'vue','ts','tsx'],
    preset: 'ts-jest',
    transform: {
      '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
      '^.+\\.ts$': 'ts-jest' // ts 文件用 ts-jest 转换
    },
    testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|tsx)'],
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.vue','src/**/*.(ts|tsx)','!src/*.{ts,vue}','!**/node_modules/**'],
    coverageDirectory: 'coverage',
    coverageThreshold:{
      'global': {
        branches: 70, // 覆盖代码逻辑分支的百分比
        functions: 70, // 覆盖函数的百分比
        lines: 70, // 覆盖代码行的百分比
        statements: -10 // 如果有超过 10 个未覆盖的语句，则 jest 将失败
      }
    }
  }
  