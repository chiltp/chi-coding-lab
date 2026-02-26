/*
Design a sum all numbers algorithm that takes an array of two numbers and returns the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
*/

function sumAll([n, m]) {
    let sum = 0;
    let min = Math.min(n, m);
    let max = Math.max(n, m);
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum;
}

// Test cases
console.log(sumAll([2, 0])) // 3 (0 + 1 + 2)
console.log(sumAll([1, 4])) // 10 (1 + 2 + 3 + 4)
console.log(sumAll([0, 1])) // 1 (0 + 1)
console.log(sumAll([1, 1])) // 1 (1)
console.log(sumAll([5, 10])) // 45 (5 + 6 + 7 + 8 + 9 + 10)