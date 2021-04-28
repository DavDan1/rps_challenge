describe("User can play", () => {
  it("is expected to show the game", () => {
    cy.visit("/");
    cy.get('[data-cy="my-game"]').should("contain.text", "My Game");
    cy.get('[data-cy="rock-button"]').should("contain.text", "Rock");
    cy.get('[data-cy="paper-button"]').should("contain.text", "Paper");
    cy.get('[data-cy="scissors-button"]').should("contain.text", "Scissors");
  });
});
