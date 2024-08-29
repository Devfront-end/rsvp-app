const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3jj1dg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
