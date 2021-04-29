describe("Game starts when player chooses an item", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "random").returns(0);
      },
    });
  });

  it("player wins with rock over scissors", () => {
		cy.get('#start').click()
    cy.get('[data-cy="rock-button"]').click();
    cy.get('[data-cy="player-select"]').should("contain", "Rock");
		cy.get('[data-cy="computer"]').should("contain","Computer: Rock")
		cy.get('[data-cy="result-text"]').should("contain", "It's a tie!");
	
	});

  it("player wins with paper over rock", () => {
		cy.get('#start').click()

    cy.get('[data-cy="paper-button"]').click();
    cy.get('[data-cy="player-select"]').should("contain", "Paper");
		cy.get('[data-cy="computer"]').should("contain","Computer: Rock")
		cy.get('[data-cy="result-text"]').should("contain", "Winner!");


  });
  it("player wins with scissors over paper", () => {
		cy.get('#start').click()

    cy.get('[data-cy="scissors-button"]').click();
    cy.get('[data-cy="player-select"]').should("contain", "Scissors");
		cy.get('[data-cy="computer"]').should("contain","Computer: Rock")
		cy.get('[data-cy="result-text"]').should("contain", "You Lost bro!");

  });
});
