/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

// Step 1: Find the Greatest Common Divisor (GCD) of two numbers
// GCD is the largest number that divides both a and b evenly
// Example: GCD(4, 6) = 2 because 2 is the largest number that divides both
function getGCD(a, b) {
  // Euclidean algorithm: keep dividing until remainder is 0
  // Example: GCD(48, 18)
  // round 1: temp=18, b=48%18=12, a=18
  // round 2: temp=12, b=18%12=6,  a=12
  // round 3: temp=6,  b=12%6=0,   a=6
  // b is now 0, so return a=6
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Step 2: Find the Least Common Multiple (LCM) of two numbers
// LCM is the smallest number that both a and b divide into evenly
// Formula: LCM(a, b) = (a * b) / GCD(a, b)
// Example: LCM(4, 6) = (4 * 6) / GCD(4, 6) = 24 / 2 = 12
function getLCM(a, b) {
  return (a * b) / getGCD(a, b);
}

// Step 3: Find the smallest common multiple across a whole range
// Example: smallestCommons([1, 5]) finds LCM of [1, 2, 3, 4, 5]
function smallestCommons(arr) {
  // sort the array so smaller number is always first
  // handles cases like [5, 1] → [1, 5]
  arr.sort((a, b) => a - b);

  const start = arr[0]; // smallest number in range
  const end = arr[1];   // largest number in range

  // build a range array of all numbers between start and end
  // example: [1, 5] → [1, 2, 3, 4, 5]
  const rangeArr = [];
  for (let i = start; i <= end; i++) {
    rangeArr.push(i);
  }

  // use reduce to chain LCM across the entire range
  // reduce carries a running result (acc) through each number (curr)
  // round 1: getLCM(1, 2) = 2
  // round 2: getLCM(2, 3) = 6
  // round 3: getLCM(6, 4) = 12
  // round 4: getLCM(12, 5) = 60
  // final result: 60
  return rangeArr.reduce((acc, curr) => getLCM(acc, curr));
}

// Test cases
console.log(smallestCommons([1, 5])); // Output: 60
console.log(smallestCommons([5, 1])); // Output: 60 (order doesn't matter)
console.log(smallestCommons([1, 10])); // Output: 2520
console.log(smallestCommons([10, 1])); // Output: 2520 (order doesn't matter)
console.log(smallestCommons([2, 6])); // Output: 60