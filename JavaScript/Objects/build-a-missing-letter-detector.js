/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  for (let char = 0; char < str.length - 1; char++) {
    let currentCode = str.charCodeAt(char);
    let nextCharCode = str.charCodeAt(char + 1);
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
