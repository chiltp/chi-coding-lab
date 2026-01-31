/*
Write a function truncateString(string, number) that shortens a string to a maximum length.
If the string is longer than number, return the first number characters followed by "...".
If it is equal to or shorter than number, return it unchanged.
Call the function and log the result to the console.
*/

function truncateString(string, number) {
  if (string.length <= number) {
    return string;
  } else {
    const truncatedStrings = string.slice(string[0], string.length - (string.length - number));
    return truncatedStrings + "...";
  }
}

// Test cases
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // Peter Piper...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-", 1)); // A...
console.log(truncateString("Absolutely Longer", 2)); // Ab...