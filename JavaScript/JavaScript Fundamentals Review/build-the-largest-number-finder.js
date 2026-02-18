/* Write a function that takes an array of arrays and returns an array consisting of the largest number from each provided sub-array.
*/

function largestOfAll(arr) {
    let result = [];
    for (let subArr of arr) {
        let largest = subArr[0];
        for (let num of subArr) {
            if (num > largest) {
                largest = num;
            };
        }
    result.push(largest);
    }
    return result;
}

// Test cases
console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [5, 27, 39, 1001]
console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [27, 5, 39, 1001]
console.log(largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])); // [9, 35, 97, 1000000]
console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); // [25, 48, 21, -3]