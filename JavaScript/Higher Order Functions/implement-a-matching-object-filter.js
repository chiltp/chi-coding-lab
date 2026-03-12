/* Filters an array of objects based on whether they contain all key-value pairs from a source object. */

function whatIsInAName(collection, source) {
    // Use the filter method to iterate through each object in the collection and check if it contains all key-value pairs from the source object
    return collection.filter(obj =>
        // Use Object.keys to get an array of keys from the source object, then check if every key exists in the current object and has the same value
        Object.keys(source).every(key => obj[key] !== undefined && obj[key] === source [key]))
}

// Test cases
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // Output: [{ first: "Tybalt", last: "Capulet" }]
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })); // Output: [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})); // Output: []
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3})); // Output: []