const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //global config
  env:{
    URI:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
