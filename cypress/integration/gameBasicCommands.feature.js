describe("User can play", () => {
  it("is expected to show the game", () => {
    cy.visit("/");
    cy.get("#start").click();
    cy.get('[data-cy="my-game"]').should("contain.text", "My Game");
    cy.get('[data-cy="rock-button"]').should("contain.text", "Rock");
    cy.get('[data-cy="paper-button"]').should("contain.text", "Paper");
    cy.get('[data-cy="scissors-button"]').should("contain.text", "Scissors");
  });
  beforeEach(() => {
    cy.visit("/");
    cy.get("#start").click();
    cy.get("[data-cy=rock-button]").click();
    cy.get('[data-cy="rock-button"]').should("exist");
    cy.get("[data-cy=rock-button]").click();
    cy.get('[data-cy="paper-button"]').should("exist");
    cy.get("[data-cy=rock-button]").click();
    cy.get('[data-cy="scissors-button"]').should("exist");
  });

  describe("Game is played after player chooses an item", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("player gets an outcame message after choosing rock", () => {
      cy.get("#start").click();
      cy.get('[data-cy="rock-button"]').should("exist");
    });

    it("player gets an outcame message after choosing paper", () => {
      cy.get("#start").click();
      cy.get('[data-cy="paper-button"]').should("exist");
    });

    it("player gets an outcame message after choosing scissors", () => {
      cy.get("#start").click();
      cy.get("[data-cy=rock-button]").should("exist");
    });
  });
});
