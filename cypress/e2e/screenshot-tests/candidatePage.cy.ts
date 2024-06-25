/// <reference types="cypress" />
import en from "../../../src/i18n/locales/en.json";
import { themes } from "../../support/commands";

describe("Candidate pages", () => {
  themes.forEach((theme) => {
    it(`matches the screenshot (in ${theme} theme)`, () => {
      cy.visitInTheme("/candidates/chakra", theme);
      cy.contains(en.candidate.creator);
      cy.contains("Chakra UI");

      cy.compareSnapshotInTheme("candidate-chakra", theme);

      cy.contains(en.showMore).click();
      cy.contains(en.showFewer);

      cy.compareSnapshotInTheme("candidate-chakra-show-more", theme);
    });
  });
});
