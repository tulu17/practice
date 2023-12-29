class CartPage {
    //selectors
    checkoutBtn = '#checkout';

    visit() {
        cy.visit('/cart');
    }

    proceedToCheckout() {
        cy.get(this.checkoutBtn).click();
    }
}

export default new CartPage();