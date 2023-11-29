import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
     baseUrl: 'http://localhost:4200',
     specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
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
