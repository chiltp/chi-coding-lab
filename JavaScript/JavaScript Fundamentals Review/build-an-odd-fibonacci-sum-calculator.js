/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3 and 5.
*/

function sumFibs(num) {
    // Initialize the first two Fibonacci numbers and a variable to keep track of the sum
    let prev = 0;
    let curr = 1;
    let sum = 0;
    // Loop through the Fibonacci sequence until the current number exceeds num
    while (curr <= num) {
        // If the current Fibonacci number is odd, add it to the sum
        if (curr % 2 !== 0) {
            sum += curr;
        }
        // Calculate the next Fibonacci number
        let next = prev + curr;
        // Update prev and curr to the next two Fibonacci numbers
        prev = curr;
        curr = next;
    }
    return sum;
}

// Test cases
console.log(sumFibs(1000)); // 1785
console.log(sumFibs(4000000)); // 4613732
console.log(sumFibs(4)); // 5
console.log(sumFibs(75024)); // 60696
console.log(sumFibs(75025)); // 135721