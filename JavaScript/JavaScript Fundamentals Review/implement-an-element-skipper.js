/* Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true. Then return the rest of the array, otherwise, return an empty array.
*/

function dropElements(arr, func) {
    for (let item of arr) {
        if (func(item)) {
            return arr.slice(arr.indexOf(item));
        }
    }
    return [];
}

// Optional: A more concise implementation of dropElements using a single return statement:
function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];
}

// Test cases
console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; })) // [3, 4]
console.log(dropElements([0, 1, 0, 1], function(n) { return n === 1; })) // [1, 0, 1]
console.log(dropElements([1, 2, 3], function(n) { return n > 0; })) // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) { return n > 5; })) // []
console.log(dropElements([1, 2, 3, 7, 4], function(n) { return n > 3; })) // [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; })) // [3, 9, 2]