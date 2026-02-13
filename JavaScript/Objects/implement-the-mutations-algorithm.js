/*
Create a function that takes an array with two strings as input and checks if all the letters in the second string are present in the first string.
The function should return true if all letters are found, and false otherwise.
The comparison should be case-insensitive.
*/

function mutation(arr) {
  // Convert both strings to lowercase for case-insensitive comparison
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  // Split the second string into individual characters
  let charSplit = str2.split("");
  // Check if each character in the second string is present in the first string
  for (let char of charSplit) {
    if (!str1.includes(char)) {
      return false;
    }
  }
  return true;
}

// Test cases
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(["Mary", "Army"]); // true
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["Alien", "line"])); // true
console.log(mutation(["floor", "for"])); // true
console.log(mutation(["hello", "neo"])); // false
console.log(mutation(["voodoo", "no"])); // false
console.log(mutation(["ate", "date"])); // false
console.log(mutation(["Tiger", "Zebra"])); // false
console.log(mutation(["Noel", "Ole"])); // true