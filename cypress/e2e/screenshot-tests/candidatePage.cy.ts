/// <reference types="cypress" />
import en from "../../../src/i18n/locales/en.json";

describe("Candidate pages", () => {
  it("matches the screenshot", () => {
    cy.visit("/candidates/chakra");
    cy.contains(en.candidate.creator);
    cy.contains("Chakra UI");

    cy.compareSnapshot("candidate-chakra");

    cy.contains(en.showMore).click();
    cy.contains(en.showFewer);

    cy.compareSnapshot("candidate-chakra-show-more");
  });
});
