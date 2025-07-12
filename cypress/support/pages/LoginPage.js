import { LoginLocators } from '../locators/loginLocators';

export class LoginPage {
  login() {
    cy.log('Starting login process');
    cy.visit('https://www.amazon.com/gp/css/homepage.html/ref=nav_bb_ya');

    cy.get(LoginLocators.accountMenu).click();
    cy.get(LoginLocators.emailField).type(Cypress.env('AMAZON_EMAIL'));
    cy.get(LoginLocators.continueButton).click();
    cy.get(LoginLocators.passwordField).type(Cypress.env('AMAZON_PASSWORD'), { log: false });
    cy.get(LoginLocators.signInButton).click();

    cy.contains(LoginLocators.greetingText).should('be.visible');
    cy.log('Login successful');
  }
}
