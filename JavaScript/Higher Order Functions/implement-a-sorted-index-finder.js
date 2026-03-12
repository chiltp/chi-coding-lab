/*
Find the index to insert a number in a sorted array
*/

function getIndexToIns(arr, num) {
    const index = arr
    // Sort the array in ascending order and find the index where the number should be inserted
    .sort((a, b) => a - b)
    // Use the findIndex method to find the index of the first element that is greater than or equal to the number
    .findIndex(element => element >= num);
    // If the number is greater than all elements in the array, findIndex will return -1, so we return the length of the array in that case
    return index === -1 ? arr.length : index;
}

// Test cases
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // Output: 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(getIndexToIns([40, 60], 50)); // Output: 1
console.log(getIndexToIns([3, 10, 5], 3)); // Output: 0
console.log(getIndexToIns([5, 3, 20, 3], 5)); // Output: 2
console.log(getIndexToIns([2, 20, 10], 19)); // Output: 2
console.log(getIndexToIns([3, 10, 5], 11)); // Output: 3
console.log(getIndexToIns([], 5)); // Output: 0