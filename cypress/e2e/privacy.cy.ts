import { testA11y } from 'cypress/support/utils';

// UMD Customization
// Privacy Policy is suppressed in the UMD configuration
describe('Privacy', () => {
  it.skip('should pass accessibility tests', () => {
    cy.visit('/info/privacy');

    // Page must first be visible
    cy.get('ds-privacy').should('be.visible');

    // Analyze <ds-privacy> for accessibility
    testA11y('ds-privacy');
  });
});
// End UMD Customization
