describe("Game starts when player chooses an item", () => {
  it("plays wins the game", () => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(2);
      },
    });
    cy.get('[data-cy="game-container"]').within(() => {
      cy.get("#start").click();
      cy.get('[data-cy="rock-button"]').click();
    });
    cy.get('[data-cy="result-text"]').should("contain.text", "You Win!");
  });
  it("plays tie the game", () => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(1);
      },
    });
    cy.get('[data-cy="game-container"]').within(() => {
      cy.get("#start").click();
      cy.get('[data-cy="paper-button"]').click();
    });
    cy.get('[data-cy="result-text"]').should("contain.text", "It's a Tie!");
  });
  it("Computer Wins the game", () => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(0);
      },
    });
    cy.get('[data-cy="game-container"]').within(() => {
      cy.get("#start").click();
      cy.get('[data-cy="scissors-button"]').click();
    });
    cy.get('[data-cy="result-text"]').should("contain.text", "Computer Wins!");
  });
});

// **second version of the test**

// beforeEach(() => {
//   cy.visit("/", {
//     onBeforeLoad(window) {
//       cy.stub(window.Math, "floor").returns(0);
//     },
//   });
// });

// it("player plays with rock over rock", () => {
//   cy.get("#start").click();
//   cy.get('[data-cy="rock-button"]').click();

//   cy.get('[data-cy="result-text"]').should("contain.text", "It's a Tie!");
//   cy.get('[data-cy="paper-button"]').click();

//   cy.get('[data-cy="result-text"]').should("contain.text", "You Win!");
//   cy.get('[data-cy="scissors-button"]').click();
//   cy.get('[data-cy="result-text"]').should("contain.text", "Computer Wins!");
// });
