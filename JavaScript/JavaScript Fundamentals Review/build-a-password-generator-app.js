/*
Write a function that takes in a desired password length and generates a random password containing uppercase letters, lowercase letters, numbers, and special characters. The function should return the generated password as a string.
*/

function generatePassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

// Test case
let password = generatePassword(5);
console.log(`Generated password: ${password}`) // Output will vary each time you run the code, e.g., "Generated password: aB3$e"