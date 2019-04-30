/// <reference types="Cypress" />

context("Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("should display the search input and search instructions", () => {
    cy.get("#search-input").should(
      "have.attr",
      "placeholder",
      "Type here the character name: e.g. R2"
    );
    cy.focused().should("have.id", "search-input");
    cy.get("#search-instructions").should("exist");
  });

  it("should not start searching before the user inputs at least 2 letters", () => {
    cy.get("#search-input").type("r");
    const searchInstructions = cy.get("#search-instructions");
    searchInstructions.should("exist");
    cy.get("#search-input").type("2");
    cy.wait(400);
    searchInstructions.should("not.exist");
  });

  it("should display the loading indicator when loading", () => {
    cy.get("#search-input").type("r2");
    cy.wait(400);
    cy.get("#search-loading-indicator").should("exist");
  });

  it("should display the no results message if search returns no result", () => {
    cy.server();
    cy.route("GET", "api/people/?search=frangelli").as("search");
    cy.get("#search-input").type("frangelli");
    cy.wait(400);
    cy.get("#search-loading-indicator").should("exist");
    cy.wait("@search");
    cy.get("#search-loading-indicator").should("not.exist");
    cy.get("#search-no-results").should("exist");
  });

  it("should navigate to Details Page when clicking in results", () => {
    cy.server();
    cy.route("GET", "api/people/?search=r2").as("search");
    cy.get("#search-input").type("r2");
    cy.wait(400);
    cy.get("#search-loading-indicator").should("exist");
    cy.wait("@search");
    cy.get(".person-row")
      .first()
      .click();
    cy.location("hash").should("contain", "details");
    cy.get("#back-btn").click();
    cy.location("hash").should("be", "#/");
  });
});
