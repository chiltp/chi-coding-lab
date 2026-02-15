/*
Write a function that takes a string as an argument and separates the letters and numbers in the string with a hyphen (-).
*/

function separateLettersAndNumbers(str) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  // Initialize the result string with the first character of the input string
  let result = str[0];
  // Loop through the input string starting from the second character
  for (let i = 1; i < str.length; i++) {
    // Get the previous and current characters
    let previousChar = str[i - 1];
    let currentChar = str[i];
    // Check if the previous character is a number and the current character is a letter, or vice versa
    if (numbers.includes(previousChar) && letters.includes(currentChar)){
      result += '-';
    } else if (letters.includes(previousChar) && numbers.includes(currentChar)) {
      result += '-';
    }
  result += currentChar;
  }
  return result;
}

// Test cases
console.log(separateLettersAndNumbers("ABC123")); // "ABC-123"
console.log(separateLettersAndNumbers("Route66")); // "Route-66"
console.log(separateLettersAndNumbers("H3LL0W0RLD")); // "H-3LL-0W-0RLD"
console.log(separateLettersAndNumbers("a1b2c3d4")); // "a-1-b-2-c-3-d-4"