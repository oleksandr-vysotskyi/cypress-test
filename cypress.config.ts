import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'widucj',
  reporter: "mochawesome", 
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
     baseUrl: 'http://localhost:4200',
     specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
     "supportFile": false
    },
    screenshotOnRunFailure: true,
    video: true, 
    viewportHeight: 800,
    viewportWidth: 1200,
    //retries: 2,
    //defaultCommandTimeout: 5000,
    //requestTimeout: 10000,
    //responseTimeout: 30000
});
