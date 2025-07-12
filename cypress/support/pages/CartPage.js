import { CartLocators } from '../locators/cartLocators';

export class CartPage {
  openCart() {
    cy.log('Opening the shopping cart');
    cy.get(CartLocators.cartIcon).click();
  }

  verifyCartHasItems(count) {
    cy.log(`Verifying the cart has at least ${count} item(s)`);
    cy.get(CartLocators.cartItems).should('have.length.at.least', count);
  }

  verifyNoFreeShipping() {
    cy.log('Verifying that free shipping is not available');
    cy.get(CartLocators.freeShippingBanner)
      .should('be.visible')
      .invoke('text')
      .should('include', 'eligible items to your order to qualify for FREE Shipping');
  }

  updateProductQuantity() {
    cy.log('Increasing quantity of the second item in the cart by 2');

    cy.get('[data-a-selector="increment-icon"]')
      .eq(1)
      .should('exist')
      .scrollIntoView()
      .click({ force: true });

    cy.wait(2000);

    cy.get('[data-a-selector="increment-icon"]')
      .eq(1)
      .click({ force: true });
  }

  verifyFreeShipping() {
    cy.log('Verifying that free shipping is available');
    cy.get(CartLocators.freeShippingBanner)
      .should('be.visible')
      .invoke('text')
      .should('include', 'FREE Shipping');
  }

  clearCart() {
    cy.log('Starting cart clearance process');
    cy.visit('https://www.amazon.com/gp/cart/view.html');

    const deleteNextItem = () => {
      cy.get('body').then($body => {
        const deleteButtons = $body.find(CartLocators.deleteButton);

        if (deleteButtons.length > 0) {
          const initialCount = deleteButtons.length;
          cy.log(`Deleting item, ${initialCount} remaining`);

          cy.get(CartLocators.deleteButton)
            .first()
            .scrollIntoView()
            .click({ force: true });

          cy.get(CartLocators.deleteButton, { timeout: 8000 }).should(
            'have.length.lessThan',
            initialCount
          );

          deleteNextItem();
        } else {
          cy.log('Cart is already empty');
        }
      });
    };

    deleteNextItem();
  }

  verifyCartIsEmpty() {
    cy.log('Verifying that the cart is empty');
    cy.contains(CartLocators.emptyCartMessage).should('be.visible');
  }
}
