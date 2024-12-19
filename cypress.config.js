const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
       experimentalStudio: true,
      chromeWebSecurity: false,
      experimentalSessionAndOrigin: true,
      defaultCommandTimeout: 10000,
      // baseUrl: 'https://demoqa.com/buttons',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


// const { defineConfig } = require("cypress");

// function loadConfigByEnvironment(){
//   const env = process.env.CYPRESS_ENV || 'qa'
//   return require(`cypress.config.${env}.js`);

// }
// module.exports = defineConfig({
//   e2e: {
//    // baseUrl: "https//:google.com",
//    baseUrl: "https://www.saucedemo.com",

//     defaultCommandTimeout: 8000,  // Default timeout for Cypress commands
//     responseTimeout: 30000,  

//     setupNodeEvents(on, config) {
//       // implement node event listeners here
      
//     },
//   },
// });
