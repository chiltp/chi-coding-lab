/* Create a function that takes an array and removes all instances of the specified values */

// Use the rest operator to gather the additional arguments into an array, then use the filter method to create a new array that excludes the specified values
function destroyer(arr, ...args) {
    return arr.filter(num => !args.includes(num))
}

// Test cases
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // Output: [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // Output: [1, 5, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // Output: [1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // Output: []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // Output: ["hamburger"]
console.log(destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" )); // Output: [12, 92, 65]