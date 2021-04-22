describe('Rock-paper-scissors', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  describe('Player can play the game', () => {
    it('has a Play button', () => {
      cy.get('.btn').click()
    });
    
  });
  
});
