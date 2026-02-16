/*Write a function that takes an array as an argument and swaps the first and last elements of the array. The function should return the modified array.
*/

function arraySwap(arr) {
    if (arr.length < 2) {
        return arr;
    }
    // Swap the first and last elements of the array using destructuring assignment
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
}

// Test cases
console.log(arraySwap([1, 2, 3, 4])); // [4, 2, 3, 1]
console.log(arraySwap(['a', 'b', 'c'])); // ['c', 'b', 'a']
console.log(arraySwap([true, false])); // [false, true]
console.log(arraySwap([42])); // [42]
console.log(arraySwap([])); // []