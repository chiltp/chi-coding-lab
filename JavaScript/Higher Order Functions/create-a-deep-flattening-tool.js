function steamrollArray(arr) {
    // this is our "counting table" where we place all individual pastries
    let result = [];

    // go through each item in the current box one by one
    for (let item of arr) {

        // is this item a box (array) or a pastry (number, string, object)?
        if (Array.isArray(item)) {

        // found a box! open it and apply the same rule again
        // this is RECURSION — the function calls itself on the inner box
        // it keeps opening boxes until it finds individual pastries
        // example: item = [bagel, [donut, cookie]]
        // → steamrollArray([bagel, [donut, cookie]])
        //   → finds bagel → places on table
        //   → finds [donut, cookie] → opens it
        //     → finds donut → places on table
        //     → finds cookie → places on table
        result = result.concat(steamrollArray(item));

        } else {

        // found an individual pastry! place it directly on the counting table
        // example: item = croissant → result = [croissant]
        result = result.concat(item);
        }
    }

    // return everything collected on the counting table
    // when called recursively, this hands the inner box contents back up
    return result;
}

// full example: steamrollArray([croissant, muffin, [bagel, [donut, cookie]]])
// step 1: item = croissant        → pastry → result = [croissant]
// step 2: item = muffin           → pastry → result = [croissant, muffin]
// step 3: item = [bagel,[donut, cookie]] → box! → open it...
//   step 3a: item = bagel         → pastry → result = [bagel]
//   step 3b: item = [donut,cookie]→ box!   → open it...
//     step 3b-1: item = donut     → pastry → result = [donut]
//     step 3b-2: item = cookie    → pastry → result = [donut, cookie]
//     returns [donut, cookie]
//   result = [bagel].concat([donut, cookie]) = [bagel, donut, cookie]
//   returns [bagel, donut, cookie]
// result = [croissant, muffin].concat([bagel, donut, cookie])
// final result: [croissant, muffin, bagel, donut, cookie] ✓

// example trace: steamrollArray([[1], [2, [3]]])
// step 1: item = [1]     → is array → steamrollArray([1]) = [1]     → result = [1]
// step 2: item = [2,[3]] → is array → steamrollArray([2,[3]])
//           step 2a: item = 2   → not array → result = [2]
//           step 2b: item = [3] → is array  → steamrollArray([3]) = [3] → result = [2, 3]
//         returns [2, 3] → result = [1].concat([2, 3]) = [1, 2, 3]
// final result: [1, 2, 3]

// Test cases
console.log(steamrollArray([[["a"]], [["b"]]])); // Output: ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // Output: [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // Output: [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // Output: [1, {}, 3, 4]