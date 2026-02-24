/*Build an inventory management program that allows users to add products, remove products, and view the current inventory. The program should have the following functions:
1. addProduct(product): This function takes a product object with properties name and quantity, and adds it to the inventory. If the product already exists, it should update the quantity.
2. removeProduct(name, quantity): This function takes a product name and quantity, and removes the specified quantity from the inventory. If the product does not exist or if there is not enough quantity available, it should display an appropriate message.

Example usage:
addProduct({ name: 'Apple', quantity: 10 });
addProduct({ name: 'Banana', quantity: 5 });
removeProduct('Apple', 3);

Expected output:
Apple added to inventory
Banana added to inventory
Remaining Apple pieces: 7
*/

let inventory = [];
// Helper function to find the index of a product in the inventory by name (case-insensitive)
function findProductIndex (name) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === name.toLowerCase()) {
            return i;
        }
    }
    return -1;
}

function addProduct (product) {
    let lowerName = product.name.toLowerCase();
    let index = findProductIndex(lowerName);
    // If the product already exists, update the quantity. Otherwise, add the new product to the inventory.
    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(`${lowerName} quantity updated`);
    } else {
        inventory.push({ name: lowerName, quantity: product.quantity });
        console.log(`${lowerName} added to inventory`);
    }
}

function removeProduct(name, quantity) {
    let lowerName = name.toLowerCase();
    let index = findProductIndex(lowerName);
    // If the product does not exist, display a message and return.
    if (index === -1) {
        console.log(`${lowerName} not found`);
        return;
    }
    let currentQuantity = inventory[index].quantity;
    // If there is not enough quantity available, display a message. Otherwise, remove the specified quantity and update the inventory.
    if (currentQuantity < quantity) {
        console.log(`Not enough ${lowerName} available, remaining pieces: ${currentQuantity}`);
    } else {
        // Update the quantity and check if it has reached 0 to remove the product from inventory
        let newQuantity = inventory[index].quantity -= quantity;
        console.log(`Remaining ${lowerName} pieces: ${newQuantity}`);
        if (newQuantity === 0) {
            inventory.splice(index, 1);
        }
    }
}

// Test cases
addProduct({ name: 'Apple', quantity: 10 }); // Apple added to inventory
addProduct({ name: 'Banana', quantity: 5 }); // Banana added to inventory
addProduct({ name: 'apple', quantity: 5 }); // apple quantity updated
removeProduct('Apple', 3); // Remaining apple pieces: 12
removeProduct('Banana', 6); // Not enough banana available, remaining pieces: 5
removeProduct('Orange', 2); // orange not found
removeProduct('Apple', 12); // Remaining apple pieces: 0
removeProduct('Apple', 1); // apple not found (since it was removed after quantity reached 0)