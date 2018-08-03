module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/'
  ],
  "testEnvironment": "node",
  "moduleNameMapper": {
    "\\.(css|sass|scss)$": "identity-obj-proxy"
  }
};
