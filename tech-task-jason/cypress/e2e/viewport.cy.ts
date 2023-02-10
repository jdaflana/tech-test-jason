/// <reference types="cypress" />

context('Given the user has the app running', () => {
    before(() => {
        cy.visit('http://localhost:5173')
      })
  
    describe("when the user is on the title details page on a desktop", () => {
      it("then the non-mobile viewport size should be visible", () => {
        cy.get("[data-cy=title-row-click-0").click();
        cy.get("[data-cy=title-details-title]").should("exist");
        cy.viewport(1920, 1080)
        cy.get("[data-cy=non-mobile-googlemaps]").should("exist");
      });
    });
  
    describe("when the user is on the title details page on a tablet/mobile", () => {
      it("then the mobile viewport size should be visible", () => {
        cy.viewport('iphone-6+')
        cy.get("[data-cy=mobile-googlemaps]").should("exist");
      });
    });
  })
  