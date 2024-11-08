const { expect } = require('@playwright/test');
const fs = require('fs');

class ProductPage {
    constructor(page) {
        this.page = page;
        this.firstProduct = page.locator('.inventory_item').first();
        this.firstProductName = this.firstProduct.locator('.inventory_item_name');
        this.firstProductPrice = this.firstProduct.locator('.inventory_item_price');
        this.addToCartButton = this.firstProduct.locator('button');
    }

    async getProductDetails() {
        const name = await this.firstProductName.innerText();
        const price = await this.firstProductPrice.innerText();
        fs.writeFileSync('output/productData.txt', `Name: ${name}\nPrice: ${price}`);
        return { name, price };
    }

    async addFirstProductToCart() {
        await this.addToCartButton.click();
    }
}

module.exports = ProductPage;
