const fs = require('fs');

// Function to save product details to a file
const saveProductDetails = (name, price) => {
    const content = `Name: ${name}\nPrice: ${price}`;
    fs.writeFileSync('product-details.txt', content, 'utf8');
};

// Function to read product details from a file (for verification purposes)
const readProductDetails = () => {
    const content = fs.readFileSync('product-details.txt', 'utf8');
    const lines = content.split('\n');
    const name = lines[0].split(': ')[1];
    const price = lines[1].split(': ')[1];
    return { name, price };
};

module.exports = { saveProductDetails, readProductDetails };
