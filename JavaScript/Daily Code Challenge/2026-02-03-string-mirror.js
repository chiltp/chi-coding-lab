/*
Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.
*/

function mirror(str) {
  const reversed = str.split("").reverse().join("");
  return str + reversed;
}

// Test cases
console.log(mirror("Chi")); // "ChiihC"
console.log(mirror("freeCodeCamp")); // "freeCodeCamppmacEdoCeerf"
console.log(mirror("RaceCar")); // "RaceCarraceR"
console.log(mirror("helloworld")); // "helloworlddlrowolleh"
console.log(mirror("The quick brown fox...")); // "The quick brown fox......xof nworb kciuq ehT"
