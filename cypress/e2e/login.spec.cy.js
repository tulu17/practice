import LoginPage from "../pages/loginPage";
import "../support/commands.js";

describe('Login Functionality', () => {
    it('should login succesfully', () => {
        const baseUrl = Cypress.config('baseUrl');
        cy.login();
        cy.url().should('eq', `${baseUrl}/inventory.html`);
    });
});
