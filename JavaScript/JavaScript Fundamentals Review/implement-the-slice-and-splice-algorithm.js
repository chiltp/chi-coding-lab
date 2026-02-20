/* Write a function that takes two arrays and an index as arguments. The function should copy each element of the first array into the second array, in order. The function should insert the elements at the index specified. Return the resulting array. The input arrays should remain the same after the function runs.
*/
function frankenSplice(arr1, arr2, index) {
    // Use slice to create a copy of arr2 and insert elements of arr1 at the specified index
    let beforeIndex = arr2.slice(0, index);
    // Get the elements after the index to be inserted
    let afterIndex = arr2.slice(index);ß
    return [...beforeIndex, ...arr1, ...afterIndex];
}

//Optional: Use splice to achieve the same result without needing to create separate arrays for before and after the index. Here's an alternative implementation:
function frankenSplice(arr1, arr2, index) {
    // Create a copy of arr2 to avoid modifying the original array
    let newArr = [...arr2];
    // Use splice to insert elements of arr1 at the specified index
    for (let i = 0; i < arr1.length; i++) {
        // Insert each element of arr1 into newArr at the correct position
        newArr.splice(index + i, 0, arr1[i]);
    }
    return newArr;
}

//Optional: A more concise implementation using splice and spread operator:
function frankenSplice(arr1, arr2, index) {
    let newArr = [...arr2];
    newArr.splice(index, 0, ...arr1);
    return newArr;
}

// Test cases
console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1)); // ["a", 1, 2, "b"]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); // ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
console.log(frankenSplice([1, 2, 3, 4], [], 0)); // [1, 2, 3, 4]