/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  // Loop through the string to find the missing letter
  for (let char = 0; char < str.length - 1; char++) {
    // Get the character codes of the current and next characters
    let currentCode = str.charCodeAt(char);
    let nextCharCode = str.charCodeAt(char + 1);
    // Check if there is a gap in the character codes
    if (nextCharCode - currentCode > 1) {
      let missingCode = currentCode + 1
      return String.fromCharCode(missingCode);
    }
  }
  return undefined;
}

// Test cases
console.log(fearNotLetter("abce")); // "d"
console.log(fearNotLetter("abcdefghjklmno")); // "i"
console.log(fearNotLetter("stvwx")); // "u"
console.log(fearNotLetter("bcdf")); // "e"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
