/*
Create a function that repeats a given string (str) for num times.
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes (str, num) {
  let result = "";
  if (num <= 0) {
    return result;
  }
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

// Test cases
console.log(repeatStringNumTimes("*", 3)); // "***"
console.log(repeatStringNumTimes("abc", 3)); // "abcabcabc"
console.log(repeatStringNumTimes("abc", 4)); // "abcabcabcabc"
console.log(repeatStringNumTimes("abc", 1)); // "abc"
console.log(repeatStringNumTimes("abc", -2)); // ""