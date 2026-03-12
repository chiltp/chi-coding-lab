
/* Write a function that takes a number as an argument and returns the sum of all prime numbers that are less than or equal to that number. */

// Helper function to check if a number is prime
function isPrime(n){
    // loop from 2 up to n, checking if n is divisible by any number in that range
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false; // if n is divisible by any number other than 1 and itself, it is not prime
    }
    return true; // if n is not divisible by any number in the range, it is prime
}

// Main function to sum prime numbers up to a given number
function sumPrimes(num) {
    // edge case: if num is less than 2, return 0 since there are no prime numbers to sum
    if (num < 2) return 0;
    let sum = 0;
    // loop from 2 up to num
    for (let i = 2; i <= num; i++) {
        // check if the current number is prime using the helper function, and if it is, add it to the sum
        if (isPrime(i)) {
            sum += i; // if i is prime, add it to the sum
        }
    }
    return sum;
}

// Test cases
console.log(sumPrimes(0)); // Output: 0
console.log(sumPrimes(1)); // Output: 0
console.log(sumPrimes(2)); // Output: 2
console.log(sumPrimes(3)); // Output: 5
console.log(sumPrimes(4)); // Output: 5
console.log(sumPrimes(5)); // Output: 10
console.log(sumPrimes(10)); // Output: 17
console.log(sumPrimes(977)); // Output: 73156

//example: sumPrimes(5)
// isPrime checks: 2 (prime), 3 (prime), 4 (not prime), 5 (prime)
// sum = 2 + 3 + 5 = 10