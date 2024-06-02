/// <reference types="cypress" />
import en from "../../../src/i18n/locales/en.json";

describe("Front page", () => {
  it("matches the screenshot", () => {
    cy.visit("/");
    cy.contains(en.frontPage.start);

    cy.compareSnapshot("front-page");
  });
});
