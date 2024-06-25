/// <reference types="cypress" />
import en from "../../../src/i18n/locales/en.json";
import { themes } from "../../support/commands";

describe("Front page", () => {
  themes.forEach((theme) => {
    it(`matches the screenshot (in ${theme} theme)`, () => {
      cy.visitInTheme("/", theme);
      cy.contains(en.frontPage.start);

      cy.compareSnapshotInTheme("front-page", theme);
    });
  });
});
