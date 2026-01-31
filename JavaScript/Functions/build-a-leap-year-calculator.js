
/*
Write a function isLeapYear(year) that checks whether a given year is a leap year.
A year is a leap year if it is divisible by 4, except years divisible by 100 unless they are also divisible by 400.
Return:
- "[year] is a leap year." if true
- "[year] is not a leap year." if false
Call the function with a year value and log the result to the console.
*/

let year = 2024;

function isLeapYear(year) {
  // Check if divisible by 4
  if (year % 4 === 0) {
    // Check if divisible by 100
    if (year % 100 === 0) {
      // Check if divisible by 400
       if (year % 400 === 0) {
        return year + " is a leap year.";
        } else {
        return year + " is not a leap year.";
        }
    } else {
      return year + " is a leap year."
    }
  } else {
      return year + " is not a leap year."
  }
};

// Test cases
const result = isLeapYear(year);
console.log(result); // 2024 is a leap year.
console.log(isLeapYear(1900)); // 1900 is not a leap year.
console.log(isLeapYear(2000)); // 2000 is a leap year.
console.log(isLeapYear(2021)); // 2021 is not a leap year.