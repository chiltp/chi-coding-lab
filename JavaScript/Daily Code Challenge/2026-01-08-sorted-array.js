/*
Write a function that takes an array of numbers as an argument and returns "Ascending" if the numbers are in ascending order, "Descending" if the numbers are in descending order, and "Not sorted" if the numbers are not in either order.
*/

function isSorted(arr) {
    let isAscending = true;
    let isDescending = true;
    for (let i = 0; i < arr.length - 1; i++) {
        let currentNum = arr[i];
        let nextNum = arr[i + 1];
        if (currentNum > nextNum) {
            isAscending = false;
        }
        else if (currentNum < nextNum) {
            isDescending = false;
        }
    }
    if (isAscending) return "Ascending";
    if (isDescending) return "Descending";
    return "Not sorted";
}

// Test cases
console.log(isSorted([1, 2, 3, 4])); // "Ascending"
console.log(isSorted([4, 3, 2, 1])); // "Descending"
console.log(isSorted([1, 3, 2, 4])); // "Not sorted"
console.log(isSorted([5, 5, 5])); // "Ascending" (treats equal numbers as ascending)
console.log(isSorted([10])); // "Ascending" (single element is considered sorted)
console.log(isSorted([])); // "Ascending" (empty array is considered sorted)