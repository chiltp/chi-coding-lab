/*
Write a function that takes a year as an argument and returns true if the year is a leap year, and false otherwise. A leap year is defined as follows:
- It is divisible by 4;
- However, if it is divisible by 100, it must also be divisible by 400 to be a leap year.
*/

function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

// Test cases
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2021)); // false