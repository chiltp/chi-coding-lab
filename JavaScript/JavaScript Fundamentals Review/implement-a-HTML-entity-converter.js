/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    let result = "";
    const pair = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&apos;"
    }
    for (let i = 0; i < str.length; i++) {
        // Check if the current character has a corresponding HTML entity
        if (pair.hasOwnProperty(str[i])) {
            // If it does, append the HTML entity to the result string
            result += pair[str[i]];
        } else {
            result += str[i];
        }
    }
    return result;
}

// Test cases
console.log(convertHTML("Dolce & Gabbana")); // "Dolce &amp; Gabbana"
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // "Hamburgers &lt; Pizza &lt; Tacos"
console.log(convertHTML("Sixty > twelve")); // "Sixty &gt; twelve"
console.log(convertHTML('Stuff in "quotation marks"')); // "Stuff in &quot;quotation marks&quot;"
console.log(convertHTML("Schindler's List")); // "Schindler&apos;s List"
console.log(convertHTML("<>")); // "&lt;&gt;"
console.log(convertHTML("abc")); // "abc"