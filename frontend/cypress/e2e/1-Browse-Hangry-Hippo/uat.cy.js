describe('Shows Appeteasers', () => {
  it('Connect to Dev Server', () => {
    cy.visit('https://hangryhippo.quantic.host/');
  });
  it('selects Handhelds', () => {
    //TODO: Add a test to check Handhelds
     cy.contains('Handhelds').click();
      //Check if Cheese Burger is there.
     cy.contains('Cheese Burger');
     //Check if Fajita Tacos is there
     cy.contains('Fajita Tacos');
  });
  it('selects Appeteasers', () => {
    //Navigate to Appeteasers.  This makes sure that the link actually exists.
      cy.contains('Appeteasers').click();
      //Check if Tater Tots is there.
      cy.contains('Tater Tots');
      //Check if Buffalo Wings is there.
      cy.contains('Buffalo Wings');
      //Check that Cheese Burger is not there.
      cy.contains('cheese Burger').should('not.exist');
      //Check that Fajita Tacos is not there.
      cy.contains('Fajita Tacos').should('not.exist');
  });
  });
