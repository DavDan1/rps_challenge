describe("Game starts when player chooses an item", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(0);
      },
    });
  });

  it("player plays with rock over rock", () => {
    cy.get("#start").click();
    cy.get('[data-cy="rock-button"]').click();

    cy.get('[data-cy="result-text"]').should("contain.text", "It's a Tie!");
    cy.get('[data-cy="paper-button"]').click();

    cy.get('[data-cy="result-text"]').should("contain.text", "Computer Wins!");
    cy.get('[data-cy="scissors-button"]').click();
    cy.get('[data-cy="result-text"]').should("contain.text", "Computer Wins!");
  });
});
