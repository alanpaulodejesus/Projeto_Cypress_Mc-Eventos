const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
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