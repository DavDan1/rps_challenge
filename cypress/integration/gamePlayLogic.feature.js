describe("Game starts when player chooses an item", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(win) {
        cy.stub(win.Math, "random").returns(0);
      },
    });
  });

  it("player wins with rock over scissors", () => {
    cy.get('[data-cy="rock-button"]').click();
    cy.get('[data-cy="score-to-player"]').should("contain", "Winner");
  });

  it("player wins with paper over rock", () => {
    cy.get('[data-cy="paper-button"]').click();
    cy.get('[data-cy="score-to-player"]').should("contain", "Winner");
  });
  it("player wins with scissors over paper", () => {
    cy.get('[data-cy="scissors-button"]').click();
    cy.get('[data-cy="score-to-player"]').should("contain", "Winner");
  });
});
