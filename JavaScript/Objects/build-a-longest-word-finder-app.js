/*
Create a function that takes a string as an argument and returns the length of the longest word in the string.
If there are multiple words with the same maximum length, return the length of the first one encountered.
*/

function findLongestWordLength(str) {
  const strSplit = str.split(" ");
  let lengthOfLongestWord = strSplit[0].length;
  for (let word of strSplit) {
    if (word.length > lengthOfLongestWord) {
       lengthOfLongestWord = word.length;
    }
  }
  return lengthOfLongestWord;
}

// Test cases
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWordLength("May the force be with you")); // 5
console.log(findLongestWordLength("Google do a barrel roll")); // 6
console.log(findLongestWordLength("Googling do a barrel roll")); // 8
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19