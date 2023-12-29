class LoginPage {
    //selectors
    usernameInput = '#user-name';
    passwordInput = '#password';
    loginButton = '#login-button';

    visit() {
        cy.visit('/');
    }

    fillUsername(username) {
        cy.get(this.usernameInput).type(Cypress.env('username'));
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(Cypress.env('password'));
    }

    submit() {
        cy.get(this.loginButton)
        .click();
    }
}

export default new LoginPage();