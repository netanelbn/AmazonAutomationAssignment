import { CustomerServicePage } from '../support/pages/CustomerServicePage';
const customerServicePage = new CustomerServicePage();

describe('Amazon - Customer Service Flow', () => {
  it('Should navigate to track your package via help search', () => {
    customerServicePage.visitHome();
    customerServicePage.validateMainMenu();
    customerServicePage.clickCustomerService();
    customerServicePage.search('Where is my stuff');
    customerServicePage.validateTrackPageHeader();
  });
});
