import { customerServiceLocators } from './CustomerServicePage.locators';

export class CustomerServicePage {
  visitHome() {
    cy.visit('/');
  }

  validateMainMenu() {
    cy.contains("Today's Deals").should('be.visible');
    cy.contains('Customer Service').should('be.visible');
  }

  clickCustomerService() {
    customerServiceLocators.customerServiceLink().click();
  }

  validateHeader() {
    customerServiceLocators.header().should('contain.text', 'Help & Customer Service');
  }

  search(query) {
    customerServiceLocators.searchInput().should('be.visible').type(`${query}{enter}`);
  }

  validateHelpContent() {
    customerServiceLocators.helpContent().should('contain.text', "Where's My Stuff?");
  }

  validateTrackPageHeader() {
    customerServiceLocators.trackPackageHeader().should('be.visible');
  }
}

export const customerServicePage = new CustomerServicePage();
