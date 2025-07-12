import { ProductLocators } from '../locators/productLocators';

export class ProductPage {
  visitAmazonHome() {
    cy.log('Navigating to Amazon home page');
    cy.visit('https://www.amazon.com');
  }

  searchAndAddFirstProduct() {
    cy.log('Searching for first product (sharpener)');
    cy.get(ProductLocators.searchBox).type(ProductLocators.sharpenerSearchText);
    cy.get(ProductLocators.searchSubmitButton).click();

    cy.log('Clicking first search result');
    cy.get(ProductLocators.firstSearchResultImage)
      .should('be.visible')
      .first()
      .scrollIntoView()
      .click({ force: true });

    cy.log('Adding sharpener to cart');
    cy.get(ProductLocators.addToCartButton)
      .scrollIntoView()
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true });
  }

  navigateAndAddSecondProduct() {
    cy.log('Navigating to specific scissors product page');
    cy.visit(ProductLocators.scissorsProductUrl);

    cy.log('Selecting scissors variant');
    cy.get(ProductLocators.scissorsVariantImage)
      .first()
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.log('Verifying selected color');
    cy.get(ProductLocators.colorText, { timeout: 10000 })
      .should('include.text', 'Yellow') 
      .invoke('text')
      .then((text) => {
        const cleaned = text.replace(/\u00a0/g, ' ').trim();
        expect(cleaned).to.include('Yellow, Grey, Blue');
      });


    cy.log('Adding scissors to cart');
    cy.get(ProductLocators.addToCartButton)
      .scrollIntoView()
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true });
  }
}
