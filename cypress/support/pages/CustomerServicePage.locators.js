export const customerServiceLocators = {
  customerServiceLink: () => cy.contains('Customer Service'),
  header: () => cy.get('h1'),
  searchInput: () => cy.get('input[type="search"]'),
  helpContent: () => cy.get('.cs-help-content'),
  firstResult: () => cy.get('[data-csa-c-content-id]').first(),
  trackPackageHeader: () => cy.contains("Where's My Stuff?"),
};
