describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/dashboard/products/create');
  });

  it('Form Creating Product Has to Have Input Tag', () => {
    cy.visit('http://localhost:5173/dashboard/products/create');
    
    cy.get('input[name="tag"]').should('be.visible');
  });

  it('Input tag type a text and enter', () => {
    cy.visit('http://localhost:5173/dashboard/products/create');

    cy.get('input[name="tag"]').type('tag1{enter}');
  })
})