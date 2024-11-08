const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    // Login functionality
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // Verify successful login by checking for the 'Products' title on the Products page
    async verifyLoginSuccess() {
        await expect(this.page.locator('.title')).toHaveText('Products');
    }

    // Logout functionality
    async logout() {
        await this.menuButton.click();
        await this.logoutButton.click();
    }

    // Verify successful logout by checking that the login button is visible on the login page
    async verifyLogoutSuccess() {
        await expect(this.page.locator('#login-button')).toBeVisible();
    }
}

module.exports = LoginPage;
