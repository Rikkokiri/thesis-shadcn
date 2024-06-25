import { PluginCommandOptions } from "cypress-visual-regression";
import { VisualRegressionResult } from "cypress-visual-regression/dist/plugin";
import { Theme } from "./support/commands";

declare global {
  namespace Cypress {
    interface Chainable {
      visitInTheme(
        url: string,
        theme?: Theme,
        options?: Omit<Partial<VisitOptions>, "onBeforeLoad">,
      ): Chainable<void>;
      compareSnapshotInTheme(
        name: string,
        theme: Theme,
        options?: PluginCommandOptions,
      ): Cypress.Chainable<VisualRegressionResult>;
    }
  }
}
