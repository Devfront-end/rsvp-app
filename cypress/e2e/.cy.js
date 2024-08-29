describe('Login Flow', () => {
    it('should log in successfully with correct credentials', () => {
      cy.visit('/login');
      
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('password123');
      cy.get('button[type="submit"]').click();
  
      // Check that we've redirected to the my events page
      cy.url().should('include', '/my-events');
      
      // Check that we see some indication of being logged in
      cy.contains('Welcome, test@example.com').should('be.visible');
    });
  
    it('should show an error message with incorrect credentials', () => {
      cy.visit('/login');
      
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('wrongpassword');
      cy.get('button[type="submit"]').click();
  
      // Check that we're still on the login page
      cy.url().should('include', '/login');
      
      // Check for an error message
      cy.contains('Invalid credentials').should('be.visible');
    });
  });