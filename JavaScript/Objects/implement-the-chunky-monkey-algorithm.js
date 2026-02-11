/*
Create a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups (arr, num) {
  if (num > arr.length) {
    return [arr];
  }
  let result = [];
  // Loop through the array and slice it into chunks
  for (let i = 0; i < arr.length; i += num) {
      let chunk = arr.slice(i, i + num);
      result.push(chunk);
  }
  return result;
}

// Test cases
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // [[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 10)); // [[0, 1, 2, 3, 4, 5]]