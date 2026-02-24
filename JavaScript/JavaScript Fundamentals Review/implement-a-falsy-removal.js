/* Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer (arr) {
    let result = [];
    for (let item of arr) {
        if (item) {
            result.push(item);
        }
    }
    return result;
}

// Optional: A more concise implementation of bouncer using the filter method:
function bouncer(arr) {
    return arr.filter(Boolean);
}

// Test cases
console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]
console.log(bouncer(["a", "b", "c"])); // ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []
console.log(bouncer([null, NaN, 1, 2, undefined])); // [1, 2]