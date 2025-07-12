import { ProductPage } from '../support/pages/ProductPage';
import { CartPage } from '../support/pages/CartPage';
import { LoginPage } from '../support/pages/LoginPage';

const productPage = new ProductPage();
const cartPage = new CartPage();
const loginPage = new LoginPage();

describe('Amazon Shopping Cart Flow', () => {

  beforeEach(() => {
    loginPage.login();
    productPage.visitAmazonHome();
    productPage.searchAndAddFirstProduct();
    productPage.navigateAndAddSecondProduct();
  });

  afterEach(() => {
    cartPage.openCart();
    cartPage.clearCart();
  });

  it('should verify 2 products are added', () => {
    cartPage.openCart();
    cartPage.verifyCartHasItems(2);
  });

  it('should show no free shipping initially', () => {
    cartPage.openCart();
    cartPage.verifyNoFreeShipping();
  });

  it('should show free shipping after updating quantity', () => {
    cartPage.openCart();
    cartPage.updateProductQuantity();
    cartPage.verifyFreeShipping();
  });
});

