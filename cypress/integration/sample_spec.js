describe("My first test", () => {
  it("Does not do much", () => {
    expect(true).to.equal(true);
  });
  it("Visit page", () => {
    cy.visit("https://example.cypress.io");
  });
  it("Find an element", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
  });
  it("Makes an assertion", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "commands/actions");
  });
  it("Gets, types and asserts", () => {
    cy.visit("https://example.cypress.io");
    // cy.pause();
    cy.contains("type").click();
    cy.url().should("include", "commands/actions");
    cy.get(".action-email") //css class .action-email
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
