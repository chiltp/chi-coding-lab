/*
Write a function convertCtoF(celsius) that converts a temperature from Celsius to Fahrenheit using the formula:
F = celsius * (9 / 5) + 32
Return the result as a number and log it to the console.
*/

function convertCtoF(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

// Test cases
console.log(convertCtoF(0)); // 32
console.log(convertCtoF(-30)); // -22
console.log(convertCtoF(-10)); // 14
console.log(convertCtoF(20)); // 68
console.log(convertCtoF(30)); // 86