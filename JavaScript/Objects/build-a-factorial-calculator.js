/*
Create a function that takes a number as an argument and returns its factorial.
The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
For example, the factorial of 5 (denoted as 5!) is 5 x 4 x 3 x 2 x 1 = 120.
*/


let num = 10;
function factorialCalculator(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);