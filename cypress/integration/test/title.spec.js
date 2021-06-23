/// <reference types="cypress" />

describe("Visting Page and validate UI", () => {
  before("Open web", () => {
    cy.visit("/");
  });

  it("Title should be visible", () => {
    cy.get("#cy_title").should("be.visible");
  });

  it("Title shoul have proper text", () => {
    cy.get("#cy_title").should("have.text", "testingStars app is running");
  });
  it("Angular Logo should be exist", () => {
    cy.get('img').should('be.exist')
  });
});
