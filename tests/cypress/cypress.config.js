const { defineConfig } = require('cypress');
const { devServer } = require('@cypress/vite-dev-server');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/e2e/**/*.e2e.js',
    supportFile: 'tests/cypress/support/commands.js',
    chromeWebSecurity: false,
    video: false,
    defaultCommandTimeout: 8000,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      on('dev-server:start', (options) => {
        return devServer({
          ...options,
          framework: 'react',
          viteConfig: require('../../../vite.config.js'), // Adjust if vite.config.js is elsewhere
        });
      });

      return config;
    },
  },
});
