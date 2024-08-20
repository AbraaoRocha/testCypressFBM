const { defineConfig } = require("cypress");
require('dotenv').config();


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.URL = process.env.URL;
      return config;
    },
  },
});
