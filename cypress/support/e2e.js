// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  // התעלם משגיאות שמגיעות מקוד של אמזון
  if (err.message.includes('cardModuleFactory is not a function')) {
    return false;
  }

  // אפשר להתעלם מכל השגיאות החיצוניות ע"י return false תמידי:
  // return false;

  // אחרת - זרוק את השגיאה
});
