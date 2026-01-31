/*
Write a function confirmEnding(str, target) that returns true if str ends with target, and false otherwise.
Do not use .endsWith() — use a substring method instead.
*/

function confirmEnding(str1, str2) {
  if (str2 === str1.slice(str1.length - str2.length)) {
    return true;
  } else {
    return false;
  }
}

// Test cases
console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("Open sesame", "same")); // true
console.log(confirmEnding("Hello world", "world!")); // false
console.log(confirmEnding("JavaScript", "script")); // false