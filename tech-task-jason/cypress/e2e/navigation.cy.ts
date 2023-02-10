/// <reference types="cypress" />

context('Given the user has the app running', () => {
  before(() => {
    cy.visit('http://localhost:5173')
  })

  beforeEach(() => {
    cy.wait(1700);
  });

  describe("when the user is on the home page", () => {
    it("then the title should be visible", () => {
      cy.get("[data-cy=titles-text]").should("exist");
    });
  });

  describe("when the user clicks on a table row", () => {
    it("then it navigates to the title details page", () => {
      cy.get("[data-cy=title-row-click-0").click();
      cy.get("[data-cy=title-details-title]").should("exist");
      cy.get("[data-cy=google-maps]").should("exist");
    });
  })

  describe("when the user clicks the back button", () => {
    it("then it navigates to back to the title page", () => {
      cy.get("[data-cy=title-back-button").click();
      cy.get("[data-cy=titles-text]").should("exist");
    });
  });
})
