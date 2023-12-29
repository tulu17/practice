import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";
import CartPage from "../pages/cartPage";

Cypress.Commands.add('login', () => {
    LoginPage.visit();
    LoginPage.fillUsername();
    LoginPage.fillPassword();
    LoginPage.submit();
});