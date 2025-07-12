# Cypress Amazon Automation Assignment

This project contains automated tests written in Cypress for an e-commerce website (Amazon.com). It covers two main tasks: customer service page testing and shopping cart flow testing.

---

##  Task 1 – Customer Service Page

Automates the scenario of navigating to Amazon's "Customer Service" page and searching for help topics.

###  What is tested?
- Navigation to the Customer Service page
- Searching for “Where is my stuff”
- Clicking on “Track your package” and verifying relevant content is shown

The test plan is saved in: `test_plan_task1.txt`

---

##  Task 2 – Shopping Cart Automation Flow

Automates the full user shopping flow, including adding products to the cart, verifying free shipping logic, and clearing the cart.

###  Features Covered
- Searching for a sharpener and adding it to the cart
- Visiting a product page (scissors), selecting the “Yellow, Grey, Blue” variant, and adding to cart
- Verifying cart contains both products
- Verifying free shipping is not yet eligible
- Adding more sharpeners (total of 4)
- Verifying free shipping becomes available
- Logging in with a test user
- Clearing the cart

### 🔧 Structure

- Page Objects:
  - `ProductPage.js`
  - `CartPage.js`
  - `LoginPage.js`
- Locators:
  - `productLocators.js`
  - `cartLocators.js`
  - `loginLocators.js`
- Tests:
  - `customer_service.cy.js`
  - `amazon_cart_flow.cy.js`

---

##  Cypress Setup

To run the tests:

```bash
npm install
npx cypress open
```

You will need to define the following environment variables in your Cypress config or `.env` file:

```env
AMAZON_EMAIL=your_email@example.com
AMAZON_PASSWORD=your_password
```

---

##  Notes
- The tests use realistic data and selectors.
- Login credentials are managed securely via environment variables.
- All tests run independently and clean up after themselves.

---

##  Submission

- ✔ Test Plan (see `test_plan_task1.txt`)
- ✔ Cypress tests for Tasks 1 + 2 (this repo)
