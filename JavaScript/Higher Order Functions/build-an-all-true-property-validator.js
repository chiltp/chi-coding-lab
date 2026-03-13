/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context. All values are truthy unless they are defined as falsy (i.e., false, 0, "", null, undefined, and NaN).
*/

function truthCheck(collection, pre) {
  // every() walks through each object in collection
  // it returns true only if ALL objects pass the condition
  // it returns false as soon as ANY object fails the condition

  // obj[pre] dynamically accesses the property using the variable pre
  // example: if pre = "name", then obj[pre] is the same as obj["name"]
  // every() treats the value as truthy or falsy automatically
  // truthy values: "Quincy", "Bot", 1, true, etc.
  // falsy values: "", 0, null, undefined, false, NaN
    return collection.every(obj => obj[pre]);
}

// Test cases
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")); // Output: false
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name")); // Output: true
console.log(truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users")); // Output: true (empty array is truthy)
console.log(truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id")); // Output: false (null is falsy)