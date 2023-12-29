class CheckoutStepTwoPage {
    //selectors
    finishBtn = '#finish';

    visit() {
        cy.visit('/checkout-step-two');
    }
    
    finish() {
        cy.get(this.finishBtn)
        .click();
    }
}

export default new CheckoutStepTwoPage();