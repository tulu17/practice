class CheckoutStepOnePage {
    //selectors
    firstNameInput = '#first-name';
    lastNameInput = '#last-name';
    postalCodeInput = '#postal-code';
    continueBtn = '#continue';

    visit() {
        cy.visit('/checkout-step-one');
    }

    fillFirstName(firstname) {
        cy.get(this.firstNameInput)
        .type(Cypress.env('firstName'));
    }

    fillLastName(lastname) {
        cy.get(this.lastNameInput)
        .type(Cypress.env('lastName'));
    }

    fillPostalCode(postalcode) {
        cy.get(this.postalCodeInput)
        .type(Cypress.env('postalCode'));
    }

    continue() {
        cy.get(this.continueBtn)
        .click();
    }
}

export default new CheckoutStepOnePage();