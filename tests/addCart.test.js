const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');

test.describe('Add to Cart Functionality', () => {
    let loginPage, productPage, cartPage;
    const USERNAME = 'standard_user';
    const PASSWORD = 'secret_sauce';

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);

        await page.goto('https://www.saucedemo.com/');
    });

    test('Add to Cart and Verify', async ({ page }) => {
        // Login
        await loginPage.login(USERNAME, PASSWORD);
        await loginPage.verifyLoginSuccess();
        console.log('Logged in successfully');

        // Get Product Details and Add to Cart
        const product = await productPage.getProductDetails();
        await productPage.addFirstProductToCart();
        console.log('Product added to cart');

        // Navigate to Cart and Verify Product
        await cartPage.navigateToCart();
        await cartPage.verifyProductInCart(product);
        console.log('Product verified in cart');

        // Logout
        await loginPage.logout();
        await loginPage.verifyLogoutSuccess();
        console.log('Logged out successfully');
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
});
