/*
Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.
*/

function mirror(str) {
  const reversed = str.split("").reverse().join("");
  return str + reversed;
}

// Test cases
console.log(mirror("Chi"));
console.log(mirror("freeCodeCamp"));
console.log(mirror("RaceCar"));
console.log(mirror("helloworld"));
console.log(mirror("The quick brown fox..."));
