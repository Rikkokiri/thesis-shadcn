/// <reference types="cypress" />
import en from "../../../src/i18n/locales/en.json";
import { themes } from "../../support/commands";

describe("Questions page", () => {
  themes.forEach((theme) => {
    it(`matches the screenshot (in ${theme} theme)`, () => {
      cy.visitInTheme("/questions", theme);
      cy.contains(en.questionPage.description);

      cy.compareSnapshotInTheme("initial-questions-page", theme);
    });
  });
});
