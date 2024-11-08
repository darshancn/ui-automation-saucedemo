const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
    }

    async navigateToCart() {
        await this.page.locator('.shopping_cart_link').click();
    }

    async verifyProductInCart(product) {
        const cartProductName = await this.cartItems.locator('.inventory_item_name').innerText();
        const cartProductPrice = await this.cartItems.locator('.inventory_item_price').innerText();
        expect(cartProductName).toBe(product.name);
        expect(cartProductPrice).toBe(product.price);
    }
}

module.exports = CartPage;
