/* Create a function that takes two arrays and returns an array of the symmetric difference (elements that are in either array but not in both) */

function diffArray(arr1, arr2) {
    // Use the filter method to find elements that are in arr1 but not in arr2, and vice versa, then concatenate the results
    const diffArr1 = arr1.filter(item => !arr2.includes(item));
    const diffArr2 = arr2.filter(item => !arr1.includes(item));
    return diffArr1.concat(diffArr2);
}

// Test cases
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // Output: ["pink wool"]
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // Output: ["diorite", "pink wool"]
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"])); // Output: ["pen", "pencil", "notebook"]
console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"])); // Output: ["car", "train", "plane"]
console.log(diffArray(["apple", "banana", "cherry"], ["banana", "cherry", "date"])); // Output: ["apple", "date"]
console.log(diffArray([], [])); // Output: []