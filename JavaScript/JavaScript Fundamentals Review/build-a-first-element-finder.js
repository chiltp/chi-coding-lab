/* Write a function that takes an array and a function as arguments. The function should return the first element in the array that passes a truth test (i.e., the function returns true when passed the element). If no element passes the test, return undefined.
*/

function findElement(arr, func) {
    // Loop through each element in the array
    for (let item of arr) {
        // Check if the current element passes the truth test
        if (func(item)) {
            return item;
        }
    }
    return undefined;
}

// Test cases
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })) // undefined
console.log(findElement([1, 2, 3, 4], function(num) { return num > 2; })) // 3
console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; })) // "javascript"
console.log(findElement(["cat", "dog", "bird"], function(str) { return str.length > 10; })) // undefined
console.log(findElement([2, 4, 6, 8], function(num) { return num % 2 === 0; })) // 2
console.log(findElement([], function(num) { return num > 0; })) // undefined