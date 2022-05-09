describe("My first test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("check if button enable/disabled", () => {
    cy.get("button").should("not.be.disabled");
    cy.get('[type="checkbox"]').check();
    cy.get("button").should("be.disabled");
  });

  it("check if input checked/unchecked", () => {
    cy.get('[type="checkbox"]').should("not.be.checked");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="checkbox"]').should("be.checked");
  });

  it("button color change", () => {
    cy.get("button").should(
      "have.css",
      "background-color",
      "rgb(199, 21, 133)"
    );
    cy.get("button").click();
    cy.get("button").should("have.css", "background-color", "rgb(25, 25, 112)");
    cy.get('[type="checkbox"]').check();
    cy.get("button").should(
      "have.css",
      "background-color",
      "rgb(128, 128, 128)"
    );
  });
});
