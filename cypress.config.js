const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    projectId: "ysw45m",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  chromeWebSecurity: false,

});