/// <reference types="cypress" />
import en from "../../../src/i18n/locales/en.json";

describe("Questions page", () => {
  it("matches the screenshot", () => {
    cy.visit("/questions");
    cy.contains(en.questionPage.description);

    cy.compareSnapshot("initial-questions-page");
  });
});
