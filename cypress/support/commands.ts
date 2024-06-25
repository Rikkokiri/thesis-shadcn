/// <reference types="cypress" />

export type Theme = "light" | "dark";
export const themes: Theme[] = ["light", "dark"];

Cypress.Commands.add(
  "visitInTheme",
  (
    url: string,
    theme: Theme = "light",
    options?: Partial<Cypress.VisitOptions>,
  ) => {
    cy.visit(url, {
      onBeforeLoad(window) {
        cy.stub(window, "matchMedia")
          .withArgs("(prefers-color-scheme: dark)")
          .returns({
            matches: theme === "dark",
            addEventListener: () => {},
            removeEventListener: () => {},
          });
      },
      ...options,
    });
  },
);

Cypress.Commands.add(
  "compareSnapshotInTheme",
  (name: string, theme: Theme, options) => {
    const nameWithTheme = theme === "light" ? name : `${name}-${theme}`;
    cy.compareSnapshot(nameWithTheme, options);
  },
);
