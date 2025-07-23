const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: false,
    html: true,
    json: false,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://micro-servico-evento.onrender.com',
    env: {
      baseUrlApi: 'https://micro-servico-evento.onrender.com',
      baseUrlApp: 'https://micro-servico-evento.onrender.com',
      retries: {
        runMode: 5,
        openMode: 5
      }
    }
  }
});