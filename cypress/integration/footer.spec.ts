import { testA11y } from 'cypress/support/utils';

describe('Footer', () => {
    // UMD Customization
    // Skipping this test because footer is not shown in "mdsoar" default theme.
    it.skip('should pass accessibility tests', () => {
    // End UMD Customization
        cy.visit('/');

        // Footer must first be visible
        cy.get('ds-footer').should('be.visible');

        // Analyze <ds-footer> for accessibility
        testA11y('ds-footer');
    });
});
