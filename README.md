# UI Automation Framework for Add to Cart Functionality

This project is a basic UI automation framework built with [Playwright](https://playwright.dev/) to test the "Add to Cart" functionality on [Saucedemo.com](https://www.saucedemo.com/). It follows the Page Object Model (POM) structure and includes setup, error handling, and various test cases.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [How to Run the Tests](#how-to-run-the-tests)
- [Test Cases Covered](#test-cases-covered)
- [Additional Information](#additional-information)

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/) (optional, for cloning the project)

####  Setup and Installation

Provide step-by-step instructions on how to set up the project locally.

```markdown
## Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git

Navigate to the Project Directory: 
    cd your-repo-name

Install Dependencies Run the following command to install the required packages: 
    npm install


#### How to Run the Tests

Guide users on running the tests with clear commands.

```markdown
## How to Run the Tests

To execute all tests, use the following command:
```bash
npm test

For a specific test file, specify the path to the file:
    npx playwright test tests/addCartTest.js


## Test Cases Covered

1. **Login Test**: Verifies successful login and checks if the user lands on the Products page.
2. **Product Data Verification**: Captures the name and price of the first product and stores it in a text file.
3. **Add to Cart Test**: Adds the first product to the cart and verifies that it appears in the cart.
4. **Logout Test**: Logs out of the application to verify that the logout functionality works as expected.
5. **Error Handling**: Gracefully handles any errors during login, product selection, or cart addition.
