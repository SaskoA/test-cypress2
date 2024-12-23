const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
       experimentalStudio: true,
      chromeWebSecurity: false,
      experimentalSessionAndOrigin: true,
      defaultCommandTimeout: 10000,
      
    setupNodeEvents(on, config) {
      
    },
  },
});