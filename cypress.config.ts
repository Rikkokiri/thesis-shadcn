import { defineConfig } from "cypress";
import { configureVisualRegression } from "cypress-visual-regression/dist/plugin";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      // visualRegressionType: "base", // Use setting "base" to generate base screenshots
      visualRegressionType: "regression",
    },
    screenshotsFolder: "./cypress/snapshots/actual",
    setupNodeEvents(on) {
      // implement node event listeners here
      configureVisualRegression(on);
    },
  },
});
